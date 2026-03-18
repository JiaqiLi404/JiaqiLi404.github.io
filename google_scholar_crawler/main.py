import json
import os
from datetime import datetime, timezone

import serpapi


def require_env(name):
    value = os.environ.get(name, "").strip()
    if not value:
        raise RuntimeError(
            f"Missing required environment variable: {name}. "
            "Set it in GitHub repository Settings -> Secrets and variables -> Actions."
        )
    return value


def build_publications(author_data):
    publications = {}
    for article in author_data.get("articles", []):
        citation_id = article.get("citation_id") or article.get("author_pub_id")
        if not citation_id:
            continue

        cited_by = article.get("cited_by", {})
        article["citation_id"] = citation_id
        article["num_citations"] = cited_by.get("value", 0)
        publications[citation_id] = article
    return publications


def extract_total_citations(author_data):
    cited_by_table = author_data.get("cited_by", {}).get("table", [])
    if not cited_by_table:
        return 0
    return cited_by_table[0].get("citations", {}).get("all", 0)


def main():
    scholar_id = require_env("GOOGLE_SCHOLAR_ID")
    serpapi_key = require_env("SERPAPI_KEY")

    search = serpapi.Client(api_key=serpapi_key)
    response = search.search(
        {
            "engine": "google_scholar_author",
            "author_id": scholar_id,
            "hl": "en",
        }
    )

    author_data = dict(response)
    author_data["updated"] = datetime.now(timezone.utc).isoformat()
    author_data["publications"] = build_publications(author_data)
    author_data["citedby"] = extract_total_citations(author_data)

    output_dir = os.path.join(os.path.dirname(__file__), "results")
    os.makedirs(output_dir, exist_ok=True)

    with open(os.path.join(output_dir, "gs_data.json"), "w", encoding="utf-8") as handle:
        json.dump(author_data, handle, ensure_ascii=False, indent=2)

    shieldio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(author_data["citedby"]),
    }
    with open(os.path.join(output_dir, "gs_data_shieldsio.json"), "w", encoding="utf-8") as handle:
        json.dump(shieldio_data, handle, ensure_ascii=False, indent=2)

    print("Scholar data fetched successfully.")


if __name__ == "__main__":
    main()

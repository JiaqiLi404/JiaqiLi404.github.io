# from scholarly import scholarly
# import json
# from datetime import datetime
# import os
#
# id=os.environ['GOOGLE_SCHOLAR_ID']
# print(id)
# author: dict = scholarly.search_author_id(id)
# scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
# name = author['name']
# author['updated'] = str(datetime.now())
# author['publications'] = {v['author_pub_id']:v for v in author['publications']}
# print(json.dumps(author, indent=2))
# os.makedirs('results', exist_ok=True)
# with open(f'results/gs_data.json', 'w') as outfile:
#     json.dump(author, outfile, ensure_ascii=False)
#
# shieldio_data = {
#   "schemaVersion": 1,
#   "label": "citations",
#   "message": f"{author['citedby']}",
# }
# with open(f'results/gs_data_shieldsio.json', 'w') as outfile:
#     json.dump(shieldio_data, outfile, ensure_ascii=False)

import serpapi
import json
from datetime import datetime
import os

params = {
    "engine": "google_scholar_author",
    "author_id": os.environ['GOOGLE_SCHOLAR_ID'],
}

search = serpapi.Client(api_key=os.environ['SERPAPI_KEY'])
author = search.search(params)
author = dict(author)
# 增加更新时间
author["updated"] = str(datetime.now())

# 处理 publications -> dict 格式（保持和你原来一致）
if len(author.get("articles", {}))>0:
    pubs = author["articles"]
    for pub in pubs:
        # 将 citation_id 作为 key，保持原有结构
        pub["citation_id"] = pub.get("citation_id", pub.get("author_pub_id", ""))
        pub['num_citations']= pub.get('cited_by')['value']
    author["publications"] = {pub["citation_id"]: pub for pub in pubs}
else:
    author["publications"] = {}

# 保存原始数据
os.makedirs("results", exist_ok=True)
with open("results/gs_data.json", "w", encoding="utf-8") as f:
    json.dump(author, f, ensure_ascii=False, indent=2)

# 生成 shields.io 数据
cited_by = author.get("cited_by", {}).get("table", [{}])[0].get("citations", {}).get("all", "0")
shieldio_data = {
    "schemaVersion": 1,
    "label": "citations",
    "message": str(cited_by),
}
with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as f:
    json.dump(shieldio_data, f, ensure_ascii=False, indent=2)

print("✅ Scholar data fetched via SerpApi")
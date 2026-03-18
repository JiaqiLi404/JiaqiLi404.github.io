# Google Scholar Automation Setup

This site can fetch citation counts from Google Scholar through SerpApi and publish the generated JSON files to the `google-scholar-stats` branch.

## Required repository secrets

Add these secrets in `Settings -> Secrets and variables -> Actions`:

- `GOOGLE_SCHOLAR_ID`: your Google Scholar user id, for example `ru2ps-0AAAAJ`
- `SERPAPI_KEY`: your SerpApi API key

## Required config fields

Set these fields in [_config.yml](/D:/Project/personalWebsite2/_config.yml):

- `repository`: must match `OWNER/REPO`
- `google_scholar_stats_use_cdn`: set to `false` for raw GitHub, or `true` to use jsDelivr caching

## Mapping publication citations

For any publication that should display a citation count, add:

```yml
google_scholar_citation_id: "YOUR_SCHOLAR_CITATION_ID"
```

You can get this id from the publication URL on Google Scholar:

`citation_for_view=USER_ID:CITATION_ID`

Use the full combined value, for example:

```yml
google_scholar_citation_id: "ru2ps-0AAAAJ:L8Ckcad2t8MC"
```

## Automation flow

1. GitHub Actions runs on push, manual dispatch, or the daily schedule.
2. `google_scholar_crawler/main.py` fetches the author profile and article citations through SerpApi.
3. The workflow force-pushes `gs_data.json` and `gs_data_shieldsio.json` to the `google-scholar-stats` branch.
4. The frontend loads that JSON and fills:
   - `#total_cit`
   - `.show_paper_citations[data="..."]`

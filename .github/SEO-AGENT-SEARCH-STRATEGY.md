# SEO and Agent Search Strategy

## Purpose

Improve qualified organic discovery and useful visibility in AI-assisted search for US, UK, and EU importers involved in B2C and B2B cross-border ecommerce. Priority industries include apparel, sporting goods, and luxury. Measure success by relevant visits and qualified enquiries, not rankings or clicks alone.

This is the working strategy and progress tracker for the blog. The [`SEO and Agent Search Strategist`](agents/seo-agent-search.agent.md) custom agent should read and maintain it when doing this work.

## Current business priorities

Confirmed by the owner on November 11, 2026. Reconfirm these priorities at each quarterly strategy review and before materially changing the market, service, or industry focus. Also check sooner if new performance or business evidence suggests a change; do not interrupt routine work with repeated confirmation requests when priorities remain current.

1. **Markets:** US first, then UK, then EU. The owner notes this order may change over time.
2. **Services / qualified enquiries, in order:** US duty drawback; UK duty drawback; UK Returned Goods Relief; EU duty drawback; EU Returned Goods Relief.
3. **Industries:** apparel, sporting goods, and luxury only where the opportunity concerns cross-border ecommerce and returned goods exported from the destination market.

Apply these priorities when choosing content and calls to action. Do not equate the current SEO opportunity order with the business priority order: for example, the EU product-identifier article has stronger current page traffic, but US duty drawback remains the top commercial priority.

## Accomplishments to date

### Search performance review

Reviewed the Search Console workbook `tradedutyrefund.com-Performance-on-Search-2026-11-10.xlsx` supplied from the user's Downloads folder. The workbook is source evidence and is not copied into the repository.

The report covers the 92 days from August 9 through November 8, 2026, for Web search:

- 69,090 impressions and 378 clicks; overall CTR is approximately 0.55%.
- Impression-weighted average position is approximately 15.7.
- UK: 154 clicks / 22,863 impressions / 0.67% CTR / average position 10.1.
- US: 79 clicks / 27,598 impressions / 0.29% CTR / average position 22.4.
- The country tab contains 26 EU-country rows totaling 69 clicks and 6,509 impressions (about 1.06% CTR). This is not a complete EU27 total; do not represent it as full EU coverage.
- Example query evidence: “duty drawback” had 715 impressions, 1 click, and average position 47.4; “EU product identifier” had 84 impressions, 6 clicks, and position 5.9; “customs duty recovery for retailers” had 50 impressions, 4 clicks, and position 4.9.
- Example page evidence: the EU product-identifier blog article had 6,017 impressions, 75 clicks, and position 6.8; the UK reclaim article had 7,132 impressions, 31 clicks, 0.43% CTR, and position 10.6; the US importer/broker/consignee article had 4,317 impressions, 16 clicks, 0.37% CTR, and position 14.2.
- Search Console lists both `blog.tradedutyrefund.com` and `tradedutyrefund.com` because the main company site and blog are separate properties/hosts. Live checks on November 12, 2026 confirmed the blog article canonical, blog sitemap URLs, and robots.txt sitemap directive all use `https://blog.tradedutyrefund.com`. The equivalent article URL on the apex domain returned 404. The blog subdomain is therefore the recommended canonical host for blog content.
- The report does not include query-to-page pairs, conversions, or AI/agent citations. Its separate Queries and Pages tabs cannot establish which query generated a given page impression.

### Page-filtered Search Console exports and owner priorities

On November 11, 2026, the owner supplied three page-filtered Search Console workbooks with current-period and previous-period comparisons. Each filter identifies one of the priority blog pages. The workbook labels specify “last 3 months” and “previous 3 months”; preserve the exported comparison as supplied and confirm exact dates if later analysis requires them.

- **US importer/broker/consignee article:** 16 clicks and 4,294 impressions versus 15 clicks and 6,292 impressions in the prior period; CTR increased from 0.24% to 0.37%, while average position moved from 13.11 to 14.19 (worse). Relevant queries include “consignee vs importer” (121 impressions, position 14.96), “importer responsibilities” (101, position 24.86), and “importer of record vs consignee” (86, position 26.22). Search interest is primarily informational; connect this page thoughtfully to US duty-drawback information without changing its answer intent.
- **EU product-identifier article:** 75 clicks and 6,016 impressions versus 32 clicks and 926 impressions; CTR moved from 3.46% to 1.25%, and average position from 5.08 to 6.79 (worse). Queries are strongly centered on merchant and manufacturer product identifiers. This is a compliance-information opportunity, not direct evidence of demand for EU duty drawback or Returned Goods Relief. Verify current requirements and update the passed deadline before relying on or promoting the article.
- **UK duty-recovery article:** 31 clicks and 7,188 impressions versus 23 clicks and 4,156 impressions; CTR moved from 0.55% to 0.43%, while average position improved from 12.28 to 10.57. Relevant queries include “reclaiming import duty on returned goods uk” (66 impressions, position 7.09), “duty reclaim” (231, position 7.23), and “returned goods relief” (115, position 39.80). This supports investigating a clearer UK Returned Goods Relief answer and snippet while reviewing terminology and eligibility with an expert.
- These page-filtered exports provide query-to-page evidence for the three chosen pages. They do not provide qualified-enquiry/conversion outcomes, and the US article's informational query set should not be treated as proof of direct duty-drawback purchase intent.

The owner confirmed the current US-first market order, service priorities, and industry boundaries recorded above. SEO work should now pair this business hierarchy with page/query evidence rather than treating traffic alone as the priority.

### Implementation and source review

On November 11, 2026, prepared editorial updates in the repository:

- The US importer/consignee article now targets its observed informational query intent in the title, description, and opening answer. It links to the US duty-drawback explainer only as a separate topic and cites CBP's [Importer/Exporter Tips](https://www.cbp.gov/trade/basic-import-export/importer-exporter-tips). The article's wider legal examples and assertions still need subject-matter review.
- The US duty-drawback explainer now directs readers to the US questionnaire for an eligibility review instead of the generic home page. This is a more direct route to the owner's top-priority service, but the article contains other legal, eligibility, refund-percentage, and market-statistic claims that have not yet been audited.
- The UK reclaim article has been reframed around the different direction of goods movement for Returned Goods Relief versus potential repayment routes after import and export. It now includes a practical records checklist, a UK questionnaire CTA, and HMRC links. Official-source review found that UK RGR concerns previously exported goods re-imported to the UK; relief from import VAT has a separate same-person condition. HMRC's rejected-import route has distinct conditions, including a one-year claim limit and an application timing requirement before packing goods for re-export/destruction. A qualified reviewer must confirm that the article's terminology and description match TDR's actual UK duty-drawback service and intended ecommerce flows.
- On November 12, 2026, the owner approved all changes made in this set. Live checks that day confirmed the updated US importer/consignee article, the US drawback questionnaire CTA, and the rewritten UK recovery article are being served on the public blog. The owner-approved updates are live. The Jekyll build passed, and rendered titles, descriptions, update dates, CTA, and HMRC citations were checked. Qualified legal/service review remains outstanding.

The strategy agent built the site to temporary output directories on November 11 and 12, 2026. The build succeeded. It exposed two titles in each rendered page head because the layout supplied its own `<title>` and Jekyll SEO Tag emitted another; `_layouts/default.html` now invokes `{% seo title=false %}` while retaining the site's existing explicit title. A rebuild confirmed one title tag on each of the three inspected pages, along with updated dates and key links. Live production checks on November 12 confirmed that article canonicals, sitemap URLs, and the robots.txt sitemap directive use `https://blog.tradedutyrefund.com`; the equivalent article URL on the apex domain returns 404. The local `_config.yml` now sets `url: "https://blog.tradedutyrefund.com"`, and a fresh build verified one correct canonical per inspected article and a matching sitemap URL. The local configuration change still needs to go through the normal deployment process. The build also emits existing Sass `@import` deprecation notices and duplicate category-archive destination warnings; these are unrelated to the SEO edits and were not changed.

Official-source review as of November 11, 2026:

- **US drawback:** 19 U.S.C. §1313 and 19 C.F.R. Part 190 govern distinct drawback provisions; the general statutory filing deadline is five years from importation, subject to the applicable provision and evidence. CBP's ACE/ABI CATAIR materials describe electronic submission context. Sources: [19 U.S.C. §1313](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title19-section1313&num=0&edition=prelim), [19 C.F.R. Part 190](https://www.ecfr.gov/current/title-19/chapter-I/part-190), and [CBP ACE/ABI CATAIR](https://www.cbp.gov/trade/automated/catair).
- **US importer/broker:** CBP states the importer remains responsible for entry correctness and applicable duties even when using a customs broker. Source: [CBP Importer/Exporter Tips](https://www.cbp.gov/trade/basic-import-export/importer-exporter-tips).
- **UK RGR and rejected imports:** Source pages used: [HMRC Returned Goods Relief](https://www.gov.uk/guidance/pay-less-import-duty-and-vat-when-re-importing-goods-to-the-uk-and-eu), [HMRC Returning goods to the UK](https://www.gov.uk/guidance/returning-goods-to-the-uk), and [HMRC Refunds and waivers on customs debt](https://www.gov.uk/guidance/refunds-and-waivers-on-customs-debt).
- **EU product identifiers:** The existing EU article states that an identifier became mandatory on November 1, 2026. Research located the 2023 Commission proposal [COM(2023) 258](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52023PC0258) and procedure [2023/0156(COD)](https://eur-lex.europa.eu/procedure/EN/2023_156), but did not verify an adopted final act or operative EU-wide product-identifier requirement/date as of November 11, 2026. Keep the article unchanged pending verification against an enacted act and expert review; do not present its November 2026 mandate as confirmed law in the meantime.

### Prioritization and working approach

Recommended first content set, balancing the owner's US-first business priority with the available page-level evidence:

1. **US commercial path:** review US duty-drawback service and existing content/CTA coverage first, because US duty drawback is the top enquiry priority. Improve the importer/broker/consignee article only to answer its observed informational queries; add a relevant, accurate next step to duty-drawback guidance where useful.
2. **UK recovery path:** improve the UK article against its observed duty-reclaim and returned-goods queries. Separate UK duty drawback from UK Returned Goods Relief, and verify terminology and eligibility.
3. **EU product-identifier article:** verify current requirements and revise deadline/status language because the article's stated November 2026 deadline has passed. Keep this compliance-information work distinct from the EU duty drawback and Returned Goods Relief service goals.
4. Review the older EU and general duty-refund calculation guides for current accuracy and overlap before deciding whether to update or consolidate.
5. Improve About and author information after approved company and reviewer details are supplied.

The owner approved all current editorial changes on November 12, 2026, and the US/UK content changes are live. One confirmed technical SEO fix (duplicate title tags) has been implemented. The canonical host has been identified as `blog.tradedutyrefund.com` and configured locally; deployment of that configuration remains. No business-profile change has been made. Qualified subject-matter review of customs-law content remains an important follow-up.

## Implementation phases

Status definitions: **Complete** means supported by recorded evidence; **In progress** means actively being worked on; **Blocked** means a required decision or input is missing; **Pending** means not started.

| Phase | Status | Work | Completion evidence |
|---|---|---|---|
| 1. Baseline and prioritization | Complete | Review the provided three-month report; identify country, query, and page opportunities and report limitations. | Baseline and priority pages documented above. |
| 2. Query-to-page research and business goals | Complete | Review three owner-supplied page-filtered Search Console comparisons and confirm the current market, service, and industry priorities. | Page/query findings and limitations documented above; priorities confirmed November 11, 2026. Reconfirm at quarterly reviews and before material reprioritization. |
| 3. Content and factual review | In progress | Review the live US importer-responsibility and drawback content and UK returns article against primary sources; obtain expert review. Verify EU product-identifier law before revising that article. | US and UK updates are owner-approved and live; expert review and EU legal-status verification remain outstanding. |
| 4. Trust and internal-link improvements | In progress | Add contextual links and relevant next steps; replace About template text and complete author/reviewer details once approved company facts are provided. | Contextual US link and official source links added and approved by the owner November 12. About/author details remain outstanding. |
| 5. Technical SEO verification | In progress | Inspect generated metadata, canonical URLs, sitemap, redirects, and internal links for priority pages and both reported hosts. Fix only confirmed issues. | Duplicate titles fixed; `url` set to the confirmed blog host; build verified one correct canonical on inspected pages and matching sitemap URL. Remaining redirect/live checks are pending. |
| 6. Publish approval and measurement | In progress | Complete qualified customs/legal review of live content; deploy the local canonical configuration; compare equal-length periods and track qualified leads where available. | Owner approval recorded and US/UK changes confirmed live November 12. Qualified review, configuration deployment, and post-change performance measurement remain open. |
| 7. Agent-search observation | Pending | Create a fixed set of realistic buyer questions for US, UK, and EU; run them periodically in selected AI search products and record citations/referrals. | Dated prompt set and repeated observations, clearly separated from Search Console metrics. |

Phases can overlap where prerequisites are met. Review the live regulatory content with a qualified customs expert and correct any claims that are inaccurate or no longer current.

## Next steps

### Inputs needed from the owner

1. Owner approval of the current draft changes and CTA destinations was recorded November 12, 2026.
2. Provide approved About-page/company wording and accurate author or reviewer names, roles, and credentials before those details are added.
3. Identify or conduct qualified review of customs, tax, and trade-rule claims, especially US drawback assertions, UK relief terminology, and current EU product-identifier requirements.
4. The recommended canonical host is `https://blog.tradedutyrefund.com`, based on the live page canonical, sitemap, robots.txt directive, and CNAME. The local Jekyll `url` setting now matches this host; the main company website remains on `https://tradedutyrefund.com`.
5. Provide qualified-enquiry outcomes if available, so content changes can be assessed against leads rather than traffic alone.
6. Reconfirm market, service, and industry priorities at the next quarterly review or sooner if business priorities change.

### Work to do next

1. Obtain qualified review of the US article's legal/eligibility/refund/statistic claims and the UK article's use of “duty drawback,” RGR/VAT distinctions, and application of HMRC conditions to TDR's target ecommerce flows.
2. Verify the legal status of the EU product-identifier requirement against an adopted, applicable act. The live article currently states the requirement took effect on November 1, 2026; correct or qualify that statement if the date or legal basis cannot be substantiated.
3. Deploy the local canonical configuration through the normal publishing process, then confirm live titles, canonicals, sitemap entries, and host redirects match the local build.
4. Record the current page-filtered Search Console baseline and compare it with an equal-length period after the changes have had time to accumulate data. Include qualified enquiries if available.
5. Draft About-page and author updates only after receiving approved facts.

## Measurement and reporting rules

- Record date range, search type, country scope, filters, and whether values are page-level, query-level, or site-level with every baseline.
- Compare equal-length before/after periods. Report clicks, impressions, CTR, and position together; explain that position is an average and can vary by query and location.
- Track relevant query/page performance separately from overall site totals.
- Add qualified enquiries or other business outcomes when the owner can provide them. Search Console clicks alone do not measure lead quality.
- Treat AI-search observations as a separate, manually collected data set. Search Console does not report AI citations; do not describe prompts or anecdotal results as a ranking metric.
- Revisit priorities when evidence changes, documenting the reason and preserving prior results for comparison.

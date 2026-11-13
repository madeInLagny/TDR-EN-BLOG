# SEO Monitoring and Editorial Roadmap

This operating plan supplements the [SEO and Agent Search Strategy](SEO-AGENT-SEARCH-STRATEGY.md). It sets a repeatable monitoring rhythm and a gated content pipeline for qualified importer enquiries, with US as the current first priority, followed by UK and EU.

## 1. Performance review cadence

| Cadence | Owner action | Assistant work when data is shared | Output |
|---|---|---|---|
| Weekly, 10 minutes | Check Search Console for indexing or coverage problems on newly changed/published URLs; check that important landing pages still load. Do not overreact to small ranking movements. | Help diagnose screenshots, exports, or URLs provided. | A short technical issue list, only if action is needed. |
| Monthly, first week | Export the latest complete 28 days after allowing several days for reporting delay. Compare with the immediately preceding 28 days. Export site-level pages, queries, and countries, then query rows for priority landing pages. | Compare like-for-like periods, segment US/UK/EU and branded/non-branded searches, identify page-query opportunities, and recommend a small number of actions. | One dated scorecard and no more than three priority actions for the month. |
| After a page change | Record the change date and request indexing once for material updates if appropriate. Review indexing after roughly 1–2 weeks; use the first 28-day performance window as an early signal, not a verdict. | Check rendered metadata and links if the source/build is available; compare the page's query mix and performance. | A change log and an initial result. |
| Quarterly | Compare the latest 90 days with the previous 90 days. Review qualified leads and conversion quality with the owner, revisit page priorities, and confirm whether market/service priorities have changed. | Re-rank pages and content opportunities; update this roadmap and the strategy tracker. | A quarterly decision: continue, improve, consolidate, or stop each initiative. |

Search Console notifications or indexing requests are not confirmation that Google has indexed a page or that rankings have improved. Verify indexing separately and judge performance over a sufficient period.

## 2. Monthly Search Console checklist

1. Select the `blog.tradedutyrefund.com` property and **Web** search type. Keep the main company domain separate unless intentionally reporting on it.
2. Select the latest complete 28-day window and compare it with the previous 28 days. Record the exact dates, filters, and export date.
3. Export site-level **Pages**, **Queries**, and **Countries**. Do not infer a query-to-page relationship from separate, unfiltered exports.
4. For each priority page, apply a page filter and export its **Queries** rows. Start with:
   - US drawback explainer and US drawback implementation/retail pages;
   - the US importer-of-record article;
   - the updated UK recovery article;
   - the EU product-identifier and EU returned-goods pages after their current legal claims are reviewed.
5. In each export, record clicks, impressions, CTR, and average position together. Segment by target country and separate branded searches where useful.
6. Pair Search Console results with GA4 organic landing-page sessions and qualified enquiries from the CRM, if available. Track lead source and service sought; a click or form submission alone is not necessarily a qualified lead.
7. Record the action chosen and the reason. Avoid changing title, content, internal links, and CTA simultaneously if you want to understand which change affected results.

### Monthly scorecard

| Month / comparison dates | Market | Landing page / query cluster | Clicks | Impressions | CTR | Avg. position | Organic sessions | Qualified enquiries | Change / next action |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
|  | US / UK / EU |  |  |  |  |  |  |  |  |

Keep the raw Search Console exports outside the repository unless the owner explicitly wants them committed. Add a dated result row or link the analysis in the strategy tracker.

## 3. How to decide what to improve

Use these as diagnostic patterns, not guaranteed ranking rules or promised targets:

- **Relevant queries around positions 5–15, but weak CTR:** review whether the title and description clearly match the query and distinguish the page. Test the snippet before rewriting the entire article.
- **Relevant impressions around positions 8–25:** improve the page's actual answer, coverage, examples, and links from relevant related articles. Confirm that the page satisfies the search intent before adding more keywords.
- **Impressions mostly beyond position 20:** check intent match, technical indexing, internal linking, and whether a more focused page already exists. A title tweak alone is unlikely to address a content-depth gap.
- **Clicks rise but qualified enquiries do not:** check whether the search intent and CTA match the service, whether the page attracts the intended importer, and whether the form/landing experience is functioning.
- **A page's query set is mainly informational:** answer it directly and use a restrained contextual link to the relevant service guide. Do not turn an informational article into a sales page.
- **A query cluster already maps to a strong existing article:** improve and link that article rather than creating a near-duplicate.
- **One period drops:** check seasonality, country/device mix, query mix, and whether the change persists before making a major editorial decision.

Treat qualified enquiries by target service as the primary business outcome. Use clicks, impressions, CTR, position, and sessions as diagnostic indicators rather than standalone success measures.

## 4. Content strategy and publishing guardrails

- Aim for **one substantial new article per month at most** during the initial 90-day cycle. If research shows no distinct query or reader need, publish fewer and improve existing pages instead.
- Before drafting, check the existing article inventory and page-filtered queries for cannibalization. A proposed topic is a hypothesis until Search Console, customer questions, or sales evidence supports it.
- Prioritize US duty drawback first; then UK duty drawback and UK Returned Goods Relief; then EU duty drawback and EU Returned Goods Relief, subject to current owner priorities.
- Apparel, sporting goods, and luxury examples belong only where they illuminate cross-border ecommerce and returned goods exported from the destination market. Do not create thin near-identical industry landing pages. Use a single strong article with clearly differentiated examples unless each industry has distinct evidence and search intent.
- For customs, tax, and trade-law content, cite current primary sources, show the relevant jurisdiction and publication/update date, and obtain subject-matter review of eligibility, deadlines, refund percentages, and legal interpretation.
- Use only real, approved customer examples and results. Label hypothetical examples clearly; never invent case studies, refund values, credentials, or outcomes.
- Every article brief should define: reader and market; search-intent hypothesis; existing pages it complements; evidence/source list; unique practical value; proposed title and description; headings; CTA; internal links; reviewer; and the success measures to monitor.
- Recheck market/service priorities with the owner quarterly and sooner if they change.

## 5. Initial 90-day editorial pipeline

### Weeks 1–2: establish the baseline and organize the existing cluster

**Assistant**

- Map query-to-page exports for the US duty-drawback articles, not just the importer/consignee article. The existing US cluster includes the [US duty-drawback explainer](_posts/2025-08-11-duty-drawback-us-importers-guide-tariffs-refunds-e-commerce-retail.md), [US drawback starter guide](_posts/2025-10-15-how-to-get-started-with-us-duty-drawback-step-by-step-guide.md), and [retail drawback pillars article](_posts/2026-07-28-3-critical-pillars-to-maximize-b2c-retail-duty-drawback-in-the-us.md).
- Select one primary US drawback page and map supporting articles to it; identify overlapping claims or headings to refresh rather than repeat.
- Audit the current EU returned-goods and product-identifier articles for current legal status before proposing EU content.

**Owner**

- Supply the monthly page-filtered exports and, if available, qualified-enquiry counts by service.
- Confirm which US drawback offer/assessment is the preferred CTA; for a proposed new article, provide a qualified reviewer for its customs claims.

**Deliverable:** US query-to-page map, existing-page gap analysis, and one approved new-article brief.

### Weeks 3–6: first proposed new article (US)

**Working topic:** *U.S. Ecommerce Returns Exported by a 3PL: A Duty-Drawback Data and Evidence Checklist*

- **Reader:** US ecommerce importer or finance/returns-operations leader using a marketplace, carrier network, 3PL, or returns consolidator.
- **Intent hypothesis:** operational questions about matching imported merchandise to customer returns and subsequent export when different partners hold shipment and item data. This is not yet validated by the supplied query exports.
- **Unique value:** a practical, expert-reviewed flow showing the records to request from importer, broker, 3PL, and export provider; how to reconcile SKU/item, import-entry, return, and export references; common data gaps; and a short readiness checklist.
- **Industry relevance:** use one apparel or footwear scenario, one sporting-goods scenario, and one luxury scenario only if they illustrate real differences in item identity, handling, or data custody. Do not imply that category alone establishes eligibility.
- **Relationship to current content:** link to, but do not repeat, the general US drawback explainer and retail pillars article. If query evidence shows the proposed topic substantially duplicates an existing page, improve that page instead of publishing a new URL.
- **CTA:** the US drawback eligibility questionnaire, clearly described as an initial review rather than a guarantee of eligibility or recovery.
- **Publication gate:** validate query demand/page gap; verify all legal statements and workflow assumptions with a qualified customs reviewer; use no customer example without permission.

### Weeks 7–10: decide between a UK spoke article and a UK refresh

The updated UK recovery article now distinguishes Returned Goods Relief from other repayment routes. Do not immediately publish another broad UK explainer.

- If page-filtered Search Console shows a distinct, relevant cluster about **UK Returned Goods Relief for goods exported from the UK and re-imported**, assess whether the existing [expert RGR article](_posts/2024-12-13-ask-the-experts-rgr-with-elke-rodel-what-is-returned-goods-relief-and-who-can-benefit.md) should be refreshed as the dedicated guide.
- If distinct query/customer evidence instead concerns UK duty recovery after cross-border ecommerce customer returns, write a focused article only after the eligible route and terminology are confirmed by a qualified reviewer.
- If neither gap is evidenced, add clarifying sections and internal links to the updated UK page rather than creating another article.

### Weeks 11–13: EU decision, not an automatic new post

- Verify the applicable EU law and implementation date for the product-identifier statements. Update the existing [product-identifier article](_posts/2026-06-23-eu-customs-reform-2026-the-new-product-identifier-requirement-every-non-eu-ecommerce-brand-must-prepare-for.md) if needed; do not publish a second article about the same reform.
- Review the existing [EU returned-goods article](_posts/2026-03-19-how-retailers-can-recover-duty-on-eu-returned-goods-in-2026.md) for publication visibility, overlap, and legal accuracy before commissioning new EU RGR or duty-refund content.
- Commission a new EU article only if verified service priorities and Search Console/customer evidence reveal a distinct question not adequately answered by those pages.

**Quarter-end decision:** compare the US and UK page/query results and qualified enquiries, ask the owner whether market/service priorities changed, and choose one next article or a refresh/consolidation instead.

## 6. Agent-search observation

Once per quarter, run a fixed set of realistic buyer questions in the AI search products TDR cares about. Include US, UK, and EU scenarios and the five priority services. Record the date, product, locale, exact prompt, whether TDR is mentioned, which URL is cited, competing sources, and any attributable referral or enquiry. Repeat the same prompts; do not describe these manual observations as Search Console rankings or guaranteed citation performance.

## 7. Who does what

**Owner**

- Export Search Console data monthly and provide qualified-lead context that Google cannot supply.
- Confirm current commercial priorities quarterly and approve TDR service descriptions and CTA destinations.
- Supply named, qualified customs/legal reviewers and approve customer examples before use.
- Operate or approve publishing, Search Console indexing requests, and any account-level reporting.

**Assistant**

- Analyze supplied exports, maintain this roadmap and the strategy tracker, map topics to existing URLs, draft articles and metadata, add internal links, cite primary sources, and run repository/build checks.
- Flag claims needing human judgment and distinguish validated facts from hypotheses.
- Review each monthly scorecard when the owner shares it and propose a small, evidence-based set of next actions.

The assistant cannot see Search Console, GA4, CRM, or AI-search accounts unless the owner shares exports or access through an authorized integration. It cannot run scheduled reviews autonomously; the owner should return with the monthly export or ask for the next scheduled review.

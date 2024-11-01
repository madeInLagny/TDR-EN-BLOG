# Trade Duty Refund Blog
## Technical Notes
### Source
- Demo: https://wowthemesnet.github.io/mediumish-theme-jekyll/
- github: https://github.com/wowthemesnet/mediumish-theme-jekyll/

### Pictures ratio
Pictures must be 3:2 (ex 750x500)

## Process
### Run the blog locally

```
bundle exec jekyll serve --watch
```
### Add a post
- Duplicate the latest post in the _posts directory
- Run the following CHATGPT prompt:

"I want to convert the following article in a jekyll blog post format. Start by giving me a dash separated URL slug version of the title. Then populate a front matter section with this layout. Note within parenthesis are instructions for you. "--- 
layout: post
title: (copy here the article title within quotation marks)
description: (Write a SEO friendly description tag in 160 characters max within quotation marks) 
categories: (Write 5 relevant tags for the blog post. Each tag must be comma separated. Wrap the list within [ ]. No numbered list. If it makes sense try to use one of the following tags: vat, uk, eu, partnership, hmrc, global ecommerce, cross-border returns, customs regulations, supply chain management, ai-powered logistics, ai in trade, eu ai act, customs operations, international trade efficiency, ai-powered customs duty refunds, eu customs reforms, global retailers, duty drawback refunds, vat implications, ask the expert, retail returns, customs costs, cross-border trade, logistics management, customer satisfaction, automation, blockchain, consumer behavior, e-commerce trends. Tell me if you created new tags)
image: (leave blank) 
comments: false
--- then add the blog text converted into markdown format. Make sure to keep the markdown syntax available for copying into visual code. The first paragraph must had a > to emphasize it. I will copy the article in the following prompt




- Check the post locally
- Save changes and commit to upload changes to github
- Add the URL to Google Search Console

## Snippets
[**Trade Duty Refund**](https://tradedutyrefund.com)
[Jocelyn Montpert](https://tradedutyrefund.com/jocelyn-montpert.html)
![Image description](/assets/images/20240412-2.jpg)
Contact us at [contact@tradedutyrefund.com](mailto:contact@tradedutyrefund.com)

## Tools

Picture sources: https://www.vecteezy.com/free-photos/taxes
Kramdown doc: https://kramdown.gettalong.org/quickref.html
  note: to add a class to a markdown element, add {: .className} after. Example:![Image description](/assets/images/20240412-2.jpg) {: .mx-auto .d-block} centers an image.
Markdown doc: https://www.markdownguide.org/basic-syntax
Image compressor: https://squoosh.app/
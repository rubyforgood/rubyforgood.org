---
layout: page
title: Non-Profit Partners
description:
bg:
style:
permalink: /pages/join-us/non-profit-partners
blocks:
  - type: partner_with_us
    bg: white-bg
  - type: how_it_works
    title: How It Works
    bg: grey-bg
  - type: projects_we_build
    bg: white-bg
  - type: problems_we_solve
    bg: white-bg
  - type: cost
    bg: white-bg
  - type: your_involvement
    bg: white-bg
  - type: testimonials
    title: Testimonials
    description: Listen to what our amazing partner organizations have to say...
    bg: grey-bg
---

{% include mixins/section_header.html %}
{% for block in page.blocks %}
  {% include join_us/{{ block.type }}.html %}
{% endfor %}

---
layout: page
title: Non-Profit Partners
description:
bg:
style:
permalink: /pages/join-us/non-profit-partners
blocks:
  - type: partner-with-us
    bg: white-bg
  - type: how-it-works
    bg: grey-bg
  - type: projects-we-build
    bg: white-bg
  - type: problems-we-solve
    bg: white-bg
  - type: cost
    bg: white-bg
  - type: your-involvement
    bg: white-bg
  - type: testimonials
    bg: grey-bg
---

{% include mixins/section_header.html %}
{% for block in page.blocks %}
  {% if block.title %}
  {% include mixins/block_header.html %}
  {% endif %}
  {% include join_us/{{ block.type }}.html %}
{% endfor %}
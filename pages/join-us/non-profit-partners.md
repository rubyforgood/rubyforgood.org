---
layout: page
title: Non-Profit Partners
description:
bg:
style:
permalink: /pages/join-us/non-profit-partners
blocks:
  - type: partner
    bg: white-bg
  - type: how
    title: How It Works
    bg: grey-bg
  - type: projects
    bg: white-bg
  - type: problems
    bg: white-bg
  - type: cost
    bg: white-bg
  - type: involvement
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

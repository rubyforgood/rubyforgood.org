---
layout: page
title: Our Work
description: 
bg: 
style: 
permalink: /pages/our-work
blocks:
  - type: impact
    title: Impact
    bg: white-bg
  - type: skills_based_volunteering
    title: Skills-based Volunteering
    bg: grey-bg
---

{% include our_work/landing_page.html %}
{% for block in page.blocks %}
  {% if block.title %}
  {% include mixins/block_header.html %}
  {% endif %}
  {% include our_work/{{ block.type }}.html %}
{% endfor %}

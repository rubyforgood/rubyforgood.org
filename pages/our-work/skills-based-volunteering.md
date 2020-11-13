---
layout: page
title: Why Is Skills-Based Volunteering Important?
description:
bg: grey-bg
style:
permalink: /pages/our-work/skills-based-volunteering
blocks:
  - type: importance
    title:
    bg: grey-bg
  - type: difference
    title: How We're Different
    bg: white-bg
  - type: approach
    title: Our Approach
    bg: grey-bg
  - type: success
    title: Facilitating Success
    bg: white-bg
---

{% include mixins/section_header.html %}
{% for block in page.blocks %}
  {% if block.title %}
  {% include mixins/block_header.html %}
  {% endif %}
  {% include our_work/{{ block.type }}.html %}
{% endfor %}

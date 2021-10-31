---
layout: page
title: Why Is Skills-Based Volunteering Important?
description:
bg: grey-bg
style:
permalink: /our-work/skills-based-volunteering
blocks:
  - type: importance
    title:
    bg: grey-bg
  - type: difference
    title: What Makes Us Unique
    bg: white-bg
  - type: approach
    title: Our Approach
    bg: grey-bg
  - type: success
    title: Facilitating Success
    bg: white-bg
---

{% include mixins/section_header.html %} {% for block in page.blocks %}
{% if block.title %} {% include mixins/block_header.html %} {% endif %}
{% include our_work/{{ block.type }}.html %} {% endfor %}

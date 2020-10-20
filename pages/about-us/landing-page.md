---
layout: page
title: About Us
description:
bg: grey-bg
style:
permalink: /pages/about-us
blocks:
  - type: mission_vision_history
    title: 
    description: 
    bg: grey-bg
    style: 
  - type: core_values
    title: Core Values
    description: 
    bg: white-bg
    style: 
  - type: about_gooders
    title: What Is a Gooder?
    description: 
    bg: grey-bg
    style: 
---

{% include mixins/section_header.html %}
{% for block in page.blocks %}
  {% if block.title %}
  {% include mixins/block_header.html %}
  {% endif %}
  {% include about_us/{{ block.type }}.html %}
{% endfor %}

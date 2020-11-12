---
layout: default
title: Home
description:
bg: white-bg
style:
blocks:
  - type: slider
    title:
    description:
    bg:
    style:
  - type: overview_columns
    title:
    description:
    bg: white-bg
    style:
  - type: impact_counter
    title: Impact by the Numbers
    description: Numbers don't lie. Here is an unbiased look at our impact so far.
    bg: lt-teal-bg
    style: counter-section
  - type: our_supporters
    title: Who Believes In Us
    description: We are unable to do the amazing work we do without help. We are honored that the companies listed below are supporting us and our mission.
    bg: white-bg
    style:
---

{% include mixins/header_custom.html %}
<main>
  {% for block in page.blocks %}
    {% if block.title %}
    {% include mixins/block_header.html %}
    {% endif %}
    {% include home/{{ block.type }}.html %}
  {% endfor %}
</main>

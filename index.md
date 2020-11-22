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
    title: Our Impact Metrics
    description: We are incredibly proud to share our impact metrics since our founding in 2013.
    bg: grey-bg
    style: counter-section
  - type: our_supporters
    title: Our Supporters
    description: We are privileged to partner with the companies listed below, that trust us and believe in our mission.
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

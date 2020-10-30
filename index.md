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
  - type: featured_project
    title: Featured Project
    description: Check back regularly to see a newly featured project!
    bg: grey-bg
    style:
  - type: impact_counter
    title: Impact by the Numbers
    description: Our numbers speak for themselves.
    bg: lt-teal-bg
    style: counter-section
  - type: our_supporters
    title: Who Supports Us
    description: Take it from the companies below. These folks recognize the difference we're making and are dedicated to helping us continue our mission. Are you?
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

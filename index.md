---
layout: default
title: Home
blocks:
  - type: featured_project
    title: Featured Project
    description: Check back regularly to see a newly featured project!
    bg: grey-bg
  - type: impact_counter
    title: Impact by the Numbers
    description: See how Ruby for Good produces impactful results.
    bg: lt-teal-bg
    styling: counter-section title-header
  - type: blog_area
    title: Our Recent Posts
    description: See what's new with Ruby for Good!
    bg: grey-bg
  - type: our_supporters
    title: Our Supporters
    description: Take it from the companies below. These folks recognize the difference we're making and are dedicated to helping us continue our mission. Are you?
---

{% include header_custom.html %}
<main>
  {% include home/slider.html %}
  {% include home/overview_columns.html %}
  {% for block in page.blocks %}
    {% include home/block_header.html %}
    {% include home/{{ block.type }}.html %}
  {% endfor %}
</main>

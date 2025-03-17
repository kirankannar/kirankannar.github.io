---
layout: single
title: "All Tags"
permalink: /tags/
---

Below are all tags used across my blog. Click any tag name to see posts with that tag:

{% for tag in site.tags %}
- [{{ tag[0] }}](/tag/{{ tag[0] }})
{% endfor %}
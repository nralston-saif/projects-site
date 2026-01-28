# Free Tools Site

Static site built with Astro.

## Development

```bash
npm install
npm run dev
```

## Adding a new tool

Create a new markdown file in `src/content/tools/`:

```md
---
name: "Tool Name"
description: "Short description"
repo: "https://github.com/nralston-saif/repo-name"
category: "Category Name"
platform: "macOS 14.0+"
requirements:
  - "Requirement 1"
  - "Requirement 2"
---

## What it does

...

## Setup

...
```

Run `npm run build` to rebuild.

---
name: "Code Companion"
description: "Desktop notifications for Claude Code — alerts you when input is needed or tasks complete"
repo: "https://github.com/nralston-saif/code-companion"
category: "AI Utilities"
platform: "macOS 14.0+"
image: "/code-companion.svg"
requirements:
  - "macOS 14.0+"
  - "Xcode CLI tools"
  - "Node.js 18+"
  - "jq"
  - "Claude Code CLI"
---

## What it does

A desktop companion that notifies you when Claude Code needs your attention. Stop checking back on long-running tasks — the companion alerts you when:

- **Approval is needed** — Claude is waiting for you to approve an action
- **Input is required** — Claude has a question or needs clarification
- **Tasks complete** — Your work is done and ready to review

![Code Companion](/code-companion.svg)

The pixel art character lives on your desktop and changes appearance based on Claude's state. When something needs your attention, it bounces and plays a sound so you can step away and stay productive.

## Features

- **Visual status** — See instantly when Claude is thinking, working, waiting, or idle
- **Smart notifications** — Bounces when Claude needs input, shows concern on errors
- **Interactive** — Click, hover, and drag the companion for reactions
- **Customizable** — Six color themes, eye-tracking options, sound controls

## Setup

First, install the prerequisites if you don't have them:

```bash
xcode-select --install  # Xcode CLI tools (for Swift)
brew install node jq    # Node.js and jq
```

Then clone and run setup:

```bash
git clone https://github.com/nralston-saif/code-companion.git
cd code-companion
./setup.sh
```

The setup script checks for missing dependencies and configures everything automatically. Once complete, restart Claude Code to connect.

## Themes

Access settings through the menu bar icon. Available themes:
- Classic
- Ocean
- Forest
- Sunset
- Lavender
- Midnight

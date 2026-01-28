---
name: "Claude Companion"
description: "Desktop companion that shows Claude Code's status with visual feedback and notifications"
repo: "https://github.com/nralston-saif/claude-companion"
category: "AI Utilities"
platform: "macOS 14.0+"
requirements:
  - "macOS 14.0+"
  - "Claude Code CLI"
  - "Node.js 18+"
---

## What it does

A pixel art character that lives on your desktop and shows what Claude Code is doing in real-time. It changes appearance based on Claude's state — thinking, working, waiting for input, or idle.

When Claude needs your attention, the companion bounces and plays a sound. When a task completes, it celebrates.

## Features

- **Visual status** — See instantly when Claude is thinking, working, waiting, or idle
- **Smart notifications** — Bounces when Claude needs input, shows concern on errors
- **Interactive** — Click, hover, and drag the companion for reactions
- **Customizable** — Six color themes, eye-tracking options, sound controls

## Setup

Clone and run the setup script:

```bash
git clone https://github.com/nralston-saif/claude-companion.git
cd claude-companion
./setup.sh
```

Add to your `~/.claude.json`:

```json
{
  "mcpServers": {
    "claude-companion": {
      "command": "node",
      "args": ["/path/to/claude-companion/mcp-server/dist/index.js"]
    }
  }
}
```

Replace `/path/to/claude-companion` with the actual path where you cloned the repo.

## Running

From the repo directory:

```bash
swift run
```

Or build the app and copy to Applications.

## Themes

Access settings through the menu bar icon. Available themes:
- Classic
- Ocean
- Forest
- Sunset
- Lavender
- Midnight

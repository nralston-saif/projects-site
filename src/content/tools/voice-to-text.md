---
name: "Voice to Text"
description: "Local speech-to-text transcription for macOS using Whisper AI"
repo: "https://github.com/nralston-saif/Voice-to-Text"
category: "Voice & Transcription"
platform: "macOS 14.0+ (Apple Silicon)"
requirements:
  - "macOS 14.0 (Sonoma) or newer"
  - "Apple Silicon Mac (M1/M2/M3/M4)"
  - "~100MB disk space for Whisper model"
---

## What it does

A menu bar app that records voice and transcribes to text using local Whisper AI. All processing happens on-device — nothing is sent to the cloud.

Hold the `fn` key to record, release to transcribe. The text automatically pastes into whatever text field is focused.

## Features

- **Auto-paste** — Transcribed text inserts directly into your focused app
- **Voice commands** — Trigger actions by speaking (e.g., "open terminal", "run claude")
- **Custom commands** — Create your own voice-triggered actions
- **Multiple models** — Choose from tiny to large-v3 for speed vs accuracy tradeoff

## Setup

Clone and build:

```bash
git clone https://github.com/nralston-saif/Voice-to-Text.git
cd VoiceToText
swift build -c release
```

Or run directly:

```bash
cd VoiceToText
swift run
```

## Permissions

The app needs two permissions:

1. **Microphone** — Requested automatically on first recording
2. **Accessibility** — Enable manually in System Settings > Privacy & Security > Accessibility (required to detect `fn` key and paste text)

## Usage

- **Hold `fn`** — Start recording
- **Release `fn`** — Stop and transcribe
- **Double-tap `fn`** — Toggle recording mode (for longer dictation)

Access custom commands through the menu bar icon.

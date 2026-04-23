# Installation

## Requirements

- **jo_libs**: Framework logic.
- **madd_ui**: Notifications and UI.

## Steps

1. Extract `madd_emoji` into your `resources/` folder.
2. Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure madd_ui
ensure madd_emoji
```

3. Restart your server.

## Commands

| Command | Action |
| --- | --- |
| `/emoji` | Open emoji menu |
| `/tarot` | Draw a tarot card |
| `/rps` | Play Rock-Paper-Scissors |
| `/coinflip` | Flip a coin |
| `/dice` | Roll a dice |
| `/addpersonalemoji` | (Admin) Add custom emoji |

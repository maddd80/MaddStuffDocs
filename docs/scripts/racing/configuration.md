# Configuration Guide

All main settings for the Racing system are located in `shared/sh_config.lua`.

## Core Settings

| Setting | Description |
| :--- | :--- |
| `Config.raceMenuCommand` | Command for opening the race menu (default: `"race"`). |
| `Config.checkpointRadius` | Default radius for checkpoints if not specifically set (default: `10.0`). |
| `Config.drawCheckpointMarkers` | Set to `true` to draw visible markers at checkpoints. |
| `Config.checkpointGPSRouteColor` | The color of the GPS routing line on the minimap (default: `70` for purple). |
| `Config.freezeBeforeCountdown` | If `true`, freezes players for 3 seconds before the race starts to prevent false starts. |

## Visuals and Props

| Setting | Description |
| :--- | :--- |
| `Config.checkpointObjectHash` | Hash of the object spawned to the left and right of checkpoints (default: `'p_chair_barrel04b'`). |
| `Config.startObjectHash` | Hash of the object spawned at the start of the race (default: `'p_barrelapples01x'`). |

## Keybinds

By default, creating and interacting with races utilizes the following keybinds (`Config.keybinds`):

- **Add Checkpoint**: `INPUT_FRONTEND_RB` (Right Bumper)
- **Remove Checkpoint**: `INPUT_FRONTEND_CANCEL` (B/Circle or Backspace)
- **Change Radius**: `INPUT_FRONTEND_UP` / `INPUT_FRONTEND_DOWN` (D-Pad Up/Down)
- **Join Race**: `INPUT_INTERACT_OPTION1` (X/Square)

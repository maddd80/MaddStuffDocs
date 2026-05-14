# Configuration Guide

All main settings for the Telephone system are located in `shared/sh_config.lua`.

## Core Settings

| Setting | Description |
| :--- | :--- |
| `Config.PhoneBooths` | Add/Remove **Public** phones and set their fixed phone numbers. |
| `Config.PhoneItem` | The name of the item required in your inventory to place a personal phone (default: `phone`). |
| `Config.CallPrice` | How much money is deducted per call. Set to `0` for free calls. |
| `Config.SpeakerRadius` | The radius (in meters) within which nearby players can hear a call when Speaker Mode is active (default: `3.0`). |
| `Config.RingSound` | The URL or file path for the ringing sound effect. |
| `Config.Security` | Adjust rate limits for calls to prevent spam and abuse. |

## Customizing Phone Booths

You can define multiple public phone booths across the map by editing the `Config.PhoneBooths` array. Each entry allows you to specify the coordinates, the assigned phone number, and the visual prop to spawn (e.g., a wall-mounted phone).

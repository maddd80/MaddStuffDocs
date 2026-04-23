# Configuration

Settings are in `config.lua`.

## Visual Settings

```lua
Config.ViewDistance = 20.0    -- Distance other players can see icons
Config.DefaultDuration = 8000 -- How long the emoji stays visible (ms)
Config.IconSize = 3.5         -- Relative size of the emoji
```

## Minigame Settings

Each minigame can be enabled/disabled and configured individually.

### Tarot
```lua
Config.Tarot = {
    Enabled = true,
    Command = "tarot",
    RequiresItem = false,
    ItemName = "tarot_deck"
}
```

### Rock-Paper-Scissors
```lua
Config.RPS = {
    Enabled = true,
    Command = "rps",
    Duration = 3000
}
```

## Framework Integration

The `Config.Framework` table allows you to bridge the script with your specific core for permissions and notifications.

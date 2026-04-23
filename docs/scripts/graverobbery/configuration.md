# Configuration

Configure graves, loot, and selling mechanics in `shared/sh_config.lua`.

## Police & Hours

```lua
Config.ChanceAlerted = 50           -- % chance to alert police
Config.AlertedJobs = { "police" }   -- Jobs that receive the alert
Config.RestrictedHours = true
Config.Hours = { 21, 07 }           -- Active between 9 PM and 7 AM
```

## Loot Table

```lua
Config.LootTable = {
    ["normal"] = {
        items = {
            { item = "acid", minAmount = 5, maxAmount = 20, chance = 70 },
            -- ...
        },
        cash = { minAmount = 5, maxAmount = 20, chance = 70 }
    }
}
```

## Selling Goods

Players can sell loot to NPCs. You can define specific items and their price ranges.

```lua
Config.SellSettings = {
    enabled = true,
    alertPolice = true,     -- NPCs might report you!
    items = {
        ["acid"] = { min = 5, max = 10 },
        ["absinthe"] = { min = 10, max = 20 },
    },
    -- ...
}
```

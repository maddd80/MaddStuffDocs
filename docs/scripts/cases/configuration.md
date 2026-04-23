# Configuration

Madd Cases is highly customizable via `shared/sh_config.lua`. Below are the primary configuration sections.

## Rarity Settings

You can define custom rarities with specific colors and drop weights.

```lua
Config.Rarities = {
    common = {
        name = "Common",
        color = "#8B7355",
        glow = "#A08060",
        weight = 50 -- Higher weight = more common
    },
    -- ...
    legendary = {
        name = "Legendary",
        color = "#FFD700",
        glow = "#FFA500",
        weight = 1
    }
}
```

## Case Definitions

Each case can have its own price, currency type, and loot table.

```lua
Config.Cases = {
    outlaw_case = {
        name = "Outlaw's Bounty",
        description = "Contains weapons and gear",
        image = "outlaw.png",
        price = 50,
        currency = "money", -- "money", "gold", or "item"
        items = {
            { rarity = "common", type = "item", item = "bandage", amount = 3 },
            { rarity = "legendary", type = "currency", currency = "gold", amount = 25 },
        }
    }
}
```

## NPC Traders

Define where players can buy cases or trade items.

```lua
Config.NPCs = {
    {
        coords = vector4(-327.2, 818.14, 117.73, 192.29),
        model = "mp_u_m_m_fos_sdsaloon_gambler_01",
        name = "Mysterious Trader",
        cases = { "outlaw_case", "prospector_case" },
        tradePacks = { "pack1", "pack3" },
        -- ...
    }
}
```

## Animation & Sounds

Adjust the "CS2-style" roll animation.

```lua
Config.Animation = {
    totalDuration = 6000,        -- 6 seconds total
    fastPhaseDuration = 2000,
    decelerationDuration = 4000, -- Dramatic slow-down
    -- ...
}
```

---

# API & Events

Madd Cases provides events for integration with other scripts.

## Server Events

### Open Case
`TriggerServerEvent('madd_cases:openCase', caseId)`
- `caseId`: The string ID defined in `Config.Cases`.

## Client Events

### Show Notification
`TriggerEvent('madd_cases:notify', text, position)`
- `text`: Message content.
- `position`: UI position (e.g., 'top-right').

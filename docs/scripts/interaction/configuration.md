
# Configuration

All configuration options are located in:

```
madd_interaction/config.lua
```

The configuration is divided into two parts:

1. Core Settings (engine behavior, keybinds, performance)
2. Interaction Definitions (zones, entities, models, players, vehicles, etc.)

---

# ⚙️ Core Settings

## General Settings

```lua
Config.MaxDistance = 3.0
Config.Debug = false
Config.UseButton = false
```

### `MaxDistance`

Maximum interaction range in meters.
Lower values reduce accidental triggers.
Recommended range: `2.0 – 3.5`

### `Debug`

Enables console debug logs.
Keep disabled in production.

### `UseButton`

If `false`, the interaction UI opens automatically when in range.
If `true`, the player must hold the interaction modifier key.

---

## 🎮 Keybind Configuration

```lua
Config.Button = 0x8AAA0AD4        -- Default: L-ALT
Config.InteractButton = 0x760A9C6F -- Default: E
Config.UpButton = 0x6319DB71       -- Default: Arrow Up
Config.DownButton = 0x05CA7C52     -- Default: Arrow Down
```

These values use RedM control hashes.

* `Button` → Modifier key to show interactions
* `InteractButton` → Confirm selected option
* `UpButton` / `DownButton` → Navigate interaction menu

If changed incorrectly, interaction navigation may break.

---

## 🎨 UI Settings

```lua
Config.TextColor = { r = 255, g = 255, b = 255 }
```

Defines the color of interaction text in RGB format.

---

## 🚗 Vehicle Bone Targeting

```lua
Config.VehicleBones = { 'chassis', 'windscreen', 'seat_pside_r', ... }
```

These bones determine which vehicle parts can trigger interaction detection.

Removing bones reduces detection coverage.
Modify only if you understand vehicle bone structures.

---

# 🧠 Interaction System Architecture

The system supports multiple interaction types:

* Circle Zones
* Box Zones
* Poly Zones
* Entity-Based Interactions
* Model-Based Interactions
* Bone-Based Interactions
* Player Options
* Vehicle Options
* Object Options

Each category allows you to define interaction options.

All interaction options follow this structure:

```lua
{
    label = "Option Label",
    event = "event:name",
}
```

---

# 📍 Zone-Based Interactions

## Circle Zones

```lua
Config.CircleZones = {
    {
        name = "valentine_bank",
        coords = vector3(-308.5, 773.9, 118.7),
        radius = 2.0,
        options = {
            {
                label = "Open Bank",
                event = "bank:open"
            }
        }
    }
}
```

### Fields

* `name` → Unique identifier
* `coords` → Center position
* `radius` → Interaction radius
* `options` → List of interaction options

---

## Box Zones

```lua
Config.BoxZones = {
    {
        name = "stable_door",
        coords = vector3(-370.1, 787.4, 116.2),
        length = 2.0,
        width = 2.0,
        heading = 90.0,
        options = {
            {
                label = "Open Stable",
                event = "stable:open"
            }
        }
    }
}
```

---

## Poly Zones

```lua
Config.PolyZones = {
    {
        name = "restricted_area",
        points = {
            vector2(-320.0, 800.0),
            vector2(-315.0, 805.0),
            vector2(-310.0, 800.0)
        },
        options = {
            {
                label = "Enter Area",
                event = "area:enter"
            }
        }
    }
}
```

Use PolyZones for irregular shaped areas.

---

# 🧍 Entity-Based Interactions

```lua
Config.InteractionEntities = {
    {
        model = `a_m_m_farmer_01`,
        options = {
            {
                label = "Talk",
                event = "npc:talk"
            }
        }
    }
}
```

Triggers interactions for specific entity models.

---

# 🧱 Model-Based Interactions

```lua
Config.InteractionModels = {
    {
        model = `p_barrelbeer01x`,
        options = {
            {
                label = "Inspect Barrel",
                event = "barrel:inspect"
            }
        }
    }
}
```

Applies interactions to all world objects using the specified model.

---

# 🚘 Vehicle Options

```lua
Config.VehicleOptions = {
    {
        model = `wagon02x`,
        options = {
            {
                label = "Search Wagon",
                event = "wagon:search"
            }
        }
    }
}
```

Used for vehicle-specific interactions.

---

# 🧍 Player Options

```lua
Config.PlayerOptions = {
    {
        label = "Search Player",
        event = "player:search"
    }
}
```

Applies interaction options when targeting other players.

---

# 🧱 Object Options

```lua
Config.ObjectOptions = {
    {
        model = `p_crate03x`,
        options = {
            {
                label = "Open Crate",
                event = "crate:open"
            }
        }
    }
}
```

---

# 🦴 Bone-Based Interactions

```lua
Config.InteractionBones = {
    {
        model = `wagon02x`,
        bone = "boot",
        options = {
            {
                label = "Open Storage",
                event = "wagon:storage"
            }
        }
    }
}
```

Allows targeting specific vehicle bones.

---

# ⚠ Performance Considerations

* Lower `MaxDistance` improves precision.
* Avoid excessive overlapping zones.
* Avoid large polyzones unless necessary.
* Keep interaction options concise for better UX.

The system is lightweight, but poor configuration can impact usability.

---

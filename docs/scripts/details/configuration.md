# Configuration

Settings are located in `shared/sh_config.lua`.

## General Settings

```lua
Config.DefaultHoursLength = 48    -- Default lifetime of a detail
Config.maxHoursLength = 72        -- Maximum lifetime allowed
Config.detailCommand = "detail"   -- Creation command
Config.ShowHoursText = true       -- Show remaining time to players
```

## Conditions Settings

```lua
Config.UseConditions = true
Config.DefaultHoursLengthCondition = 12
Config.maxHoursLengthCondition = 24
Config.conditionCommand = "condition"
```

## Keybinds

```lua
Config.Keybind = {
    editMode = {
        adjustHoursIncrease = "INPUT_SELECT_PREV_WEAPON",
        adjustHoursDecrease = "INPUT_SELECT_NEXT_WEAPON",
        confirmPlacement = "INPUT_FRONTEND_ACCEPT"
    },
    inspectMode = {
        inspectDetails = "INPUT_FRONTEND_ACCEPT",
        deleteDetails = "INPUT_FRONTEND_CANCEL"
    }
}
```

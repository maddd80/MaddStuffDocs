# Configuration

Settings are in `shared/sh_config.lua`.

## Table Locations

```lua
Config.Tables = {
    { loc = vector4(3288.53, -1311.77, 42.75, 20), maxBet = 25 },
    -- ...
}
```

## Payout Multipliers

```lua
Config.Payout = {
    Straight = 35,
    Split = 17,
    Street = 11,
    Corner = 8,
    Collumn = 2,
    BlackRed = 1,
    -- ...
}
```

## Game Timing

```lua
Config.WaitForSpinsSeconds = 10 -- Wait time between spins
```

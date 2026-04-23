# Configuration

Configure table locations, betting limits, and payouts in `shared/sh_config.lua`.

## Table Settings

Add or modify tables in the `Config.Tables` array.

```lua
Config.Tables = {
    {
        name = "Rhodes",
        loc = vector4(1339.55, -1372.19, 83.27, 79.12),
        showBlip = true,
        maxBet = 250,
        dealerPed = true,
        npcmodel = "S_M_M_ASBDEALER_01",
    },
    -- ...
}
```

## Payout Multipliers

Adjust the risk/reward for your server's economy.

```lua
Config.Payout = {
    WinPayout = 2,
    BlackjackPayout = 2,
    FlushPayout = 5,
    StraightPayout = 10,
    TripsPayout = 30,
    PerfectPairPayout = 30,
    ColouredPairPayout = 10,
    MixedPairPayout = 5,
}
```

## Keybinds

```lua
Config.Button = {
    ['play_blackjack'] = 'INPUT_ENTER',           -- Enter
    ['bj_action_hit'] = 'INPUT_INTERACT_OPTION1', -- G
    ['bj_action_stand'] = 'INPUT_CONTEXT_B',      -- F
    -- ...
}
```

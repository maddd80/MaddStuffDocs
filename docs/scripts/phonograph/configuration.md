# Configuration

Configure audio settings, shop locations, and items in `shared/sh_config.lua`.

## Audio & Distance

```lua
Config.MaxDistanceMusic = 10.0 -- Radius where music is heard
Config.MaxVolume = 1.0        -- Global volume limit
```

## Record Shop & Maker

Define where players can buy or create records.

```lua
Config.RecordsMaker = {
    {
        name = 'Records Maker',
        pos = vector3(-371.03, 719.67, 116.42),
        shopType = 'maker',
    },
    {
        name = 'Records Shop',
        pos = vector3(-358.9, 737.04, 116.96),
        shopType = 'shop',
        shopItems = {
            { title = 'Music #1', url = '...', price = 100 },
        }
    },
}
```

## Keybinds

```lua
Config.KeyBind = {
    editMode = {
        rotateLeftPhonograph = 'INPUT_FRONTEND_LEFT',
        placeItem = 'INPUT_FRONTEND_ACCEPT',
        -- ...
    },
    nearObject = {
        interact = 'INPUT_INTERACT_OPTION1',
        pickUp = 'INPUT_FRONTEND_RB',
    }
}
```

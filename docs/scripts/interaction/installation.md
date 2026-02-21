## Requirements

- [jo_libs](https://docs.jumpon-studios.com/jo_libs/)
- PolyZone

## Installation Steps

1. Download the resource from your Tebex purchase page.
2. Extract the `madd_interaction` folder.
3. Place it inside your server's `resources/` directory.

Example:
resources/[madd]/madd_interaction

```css
madd_interaction/
├── client/
├── stream/
├── sv_main.lua
├── sv_versionCheck.lua
├── fxmanifest.lua
└── config.lua
```

## Server Configuration

Add the resource to your `server.cfg`:

ensure jo_libs
ensure madd_interaction

## First Launch

- Restart the server.
- Check console for errors.
- If no errors appear, the resource has loaded successfully.

## Troubleshooting

### Script not starting?
- Ensure the folder name is exactly `madd_interaction`
- Ensure all dependencies are started before it
- Check server console for missing exports
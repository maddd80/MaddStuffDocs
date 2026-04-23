# Installation

## Requirements

- **jo_libs**: Handles the underlying framework logic.
- **madd_ui**: Required for the betting interface and notifications.

## Steps

1. Extract the `madd_blackjack` folder into your `resources/` directory.
2. Ensure you have `jo_libs` and `madd_ui` installed.
3. Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure madd_ui
ensure madd_blackjack
```

4. Restart your server.

## Troubleshooting

### Tables not appearing?
- Verify the coordinates in `shared/sh_config.lua`.
- Ensure the `dealerPed` option is enabled if you expect an NPC.
- Check if `jo_libs` is properly initialized.

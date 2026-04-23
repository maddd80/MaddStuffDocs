# Installation

## Requirements

- **jo_libs**: Base framework library.
- **madd_ui**: For interaction UI and notifications.

## Steps

1. Extract `madd_graverobbery` into your `resources/` directory.
2. Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure madd_ui
ensure madd_graverobbery
```

3. Restart your server.

## Items

Ensure you have a **shovel** item in your inventory (configurable in `sh_config.lua`).

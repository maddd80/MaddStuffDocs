# Installation

## Requirements

- **jo_libs**: Required for 3D sound management and framework integration.
- **madd_ui**: For interaction and notifications.

## Steps

1. Extract `madd_phonograph` into your `resources/` directory.
2. Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure madd_ui
ensure madd_phonograph
```

3. Restart your server.

## Items

You can configure items for the phonograph and records in `sh_config.lua`.
- `phonograph`: Portable item to place.
- `phonograph_record`: Item required to play specific songs.

# Installation

## Steps

1. Extract `madd_ui` into your `resources/` directory.
2. Add the following to your `server.cfg`:

```text
ensure madd_ui
```

3. Restart your server.

## Integration

To use Madd UI in your own scripts, you don't need to add anything to your `fxmanifest.lua`. Simply call the exports as shown in the [API Documentation](/scripts/ui/api).

## Performance

Madd UI is built with **Vue 3** and **Vite**, ensuring it is highly optimized. It runs at **0.00ms** on the client while idle.

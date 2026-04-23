# Installation

## Requirements

- **jo_libs**: Framework logic.
- **madd_ui**: For the betting interface.

## Steps

1. Extract `madd_roulette` into your `resources/` folder.
2. Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure madd_ui
ensure madd_roulette
```

3. Restart your server.

## Troubleshooting

### Wheel not spinning?
- Ensure `jo_libs` is updated.
- Check for errors in the F8 console.

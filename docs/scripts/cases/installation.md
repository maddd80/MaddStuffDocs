# Installation

Follow these steps to install Madd Cases on your RedM server.

## Requirements

Ensure you have the following resources installed and started before `madd_cases`:

- **jo_libs**: Required for framework integration and NUI management.
- **madd_ui**: Required for notifications and UI components.
- **oxmysql**: Required for database operations.

## Steps

1. **Extract Resource**: Extract the `madd_cases` folder into your server's `resources/` directory.
2. **Database Setup**: Import the `items.sql` file provided in the resource folder into your server's database.
3. **Configure**: Open `shared/sh_config.lua` and adjust the settings to your liking (e.g., framework, webhooks, rewards).
4. **Permissions**: If you are using administrative commands, ensure your group has the necessary ACE permissions.
5. **Start Resource**: Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure madd_ui
ensure madd_cases
```

## Database Information

The `items.sql` file ensures that the items awarded by the cases exist in your database. If you already have these items, you can skip this step or merge the data carefully.

## Troubleshooting

### UI not loading?
- Ensure `jo_libs` is updated to the latest version.
- Check if the `ui_page` in `fxmanifest.lua` is pointing correctly to `nui://jo_libs/nui/index.html`.

### Case doesn't open?
- Verify you have enough currency/items as defined in the case price.
- Check the server console for any SQL errors related to item distribution.

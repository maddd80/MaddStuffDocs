# Installation

## Requirements

- **jo_libs**: Framework abstraction.
- **oxmysql**: For database persistence.
- **madd_ui**: For notifications.

## Steps

1. Extract `madd_details` into your `resources/` folder.
2. Import `madd_details.sql` into your database.
3. Add the following to your `server.cfg`:

```text
ensure jo_libs
ensure oxmysql
ensure madd_ui
ensure madd_details
```

4. Restart your server.

## Usage

- Use `/detail` to start creating a new detail at your location.
- Use `/condition` to add a temporary condition.

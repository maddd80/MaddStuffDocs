# Installation Guide

Follow these steps to install the Madd Racing system on your RedM server.

## Prerequisites

Before installing `madd_racing`, ensure you have the following resources installed and running on your server:

- **jo_libs**: Utility bridge required for core functionality.
- **madd_ui**: Required for notifications and UI elements.
- **oxmysql**: Required for database interactions.

## Installation Steps

1. **Download the Resource**: Extract the `madd_racing` folder into your server's `resources` directory.
2. **Database Setup**: The system requires database tables to store track data and leaderboards. 
   - *Note: Please ensure you run the `madd_racing.sql` file that comes with the resource to create the necessary tables.*
3. **Configure the Resource**: Open `shared/sh_config.lua` to adjust the settings to your server's needs (see the [Configuration Guide](configuration.md) for details).
4. **Start the Resource**: Add `ensure madd_racing` to your `server.cfg` file. Ensure it is started *after* its dependencies (`oxmysql`, `jo_libs`, and `madd_ui`).

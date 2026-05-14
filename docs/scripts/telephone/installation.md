# Installation Guide

Follow these steps to install the Madd Telephone system on your RedM server.

## Prerequisites

Before installing `madd_telephone`, ensure you have the following resources installed and running on your server:

- **jo_libs**: Utility bridge required for core functionality.
- **oxmysql**: Required for database interactions (storing phone numbers and contacts).
- **xsound**: Required for realistic mechanical ringing audio.
- **Voice System**: Either `mumble-voip` or `pma-voice` for call voice routing.

## Installation Steps

1. **Download the Resource**: Extract the `madd_telephone` folder into your server's `resources` directory.
2. **Database Setup**: The system requires database tables to store player phone numbers and contacts. 
   - *Note: Please ensure you run the provided `.sql` file that comes with the resource to create the necessary tables.*
3. **Configure the Resource**: Open `shared/sh_config.lua` to adjust the settings to your server's needs (see the [Configuration Guide](configuration.md) for details).
4. **Add the Item**: Ensure that the phone item (default: `phone`) is added to your server's inventory database.
5. **Start the Resource**: Add `ensure madd_telephone` to your `server.cfg` file. Ensure it is started *after* its dependencies (`oxmysql`, `jo_libs`, `xsound`, and your voice script).

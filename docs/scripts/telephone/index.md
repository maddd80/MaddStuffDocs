Documentation related to the madd_telephone script.

:::: tabs
::: tab PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/b0vymPqLIhk" title="Telephone System" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::
::: tab BUY
[Buy it on the shop](https://www.maddstuffs.com/package/telephone-system)
:::
::::

Madd Telephone is a production-grade communication system for RedM. It features a functional rotary dialer, **Public** world phone booths, and **Personal** player-owned telephones.

## Key Features

### 1. Rotary Dialer UI
The script features a custom-built NUI with a functional rotary dial. Players must click and drag (or interact) with the holes on the dial to input numbers, providing a high level of immersion for the era.

### 2. Public Phones (Booths)
Permanent phones can be placed anywhere in the world via the config.
- **Pre-defined Numbers**: Each public phone has a fixed phone number.
- **Shared Access**: Anyone can use a public phone.
- **Visuals**: Supports spawning custom props (like wall phones) at the coordinates.

### 3. Personal Telephones
Players can place a phone from inventory item (default: `phone`).
- **Use**: Use the item to place your personal communication device.
- **Unique Numbers**: Every personal phone is assigned a unique number.
- **Sync**: Call states are synced for all players.

### 4. Speaker Mode
During a call, the user can toggle **Speaker Mode**.
- Nearby players within the `SpeakerRadius` (default: 3.0m) can hear both sides of the conversation.
- Ideal for group roleplay and eavesdropping.

### 5. Voice & Sound Integration
- **Voice**: Supports `mumble-voip`, `pma-voice`, and others. It automatically moves players into temporary call channels.
- **Audio**: Uses `xsound` to play realistic mechanical ringing at the phone's location.

## Getting Started

To get started with the telephone system, please refer to the [Installation Guide](installation.md) for detailed setup instructions.

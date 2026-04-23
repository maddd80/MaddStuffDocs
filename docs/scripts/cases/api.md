# API & Exports

Madd Cases is designed to be self-contained but can be interacted with via events.

## Server Events

### Open Case
`TriggerServerEvent('madd_cases:openCase', caseId)`
- `caseId`: (String) The ID of the case defined in `Config.Cases`.
- **Note**: This checks for currency/items and grants rewards automatically based on the config.

## Client Events

### Play Roll Animation
`TriggerEvent('madd_cases:startRoll', caseId, winnerItem)`
- Manually triggers the UI animation for a specific case and winning item.

## Exports

*(Currently focused on internal logic, exports may be added in future updates)*

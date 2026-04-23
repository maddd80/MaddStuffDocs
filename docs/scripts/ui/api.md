# API & Exports

Madd UI provides a wide range of exports for notifications, minigames, and dialogue systems.

## 🔔 Notifications

### Standard Notifications
```lua
exports['madd_ui']:ShortNotificationText(text, position) -- 1000 ms
exports['madd_ui']:NotificationText(text, position)      -- 2500 ms
exports['madd_ui']:LongNotificationText(text, position)       -- 5000 ms
exports['madd_ui']:CustomNotificationText(text, duration, position)
```

**Positions**: `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right`.

### Prompt Notifications (RDR2 Style)
Display key prompts inline with text.
```lua
exports['madd_ui']:PromptNotification({
    text = "Press ~KEY_E~ to loot or ~KEY_F~ to leave",
    keys = {
        { key = "KEY_E", action = "loot" },
        { key = "KEY_F", action = "leave" }
    },
    duration = 8000,
    position = "center"
}, function(action)
    if action == "loot" then -- ...
end)
```

## 📊 Progress Bars

### Time-Based
```lua
exports['madd_ui']:Progress({
    name = "repairing",
    duration = 7000,
    canCancel = true,
    controlDisables = { disableMovement = true }
}, function(cancelled)
    if not cancelled then -- Success
end)
```

### Skill-Based (Moving Bar)
```lua
exports['madd_ui']:ProgressBarMinigame({
    name = "lock_attempt",
    duration = 6000,
    difficulty = "hard" -- "easy", "normal", "hard"
}, function(success)
    if success then -- ...
end)
```

## 🔐 Minigames

### Safecracking
```lua
exports['madd_ui']:SafecrackMinigame({
    name = "safe_open"
}, function(success)
    if success then -- ...
end)
```

### Lockpicking
```lua
-- difficulty: 1=EASY, 2=NORMAL, 3=HARD, 4=MASTER
local success = exports['madd_ui']:startLockpickManual(difficulty, forceAllActive)
```

## 💬 Dialogue System

Create cinematic NPC conversations.

```lua
exports['madd_ui']:createDialogue({
    label = "Mr. Thomas",
    coords = vector3(142.1, 794.1, 195.8),
    pedModel = "ig_mrk",
    accent = "#8e1a1a",
    [1] = {
        text = "Hello, seeker. Are you looking for work?",
        options = {
            [1] = { 
                title = "Yes, show me.", 
                action = function() exports['madd_ui']:updateDialoguePage(2) end 
            },
            [2] = { 
                title = "No thanks.", 
                action = function() exports['madd_ui']:closeDialoguePage() end 
            }
        }
    },
    [2] = { -- Page 2... }
})
```

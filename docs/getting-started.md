# Getting Started

## Introduction

MaddStuff resources are modular, performance-focused RedM scripts built for immersive roleplay servers.  
Each resource is standalone and can be installed independently.

This documentation provides installation guides, configuration references, and API documentation for all official MaddStuff scripts.

---

## Requirements

Before installing any MaddStuff resource, ensure your server meets the following requirements:

- Active RedM server
- Latest recommended server artifacts
- Required framework (if applicable)
- Required dependencies (listed in each script section)
- MariaDB or MySQL (if the script uses database storage)

---

## Basic Installation Flow

All MaddStuff scripts follow the same installation pattern:

1. Download the resource.
2. Place the resource folder inside your `resources/` directory.
3. Add the resource name to your `server.cfg`.
4. Configure settings inside `config.lua`.
5. Restart your server.

Detailed configuration instructions are available in each script’s documentation section.

---

## Folder Structure Overview

A typical MaddStuff resource is structured as follows:

```
madd_scriptname/
│
├─ client/
├─ server/
├─ shared/
├─ config.lua
└─ fxmanifest.lua
```

- `client/` – Client-side logic  
- `server/` – Server-side logic  
- `shared/` – Shared utilities and configuration  
- `config.lua` – Script configuration  
- `fxmanifest.lua` – Resource manifest  

This structure ensures modularity, clarity, and maintainability.

---

## Next Steps

Navigate to the specific script you are installing under the **Scripts** section and follow its detailed installation and configuration guide.
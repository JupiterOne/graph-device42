# v0.6.0 (Wed May 24 2023)

#### 🚀 Enhancement

- INT-8401: fixing deprecated setOutPut and conforming to int-template. [#13](https://github.com/JupiterOne/graph-device42/pull/13) ([@sl45082](https://github.com/sl45082))

#### 🐛 Bug Fix

- Update integration-deployment.yml [#11](https://github.com/JupiterOne/graph-device42/pull/11) ([@Nick-NCSU](https://github.com/Nick-NCSU))

#### Authors: 2

- bob bisantz ([@sl45082](https://github.com/sl45082))
- Nick Thompson ([@Nick-NCSU](https://github.com/Nick-NCSU))

---

### 0.5.0 - 2023-04-27

- Add `switch` property to `device42_device`

### 0.4.0 - 2023-03-28

- Updated client to always throw `IntegrationError`

### 0.3.0 - 2023-03-27

- throw an `IntegrationError` from the client instead of generic error.

### 0.2.0 - 2023-03-14

- Added `device42_account`, `device42_enduser`, and `device42_device` entities.
- Added `HAS` relationship from `device42_account` to `device42_enduser` and
  `device42_device`.

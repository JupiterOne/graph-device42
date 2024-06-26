# v1.2.1 (Thu Apr 25 2024)

#### 🐛 Bug Fix

- Update Dockerfile [#26](https://github.com/JupiterOne/graph-device42/pull/26) ([@zemberdotnet](https://github.com/zemberdotnet))

#### Authors: 1

- Matthew Zember ([@zemberdotnet](https://github.com/zemberdotnet))

---

# v1.2.0 (Fri Mar 29 2024)

#### 🚀 Enhancement

- Release 1.2.0 [#25](https://github.com/JupiterOne/graph-device42/pull/25) ([@VDubber](https://github.com/VDubber))

#### 🐛 Bug Fix

- added raw data field to properties [#24](https://github.com/JupiterOne/graph-device42/pull/24) ([@SeaBlooms](https://github.com/SeaBlooms))

#### Authors: 2

- Colin Blumer ([@SeaBlooms](https://github.com/SeaBlooms))
- Samuel Poulton ([@VDubber](https://github.com/VDubber))

---

# v1.2.0 (Thu Mar 28 2024)

- Added new raw data property for 'customer' to entity properties for device42_device

# v1.1.5 (Thu Jan 04 2024)

#### 🐛 Bug Fix

- Added integration deployment [#23](https://github.com/JupiterOne/graph-device42/pull/23) (gonzaloavalosribas@Gonzalos-MacBook-Pro.local)

#### Authors: 1

- Gonzalo Avalos Ribas ([@Gonzalo-Avalos-Ribas](https://github.com/Gonzalo-Avalos-Ribas))

---

# v1.1.3 (Thu Jan 04 2024)

#### 🐛 Bug Fix

- Int 9963 lower device limit [#22](https://github.com/JupiterOne/graph-device42/pull/22) (gonzaloavalosribas@Gonzalos-MacBook-Pro.local)

#### ⚠️ Pushed to `main`

- Apply remove-codeql with multi-gitter [ci skip] ([@electricgull](https://github.com/electricgull))

#### Authors: 2

- Cameron Griffin ([@electricgull](https://github.com/electricgull))
- Gonzalo Avalos Ribas ([@Gonzalo-Avalos-Ribas](https://github.com/Gonzalo-Avalos-Ribas))

---

# v1.1.3 (Wed Dec 13 2023)

#### 🐛 Bug Fix

- Retry calls - Print the error we retry [#21](https://github.com/JupiterOne/graph-device42/pull/21) (gonzaloavalosribas@Gonzalos-MacBook-Pro.local)

#### Authors: 1

- Gonzalo Avalos Ribas ([@Gonzalo-Avalos-Ribas](https://github.com/Gonzalo-Avalos-Ribas))

---

# v1.1.2 (Tue Dec 12 2023)

#### 🐛 Bug Fix

- Increase device42 limit [#20](https://github.com/JupiterOne/graph-device42/pull/20) (gonzaloavalosribas@Gonzalos-MacBook-Pro.local)

#### Authors: 1

- Gonzalo Avalos Ribas ([@Gonzalo-Avalos-Ribas](https://github.com/Gonzalo-Avalos-Ribas))

---

# v0.6.2 (Fri Dec 08 2023)

#### 🐛 Bug Fix

- Add more retries to noresponse errors [#19](https://github.com/JupiterOne/graph-device42/pull/19) (gonzaloavalosribas@Gonzalos-MacBook-Pro.local)

#### ⚠️ Pushed to `main`

- Fix x-cortex-service-groups where tier-4 was set incorrectly ([@jablonnc](https://github.com/jablonnc))

#### Authors: 2

- Gonzalo Avalos Ribas ([@Gonzalo-Avalos-Ribas](https://github.com/Gonzalo-Avalos-Ribas))
- Noah Jablonski ([@jablonnc](https://github.com/jablonnc))

---

# v0.7.0 (Tue Aug 29 2023)

#### 🚀 Enhancement

- update config fields to allow control over ssl [#17](https://github.com/JupiterOne/graph-device42/pull/17) ([@zemberdotnet](https://github.com/zemberdotnet))

#### Authors: 1

- Matthew Zember ([@zemberdotnet](https://github.com/zemberdotnet))

---

# v1.0.0 (Tue Aug 22 2023)

#### 💥 Breaking Change

- Update to Node 18 [#16](https://github.com/JupiterOne/graph-device42/pull/16) ([@zemberdotnet](https://github.com/zemberdotnet))

#### 🐛 Bug Fix

- Adding package and publish workflow [#15](https://github.com/JupiterOne/graph-device42/pull/15) ([@jmountifield](https://github.com/jmountifield))

#### Authors: 2

- James Mountifield ([@jmountifield](https://github.com/jmountifield))
- Matthew Zember ([@zemberdotnet](https://github.com/zemberdotnet))

---

# v0.6.1 (Mon Jun 12 2023)

#### 🐛 Bug Fix

- DEVICE-113 - Add lastSeenOn to Devices [#14](https://github.com/JupiterOne/graph-device42/pull/14) ([@mknoedel](https://github.com/mknoedel))

#### Authors: 1

- Michael Knoedel ([@mknoedel](https://github.com/mknoedel))

---

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

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### 0.5.0 - 2023-04-19

- Add `switch` property to `device42_device`

### 0.4.0 - 2023-03-28

- Updated client to always throw `IntegrationError`

### 0.3.0 - 2023-03-27

- throw an `IntegrationError` from the client instead of generic error.

### 0.2.0 - 2023-03-14

- Added `device42_account`, `device42_enduser`, and `device42_device` entities.
- Added `HAS` relationship from `device42_account` to `device42_enduser` and
  `device42_device`.

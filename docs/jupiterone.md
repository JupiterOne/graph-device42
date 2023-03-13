# Device42

## Integration Benefits

- Visualize Device42 users and devices in the JupiterOne graph.
- Monitor changes to devices using JupiterOne alerts.

## How it Works

- JupiterOne periodically devices and users to update the graph.
- Write JupiterOne queries to review and monitor updates to the graph, or
  leverage existing queries.
- Configure alerts to take action when JupiterOne graph changes, or leverage
  existing alerts.

## Prerequisites

- A Device42 instance and permissions to create new users.
- You must have permission in JupiterOne to install new integrations.

## Support

If you need help with this integration, contact
[JupiterOne Support](https://support.jupiterone.io).

## How to Use This Integration

### In Device42

1. In the Device42 Console, navigate to Tools > Administrators.
2. Click **Add Local Admin** in the top right corner.
3. Create a username and password for the new user. Save these for use in the
   integration configuration.
4. Click **Save** in the bottom right corner.
5. On the next screen under **Permissions**, make sure the user is Active. It's
   recommended to disable **Staff status** and **Superuser status** to ensure
   the user can only access the API.
6. Under Groups add **System Generated Read Only**.
7. Click the **Save** button in the bottom right corner.

### In JupiterOne

1. From the top navigation of the J1 Search homepage, select **Integrations**.
2. Scroll down to **Device42** and click it.
3. Click **Add Configuration** and configure the following settings:

- Enter the account name by which you want to identify this Device42 account in
  JupiterOne. Select **Tag with Account Name** to store this value in
  `tag.AccountName` of the ingested assets.
- Enter a description to help your team identify the integration.
- Select a polling interval that is sufficient for your monitoring requirements.
  You can leave this as `DISABLED` and manually execute the integration.
- Enter the **username** and **password** for the Device42 account you want to
  configure.
- Enter the hostname for your Device42 instance.

4. Click **Create Configuration** after you have entered all the values.

## How to Uninstall

1. From the top navigation of the J1 Search homepage, select **Integrations**.
2. Scroll down to **Device42** and click it.
3. Identify the integration instance you want to delete and click it.
4. Click the **Delete** button to delete the integration.

<!-- {J1_DOCUMENTATION_MARKER_START} -->
<!--
********************************************************************************
NOTE: ALL OF THE FOLLOWING DOCUMENTATION IS GENERATED USING THE
"j1-integration document" COMMAND. DO NOT EDIT BY HAND! PLEASE SEE THE DEVELOPER
DOCUMENTATION FOR USAGE INFORMATION:

https://github.com/JupiterOne/sdk/blob/main/docs/integrations/development.md
********************************************************************************
-->

## Data Model

### Entities

The following entities are created:

| Resources | Entity `_type`     | Entity `_class`  |
| --------- | ------------------ | ---------------- |
| Account   | `device42_account` | `Account`        |
| Device    | `device42_device`  | `Host`, `Device` |
| End Users | `device42_enduser` | `User`           |

### Relationships

The following relationships are created:

| Source Entity `_type` | Relationship `_class` | Target Entity `_type` |
| --------------------- | --------------------- | --------------------- |
| `device42_account`    | **HAS**               | `device42_device`     |
| `device42_account`    | **HAS**               | `device42_enduser`    |

<!--
********************************************************************************
END OF GENERATED DOCUMENTATION AFTER BELOW MARKER
********************************************************************************
-->
<!-- {J1_DOCUMENTATION_MARKER_END} -->

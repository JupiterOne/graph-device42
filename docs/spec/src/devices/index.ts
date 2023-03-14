import { RelationshipClass, StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const deviceSpec: StepSpec<IntegrationConfig>[] = [
  {
    id: 'fetch-devices',
    name: 'Fetch Devices',
    entities: [
      {
        resourceName: 'Device',
        _type: 'device42_device',
        _class: ['Host', 'Device'],
      },
    ],
    relationships: [
      {
        sourceType: 'device42_account',
        targetType: 'device42_device',
        _type: 'device42_account_has_device',
        _class: RelationshipClass.HAS,
      },
    ],
    dependsOn: ['fetch-account'],
    implemented: true,
  },
];

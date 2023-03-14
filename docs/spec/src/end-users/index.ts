import { RelationshipClass, StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const endUserSpec: StepSpec<IntegrationConfig>[] = [
  {
    id: 'fetch-end-users',
    name: 'Fetch End Users',
    entities: [
      {
        resourceName: 'End User',
        _type: 'device42_enduser',
        _class: ['User'],
      },
    ],
    relationships: [
      {
        sourceType: 'device42_account',
        targetType: 'device42_enduser',
        _type: 'device42_account_has_enduser',
        _class: RelationshipClass.HAS,
      },
    ],
    dependsOn: ['fetch-account'],
    implemented: true,
  },
];

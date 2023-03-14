import { StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const accountSpec: StepSpec<IntegrationConfig>[] = [
  {
    id: 'fetch-account',
    name: 'Fetch Account',
    entities: [
      {
        resourceName: 'Account',
        _type: 'device42_account',
        _class: ['Account'],
      },
    ],
    relationships: [],
    dependsOn: [],
    implemented: true,
  },
];

import {
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  END_USERS: 'fetch-end-users',
  DEVICES: 'fetch-devices',
};

export const Entities: Record<'END_USER' | 'DEVICE', StepEntityMetadata> = {
  END_USER: {
    resourceName: 'End Users',
    _type: 'device42_enduser',
    _class: ['User'],
  },
  DEVICE: {
    resourceName: 'Device',
    _type: 'device42_device',
    _class: ['Host', 'Device'],
  },
};

export const Relationships: Record<string, StepRelationshipMetadata> = {};

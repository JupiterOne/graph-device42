import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  END_USERS: 'fetch-end-users',
  DEVICES: 'fetch-devices',
};

export const Entities: Record<
  'ACCOUNT' | 'END_USER' | 'DEVICE',
  StepEntityMetadata
> = {
  ACCOUNT: {
    resourceName: 'Account',
    _type: 'device42_account',
    _class: ['Account'],
  },
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

export const Relationships: Record<
  'ACCOUNT_HAS_USER' | 'ACCOUNT_HAS_DEVICE',
  StepRelationshipMetadata
> = {
  ACCOUNT_HAS_USER: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.END_USER._type,
    _type: 'device42_account_has_enduser',
    _class: RelationshipClass.HAS,
  },
  ACCOUNT_HAS_DEVICE: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.DEVICE._type,
    _type: 'device42_account_has_device',
    _class: RelationshipClass.HAS,
  },
};

export const Keys: Record<'ACCOUNT_ENTITY', string> = {
  ACCOUNT_ENTITY: 'ACCOUNT_ENTITY',
};

import {
  createIntegrationEntity,
  IntegrationInstance,
} from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';

export function createAccountEntity(instance: IntegrationInstance) {
  return createIntegrationEntity({
    entityData: {
      source: {},
      assign: {
        _key: `device42_account:${instance.id}`,
        _class: Entities.ACCOUNT._class,
        _type: Entities.ACCOUNT._type,
        displayName: 'Device42 Account',
      },
    },
  });
}

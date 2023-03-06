import { createIntegrationEntity } from '@jupiterone/integration-sdk-core';
import { Device42EndUser } from '../../types';
import { Entities } from '../constants';

export function createEndUserEntity(endUser: Device42EndUser) {
  return createIntegrationEntity({
    entityData: {
      source: endUser,
      assign: {
        _key: `device42_enduser:${endUser.id}`,
        _class: Entities.END_USER._class,
        _type: Entities.END_USER._type,
        id: endUser.id.toString(),
        email: endUser.email || undefined,
        contact: endUser.contact || undefined,
        domain: endUser.domain || undefined,
        name: endUser.name,
        activeDirectoryUsername: endUser.adusername || undefined,
        username: endUser.adusername || undefined,
        notes: undefined,
      },
    },
  });
}

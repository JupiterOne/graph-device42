import {
  createDirectRelationship,
  Entity,
  IntegrationMissingKeyError,
  IntegrationStep,
  IntegrationStepExecutionContext,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import { Device42Device } from '../../types';
import { Entities, Keys, Relationships, Steps } from '../constants';
import { createDeviceEntity } from './converter';

async function fetchDevices({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const client = createAPIClient(instance.config);
  const accountEntity = await jobState.getData<Entity>(Keys.ACCOUNT_ENTITY);
  if (!accountEntity) {
    throw new IntegrationMissingKeyError(
      'account entity not found in jobState',
    );
  }
  await client.iterateDevices(async (d: Device42Device) => {
    const deviceEntity = await jobState.addEntity(createDeviceEntity(d));
    await jobState.addRelationship(
      createDirectRelationship({
        from: accountEntity,
        to: deviceEntity,
        _class: Relationships.ACCOUNT_HAS_DEVICE._class,
      }),
    );
  });
}

export const devicesSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.DEVICES,
    name: 'Fetch Devices',
    entities: [Entities.DEVICE],
    relationships: [Relationships.ACCOUNT_HAS_DEVICE],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchDevices,
  },
];

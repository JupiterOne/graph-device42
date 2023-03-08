import {
  IntegrationStep,
  IntegrationStepExecutionContext,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import { Entities, Steps } from '../constants';
import { createDeviceEntity } from './converter';

export const devicesSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.DEVICES,
    name: 'Fetch Devices',
    entities: [Entities.DEVICE],
    relationships: [],
    dependsOn: [],
    executionHandler: fetchDevices,
  },
];

async function fetchDevices({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const client = createAPIClient(instance.config);
  await client.iterateDevices(async (d) => {
    await jobState.addEntity(createDeviceEntity(d));
  });
}

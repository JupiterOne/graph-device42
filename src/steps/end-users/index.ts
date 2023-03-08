import {
  IntegrationStep,
  IntegrationStepExecutionContext,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import { Entities, Steps } from '../constants';
import { createEndUserEntity } from './converters';

export const endUsersSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.END_USERS,
    name: 'Fetch End Users',
    entities: [Entities.END_USER],
    relationships: [],
    dependsOn: [],
    executionHandler: fetchEndUsers,
  },
];

async function fetchEndUsers({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const client = createAPIClient(instance.config);
  await client.iterateEndUsers(async (e) => {
    await jobState.addEntity(createEndUserEntity(e));
  });
}

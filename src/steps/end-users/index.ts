import {
  createDirectRelationship,
  Entity,
  IntegrationMissingKeyError,
  IntegrationStep,
  IntegrationStepExecutionContext,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import { Entities, Keys, Relationships, Steps } from '../constants';
import { createEndUserEntity } from './converters';

export const endUsersSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.END_USERS,
    name: 'Fetch End Users',
    entities: [Entities.END_USER],
    relationships: [Relationships.ACCOUNT_HAS_USER],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchEndUsers,
  },
];

async function fetchEndUsers({
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
  await client.iterateEndUsers(async (e) => {
    const userEntity = await jobState.addEntity(createEndUserEntity(e));
    await jobState.addRelationship(
      createDirectRelationship({
        from: accountEntity,
        to: userEntity,
        _class: Relationships.ACCOUNT_HAS_USER._class,
      }),
    );
  });
}

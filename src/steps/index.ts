import { accountSteps } from './account';
import { devicesSteps } from './devices';
import { endUsersSteps } from './end-users';

const integrationSteps = [...accountSteps, ...endUsersSteps, ...devicesSteps];

export { integrationSteps };

import { devicesSteps } from './devices';
import { endUsersSteps } from './end-users';

const integrationSteps = [...endUsersSteps, ...devicesSteps];

export { integrationSteps };

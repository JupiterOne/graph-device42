import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

// pagination takes some time for this test
jest.setTimeout(100_000);
// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test('fetch-devices', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-devices',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.DEVICES);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult.collectedEntities.length).toBeGreaterThan(0);
});

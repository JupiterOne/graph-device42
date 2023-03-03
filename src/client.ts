import { request } from 'gaxios';
import { IntegrationConfig } from './config';
import {
  Device42Device,
  Device42DeviceResponse,
  Device42EndUser,
} from './types';

export type ResourceIteratee<T> = (each: T) => Promise<void> | void;

/**
 * An APIClient maintains authentication state and provides an interface to
 * third party data APIs.
 *
 * It is recommended that integrations wrap provider data APIs to provide a
 * place to handle error responses and implement common patterns for iterating
 * resources.
 */
export class APIClient {
  constructor(readonly config: IntegrationConfig) {}

  public verifyAuthentication() {
    return;
  }

  public async iterateEndUsers(iteratee: ResourceIteratee<Device42EndUser>) {
    const auth = Buffer.from(
      `${this.config.username}:${this.config.password}`,
    ).toString('base64');

    let finished = false;
    let offset = 0;
    do {
      const response = await request<any>({
        url: '/api/1.0/endusers/',
        baseUrl: this.config.baseUrl,
        params: {
          offset,
          limit: 100,
        },
        headers: {
          Authorization: `Basic ${auth}`,
        },
        method: 'GET',
      });

      for (const v of response.data.values) {
        await iteratee(v);
      }
      if (response.data.values.length === 0) {
        finished = true;
      }

      offset += response.data.values.length;
    } while (!finished);
  }

  public async iterateDevices(iteratee: ResourceIteratee<Device42Device>) {
    const auth = Buffer.from(
      `${this.config.username}:${this.config.password}`,
    ).toString('base64');

    const limit = 500;
    let total = 0;
    let offset = 0;
    do {
      const response = await request<Device42DeviceResponse>({
        url: '/api/1.0/devices/all/',
        baseUrl: this.config.baseUrl,
        headers: {
          Authorization: `Basic ${auth}`,
        },
        params: {
          limit: limit,
          offset: offset,
          blankasnull: 'yes',
        },
        method: 'GET',
      });

      for (const v of response.data.Devices) {
        await iteratee(v);
      }
      offset += response.data.Devices.length;
      total = response.data.total_count;
    } while (offset < total);
  }
}

export function createAPIClient(config: IntegrationConfig): APIClient {
  return new APIClient(config);
}

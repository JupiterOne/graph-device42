import { GaxiosOptions, request } from 'gaxios';
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

  public async verifyAuthentication() {
    return Promise.resolve();
  }

  public async iterateEndUsers(iteratee: ResourceIteratee<Device42EndUser>) {
    let finished = false;
    let offset = 0;
    do {
      const response = await this.makeRequest<{ values: Device42EndUser[] }>({
        url: '/api/1.0/endusers/',
        params: {
          offset,
          limit: 100,
        },
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
    const limit = 500;
    let total = 0;
    let offset = 0;
    do {
      const response = await this.makeRequest<Device42DeviceResponse>({
        url: '/api/1.0/devices/all/',
        params: {
          limit: limit,
          offset: offset,
          blankasnull: 'yes',
        },
      });

      for (const v of response.data.Devices) {
        await iteratee(v);
      }
      offset += response.data.Devices.length;
      total = response.data.total_count;
    } while (offset < total);
  }

  private async makeRequest<T>(
    opts: Pick<GaxiosOptions, 'url' | 'params' | 'method' | 'body'>,
  ) {
    return await request<T>({
      url: opts.url,
      baseUrl: this.config.baseUrl,
      params: opts.params,
      retryConfig: {
        retry: 3,
        retryDelay: 3000,
      },
      method: opts.method,
      body: opts.body,
    });
  }
}

export function createAPIClient(config: IntegrationConfig): APIClient {
  return new APIClient(config);
}

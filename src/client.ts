import {
  IntegrationError,
  IntegrationLogger,
  IntegrationProviderAPIError,
  IntegrationProviderAuthenticationError,
  IntegrationProviderAuthorizationError,
} from '@jupiterone/integration-sdk-core';
import { GaxiosError, GaxiosOptions, request } from 'gaxios';
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
    await this.makeRequest({
      url: '/api/1.0/endusers/',
    });
  }

  public async iterateEndUsers(iteratee: ResourceIteratee<Device42EndUser>) {
    let finished = false;
    let offset = 0;
    let lastSeenUserId: number | undefined = undefined;
    do {
      const response = await this.makeRequest<{ values: Device42EndUser[] }>({
        url: '/api/1.0/endusers/',
        params: {
          offset,
          limit: 100,
        },
      });

      if (
        response.data.values.length === 0 ||
        response.data.values[response.data.values.length - 1].id ===
          lastSeenUserId
      ) {
        finished = true;
      } else {
        for (const v of response.data.values) {
          await iteratee(v);
        }
        lastSeenUserId =
          response.data.values[response.data.values.length - 1].id;
        offset += response.data.values.length;
      }
    } while (!finished);
  }

  public async iterateDevices(
    iteratee: ResourceIteratee<Device42Device>,
    logger: IntegrationLogger,
  ) {
    const limit = 1;
    let total = 0;
    let offset = 0;
    do {
      const response = await this.makeRequest<Device42DeviceResponse>(
        {
          url: '/api/1.0/devices/all/',
          params: {
            limit: limit,
            offset: offset,
            blankasnull: 'yes',
          },
        },
        logger,
      );

      for (const v of response.data.Devices) {
        await iteratee(v);
      }
      offset += response.data.Devices.length;
      total = response.data.total_count;
    } while (offset < total);
  }

  private async makeRequest<T>(
    opts: Pick<GaxiosOptions, 'url' | 'params' | 'method' | 'body'>,
    logger?: IntegrationLogger,
  ) {
    const auth = Buffer.from(
      `${this.config.device42Username}:${this.config.password}`,
    ).toString('base64');
    try {
      return await request<T>({
        url: opts.url,
        baseUrl: this.config.baseUrl,
        params: opts.params,
        headers: {
          Authorization: `Basic ${auth}`,
        },
        retryConfig: {
          retry: 3,
          retryDelay: 3000,
          noResponseRetries: 5, //ETIMEDOUT, ENOTFOUND, ECONNRESET
          onRetryAttempt: (err) => {
            if (logger) {
              logger.info({ err }, 'Retrying request');
            }
          },
        },
        retry: true,
        method: opts.method,
        body: opts.body,
      });
    } catch (err) {
      if (err instanceof GaxiosError) {
        const status = err.response?.status ?? 404;
        const statusText = err.response?.statusText ?? 'No Response Received';
        const endpoint =
          this.config.baseUrl + (err.response?.config?.url ?? '');
        const msg = err.response?.data?.msg;
        if (msg === "You don't have permissions to access this resource.") {
          throw new IntegrationProviderAuthenticationError({
            status: 403,
            statusText: 'Insufficient permissions',
            endpoint,
          });
        }

        if (err.response?.status === 401) {
          throw new IntegrationProviderAuthenticationError({
            status,
            statusText,
            endpoint,
          });
        } else if (err.response?.status == 403) {
          throw new IntegrationProviderAuthorizationError({
            status,
            statusText,
            endpoint,
          });
        } else {
          throw new IntegrationProviderAPIError({
            status,
            statusText,
            endpoint,
          });
        }
      } else {
        throw new IntegrationError({
          message: err.message,
          code: (err as Error).name,
        });
      }
    }
  }
}

export function createAPIClient(config: IntegrationConfig): APIClient {
  return new APIClient(config);
}

import {
  createIntegrationEntity,
  parseTimePropertyValue,
} from '@jupiterone/integration-sdk-core';
import { Device42Device } from '../../types';
import { Entities } from '../constants';

// https://api.device42.com/#Devices_getDevicesAll
export function createDeviceEntity(device: Device42Device) {
  /**
   * The agent_last_checkin_date refers to the last time the Device42 agent
   * checked in with the server, whereas the last_updated timestamp indicates
   * the last time when Device42 last updated the device's information through
   * a scan or discovery process. Because not all Device42 devices are going
   * to have an agent installed, agent_last_checkin_date will not always
   * be available, whereas updated_on will. Therefore, we will prefer the
   * agent_last_checkin_date, but falling back to the last_updated is also
   * acceptable.
   */
  const lastSeenOn = parseTimePropertyValue(
    device.agent_last_checkin_date ?? device.last_updated,
  );
  return createIntegrationEntity({
    entityData: {
      source: device,
      assign: {
        _key: `device42_device:${device.id}`,
        _type: Entities.DEVICE._type,
        _class: Entities.DEVICE._class,
        id: device.id.toString(),
        name: device.name,
        type: device.type,
        serial: device.serial_no || undefined,
        ipAddress: device.ip_addresses.map((o) => o.ip),
        macAddress: device.mac_addresses.map((o) => o.mac),
        active: device.in_service,
        inService: device.in_service,
        uuid: device.uuid || undefined,
        osName: device.os,
        osVersion: device.osver,
        serviceLevel: device.service_level,
        category: device.type,
        make: device.manufacturer,
        model: device.hw_model,
        deviceId: device.uuid,
        hostname: null,
        switch: device.is_it_switch === 'yes',
        customer: device.customer || undefined,
        lastSeenOn
      },
    },
  });
}

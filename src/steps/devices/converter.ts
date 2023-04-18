import { createIntegrationEntity } from '@jupiterone/integration-sdk-core';
import { Device42Device } from '../../types';
import { Entities } from '../constants';

export function createDeviceEntity(device: Device42Device) {
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
      },
    },
  });
}

export interface Device42EndUser {
  id: number;
  tags: Array<any>;
  email: string;
  custom_fields: Array<any>;
  contact: string;
  adusername: string;
  domain: string;
  location: string;
  name: string;
  notes: string;
}

export interface Device42DeviceResponse {
  offset: number;
  total_count: number;
  limit: number;
  Devices: Device42Device[];
}

export interface Device42Device {
  last_updated: Date;
  orientation: string;
  ip_addresses: {
    macaddress: string;
    subnet_id: number;
    type: string;
    subnet: string;
    label: string;
    ip: string;
  }[];
  serial_no: string;
  hw_depth: string;
  device_id: string;
  service_level: string;
  is_it_blade_host: string;
  hw_size: string;
  id: string;
  custom_fields: any[];
  aliases: any[];
  category: string;
  hdd_details: string;
  uuid: string;
  cpuspeed: string;
  hw_model: string;
  row: string;
  rack_id: string;
  hddcount: string;
  building: string;
  xpos: string;
  device_external_links: any[];
  start_at: string;
  tags: any[];
  hw_model_id: string;
  in_service: string;
  hddsize: string;
  mac_addresses: {
    vlan: string;
    port: string;
    port_name: string;
    mac: string;
  }[];
  hddraid: string;
  nonauthoritativealiases: any[];
  cpucount: string;
  os: string;
  virtual_host_name: string;
  is_it_virtual_host: string;
  is_it_switch: string;
  customer: string;
  hddraid_type: string;
  ucs_manager: string;
  name: string;
  room: string;
  type: string;
  notes: string;
  ram: string;
  asset_no: string;
  manufacturer: string;
  osver: string;
  device_purchase_line_items: any[];
  cpucore: string;
  where: string;
  rack: string;
  agent_version: string;
  agent_last_checkin_date: string;
}

export interface Ride {
  id: number;
  name: string;
  entity_type: string;
  park_id: string;
  external_id: string;
  status: string;
  last_updated: number;
}

export interface ApiResponse {
  id: string;
  name: string;
  entity_type: string;
  timezone: string;
  live_data: Ride[];
}

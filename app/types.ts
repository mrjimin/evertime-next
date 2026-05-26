export interface Ride {
  id: number;
  name: string;
  is_open: boolean;
  wait_time: number;
  last_updated: string;
}

export interface ApiResponse {
  lands: never[];
  rides: Ride[];
}

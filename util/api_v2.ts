import { Ride, ApiResponse } from '@/app/types_v2';

const INTERNAL_API_URL = '/api/v2';

export async function fetchAttractions(): Promise<Ride[]> {
  try {
    const res = await fetch(INTERNAL_API_URL);
    if (!res.ok) new Error('데이터 로드 실패');
    const data: ApiResponse = await res.json();
    return data.live_data || [];
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
}

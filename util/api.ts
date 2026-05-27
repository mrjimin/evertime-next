import { Ride, ApiResponse } from '@/app/types';

const INTERNAL_API_URL = '/api/v1';

export async function fetchAttractions(): Promise<Ride[]> {
  try {
    const res = await fetch(INTERNAL_API_URL);
    if (!res.ok) new Error('데이터 로드 실패');
    const data: ApiResponse = await res.json();
    return data.rides || [];
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
}

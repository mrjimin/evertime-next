import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://api.themeparks.wiki/v1/entity/b4dd937f-a79d-4b82-922f-e8ab0fbf5b5b/live', {
      method: 'GET',
      cache: 'no-store'
    });

    if (!res.ok) return NextResponse.json({ error: '오픈 API 실패' }, { status: 500 });

    const rawData = await res.json();

    const formattedLiveData = (rawData.liveData || []).map((item: any) => ({
      id: item.id,
      name: item.name,
      entity_type: item.entityType,
      park_id: item.parkId,
      external_id: item.externalId,
      status: item.status,
      wait_time: item.queue?.STANDBY?.waitTime ?? 0,
      last_updated: Date.parse(item.lastUpdated),
    }));

    return NextResponse.json({
      id: rawData.id,
      name: rawData.name,
      entity_type: rawData.entityType,
      timezone: rawData.timezone,
      live_data: formattedLiveData
    });

  } catch (error) {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
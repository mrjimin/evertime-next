import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://queue-times.com/parks/125/queue_times.json', {
      method: 'GET',
      cache: 'no-store'
    });
    if (!res.ok) return NextResponse.json({ error: '오픈 API 실패' }, { status: 500 });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}

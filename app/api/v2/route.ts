import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://api.themeparks.wiki/v1/entity/b4dd937f-a79d-4b82-922f-e8ab0fbf5b5b/live', {
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

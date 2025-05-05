import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: NextResponse) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  const headerList = await headers();
  console.log(headerList.get('Authorization'));

  return new Response('<h1>profile API data</h1>', { headers: { 'Content-Type': 'text/html' } });
}

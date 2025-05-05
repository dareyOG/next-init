import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: NextResponse) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  const headerList = await headers();
  console.log(headerList.get('Authorization'));

  const theme = request.cookies.get('theme');
  console.log(theme);

  const cookie = await cookies();
  cookie.set('resultPerPage', '20');
  const cookieResult = cookie.get('resultPerPage');
  console.log(cookieResult);

  return new Response('<h1>profile API data</h1>', {
    headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' }
  });
}

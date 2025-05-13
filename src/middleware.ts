import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  /*     // approach1- using custom config matcher
  //   return NextResponse.redirect(new URL('/', request.url)); */
  /*   // approach2- using conditional statement
  const { pathname } = request.nextUrl; // get the pathname from the request

  if (pathname === '/profile') {
    const destinatedURL = new URL('/darey', request.nextUrl);

    return NextResponse.redirect(destinatedURL);
  } */

  // haandle user preference for themes
  const response = NextResponse.next();
  const theme = request.cookies.get('theme');

  if (!theme) request.cookies.set('theme', 'dark');

  //   headers
  response.headers.set('custom-header', 'custom-value');

  return response;
}

// approach1- using custom config matcher
// export const config = {
//   matcher: '/profile'
// };

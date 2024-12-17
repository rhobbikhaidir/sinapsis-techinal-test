import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const { pathname } = request.nextUrl;
  console.log(pathname, '***pathName')

  console.log(token, '****token')

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (token && pathname !== "/login") {
    console.log(request.url, 'testing');
  }
}
export const config = {
  matcher: ['/', '/login'],
};
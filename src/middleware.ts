import axios from "axios";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const { pathname } = request.nextUrl;
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (token && pathname !== "/login") {
    try {
      const res = await axios.get(
        `https://gorest.co.in/public/v2/users?access-token=${token?.value}`
      );

      console.log(res, "******response testing");
    } catch (err) {
      console.log(err);
    }

    // .then((res) => {
    //   if (res.status === 401) {
    //     // return NextResponse.redirect(new URL('/login', request.url));
    //   }
    //   console.log(res, "ini status res");
    // })
    // .catch((err) => {
    //   console.log(err, 'ini error nya');
    //   // return NextResponse.redirect(new URL('/login', request.url));
    // });

    // if (res?.status === 401) {
    //   cookieStore.delete("token");
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }
  }
}
export const config = {
  matcher: ["/", "/login"],
};

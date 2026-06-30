import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getSessionCookie } from "better-auth/cookies";
export default async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    const originalUrl = request.nextUrl.pathname;
    const loginUrl = new URL(
      `/login?callbackUrl=${encodeURIComponent(originalUrl)}`,
      request.url,
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

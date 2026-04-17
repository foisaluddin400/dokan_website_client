import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const PROTECTED_ROUTES: Record<string, string[]> = {
  "/protected/user": ["user", "admin"],
  "/protected/seller": ["seller", "admin"],
};

const AUTH_ROUTES = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  const token = request.cookies.get("token")?.value;

 
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }


  const isProtectedRoute = Object.keys(PROTECTED_ROUTES).some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname); 
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/protected/:path*",
    "/login",
    "/register",
    
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
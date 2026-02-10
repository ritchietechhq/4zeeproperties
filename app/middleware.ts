import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value
  const role = req.cookies.get("auth-role")?.value?.toUpperCase()
  const { pathname } = req.nextUrl

  // Public paths – no auth required
  if (
    pathname.startsWith("/auth") ||
    pathname === "/" ||
    pathname.includes(".") || // static files
    pathname.startsWith("/api")
  ) {
    return NextResponse.next()
  }

  // No token → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  // Role-based route protection
  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }
  if (pathname.startsWith("/realtor") && role !== "REALTOR" && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }
  if (pathname.startsWith("/client") && role !== "CLIENT" && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

/**
 * GET /api/verify?token=…
 *
 * Proxies the email verification token to the backend, then redirects the user
 * to /login with an appropriate query param based on the result.
 *
 * This route exists so that the verification link in emails can point to the
 * frontend (e.g. https://sirmx.com/api/verify?token=…) rather than directly to
 * the backend API server.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/login?error=missing_token', request.url));
  }

  try {
    // Forward to the Express backend — it handles DB lookup and redirects
    const backendRes = await fetch(`${API_URL}/api/auth/verify?token=${token}`, {
      redirect: 'manual', // don't auto-follow — we want to control the redirect
    });

    // The backend sends a 302; extract the Location header
    const location = backendRes.headers.get('location');

    if (location) {
      // The backend redirect target is the frontend URL — return it as-is
      return NextResponse.redirect(location);
    }

    // Fallback for non-redirect responses
    if (!backendRes.ok) {
      return NextResponse.redirect(new URL('/login?error=invalid_token', request.url));
    }

    return NextResponse.redirect(new URL('/login?verified=true', request.url));
  } catch {
    return NextResponse.redirect(new URL('/login?error=server_error', request.url));
  }
}

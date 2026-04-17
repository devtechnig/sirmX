import { NextRequest, NextResponse } from 'next/server';

// Priority: Env var > Production URL > Localhost
const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://sirmx.onrender.com';

/**
 * GET /api/verify?token=…
 *
 * Proxies the email verification token to the backend, then redirects the user
 * to the location specified by the backend (usually /verify-pending).
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/login?error=missing_token', request.url));
  }

  try {
    const backendEndpoint = `${API_URL.replace(/\/$/, '')}/api/auth/verify?token=${token}`;
    console.log(`[proxy] Fetching from backend: ${backendEndpoint}`);

    // Forward to the Express backend
    const backendRes = await fetch(backendEndpoint, {
      redirect: 'manual', 
    });

    // The backend sends a 302; extract the Location header
    const location = backendRes.headers.get('location');

    if (location) {
      // Ensure the location is an absolute URL for NextResponse.redirect
      try {
        const absoluteUrl = new URL(location, request.url).toString();
        return NextResponse.redirect(absoluteUrl);
      } catch (e) {
        console.error('[proxy] Invalid redirect location:', location);
        return NextResponse.redirect(new URL('/login?error=invalid_redirect', request.url));
      }
    }

    // Fallback for non-redirect responses
    if (!backendRes.ok) {
      return NextResponse.redirect(new URL('/login?error=invalid_token', request.url));
    }

    return NextResponse.redirect(new URL('/login?verified=true', request.url));
  } catch (error) {
    console.error('[proxy] Verification error:', error);
    return NextResponse.redirect(new URL('/login?error=server_error', request.url));
  }
}

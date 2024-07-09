import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const userCookie = request.cookies.has("login");
	const typeAcessCookie = request.cookies.has("typeAcess");
	const url = request.nextUrl.clone();

	const publicPaths = ["/login", "/register", "/newStore", "/"];
	const privatePaths = ["/home", "/orders"];

	const staticFileExtensions = [
		".css",
		".js",
		".png",
		".jpg",
		".jpeg",
		".gif",
		".svg",
		".ico",
		".woff",
		".woff2",
		".ttf",
		".otf",
	];

	const isStaticFile = staticFileExtensions.some((ext) => url.pathname.endsWith(ext));

	if (isStaticFile) {
		return NextResponse.next();
	}

	if (!typeAcessCookie) {
		if (url.pathname !== "/") {
			return NextResponse.redirect(new URL("/", request.url));
		}
		return NextResponse.next();
	}

	if (!userCookie && typeAcessCookie) {
		if (!publicPaths.includes(url.pathname)) {
			return NextResponse.redirect(new URL("/", request.url));
		}
		return NextResponse.next();
	}

	if (userCookie && typeAcessCookie) {
		if (!privatePaths.includes(url.pathname)) {
			return NextResponse.redirect(new URL("/home", request.url));
		}
		return NextResponse.next();
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/login/:path*", "/register/:path*", "/newStore/:path*", "/home/:path*", "/orders/:path*", "/:path*"],
};

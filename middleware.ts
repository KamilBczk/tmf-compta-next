import { NextResponse } from "next/server";

let locales = ["fr", "ro"];

function getLocale(request: Request) {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return "fr";
  }

  const acceptedLanguages = acceptLanguage.split(",");

  for (const language of acceptedLanguages) {
    const locale = locales.find((locale) => language.trim().startsWith(locale));
    if (locale) {
      return locale;
    }
  }
  return "fr";
}

export async function middleware(request: Request) {
  const { pathname } = new URL(request.url);
  if (pathname === "/sitemap.xml") return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|sitemap.xml|robots.txt).*)"],
};

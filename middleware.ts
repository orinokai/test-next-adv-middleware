import { MiddlewareRequest } from "@netlify/next";
import type { NextRequest } from "next/server";

export async function middleware(nextRequest: NextRequest) {
  const pathname = nextRequest.nextUrl.pathname;

  const middlewareRequest = new MiddlewareRequest(nextRequest);

  if (pathname.startsWith("/static")) {
    const response = await middlewareRequest.next();
    const message = `Static page transformed by middleware`;
    response.replaceText("#message", message);
    response.setPageProp("message", message);
    return response;
  }
}

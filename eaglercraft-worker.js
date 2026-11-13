const GAME_URL = "https://github.com/Kyntric-GIT/WINDOWS-11/releases/download/eaglercraft-26.2/eaglercraft-26.2-fe8f1237.html";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/" && url.pathname !== "/game") {
      return new Response("Not found", { status: 404 });
    }

    const upstreamHeaders = new Headers();
    const range = request.headers.get("Range");
    if (range) upstreamHeaders.set("Range", range);

    const upstream = await fetch(GAME_URL, {
      method: "GET",
      headers: upstreamHeaders,
      redirect: "follow"
    });

    if (!upstream.ok && upstream.status !== 206) {
      return new Response("Could not load the Eaglercraft release asset.", {
        status: upstream.status,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    const headers = new Headers(upstream.headers);
    headers.set("Content-Type", "text/html; charset=utf-8");
    headers.set("Content-Disposition", "inline");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Cache-Control", "public, max-age=3600");

    // The upstream release is a downloadable asset. Remove headers that
    // would prevent this hosted copy from rendering inside the project.
    headers.delete("Content-Security-Policy");
    headers.delete("X-Frame-Options");
    headers.delete("Content-Length");

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers
    });
  }
};

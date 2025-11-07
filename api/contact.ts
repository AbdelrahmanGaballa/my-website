// Let TypeScript know process exists (provided by Vercel at runtime)
declare const process: { env?: Record<string, string | undefined> };

export const config = {
  runtime: "edge", // Vercel Edge Runtime
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return jsonResponse({ ok: true }, 200);
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method Not Allowed" }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, message, source } = body || {};
    if (!name || !email || !message) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    // Read from Vercel env
    const webhook =
      process.env?.GOOGLE_SHEET_WEBHOOK ||
      ""; // (optional) put your Apps Script URL here for a quick test

    if (!webhook) {
      return jsonResponse(
        { error: "Server missing GOOGLE_SHEET_WEBHOOK" },
        500
      );
    }

    const forward = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, message, source }),
    });

    if (!forward.ok) {
      const txt = await forward.text().catch(() => "");
      return jsonResponse(
        { error: `Apps Script error: ${forward.status} ${txt}` },
        502
      );
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ error: msg }, 500);
  }
}

// api/contact.ts — Vercel Serverless function (Node runtime)
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();

    // Read the Apps Script URL from an env var on Vercel (NOT VITE_)
    const scriptUrl = process.env.CONTACT_WEBHOOK;
    if (!scriptUrl) {
      return new Response(JSON.stringify({ error: "CONTACT_WEBHOOK is missing on Vercel" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Server → Google Apps Script (no browser CORS now)
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Apps Script can parse JSON
      body: JSON.stringify(body),
    });

    // Try to pass through the JSON result from Apps Script
    const text = await upstream.text();
    const json = safeJSON(text);

    return new Response(JSON.stringify(json ?? { status: "ok" }), {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message ?? "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

function safeJSON(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}

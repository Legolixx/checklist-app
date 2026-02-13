export async function GET() {
  try {
    const token = process.env.HMB_TOKEN!;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const res = await fetch(
      "https://portalhyundai-api.mobato.com.br/v1/gerservicos/2784",
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Origin: "https://portalhyundai.mobato.com.br",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Accept-Language": "PT_BR",
          Referer: "https://portalhyundai.mobato.com.br/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return Response.json({
      ok: res.ok,
      status: res.status,
      data: await res.text(),
    });
  } catch (e: unknown) {
    const errorMessage =
      e instanceof Error ? e.message : "An unknown error occurred";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}

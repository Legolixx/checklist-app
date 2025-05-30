// lib/tokenService.ts
let cachedToken: string | null = null;
let tokenExpiresAt: number = 0;

export async function getBearerToken() {
  const now = Date.now();

  if (cachedToken && tokenExpiresAt > now) {
    return cachedToken;
  }

  const response = await fetch('https://apitest.hyundai-brasil.com:8065/v1/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.HYUNDAI_CLIENT_ID,
      client_secret: process.env.HYUNDAI_CLIENT_SECRET,
      grant_type: 'client_credentials'
    })
  });
  console.log("RESPONSE", response)
  const data = await response.json();
  console.log(data)
  cachedToken = data.access_token;
  tokenExpiresAt = now + data.expires_in * 1000; // milissegundos

  console.log(cachedToken)

  return cachedToken;
}

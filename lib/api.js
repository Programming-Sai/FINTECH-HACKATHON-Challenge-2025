// lib/api.js
export async function apiGet(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiPost(path, body, method = 'POST') {
  const res = await fetch(path, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  console.log(body)
    const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  if (!res.ok) return { error: data.error || res.statusText };
  return data;
}


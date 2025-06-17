// app/api/users/route.js
import clientPromise from '@/lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const users = await client.db().collection('users').find().toArray();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(req) {
  const { email, role, momoNumber } = await req.json();
  const client = await clientPromise;
  const col = client.db().collection('users');

  // Unique email
  if (await col.findOne({ email })) {
    return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 409 });
  }

  const newUser = { email, role, momoNumber, createdAt: new Date() };
  await col.insertOne(newUser);
  return new Response(JSON.stringify({ user: newUser }), { status: 201 });
}

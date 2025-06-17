// app/api/shells/route.js
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';


export async function GET() {
  const client = await clientPromise;
  const shells = await client.db().collection('shells').find().toArray();
  return new Response(JSON.stringify(shells), { status: 200 });
}

export async function POST(req) {
  const shell = await req.json();
  const client = await clientPromise;
  const col = client.db().collection('shells');

  // Unique slug
  if (await col.findOne({ slug: shell.slug })) {
    return new Response(JSON.stringify({ error: 'Slug already in use' }), { status: 409 });
  }

  const newShell = { ...shell, createdAt: new Date(), updatedAt: new Date() };
  await col.insertOne(newShell);
  return new Response(JSON.stringify({ shell: newShell }), { status: 201 });
}


export async function DELETE(req) {
  const { id } = await req.json();
  const client = await clientPromise;
  const col = client.db().collection('shells');
  const result = await col.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return new Response(JSON.stringify({ error: 'Shell not found' }), { status: 404 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
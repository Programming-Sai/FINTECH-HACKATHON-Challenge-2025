import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB_URL;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_DB_URL) {
  throw new Error('Please define the MONGO_DB_URL environment variable');
}

if (process.env.NODE_ENV === 'development') {
  // In dev, reuse the global client to avoid hot reload problems
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In prod, create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

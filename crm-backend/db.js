const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // local MongoDB URI
const dbName = 'mini_crm';               // you can change the database name if needed

let db;

async function connectToMongo() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    db = client.db(dbName);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

function getDB() {
  if (!db) {
    throw new Error('DB not connected! Call connectToMongo first.');
  }
  return db;
}

module.exports = { connectToMongo, getDB };

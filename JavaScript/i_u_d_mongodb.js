const { MongoClient } = require('mongodb');

// MongoDB URI and database details
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URI if using MongoDB Atlas
const dbName = 'testDB';

async function connectToMongo() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Insert Document
async function insertDocument() {
  const db = await connectToMongo();
  const collection = db.collection('users');
  
  const newUser = {
    name: 'Abhi',
    email: 'Abhi@gmail.com',
    age: 20
  };

  const result = await collection.insertOne(newUser);
  console.log(`Inserted document with _id: ${result.insertedId}`);
  db.client.close();
}

// Update Document
async function updateDocument() {
  const db = await connectToMongo();
  const collection = db.collection('users');
  
  const filter = { name: 'Abhi' };
  const updateDoc = {
    $set: { age: 21 }
  };

  const result = await collection.updateOne(filter, updateDoc);
  console.log(`Matched ${result.matchedCount} and modified ${result.modifiedCount} document(s)`);
  db.client.close();
}

// Delete Document
async function deleteDocument() {
  const db = await connectToMongo();
  const collection = db.collection('users');
  
  const filter = { name: 'Abhi' };

  const result = await collection.deleteOne(filter);
  console.log(`Deleted ${result.deletedCount} document(s)`);
  db.client.close();
}

// Perform all operations
async function performOperations() {
  await insertDocument();
  await updateDocument();
  await deleteDocument();
}

performOperations();


// run the file with
// node mongodb_operations.js

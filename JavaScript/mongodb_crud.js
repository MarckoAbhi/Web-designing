const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';  // Local MongoDB URL
const dbName = 'myDB';  // Database name

let client;

async function connectToMongo() {
  try {
    client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

async function getCollection() {
  const db = await connectToMongo();
  const collection = db.collection('users');  // Change 'users' to your collection name
  return collection;
}

// Create a new document
async function createDocument() {
  const collection = await getCollection();

  const newUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  };

  const result = await collection.insertOne(newUser);
  console.log(`New document inserted with _id: ${result.insertedId}`);
}

// Read a document
async function readDocument() {
  const collection = await getCollection();

  const user = await collection.findOne({ name: 'John Doe' });  // Find a user by name
  if (user) {
    console.log('Found user:', user);
  } else {
    console.log('User not found');
  }
}

// Update a document
async function updateDocument() {
  const collection = await getCollection();

  const filter = { name: 'John Doe' };  // Find user by name
  const updateDoc = {
    $set: { age: 35 }  // Set a new age
  };

  const result = await collection.updateOne(filter, updateDoc);
  console.log(`Matched ${result.matchedCount} and modified ${result.modifiedCount} document(s)`);
}

// Delete a document
async function deleteDocument() {
  const collection = await getCollection();

  const filter = { name: 'John Doe' };  // Find user by name
  const result = await collection.deleteOne(filter);

  console.log(`Deleted ${result.deletedCount} document(s)`);
}

// Running all operations in sequence
async function runCRUDOperations() {
  await createDocument();   // Create a new user
  await readDocument();     // Read the user
  await updateDocument();   // Update the user
  await deleteDocument();   // Delete the user
}

// Execute the operations
runCRUDOperations().finally(() => {
  if (client) {
    client.close();  // Close the MongoDB connection after the operations are complete
  }
});

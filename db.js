// This module connects to a MongoDB database using mongodb driver
// and exports a function to get the 'books' collection.
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db('bookstore').collection('books');
}

// This module exports a function that connects to the MongoDB database
module.exports = connectToDatabase;

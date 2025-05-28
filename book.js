// CRUD Operation Helpers
const connectToDatabase = require('./db');
const connect = require('./db');
const { ObjectId } = require('mongodb');

async function addBook(book){
    const books = await connectToDatabase();
    const result = await books.insertOne(book);
    console.log(`Book added: ${result.insertedId}`);
}

async function listBooks() {
    const books = await connectToDatabase();
    const allBooks = await books.find().toArray();
    console.log('All Books:', allBooks);
}

async function updateBook(id, updates) {
    const books = await connectToDatabase();
    const result = await books.updateOne(
        { _id: new ObjectId(id) },
        { $set: updates }
    );
    console.log('Updated:', result.modifiedCount);
}

async function deleteBook(id) {
    const books = await connectToDatabase();
    const result = await books.deleteOne({ _id: new ObjectId(id) });
    console.log('Deleted:', result.deletedCount);
}

// This module provides CRUD operations for books in a MongoDB database.
module.exports = { addBook, listBooks, updateBook, deleteBook };

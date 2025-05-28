# Book Manager

A simple MERN stack application that connects to a MongoDB database to manage a collection of books.

## Overview

This application uses Node.js and the official MongoDB driver to connect to a local MongoDB database called **bookstore**. It focuses on managing a collection of books using basic CRUD operations.

## Features

- **MongoDB Connection:** Establishes a connection to a local MongoDB instance.
- **Book Collection Management:** Connects to the `books` collection within the `bookstore` database.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running. You can use MongoDB Compass to view and manage your data.
- npm package manager.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd c:\Dev_Projects\PowerLearnProject\MERN\week1\book-manager
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```

## Configuration

The MongoDB connection string is specified in `db.js`:
```javascript
const uri = 'mongodb://localhost:27017';
```
Ensure your MongoDB service is running on this URI. If needed, adjust the connection string to match your setup.

## Running the Application

Start the application using:
```bash
npm start
```
For development, you might consider using nodemon:
```bash
nodemon
```

## File Structure

- **db.js:** Handles the MongoDB connection and exports a function to access the `books` collection.
- **README.md:** Provides an overview and instructions for the application.
- *(Additional files may be present depending on further development.)*





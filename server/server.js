// Load env variables
if (process.env.NODE_ENV != 'production') {
require("dotenv").config();
}

//import dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors()); //using cors + configuring like this will allow server to accept requests from any domain

// Connect to DB
connectToDb();

//Routing
app.get('/notes', notesController.fetchNotes); // Fetch all notes
app.get('/notes/:id', notesController.fetchNote); // Fetch one note by ID
app.post('/notes', notesController.createNote); // Create new note
app.put('/notes/:id', notesController.updateNote); // Update note by ID
app.delete('/notes/:id', notesController.deleteNote); // Delete note by ID

//Start our server
app.listen(process.env.PORT);
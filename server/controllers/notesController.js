const Note = require("../models/note");

const fetchNotes = async (req,res) => {
    //find all notes
    const notes = await Note.find();
    //respond with notes
    res.json({ notes });
};

const fetchNote = async (req,res) => {
    // get id off url
    const noteId = req.params.id;

    //find note using id
    const note = await Note.findById(noteId);

    //respond with note
    res.json({ note });
};

const createNote = async (req,res) => {
    // Get the sent in data off request body
    const {title, details, body} = req.body;

    // Create a note with it
    const note = await Note.create({
        title,
        details,
        body,
    });

    // respond with the new note
    res.json({ note });
};

const updateNote = async (req,res) => {
    //get id off url
    const noteId = req.params.id;

    //get data off req body
    const {title, details, body} = req.body;

    //find and update record
    await Note.findByIdAndUpdate(noteId, {
        title,
        details,
        body,
    })

    //find updated note
    const note = await Note.findById(noteId);

    //respond with updated note
    res.json({ note });
};

const deleteNote = async (req,res) => {
    //get id off url
    const noteId = req.params.id;

    //delete record
    const result = await Note.deleteOne({ _id: noteId });

    //respond
    res.json({ success: "Note Deleted Successfully"});
};

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
};
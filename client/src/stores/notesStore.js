import create from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
    notes: null,

    createForm: {
        title: "",
        details: "",
        body: "",
    },

    updateForm: {
        _id: null,
        title: "",
        details: "",
        body: "",
    },

    fetchNotes: async () => {
        //fetch notes
    const res = await axios.get("http://localhost:3000/notes");

    //set to state
    set({ notes: res.data.notes });
    },

    updateCreateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value,
                },
            };
        });
    },

    createNote: async (e) => {
        e.preventDefault(); // This prevents the html from updating automatically
    
        const { createForm, notes } = notesStore.getState();
        const res = await axios.post("http://localhost:3000/notes", createForm);
    
        set({
            notes: [...notes, res.data.note],
            createForm: { 
                title: "",
                details: "",
                body: "",
            }
        });
    },

    deleteNote: async (_id) => {
        //delete note
        await axios.delete(`http://localhost:3000/notes/${_id}`);
        const { notes } = notesStore.getState();
        
        //update state
        const newNotes = notes.filter(note => {
            return note._id !== _id;
        });
    
        set({ notes: newNotes });
    },

    handleUpdateFieldChange: (e) => {
        const { value, name } = e.target;

        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                },
            };
        });
    },

    toggleUpdate: ({ _id, title, details, body }) => {
        set({
            updateForm: {
                title, 
                details,
                body, 
                _id,
            },
        });
    },

    updateNote: async (e) => {
        e.preventDefault();
        
        const { updateForm: {title, details, body, _id}, notes, } = notesStore.getState();

        // Send the update request
        const res = await axios.put(`http://localhost:3000/notes/${_id}`, {title, details, body});
        
        // Update state
        const newNotes = [...notes];
        const noteIndex = notes.findIndex(note => {
            return note._id === _id;
        });
        newNotes[noteIndex] = res.data.note;
    
        set({
            notes: newNotes,
            updateForm: {
                _id: null,
                title: "",
                details: "",
                body: "",
            },
        });   
    },
}));

export default notesStore;
import { useState, useEffect } from "react";
import axios from "axios";
import notesStore from "../stores/notesStore.js";
import Notes from "./notes.js";
import UpdateForm from "./updateForm.js";
import CreateForm from "./createForm.js";
import "./style.css"

function App() {
  const store = notesStore();

    //use effect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="App" id="App">
      <Notes />

      <UpdateForm />

      <CreateForm />
    </div>
  );
}

export default App;

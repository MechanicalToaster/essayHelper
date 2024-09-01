import notesStore from "../stores/notesStore";
import { TiDeleteOutline } from "react-icons/ti";
import { RiEditLine } from "react-icons/ri";

export default function Note({ note }) {
    const store = notesStore(store => {
        return {
            deleteNote: store.deleteNote,
            toggleUpdate: store.toggleUpdate,
        };
    });

    return (
        <div key={note._id} id="note">
            <div id="noteHeader">
                <h3>{note.title}</h3>
                <div id="btnGroup">
                    <button id="noteBtn" onClick={() => store.deleteNote(note._id)}><TiDeleteOutline /></button>
                    <button id="noteBtn"onClick={() => store.toggleUpdate(note)}><RiEditLine /></button>
                </div>
            </div>
            <div id="noteDetails">
                <h5>{note.details}</h5>
                <p>{note.body}</p>
            </div>
            
        </div>
    );
}
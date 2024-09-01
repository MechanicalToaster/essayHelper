import notesStore from "../stores/notesStore";
import Note from "./note";

export default function Notes() {
    const store = notesStore();
    return (
        <div id="noteBox">
            <h4 id="heading">Paragraphs:</h4>
            {store.notes && 
                store.notes.map((note) => {
                    return <Note note={note} key={note._id} />;
                })}
        </div>
    );
}
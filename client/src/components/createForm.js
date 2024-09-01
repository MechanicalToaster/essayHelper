import notesStore from "../stores/notesStore";

export default function CreateForm() {
    const store = notesStore();

    if (store.updateForm._id) return <></>;

    return (
        <div id="createForm">
            <h2 id="heading">New <span>Paragraph</span></h2>
            <form onSubmit={store.createNote}>
            <input onChange={store.updateCreateFormField} value={store.createForm.title} name="title" placeholder="Paragraph Number"/>
            <input onChange={store.updateCreateFormField} value={store.createForm.details} name="details" placeholder="Notes on Content"/>
            <textarea spellcheck="true" onChange={store.updateCreateFormField} value={store.createForm.body} name="body" placeholder="Paragraph Here"/>
            <button id="buttonShift" type="submit"><span>Add Paragraph</span><i></i></button>
            </form>
        </div>
    );
}


import notesStore from "../stores/notesStore";

export default function UpdateForm() {
    const store = notesStore();

    if(!store.updateForm._id) return <></>

    return (
        <div id="updateForm">
            <h2 id="heading">Update Note</h2>
            <form onSubmit={store.updateNote}> 
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.title} name="title"/>
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.details} name="details"/>
                <textarea spellcheck="true" onChange={store.handleUpdateFieldChange} value={store.updateForm.body} name="body"/>
                <button id="buttonShift" type="submit"><span>Update Paragraph</span><i></i></button>
            </form>
        </div>
    );
}

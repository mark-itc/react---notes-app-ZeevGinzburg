import "./notes.css"


function Notes(props) {
    const {noteItems, deleteNote} = props;

    const humanReadebleDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();


        
        return (
            `${day}/${month}/${year} ${hour}:${minute} ${second}`
        )
        
    }


    return (<>
        <div className="note-div">
            {noteItems.map((note) => (
            <div className="note-card">
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <button onClick={() => { deleteNote(note) } }>x</button>
                <p>{`note date: ${humanReadebleDate(note.date)}` }</p>
            </div>
            ))}
        </div>

    </>

    )

}

export default Notes;
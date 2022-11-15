import "./notes.css"


function Notes(props) {
    const {noteItems} = props;

    /**
     * Feormat date
     * @param {Date} date The date
     */
    const humanReadebleDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return (
            `${day}/${month}/${year}`
        )
        
    }

    return (<>
        <div className="note-div">
            {noteItems.map((note) => (
            <div className="note-card">
                <p>{note.text}</p>
                <p>{`note date: ${humanReadebleDate(note.date)}` }</p>
            </div>
            ))}
        </div>

    </>

    )

}

export default Notes;
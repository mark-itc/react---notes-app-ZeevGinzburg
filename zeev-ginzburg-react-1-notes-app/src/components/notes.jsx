import "./notes.css"


function Notes(props) {
    const {noteItems} = props;

    return (<>
        <div className="note-div">
            {noteItems.map((note) => (<div className="note-card">{note}</div>))}
        </div>

    </>

    )

}

export default Notes;
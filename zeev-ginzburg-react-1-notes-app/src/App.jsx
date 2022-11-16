import './App.css';
import Notes from './components/notes';
import Form from './components/form';
import { useState } from "react";

function App() {
  const [noteItems, setNoteItem] = useState([]);

  const addNewNote = (newNoteItem) => {
    setNoteItem([...noteItems, newNoteItem]);
  }

  return (
    <div className="App">
      <Form addNewNote={addNewNote}/>
      <Notes noteItems={noteItems}/>
    </div>
  );
}

export default App;

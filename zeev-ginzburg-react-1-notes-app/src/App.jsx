import './App.css';
import Notes from './components/notes';
import Form from './components/form';
import { useState } from "react";

function App() {
  const [noteItems, setNoteItems] = useState([]);

  const addNewNote = (newNoteItem) => {
    setNoteItems([...noteItems, newNoteItem]);
  }
  const deleteNote = (noteToDelete) => {
    setNoteItems(noteItems.filter((note) => {
      if (note === noteToDelete){
        return false;        
      }
      else return true;
    }));
  }

  return (
    <div className="App">
      <Form addNewNote={addNewNote}/>
      <Notes noteItems={noteItems} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;

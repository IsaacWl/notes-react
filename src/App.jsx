import { useContext } from 'react'
import './App.css'
import Note from './components/note'
import NoteForm from './components/noteForm'
import { NoteContext } from './context/notesContext'
import { BiPencil } from 'react-icons/bi'

function App() {
  const { setToggleForm, notes } = useContext(NoteContext)
  
  return (
    <div className="container">
      {!notes.length && <h1>Start add notes.</h1>}
      <NoteForm />
      <div className="notes-container">
      {notes?.map(note => (
        <Note 
         key={note.id}
         title={note.title}
         content={note.content}
         theme={note.theme} />
        ))}
      </div>

     <button className='add-note' onClick={() => setToggleForm(true)}>
        <BiPencil />
     </button> 
    </div>
  )
}

export default App

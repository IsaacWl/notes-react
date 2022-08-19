import { useContext } from 'react'
import './App.css'
import Note from './components/note'
import NoteForm from './components/noteForm'
import { NoteContext } from './context/notesContext'
import { BiPencil, BiNotepad } from 'react-icons/bi'

function App() {
  const { setToggleForm, notes } = useContext(NoteContext)

  return (
    <>
      <nav className='navbar'>
        <div>
          <BiNotepad />
          <h2>StudyNote</h2>
        </div>
      </nav>
      <div className="container">
        {!notes.length && <h1>No Notes <BiNotepad />.</h1>}
        <NoteForm />
        <div className="notes-container">
          {notes?.map(note => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              theme={note.theme}
              rotate={note.rotate} />
          ))}
        </div>

        <button className='add-note' onClick={() => setToggleForm(true)}>
          <BiPencil />
        </button>
      </div>
    </>
  )
}

export default App

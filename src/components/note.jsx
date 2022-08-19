import { NoteContext } from '../context/notesContext'
import { useContext } from "react"
import { VscClose } from "react-icons/vsc"


const Note = ({ id, title, content, theme, rotate }) => {
  const { setNotes } = useContext(NoteContext)
  const handleRemove = (id) => {
    setNotes((prevNotes) => {
      prevNotes = prevNotes.filter((note) => note.id !== id)
      localStorage.setItem("notes", JSON.stringify(prevNotes))
      return prevNotes
    })
  }
  return (
    <article className='note' style={{ background: `${theme && theme}`, transform: `rotate(${rotate}deg)`}}>
      <div className='note-title'>
        <h2>{title}</h2>
        <div className="close-icon" onClick={() => handleRemove(id)}>
          <VscClose />
        </div>
      </div>
      <div className='note-content'>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Note
import { useContext } from "react"
import { useState } from "react"
import { HiPlus, HiX } from "react-icons/hi"
import { NoteContext } from '../context/notesContext'

const NoteForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [selectedPallete, setSelectedPallete ] = useState(null)
    const { toggleForm, setToggleForm, notes, setNotes } = useContext(NoteContext)
    const palletes = ["#ef7861", "#3fa792", "#3b9ae1", "#fec260"]
    
    const handleNote = () => {
        if (!title.trim() || !content.trim())
            return;

        const note = {
            id: Date.now(),
            title: title,
            content: content,
            theme: selectedPallete || ""
        }

        setNotes([...notes, note])

        setTitle("")
        setContent("")

        setToggleForm(false)
        setSelectedPallete(null)
    }
    const closeForm = () => {
        setToggleForm(false)
        setTitle("")
        setContent("")
    }
    const choosePallete = (pallete) => {
        setSelectedPallete(pallete)
    }
    return (
        <>
            {toggleForm && (

                <div className="form-container">
                <form className="note-form" style={{ background: `${selectedPallete && selectedPallete }`}}>
                    <div className="close-form" onClick={closeForm}>
                        <HiX />
                    </div>
                    <div className="form-div">
                        <label htmlFor="title">Title</label>
                        <input
                            className="field"
                            id="title"
                            placeholder="Note Title"
                            spellCheck="false"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="form-div">
                        <label htmlFor="content">Content</label>
                        <textarea
                            className="field textarea"
                            id="content"
                            placeholder="Note Content"
                            spellCheck="false"
                            value={content}
                            onChange={e => setContent(e.target.value)}></textarea>
                    </div>
                    <div className="pallete-container">
                        {palletes?.map((pallete) => (
                            <div
                            key={pallete} 
                            className="pallete" 
                            style={{background:`${pallete}`}} 
                            onClick={() => choosePallete(pallete)} />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={handleNote}>
                        <HiPlus />
                    </button>
                </form>
            </div>
            )}
        </>
    )
}

export default NoteForm
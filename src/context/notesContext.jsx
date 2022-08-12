import { createContext, useState } from "react";

const NoteContext = createContext()
// const notesList = JSON.parse(localStorage.getItem("notes")) || []

const NoteProvider = ({ children }) => {
    const [ notes, setNotes ] = useState(notesList)
    const [ toggleForm, setToggleForm ] = useState(false)

    return (
        <NoteContext.Provider value={{ toggleForm, setToggleForm, notes, setNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProvider }
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NoteProvider } from './context/notesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NoteProvider>
    <App />
  </NoteProvider>
)

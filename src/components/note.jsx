import { VscEdit } from "react-icons/vsc"

const Note = ({ title, content, theme }) => {
  return (
    <article className='note' style={{ background: `${theme && theme}`}}>
      <div className='note-title'>
        <h2>{title}</h2>
        <div className="edit-icon">
          <VscEdit />
        </div>
      </div>
      <div className='note-content'>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Note
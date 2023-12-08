/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState } from "react";

function Card({ children, noteId, title, isArchived, createdAt, deleteNote, changeArchived }) {
  const [color, setColor] = useState('#D1EAED')

  function changeColor(paramColor) {
    setColor(paramColor)
  }

  return (
    <div className='w-80 rounded-md p-8 relative break-all' style={{
      backgroundColor: color,
    }}>
      <h3>
        {title}
      </h3>
      <small className="my-2 block text-gray-500/70 text-xs">
        {createdAt}
      </small>
      <div className="text-sm mb-24">
        {children}
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <div className="flex gap-2 items-center text-xs mb-4">
          <div>
            warna:
          </div>
          <div className="w-6 aspect-square bg-cust-blue rounded-full border border-cust-black hover:cursor-pointer" onClick={() => { changeColor('#D1EAED') }}>
          </div>
          <div className="w-6 aspect-square bg-cust-orange rounded-full border border-cust-black hover:cursor-pointer" onClick={() => { changeColor('#FFD4A9') }}>
          </div>
          <div className="w-6 aspect-square bg-cust-pink rounded-full border border-cust-black hover:cursor-pointer" onClick={() => { changeColor('#FFDADA') }}>
          </div>
          <div className="w-6 aspect-square bg-cust-yellow rounded-full border border-cust-black hover:cursor-pointer" onClick={() => { changeColor('#FDF2B3') }}>
          </div>
        </div>
        <div className="flex gap-4">
          <Button textSize='12px' padding="4px" onClick={() => { deleteNote(noteId) }}>
            Hapus 🗑️
          </Button>

          {isArchived ?
            <Button isPrimary textSize='12px' padding="4px" onClick={() => { changeArchived(noteId) }}>
              Pindahkan 🚀
            </Button> :
            <Button isPrimary textSize='12px' padding="4px" onClick={() => { changeArchived(noteId) }}>
              Arsipkan 📂
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default Card
import CustLink from "./CustLink";
import IconButton from "./IconButton";
import PropsTypes from 'prop-types'
import { useState } from "react";

export default function Card({ children, noteId, title, isArchived, createdAt, deleteNote, changeArchived }) {
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
      <div className="text-sm mb-48 line-clamp-3">
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
        <CustLink href={`/detail/${noteId}`}>
          Detail 👉
        </CustLink>
        <div className="flex gap-3 mt-3 items-center h-12">
          <IconButton onClick={() => { deleteNote(noteId) }}>
            <>
              <button>
                🗑️
              </button>
              <div>
                Hapus
              </div>
            </>
          </IconButton>
          {isArchived ?
            <IconButton onClick={() => { changeArchived(noteId, "unarchive") }}>
              <>
                <button>
                  🚀
                </button>
                <div>
                  Pindahkan
                </div>
              </>
            </IconButton>
            :
            <IconButton onClick={() => { changeArchived(noteId, "archive") }}>
              <>
                <button>
                  📂
                </button>
                <div>
                  Arsipkan
                </div>
              </>
            </IconButton>
          }
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropsTypes.string,
  noteId: PropsTypes.string,
  title: PropsTypes.string,
  isArchived: PropsTypes.bool,
  createdAt: PropsTypes.string,
  deleteNote: PropsTypes.func,
  changeArchived: PropsTypes.func,
}
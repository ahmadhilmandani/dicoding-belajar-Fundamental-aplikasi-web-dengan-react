
import { useState, useContext } from 'react'
import TextButton from '../components/TextButton'
import Card from '../components/Card'
import moment from "moment"
import { userDataContext } from '../context/userData'
import { notesDataContext } from '../context/notesData'
import { ThemeDataContext } from '../context/themeData'

export default function Main() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const userData = useContext(userDataContext)
  const notesData = useContext(notesDataContext)
  const themeData = useContext(ThemeDataContext)
  let isActiveNoteEmpty = true
  let isArchivedNoteEmpty = true

  return (
    <div className="relative">
      <main className='mt-12'>
        <section className='max-w-md mx-auto'>
          <small className={`${themeData == "dark" ? "text-cust-white" : " "} block mb-2 font-medium`}>Hello, {userData.userName}! 👋😲</small>
          <h1 className={`${themeData == "dark" ? "text-cust-white" : " "} mb-8 `}>Buat Catatan</h1>
          <label className='mb-2 text-xs flex justify-between'>
            <div className={`${themeData == "dark" ? "text-cust-white" : " "}`}>
              <sup className={`text-red-500 text-base`}>*</sup>Judul harus diisi
            </div>
            <div className={`${themeData == "dark" ? "text-cust-white" : " "}`}>
              Sisa karakter: {50 - title.length}
            </div>
          </label>
          <input onChange={(e) => {
            if (e.target.value.length <= 50) {
              setTitle(e.target.value)
            }
          }} value={title} type="text" className={`outline-0 rounded-lg px-4 py-2 text-sm w-full border focus:outline-1 outline-cust-blue focus:border-cust-blue ${themeData == "dark" ? "text-cust-white bg-neutral-800/40 border-neutral-600" : "bg-cust-light-gray border-cust-gray"}`} placeholder="Judul catatan... ✨" />

          <textarea onChange={(e) => {
            setBody(e.target.value)
          }} name="" id="" cols="30" rows="10" value={body} className={`outline-0 rounded-lg px-4 py-2 text-sm w-full border focus:outline-1 outline-cust-blue focus:border-cust-blue mt-4 mb-4 
          ${themeData == "dark" ? "text-cust-white bg-neutral-800/40 border-neutral-600" : "bg-cust-light-gray border-cust-gray"}
          `} placeholder='tulis deksripsi catatan... 📝'>
          </textarea>

          <TextButton isPrimary onClick={() => {
            notesData.submitNewNote(title, body)
            setTitle('')
            setBody('')
          }}>
            Tambah 🫰
          </TextButton>
        </section>
        <section className='mt-14'>
          <div>
            <h1 className={`${themeData == "dark" ? "text-cust-white" : " "} mb-6`}>Catatan aktif</h1>
            <div className='flex gap-4 flex-wrap'>
              {
                notesData.notArchivedNotes.length > 0 ?
                  notesData.notArchivedNotes.map((note, index) => {
                    if (note.archived != true) {
                      isActiveNoteEmpty = false
                      return (
                        <Card
                          noteId={note.id}
                          changeArchived={notesData.changeArchived}
                          title={note.title}
                          createdAt={moment(note.createdAt).format("DD-MM-YYYY")}
                          key={note.id}
                          deleteNote={notesData.deleteNote}
                        >
                          {note.body}
                        </Card>
                      )
                    }
                    if ((++index == notesData.notArchivedNotes.length) && (isActiveNoteEmpty == true)) {
                      return (
                        <div key={index}>
                          Masih kosong nih... 💤
                        </div>
                      )
                    }
                  }) :
                  <div className={`${themeData == "dark" ? "text-cust-white" : " "}`}>
                    Masih kosong nih... 💤
                  </div>
              }
            </div>
          </div>
          <div className='mt-10'>
            <h1 className={`${themeData == "dark" ? "text-cust-white" : " "} mb-6`}>Arsip</h1>
            <div className='flex gap-4 flex-wrap'>
              {
                notesData.archivedNotes.length > 0 ?
                  notesData.archivedNotes.map((note, index) => {
                    if (note.archived != false) {
                      isArchivedNoteEmpty = false
                      return (
                        <Card
                          noteId={note.id}
                          changeArchived={notesData.changeArchived}
                          title={note.title}
                          createdAt={moment(note.createdAt).format("DD-MM-YYYY")}
                          key={note.id}
                          deleteNote={notesData.deleteNote}
                          isArchived
                        >
                          {note.body}
                        </Card>
                      )
                    }
                    if ((++index == notesData.archivedNotes.length) && (isArchivedNoteEmpty == true)) {
                      return (
                        <div key={index}>
                          Masih kosong nih... 💤
                        </div>
                      )
                    }
                  }) :
                  <div className={`${themeData == "dark" ? "text-cust-white" : " "}`}>
                  Masih kosong nih... 💤
                </div>
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

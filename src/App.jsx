/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navigation from './components/Navigation'
import Button from './components/Button'
import Card from './components/Card'
import moment from "moment"

function App() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  let isActiveNoteEmpty = true
  let isArchivedNoteEmpty = true
  const [notes, setNote] = useState(
    [
      {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: true,
      },
      {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: true,
      },
      {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: true,
      },
      {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: true,
      },
      {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: true,
      },
    ]
  )

  function changeArchived(paramsId) {
    const newNotes = notes.map(note => {
      if (note.id !== paramsId) {
        return note;
      } else {
        return {
          ...note,
          archived: !note.archived,
        };
      }
    });
    setNote(newNotes)
  }

  function deleteNote(paramsId) {
    setNote(
      notes.filter(note => note.id !== paramsId)
    );
  }

  return (
    <div className="w-full min-h-screen bg-cust-white p-6 relative">
      <Navigation />
      <main className='mt-12'>
        <section className='max-w-md mx-auto'>
          <h1 className='mb-6'>Buat Catatan</h1>

          <label className='mb-2 text-xs flex justify-between'>
            <div>
              <sup className='text-red-500 text-base'>*</sup>Judul harus diisi
            </div>
            <div>
              Sisa karakter: {50 - title.length}
            </div>
          </label>
          <input onChange={(e) => {
            if (e.target.value.length <= 50) {
              setTitle(e.target.value)
            }
          }} value={title} type="text" className="outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm w-full border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder="Judul catatan... ✨" />

          <textarea onChange={(e) => {
            setBody(e.target.value)
          }} name="" id="" cols="30" rows="10" value={body} className="outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm w-full border focus:outline-1 outline-cust-blue focus:border-cust-blue mt-4 mb-4" placeholder='tulis deksripsi catatan... 📝'>
          </textarea>

          <Button isPrimary onClick={() => {
            if (!title) {
              return
            }
            setNote(
              [
                ...notes,
                {
                  id: ++notes.length,
                  title: title,
                  body: body,
                  archived: false,
                  createdAt: new Date()
                }
              ]
            )
          }}>
            Tambah 🫰
          </Button>
        </section>
        <section className='mt-10'>
          <div>
            <h1 className='mb-4'>Catatan aktif</h1>
            <div className='flex gap-4 flex-wrap'>
              {
                notes.length > 0 ?
                  notes.map((note, index) => {
                    if (note.archived != true) {
                      isActiveNoteEmpty = false
                      return (
                        <Card
                          noteId={note.id}
                          changeArchived={changeArchived}
                          title={note.title}
                          createdAt={moment(note.createdAt).format("DD-MM-YYYY")}
                          key={note.id}
                          deleteNote={deleteNote}
                        >
                          {note.body}
                        </Card>
                      )
                    }
                    if ((++index == notes.length) && (isActiveNoteEmpty == true)) {
                      return (
                        <div key={index}>
                          Masih kosong nih... 💤
                        </div>
                      )
                    }
                  }) :
                  <div>
                    Masih kosong nih... 💤
                  </div>
              }
            </div>
          </div>
          <div className='mt-4'>
            <h1 className='mb-4'>Arsip</h1>
            <div className='flex gap-4 flex-wrap'>
            {
                notes.length > 0 ?
                  notes.map((note, index) => {
                    if (note.archived != false) {
                      isArchivedNoteEmpty = false
                      return (
                        <Card
                          noteId={note.id}
                          changeArchived={changeArchived}
                          title={note.title}
                          createdAt={moment(note.createdAt).format("DD-MM-YYYY")}
                          key={note.id}
                          deleteNote={deleteNote}
                          isArchived
                        >
                          {note.body}
                        </Card>
                      )
                    }
                    if ((++index == notes.length) && (isArchivedNoteEmpty == true)) {
                      return (
                        <div key={index}>
                          Masih kosong nih... 💤
                        </div>
                      )
                    }
                  }) :
                  <div>
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

export default App

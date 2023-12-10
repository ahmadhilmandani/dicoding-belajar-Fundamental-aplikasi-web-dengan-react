import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import Detail from './pages/Detail'
import { useState } from 'react'
import PropsTypes from 'prop-types'
import NotFound from './pages/NotFound'

function TestingElement({ isIndex }) {
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

  function submitNewNote(title, body) {
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
  }

  if (isIndex) {
    return <Main notes={notes} changeArchived={changeArchived} deleteNote={deleteNote} submitNewNote={submitNewNote} />
  }
  else {
    return <Detail notes={notes} changeArchived={changeArchived} deleteNote={deleteNote} />
  }
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<TestingElement isIndex />} />
      <Route path='/detail/:id' element={<TestingElement />} />
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

TestingElement.propTypes = {
  isIndex: PropsTypes.bool
}

export default App

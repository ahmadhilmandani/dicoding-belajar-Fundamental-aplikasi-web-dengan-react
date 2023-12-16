import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import { userDataContext } from "../context/userData"
import { useState, useEffect } from "react"
import { notesDataContext } from "../context/notesData"
import { ThemeDataContext } from "../context/themeData"
import axios from "axios"

export default function Index() {
  const [userName] = useState(localStorage.getItem("name"))
  const [userEmail] = useState(localStorage.getItem("email"))
  const [userToken] = useState(localStorage.getItem("token"))
  const [isLoading, setIsloading] = useState(true)
  const [archivedNotes, setArchivedNotes] = useState([])
  const [notArchivedNotes, setNotArchivedNotes] = useState([])
  const [themeData, setThemeData] = useState(localStorage.getItem("theme"))


  function changeArchived(paramsId, changeTo) {
    axios.post(`https://notes-api.dicoding.dev/v1/notes/${paramsId}/${changeTo}`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(() => {
      axios.get("https://notes-api.dicoding.dev/v1/notes", {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((res) => {
        setNotArchivedNotes(res.data.data)
        axios.get("https://notes-api.dicoding.dev/v1/notes/archived", {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }).then((res) => {
          setArchivedNotes(res.data.data)
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsloading(false)
    })
  }

  function deleteNote(paramsId) {
    axios.delete(`https://notes-api.dicoding.dev/v1/notes/${paramsId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then(() => {
      window.location.replace("/")
    }).catch(() => {

    }).finally(() => {

    })
  }

  function submitNewNote(title, body) {
    if (!title && !body) {
      return
    }
    axios.post(`https://notes-api.dicoding.dev/v1/notes`, {
      title: title,
      body: body,
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then(() => {
      window.location.replace("/")
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
    })
  }


  useEffect(() => {
    if (!themeData) {
      localStorage.setItem("theme", "light")
      setThemeData('light')
    }
    axios.get("https://notes-api.dicoding.dev/v1/notes", {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((res) => {
      setNotArchivedNotes(res.data.data)
      axios.get("https://notes-api.dicoding.dev/v1/notes/archived", {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((res) => {
        setArchivedNotes(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsloading(false)
    })
  }, [])


  if (isLoading == false) {
    return (
      <userDataContext.Provider value={{ userName, userEmail, userToken }} >
        <notesDataContext.Provider value={{ archivedNotes, notArchivedNotes, changeArchived, deleteNote, submitNewNote }} >
          <ThemeDataContext.Provider value={themeData} >
            <div className={`w-full min-h-screen py-6 px-16 ${themeData == 'light' ? "bg-cust-white" : "bg-cust-black"} relative`}>
              <Navigation />
              <Outlet />
              <div className="fixed z-50 right-2 top-[50vh] text-xl cursor-pointer">
                <div className={`${themeData == 'light' ? "bg-neutral-300/90" : "bg-cust-white"} border border-neutral-500/50 border-b-0 rounded-t-full p-1`}
                  onClick={() => {
                    localStorage.setItem("theme", "light")
                    setThemeData(localStorage.getItem("theme"))
                  }}>
                  {themeData == 'light' ? "☀️" : "⛅"}
                </div>
                <div className={`${themeData == 'dark' ? "bg-neutral-300/90" : "bg-cust-white"} border border-neutral-500/50 rounded-b-full p-1`}
                  onClick={() => {
                    localStorage.setItem("theme", "dark")
                    setThemeData(localStorage.getItem("theme"))
                  }}>
                  {themeData == 'dark' ? "🌕" : "🌙"}
                </div>
              </div>
            </div>
          </ThemeDataContext.Provider>
        </notesDataContext.Provider>
      </userDataContext.Provider>
    )
  }
  else {
    <></>
  }
}

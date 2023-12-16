import moment from 'moment'
import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustLink from '../components/CustLink'
import IconButton from '../components/IconButton'
import axios from 'axios'
import { userDataContext } from '../context/userData'
import { notesDataContext } from '../context/notesData'
import { ThemeDataContext } from '../context/themeData'

export default function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  const userData = useContext(userDataContext)
  const [singleNote, setSingleNote] = useState(null)
  const { changeArchived, deleteNote } = useContext(notesDataContext)
  const themeData = useContext(ThemeDataContext)

  useEffect(() => {
    axios.get(`https://notes-api.dicoding.dev/v1/notes/${params.id}`, {
      headers: {
        Authorization: `Bearer ${userData.userToken}`
      }
    }).then((res) => {
      setSingleNote(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="w-full">
      <div className='w-20 h-7 my-10 text-base'>
        <CustLink href={`/`}>
          ⬅️ Kembali
        </CustLink>
      </div>
      {singleNote !== null &&
        <>
          <div className={`mt-4 px-5 py-10 rounded-md ${themeData == "dark"
            ? "text-cust-white bg-neutral-800/40" : "bg-cust-light-gray"}`}>
            <h1 className={`${themeData == "dark"
              ? "text-cust-white" : ""}`}>
              {singleNote.title}
            </h1>
            <p className={`my-2 block text-sm ${themeData == "dark"
              ? "text-cust-white/40" : "text-gray-500/70"}`}>
              {moment(singleNote.createdAt).format("DD-MM-YYYY")}
            </p>
            <div className={`mt-8 ${themeData == "dark"
              ? "text-cust-white" : ""}`}>
              {singleNote.body}
            </div>
          </div>
          <div className='flex gap-2 justify-end items-center fixed bottom-10 right-20'>
            <IconButton onClick={() => {
              deleteNote(singleNote.id)
              navigate("/")
            }}>
              <>
                <button>
                  🗑️
                </button>
                <div className={`${themeData == "dark" ? "text-cust-white" : ""}`}>
                  Hapus
                </div>
              </>
            </IconButton>

            {singleNote.archived ?
              <IconButton onClick={() => {
                changeArchived(singleNote.id, "unarchive")
                navigate("/")
              }}>
                <>
                  <button>
                    🚀
                  </button>
                  <div className={`${themeData == "dark" ? "text-cust-white" : ""}`}>
                    Pindahkan
                  </div>
                </>
              </IconButton>
              :
              <IconButton onClick={() => {
                changeArchived(singleNote.id, "archive")
                navigate("/")
              }}>
                <>
                  <button>
                    📂
                  </button>
                  <div className={`${themeData == "dark" ? "text-cust-white" : ""}`}>
                    Arsipkan
                  </div>
                </>
              </IconButton>
            }
          </div>
        </>
      }
    </div>
  )
}
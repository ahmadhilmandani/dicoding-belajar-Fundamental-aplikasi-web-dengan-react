import moment from 'moment'
import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustLink from '../components/CustLink'
import IconButton from '../components/IconButton'
import axios from 'axios'
import { userDataContext } from '../context/userData'
import { notesDataContext } from '../context/notesData'

export default function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  const userData = useContext(userDataContext)
  const [singleNote, setSingleNote] = useState(null)
  const { changeArchived, deleteNote } = useContext(notesDataContext)

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
          <div className='mt-4 bg-cust-gray px-5 py-10 rounded-md'>
            <h1>
              {singleNote.title}
            </h1>
            <p className="my-2 block text-gray-500/70 text-sm">
              {moment(singleNote.createdAt).format("DD-MM-YYYY")}
            </p>
            <div className="mt-8">
              {singleNote.body}
            </div>
          </div>
          <div className='flex gap-2 justify-end items-center fixed bottom-8 right-8'>
            <IconButton onClick={() => {
              deleteNote(singleNote.id)
              navigate("/")
            }}>
              <>
                <button>
                  🗑️
                </button>
                <div>
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
                  <div>
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
                  <div>
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
import moment from 'moment'
import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PropsTypes from 'prop-types'
import CustLink from '../components/CustLink'
import IconButton from '../components/IconButton'
import { notesDataContext } from '../context/notesData'

export default function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  const userData = useContext(notesDataContext)

  const [filteredNote, setFilteredNote] = useState(null)

  useEffect(() => {
    setFilteredNote(userData.notes.find(note => note.id == params.id))
  }, [])

  return (
    <div className="w-full">
      <div className='w-20 h-7 my-10 text-base'>
        <CustLink href={`/`}>
          ⬅️ Kembali
        </CustLink>
      </div>
      {filteredNote !== null &&
        <>
          <div className='mt-4 bg-cust-gray px-5 py-10 rounded-md'>
            <h1>
              {filteredNote.title}
            </h1>
            <p className="my-2 block text-gray-500/70 text-sm">
              {moment(filteredNote.createdAt).format("DD-MM-YYYY")}
            </p>
            <div className="mt-8">
              {filteredNote.body}
            </div>
          </div>
          <div className='flex gap-2 justify-end items-center fixed bottom-8 right-8'>
            <IconButton onClick={() => {
              userData.deleteNote(filteredNote.id)
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

            {filteredNote.archived ?
              <IconButton onClick={() => {
                userData.changeArchived(filteredNote.id)
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
                userData.changeArchived(filteredNote.id)
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

Detail.propTypes = {
  notes: PropsTypes.array.isRequired,
  changeArchived: PropsTypes.func,
  deleteNote: PropsTypes.func,
}
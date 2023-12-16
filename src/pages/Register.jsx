import TextButton from "../components/TextButton"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useInput } from "../hooks/useInput"
import CustLink from "../components/CustLink"

export default function Register() {
  const [name, handleNameChange] = useInput('')
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [confirmPass, handleConfirmPassChange] = useInput('')
  const navigate = useNavigate()

  function handleRegister() {
    if (confirmPass === password) {
      axios.post("https://notes-api.dicoding.dev/v1/register", {
        name: name,
        email: email,
        password: password,
      }).then((res) => {
        console.log(res)
        navigate('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  }


  return (
    <main className="w-[90%] h-[90%] bg-cust-light-gray/40 border border-gray-300/80 py-16 rounded">
      <h1 className="mb-4 text-center">Register</h1>
      <p className="mb-7 text-center">Mudahkan catatan anda bersama kami!</p>
      <div className="w-96 mx-auto">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-sm">
            👋 Namaku adalah...
          </label>
          <input id="name" onChange={handleNameChange} value={name} type="text" className="block w-full outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm  border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder="Ahmad Hilman Dani" />
        </div>
        <div className="flex flex-col gap-3 my-8">
          <label htmlFor="name" className="text-sm">
            📧 Emailku...
          </label>
          <input onChange={handleEmailChange} id="name" value={email} type="text" className="block w-full outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder="ahmadhilmandani@example.com" />
        </div>
        <div className="flex flex-col gap-3 mb-8">
          <label htmlFor="password" className="text-sm">
            🤫Sssttt, passwordku adalah..
          </label>
          <input id="password" onChange={handlePasswordChange} value={password} type="password" className="block w-full outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder=".........." />
          {password !== confirmPass ?
            <div className="text-xs text-red-500">Password masih beda nih...</div>
            :
            <></>}
          <label htmlFor="password" className="text-sm mt-2">
            🔒Ku coba confirmasi password dulu, ya!
          </label>
          <input onChange={handleConfirmPassChange} value={confirmPass} type="password" className="block w-full outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-sm  border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder=".........." />
        </div>
        <TextButton onClick={handleRegister} isPrimary>
        📝 Register 📝
        </TextButton>
        <div className="mt-7">
          <p className="text-center text-xs">Udah punya akun? Bagus dong! langsung klik!👇</p>
        <CustLink href="/">Login 🚪</CustLink>
        </div>
      </div>
    </main>
  )
}
import TextButton from "../components/TextButton"
import axios from "axios"
import { useInput } from "../hooks/useInput"
import { useState } from "react"
import CustLink from "../components/CustLink"

export default function Login() {
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [isLoading, setIsLoading] = useState(false)

  function handleLogin() {
    setIsLoading(true)
    axios.post("https://notes-api.dicoding.dev/v1/login", {
      email: email,
      password: password,
    }).then((res) => {
      axios.get("https://notes-api.dicoding.dev/v1/users/me", {
        headers: {
          Authorization: `Bearer ${res.data.data.accessToken}`
        }
      }).then((resUser) => {
        localStorage.setItem("token", res.data.data.accessToken)
        localStorage.setItem("name", resUser.data.data.name)
        localStorage.setItem("email", resUser.data.data.email)
        window.location.replace("/")
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        setIsLoading(false)
      })
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <main className="w-[90%] h-[90%] bg-cust-light-gray/40 border border-gray-300/80 py-16 rounded">
      <h1 className="mb-4 text-center">Login</h1>
      <p className="mb-7 text-center">Mudahkan catatan anda bersama kami!</p>
      <div className="w-96 mx-auto">
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
        </div>
        <TextButton isDisabled={isLoading} onClick={handleLogin} isPrimary>
        🚪 Login 🚪
        </TextButton>
        <div className="mt-7">
          <p className="text-center text-xs">Belum punya akun? tenang! check this out👇</p>
        <CustLink href="/register">Register 📝</CustLink>
        </div>
      </div>
    </main>
  )
}
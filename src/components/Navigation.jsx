import { ThemeDataContext } from "../context/themeData"
import { useContext } from "react"
function Navigation() {
  const themeData = useContext(ThemeDataContext)

  return (
    <nav className={`flex justify-between items-center px-5 w-full h-16 rounded-2xl border-[1px] sticky top-6 left-0 right-0  z-50 ${themeData == 'light' ? "border-gray-300/80 bg-cust-white" : "bg-cust-black border-neutral-500/80"}`}>
      <h2 className={`font-bold ${themeData == 'dark' ? "text-cust-white" : ""}`}>Notes</h2>
      <div className="w-fit flex gap-5">
        <input type="text"
          className={`outline-0 rounded-lg px-4 py-2 text-xs w-80 border focus:outline-1 outline-cust-blue focus:border-cust-blue 
          ${themeData == "dark" ? "text-cust-white/50 bg-neutral-800/40 border-neutral-600" : "bg-cust-light-gray border-neutral-600"}`} placeholder="Cari disni... 🔎" />
        <button
          onClick={() => {
            localStorage.clear()
            window.location.replace("/")
          }}
          className={`flex justify-center items-center text-xs rounded-md px-5 py-2 border hover:text-cust-white transition-all  font-semibold ${themeData == "dark" ? "border-rose-400 text-rose-400 hover:bg-rose-400" : "border-rose-500 text-rose-500 hover:bg-rose-500"}`}>
          Logout ➡️
        </button>
      </div>
    </nav>
  )
}

export default Navigation
function Navigation() {
  return (
    <nav className="flex justify-between items-center px-5 w-full h-16 rounded-2xl border-[1px] border-gray-300/80 sticky top-6 left-0 right-0 bg-cust-white z-50">
      <h2 className="font-bold">Notes</h2>
      <div className="w-fit flex gap-5">
        <input type="text" className="outline-0 bg-cust-light-gray rounded-lg px-4 py-2 text-xs w-80 border focus:outline-1 outline-cust-blue focus:border-cust-blue" placeholder="Cari disni... 🔎" />
        <button
          onClick={() => {
            localStorage.clear()
            window.location.replace("/")
          }}
          className="flex justify-center items-center text-xs rounded-md px-5 py-2 border border-rose-500 text-rose-500 font-semibold hover:bg-rose-500 hover:text-cust-white transition-all">
          Logout ➡️
        </button>
      </div>
    </nav>
  )
}

export default Navigation
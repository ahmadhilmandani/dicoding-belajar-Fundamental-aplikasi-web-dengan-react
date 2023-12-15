import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="w-full min-h-screen p-6 bg-cust-white flex justify-center items-center">
      <Outlet />
    </div>
  )
}

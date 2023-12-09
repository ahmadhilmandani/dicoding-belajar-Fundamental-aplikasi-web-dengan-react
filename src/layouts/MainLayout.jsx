import { Outlet } from "react-router-dom"

export default function Index() {
  return (
    <div className="w-full min-h-screen">
      <Outlet />
    </div>
  )
}

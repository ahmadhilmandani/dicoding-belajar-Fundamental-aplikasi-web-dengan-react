import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Index() {
  return (
    <div className="w-full min-h-screen p-6 bg-cust-white">
      <Navigation />
      <Outlet />
    </div>
  )
}

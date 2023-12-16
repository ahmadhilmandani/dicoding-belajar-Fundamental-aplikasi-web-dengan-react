import PropsTypes from 'prop-types'
import { ThemeDataContext } from "../context/themeData"
import { useContext } from "react";

export default function IconButton({ children, onClick }) {
  const themeData = useContext(ThemeDataContext)

  return (
    <div onClick={onClick} className={`px-2 py-1 flex-1 border rounded-lg hover:translate-y-1 transition-all duration-150 cursor-pointer hover:border-b-4 text-xs flex flex-col gap-1 items-center justify-center 
    ${themeData == "dark" ? " border-cust-white" : "border-cust-black"}`}>
      {children}
    </div>
  )
}

IconButton.propTypes = {
  children: PropsTypes.element.isRequired,
  onClick: PropsTypes.func.isRequired,
}
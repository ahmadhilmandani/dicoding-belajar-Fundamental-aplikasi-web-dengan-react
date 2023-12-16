import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { ThemeDataContext } from "../context/themeData"
import { useContext } from "react";
export default function CustLink({ href, children }) {
  const themeData = useContext(ThemeDataContext) 
  return (
    <>
      <Link to={href} className={`block w-full mt-5  rounded-lg py-2 text-xs text-center font-medium hover:opacity-90 transition-all duration-150 ${themeData == "dark" ? "text-cust-black bg-cust-white" : "bg-cust-black text-cust-white"}`}>
        {children}
      </Link>
    </>
  )
}

CustLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
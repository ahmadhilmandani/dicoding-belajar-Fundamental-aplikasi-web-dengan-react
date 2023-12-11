import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function CustLink({ href, children }) {
  return (
    <>
      <Link to={href} className="block w-full mt-5 bg-cust-black text-cust-white rounded-lg py-2 text-xs text-center font-medium hover:opacity-90 transition-all duration-150">
        {children}
      </Link>
    </>
  )
}

CustLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
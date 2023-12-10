import PropsTypes from 'prop-types'

export default function IconButton({ children, onClick }) {
  return (
    <div onClick={onClick} className="px-2 py-1 flex-1 border border-cust-black rounded-lg hover:translate-y-1 transition-all duration-150 cursor-pointer hover:border-b-4 text-xs flex flex-col gap-1 items-center justify-center">
      {children}
    </div>
  )
}

IconButton.propTypes = {
  children: PropsTypes.element.isRequired,
  onClick: PropsTypes.func.isRequired,
}
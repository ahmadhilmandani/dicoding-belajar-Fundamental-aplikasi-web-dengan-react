import PropsTypes from 'prop-types'

export default function TextButton({ children = 'Button', isPrimary, textSize = '14px', padding = '8px', onClick, isDisabled=false }) {
  if (isPrimary) {
    return (
      <button disabled={isDisabled} onClick={(e) => {
        e.preventDefault()
        onClick()
      }} className='block w-full bg-cust-black text-cust-white rounded-lg py-2 font-medium hover:opacity-90 transition-all duration-75' style={{ fontSize: textSize, padding: padding }}>{children}</button>
    )
  }
  else {
    return (
      <button onClick={(e) => {
        e.preventDefault()
        onClick()
      }} className='block w-full rounded-lg py-2 font-medium border border-cust-black hover:bg-cust-black transition-all duration-75 hover:text-cust-white' style={{ fontSize: textSize, padding: padding }}>{children}</button>
    )
  }
}

TextButton.propTypes = {
  children: PropsTypes.string.isRequired,
  isPrimary: PropsTypes.bool,
  textSize: PropsTypes.string,
  padding: PropsTypes.string,
  onClick: PropsTypes.func.isRequired,
  isDisabled: PropsTypes.bool
}
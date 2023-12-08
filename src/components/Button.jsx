/* eslint-disable react/prop-types */

function Button({ children = 'Button', isPrimary, textSize = '14px', padding = '8px', onClick }) {
  if (isPrimary) {
    return (
      <button onClick={(e)=>{
        e.preventDefault()
        onClick()}} className='block w-full bg-cust-black text-cust-white rounded-lg py-2 font-medium hover:opacity-90 transition-all duration-75' style={{ fontSize: textSize, padding: padding }}>{children}</button>
    )
  }
  else {
    return (
      <button onClick={(e)=>{
        e.preventDefault()
        onClick()}} className='block w-full rounded-lg py-2 font-medium border border-cust-black hover:bg-cust-black transition-all duration-75 hover:text-cust-white' style={{ fontSize: textSize, padding: padding }}>{children}</button>
    )
  }
}
export default Button
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-18">
      <h4 className = 'bg-black text-white uppercase rounded-full px-6 py-1.5 flex items-center justify-center'>Target Audience</h4>
      <button className='bg-gray-200 rounded-full py-2 px-5 uppercase text-black text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar

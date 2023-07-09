import React from 'react'
import vector from './Image/Vector.png'
function Navbar2() {
  return (
   <nav className='bg-transparent p-5 shadow md:flex md:items-center md:justify-between '>
    <div>
        <span className='font-black text-4xl cursor-pointer  '>
        <img className='h-8 mx-2 inline'  src={vector} alt="" srcset="" />
        FASHION 
        </span>
        </div>
        <ul className='cursor-pointer items-center flex gap-4 font-normal  '>
        <li>CATALOGUE</li>
                <li>FASHION</li>
                <li>FAVOURITE</li>
                 <li>LIFESTYLE</li>
                 <button className='bg-black text-white w-24 h-12 rounded-md text-lg'>SIGN UP</button>
        </ul>
   </nav>
  )
}

export default Navbar2

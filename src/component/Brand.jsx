import React from 'react'
import hm from './Image/Rectangle 36.png'
import obey from './Image/Rectangle 44.png'
import shopify from './Image/Rectangle 38.png'
import lacoste from './Image/Rectangle 45.png'
import levis from './Image/Rectangle 43.png'
import amazon from './Image/Rectangle 41.png'

function Brand() {
  return (
    <div className=' bg-[#EBD96B] mt-5 mb-5 h-28 '>
        <div className='flex gap-28 justify-center  pt-5' >
      <img className='w-28' src={hm} alt="" srcset="" />
      <img  className='w-28' src={obey} alt="" srcset="" />
      <img  className='w-28' src={shopify} alt="" srcset="" />
      <img  className='w-28' src={lacoste} alt="" srcset="" />
      <img  className='w-28' src={levis} alt="" srcset="" />
      <img  className='w-28' src={amazon} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Brand

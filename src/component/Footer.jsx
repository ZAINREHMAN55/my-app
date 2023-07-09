import React from 'react'
import facebook from './Image/facebook.png'
import instagram from './Image/instagram.png'
import twitter from './Image/twitter.png'
import linkdin from './Image/linkdin.png'
function Footer() {
  return (
    <>
    <div className='bg-[#000000] w-[88.9rem] mt-[3.4rem] h-[20rem]'>
      <div className='text-start'>
        <span className='text-[#ffff] flex font-black text-4xl pt-14 px-16'>FASHION</span>
        <br />
        <span className='text-[#8E8E8E] flex mx-16 font-normal text-1xl hover:text-[#ffff] cursor-pointer'>Complete your style with awesome <br /> clothes from us.</span>
      </div>
      <div className='flex gap-4 px-[4rem] mt-5'>
      <div className='bg-[#EBD96B] w-[2.8rem] h-[2.8rem]  rounded-2xl hover:bg-[#ffff] cursor-pointer '>
        <img className='px-4 pt-2' src={facebook} alt="" srcset="" />
    </div>
    <div className='bg-[#EBD96B] w-[2.8rem] h-[2.8rem]  rounded-2xl  '>
        <img className='mx-3 mt-[0.6rem]' src={instagram} alt="" srcset="" />
    </div>
    <div className='bg-[#EBD96B] w-[2.8rem] h-[2.8rem]  rounded-2xl hover:bg-[#ffff] cursor-pointer'>
        <img className='mx-3 mt-[0.8rem]'  src={twitter} alt="" srcset="" />
    </div>
    <div className='bg-[#EBD96B] w-[2.8rem] h-[2.8rem]  rounded-2xl hover:bg-[#ffff] cursor-pointer'>
        <img className='px-[0.8rem] mt-[0.7rem]  ' src={linkdin} alt="" srcset="" />
    </div>
    </div>
    
    <div className='flex  -mt-[12rem] gap-64 mx-20  justify-end'>
      <ul className='text-[#D9D9D9] flex-initial gap-44 text-start '>
        <li className=' text-[#D9D9D9] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Company</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>About</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Contact us</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Support</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Careers</li>
      </ul>
      <ul className='text-[#D9D9D9] flex-initial gap-44 text-start '>
        <li className=' text-[#D9D9D9] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '> Quick Link</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Share Location</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Orders Tracking</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '> Size Guide</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '> FAQs </li>
      </ul>
      <ul className='text-[#D9D9D9] flex-initial gap-44 text-start  '>
        <li className=' text-[#D9D9D9] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '> Legal</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Terms & condition</li>
        <li className=' text-[#8E8E8E] font-normal text-1xl pt-5 hover:text-[#ffff] cursor-pointer '>Privacy Policy</li>
      </ul>
    </div>
    </div>
    
    </>
  )
}

export default Footer

import React from 'react'
import larki1 from './Image/larki1.png'
import Vector9 from './Image/Vector 9.png'
function Section() {
  return (
    <>
      <section className='bg-[#F4F6F5] w-[1300px] h-[620px] mx-16 mt-8 rounded-[50px] flex  '>
        <div className='text-7xl font-extrabold  leading-[120px]... mx-32 mt-12 -rotate-1 text-start leading-tight  '>LET’S <br /> EXPLORE <br /> <span className='bg-[#EBD96B] w-40 h-40  rotate-1'> UNIQUE </span><br /> CLOTHES. </div>
        <div className='mt-[27rem] -mx-[29rem] font-normal text-2xl -rotate-1' >Live for Influential and Innovative fashion!</div>
        <button className='bg-black text-white w-36 h-14 font-medium  absolute rounded-md text-lg mt-[31rem] mx-[22rem]'>Shop Now</button>
        <img className='w-36 h-7 mt-[32rem] mx-[4rem] -rotate-1' src={Vector9} alt="" srcset="" />
       
      </section>
        <img className='w-[38rem] h-[35rem] mx-[45rem] -mt-[35rem]' src={larki1} alt="" srcset="" />
    
    </>
      
  )
}

export default Section


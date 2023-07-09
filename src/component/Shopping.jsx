import React from 'react'

function Shopping() {
  return (
    <>
    <div className='bg-[#E5C643] w-[88.9rem] h-[21rem]  flex justify-center'>
        <span className='pt-10 font-black text-4xl text-[#FFFFFF]  leading-[70px]...'>JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</span>
    </div>
    <div className='flex -mt-[11rem] justify-center'>
        <span className='font-normal text-[#ffffff] text-2xl'>Type your email down below and be young wild generation</span>
    </div>
    <div className='flex justify-center mt-8'>
      <input className='w-[25rem] h-[3.6rem] rounded-md px-5' type="text " placeholder='Add your email here' />
      
      
    </div>
    <button className='bg-black text-white w-24 h-12 rounded-md text-lg absolute mx-[6rem] -mt-[3.3rem]'>SIGN UP</button>
    
    </>
  )
}
export default Shopping

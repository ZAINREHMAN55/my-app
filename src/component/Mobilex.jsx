import React from 'react'
import Rectangle55 from './Image/Rectangle 55.png';
import Rectangle18 from './Image/Rectangle 18.png';
import Mobileapp from './Image/Mobile app.png' 
function Mobile() {
  return (
<>
    <div className='pt-40 flex mx-16'>
      <div className='text-start mx-12'>
        <span className='font-extrabold text-5xl'>DOWNLOAD APP & <br />
GET THE VOUCHER!</span>
<br />
<br />
<br />
<span className='text-[#7C7C7C] font-medium text-2xl mt-10 '>Get 30% off for first transaction using <br /> Rondovision mobile app for now. </span>
      </div>


    </div>
    <br />
    <br />
          <div className='flex mx-28 gap-8 '>
          <img className='w-[10rem]' src={Rectangle55} alt="" srcset="" />
          <img className='w-[10rem]' src={Rectangle18} alt="" srcset="" />
        </div>

        <div  >
        <img className='w-[35rem] -mt-[28rem] mx-[50rem]' src={Mobileapp} alt="" />
      </div>

        </>

  )
}

export default Mobile

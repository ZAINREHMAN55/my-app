import React from 'react'
import Vector9 from "./Image/Vector 9.png";
import Rectangle50 from './Image/Rectangle 50.png';
import Rectangle49 from './Image/Rectangle 49.png';
function Young() {
  return (
      <>
      <div>
         <span className="font-black text-4xl cursor-pointer flex mx-24 pt-16 ">
         Young’s Favourite
      </span>
      <img
        className="w-28 h-7 -mt-[4rem] mx-[25.5rem] block   -rotate-12  "
        src={Vector9}
        alt=""
        srcset=""
        />
    </div>
    <div className='flex '>
    <div className="pt-28">
        <img className="w-[35rem] mx-20 " src={Rectangle50} alt="" srcset="" />
        <span className="font-medium text-3xl flex mx-[4rem] pt-5">Trending on instagram</span>
        <br />
        <span className="text-[#7F7F7F] font-medium text-2xl flex mx-[4rem] -mt-5 ">Explore Now!</span>
      </div>
      <div className="pt-28">
        <img className="w-[35rem] mx-20 " src={Rectangle49} alt="" srcset="" />
        <span className="font-medium text-3xl flex mx-[4rem] pt-5">All Under $40</span>
        <br />
        <span className="text-[#7F7F7F] font-medium text-2xl flex mx-[4rem] -mt-5 ">Explore Now!</span>
      </div>
    </div>
        </>
  )
}

export default Young

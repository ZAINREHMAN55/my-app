import React from "react";
import Vector9 from "./Image/Vector 9.png";
import Rectangle20 from './Image/Rectangle 20.png';
import Rectangle21 from './Image/Rectangle 21.png';
import Rectangle22 from './Image/Rectangle 22.png';
function Arival() {
  return (
    <>
    <div >
      <span className="font-black text-4xl cursor-pointer flex mx-24 pt-10   ">
        NEW ARRIVALS
      </span>
      <img
        className="w-28 h-7 -mt-[4.1rem] mx-[23rem] block   -rotate-12  "
        src={Vector9}
        alt=""
        srcset=""
        />
    </div>
    <div className="flex grid-cols-3 mt-24">
      <div className="p-5">
        <img className="w-[20rem] mx-20 " src={Rectangle20} alt="" srcset="" />
        <span className="font-medium text-3xl flex mx-[4rem] pt-5">Hoodies & Sweetshirt</span>
        <br />
        <span className="text-[#7F7F7F] font-medium text-2xl flex mx-[4rem] -mt-5 ">Explore Now!</span>
      </div>
      <div className="p-5">
        <img className="w-[20rem] mx-20 " src={Rectangle21} alt="" srcset="" />
        <span className="font-medium text-3xl flex mx-[4rem] pt-5">Coats & Parkas</span>
        <br />
        <span className="text-[#7F7F7F] font-medium text-2xl flex mx-[4rem] -mt-5 ">Explore Now!</span>
      </div>
      <div className="p-5">
        <img className="w-[20rem] mx-20 " src={Rectangle22} alt="" srcset="" />
        <span className="font-medium text-3xl flex mx-[4rem] pt-5">Tees & T-Shirt</span>
        <br />
        <span className="text-[#7F7F7F] font-medium text-2xl flex mx-[4rem] -mt-5 ">Explore Now!</span>
      </div>
    </div>
        </>
  );
}

export default Arival;

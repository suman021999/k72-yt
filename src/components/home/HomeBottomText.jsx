import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <>
      <div className="font-[font1] text-white  flex items-center justify-center gap-2">

        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-36 flex items-center py-4 px-3 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6   ' to='/projects'>Projects</Link>
      </div>

      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-36 flex items-center py-4 px-3 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6 ' to='/agence'>agence</Link>
      </div>

      </div>
    </>
  );
};

export default HomeBottomText;

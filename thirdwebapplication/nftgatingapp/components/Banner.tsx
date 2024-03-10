import React from 'react'
import { IndividulalMovieFormat, ApiResponse } from "../utils/movieinterface";

interface MovieProps {
    Singlemovie: IndividulalMovieFormat;
  }
  


const Banner = ({ Singlemovie }: MovieProps) => {
//  bg-[image:var(--image-url)]
  return (
    <div className='w-full h-[75%]  '>
        <div className=" relative overflow-hidden rounded-lg bg-cover bg-no-repeat  p-3 flex-col justify-start items-center  bg-blend-overlay " style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${Singlemovie.poster_path})`}}  >
            <div className="text-[52px] font-bold text-white text-left mt-5 p-1">{Singlemovie.title}</div>
            <p className="text-slate-300 text-[12px] leading-[15px] text-left font-light  mt-2 p-3">
            {" "}
            {Singlemovie.overview}
          </p>
         <div className="p-3 mt-2 flex justify-start items-center ">
            <button className='w-[67px] p-6 text-sm  bg-blue-800 text-white' >
             Know More   
            </button>
            <button className='w-[67px] p-6 text-sm  bg-white text-slate-700' >
              Go to   
            </button>
         </div>
          
      </div>
       
    </div>
  )
}

export default Banner

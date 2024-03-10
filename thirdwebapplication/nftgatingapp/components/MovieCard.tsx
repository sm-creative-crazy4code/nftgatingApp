import React from "react";
import { IndividulalMovieFormat, ApiResponse } from "../utils/movieinterface";

interface MovieProps {
  movie: IndividulalMovieFormat;
}


const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="w-[95%] h-[453px] bg-slate-700 my-5 rounded-md group">
      <div className=" w-full h-full rounded-md relative  overflow-hidden">
        <img
          className="w-full h-full rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div className="absolute w-full h-full bg-black -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-70 transition-all duration-300 p-6">
          <h1 className="text-white z-10 text-[23px] font-bold">
            {movie.title}
          </h1>
          <p className="text-slate-300 text-[12px] leading-[15px] text-left font-light  mt-4">
            {" "}
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

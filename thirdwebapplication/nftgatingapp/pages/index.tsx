import { ConnectWallet, ThirdwebSDK ,useUser} from "@thirdweb-dev/react";
import { getSession, useSession } from "next-auth/react";
import requests from "../utils/requests";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import {Navigation,Banner} from "../components"
import { NextPage } from "next";
import Thirdweb, { getUser } from "./api/auth/[...thirdweb]";
import { Sepolia } from "@thirdweb-dev/chains";
import checkbalance from "../utils/checkbalance";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { IndividulalMovieFormat,ApiResponse } from "../utils/movieinterface";


interface MoviePosterProps{
  fetchedMovies:IndividulalMovieFormat[];
}

export const GetServerSidePropses:GetServerSideProps<MoviePosterProps>=async()=>{
  const APIresponse= await fetch("https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=586a1ea1e9b2264150386e47403bb220");
  const movieResponse:ApiResponse = await APIresponse.json();
  console.log(movieResponse)
  return {
    props :{
       fetchedMovies: movieResponse.results
    }
  }

}

export default function Home  ({fetchedMovies}:MoviePosterProps){

  const{isLoggedIn,isLoading}=useUser();
  const router= useRouter();
 useEffect(()=>{
  if( !isLoggedIn && !isLoading){
    router.push("/login");
   }


  },[isLoggedIn,isLoading,router])

  return (

 
    <main className="w-full h-full bg-gray-900 ">
     <Navigation/>
     
       {/* {console.log(fetchedMovies)}  */}
     <div className="flex-col justify-center item-center">

      {fetchedMovies.map((movie)=>(
        <div className="w-[100px] h-[100px] bg-slate-700 ">
         <div className="w-full h-1/2">
          <img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
          <h1 className="text-white font-bold">{movie.title}</h1>

        </div>

      ))}
      
      
      </div>        
         
    
    </main>
  )
};



export async function getServerSideProps(context:any){
  //user access check
  const user= await getUser(context.req);
  const session= await getSession(context);

  if(!user){
    return{
      redirect:{
        destination:"/login",
        permanent:false,
      }
    }
  }

  const secretKey= process.env.SECRET_KEY;
  if(!secretKey){
    throw new Error("No secret key specified")
  }

  //check if user holds nft
  const sdk=ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY as string,
    Sepolia,
    {secretKey:process.env.SECRET_KEY }

  );

  const tokenBalance= await checkbalance(sdk,user.address);

  if (tokenBalance.toNumber() ===0){
    return{
      redirect:{
        destination:"/mint",
        permanent:false,
      }
    }

  }

  const APIresponse= await fetch("https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=586a1ea1e9b2264150386e47403bb220");
  const movieResponse:ApiResponse = await APIresponse.json();
  console.log(movieResponse)



//   const[
//     moviePosters,
//     trendingNow,
//     toprated,
//     actionMovies,
//     comedyMovies,
//     horrorMovies,
//     romanceMovie,
//     documentaries,
// ]= await Promise.all([
//      fetch(requests.fetchMoviePoster).then((res)=>res.json),
//      fetch(requests.fetchTrending).then((res)=>res.json),
//      fetch(requests.fetchTopRated).then((res)=>res.json),
//      fetch(requests.fetchActionMovie).then((res)=>res.json),
//      fetch(requests.fetchComedyMovie).then((res)=>res.json),
//      fetch(requests.fetchHorrorMovie).then((res)=>res.json),
//      fetch(requests.fetchRomanceMovie).then((res)=>res.json),
//      fetch(requests.fetchDocumantaryMovie).then((res)=>res.json),
// ]);

  



  return {
    props:{
     session,
     fetchedMovies: movieResponse.results
    //  moviePosters:moviePosters.results,
    //  trendingNow:trendingNow.results,
    //  toprated: toprated.results,
    //  actionMovies:actionMovies.results,
    //  comedyMovies:comedyMovies.results,
    //  horrorMovies:horrorMovies.results,
    //  romanceMovie:romanceMovie.results,
    //  documentaries:documentaries.results,

    }
  }

};


import React,{useState,useEffect} from 'react'
import MovieDetails from './MovieDetails'

const Banner = ({MoviePoster:any}) => {
  const [movie,setMovie]=useState(null)
  const [trailer,setTrailer] = useState("")
  const [showplayer,setShowplayer] = useState(false)


  useEffect(() =>{
   const mov=MoviePoster[Math.floor(Math.random()*MoviePoster.length)];
   fetch(
    `https://api.themoviedb.org/3/movie/${mov.id}?api_key=${process.env.TMBD_API_KEY}&language=en-US&append_to_response=videos`
   ).then((res)=>res.json())
   .then((data)=>{
     console.log(`data:::`,data);

     const trailerIndex=data.videos.results.findIndex(
        (element)=>element.type==='Trailer'
     )


     const trailerURL=`https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`
     setTrailer(trailerURL)
   })
 
   setMovie(mov);


  },[MoviePoster])

  return (
    <div>
      <MovieDetails/>
    </div>
  )
}

export default Banner

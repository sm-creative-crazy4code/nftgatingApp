const API_KEY = process.env.TMBD_API_KEY
const BASE_URL= "https://api.themoviedb.org/3"

const requests={
 fetchTrending:`${BASE_URL}/trending/week?api_key=${API_KEY}&language=en-US`,
 fetchTopRated:`${BASE_URL}/discover/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchMoviePoster:`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=2133`,
 fetchActionMovie:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_generes=28`,
 fetchComedyMovie:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_generes=35`,
 fetchHorrorMovie:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_generes=27`,
 fetchRomanceMovie:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_generes=10749`,
 fetchDocumantaryMovie:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_generes=99`,
 };

 export default requests
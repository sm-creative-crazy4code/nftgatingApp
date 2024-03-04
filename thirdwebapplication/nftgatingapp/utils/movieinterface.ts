export interface IndividulalMovieFormat{
poster_path: string,
adult: boolean,
overview: string,
release_date: string,
original_title: string,
original_language: string,
title: string,
backdorp_path: string,
popularity: number,
vote_count: number,
vote_avarage: number,


}



export interface ApiResponse{
    results:IndividulalMovieFormat[],
}
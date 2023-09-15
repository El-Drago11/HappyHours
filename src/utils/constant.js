export const trendingApi = 'https://api.themoviedb.org/3/trending/all/week?api_key=61921c21ceb0e087ac30d788cd569b79&language=en-US';

export const sciApi = 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=28';

export const comedyApi = 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=35';

export const horrorApi = 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=27';

export const romanceApi = 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=10749';

export const documentryApi = 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=99';

export const urlApi = 'https://api.themoviedb.org/3/discover/tv?api_key=61921c21ceb0e087ac30d788cd569b79&with_networks=213'

export const baseUrl  = "https://image.tmdb.org/t/p/original/"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMBD_Key}`
  }
};

export const SUPPORTED_LANG = [{identifier: 'en',name:'English'},{identifier: 'hindi',name:'hindi'},{identifier: 'spanish',name:'Spanish'}]

export const BackImage = "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
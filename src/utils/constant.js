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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTkyMWMyMWNlYjBlMDg3YWMzMGQ3ODhjZDU2OWI3OSIsInN1YiI6IjY0YTAwYWM3ODFkYTM5MDBhZDJiNzJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Wzom-OQr3LpiZycuIV7jN7ARQyoXL9yYN3ebmdfxLw'
  }
};

export const SUPPORTED_LANG = [{identifier: 'en',name:'English'},{identifier: 'hindi',name:'hindi'},{identifier: 'spanish',name:'Spanish'}]

export const OPENAI_Key = "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"
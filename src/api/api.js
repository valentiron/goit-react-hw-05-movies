const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0021cd5d6cc61e1e538bcb0b8bcd461c';

// export function getMoviesInfo(typeQuery, movieId, searchQuery) {
//   let options;
//   let queryVariants = '';

//   switch (typeQuery) {
//     case 'search':
//       options = `search/movie`;
//       queryVariants = `&query=${searchQuery}`;
//       break;

//     case 'details':
//       options = `/movie/${movieId}`;
//       break;

//     case 'cast':
//       options = `/movie/${movieId}/credits`;
//       break;

//     case 'reviews':
//       options = `/movie/${movieId}/reviews`;

//     case 'trend':
//       options = `trending/all/day`;

//     default:
//       console.log('Not valid type of query');
//   }

//   return fetch(`${BASE_URL}${options}?api_key=${API_KEY}${queryVariants}`).then(res => res.json());
// }


export function getTrendingMovies() {
    return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      .then(res => res.json());
  };
  
  export function getSearchMovies(searchQuery) {
    return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(res => res.json());
  };
  
  export function getMovieDetails(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => res.json());
  };
  
  export function getMovieDetailsCast(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(res => res.json());
  };
  
  export function getMovieDetailsReviews(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(res => res.json());
  };

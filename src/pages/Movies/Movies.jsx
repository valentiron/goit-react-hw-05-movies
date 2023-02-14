import { useState, useEffect } from 'react';
import { getSearchMovies } from '../../api/api';
import  SearchBox  from '../../components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, isSearchQuery] = useState('');
  const [moviesList, isMoviesList] = useState([]);
  const [searchParam, isSearchParam] = useSearchParams();

  function onSearchSubmit(event) {
    event.preventDefault();

    const currentQuery = event.target.name.value;

    isSearchQuery(currentQuery !== '' ? currentQuery : '');
    isSearchParam(currentQuery !== '' ? { query: currentQuery } : {});
  }

  useEffect(() => {
    isSearchQuery(searchParam.get('query'));

    if (searchQuery) {
      getSearchMovies(searchQuery).then(res => {
        isMoviesList(res.results);
      });
    }
  }, [searchQuery, searchParam]);

  return (
    <section>
        <SearchBox onSubmit={onSearchSubmit}/>
        {moviesList.length > 0 && searchQuery && <MoviesList moviesList={moviesList}/>}
    </section>
  )
};

export default Movies;
import { useState, useEffect } from "react";
import { getTrendingMovies} from '../../api/api';
import {MoviesList} from '../../components/MoviesList/MoviesList';

const Home = () => {
    const [moviesList, isMoviesList] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(res => {
            isMoviesList(res.results);
        })
    }, []);


    return (
        <section>
            <h1>Trending movies</h1>
            {moviesList.length > 0 && <MoviesList moviesList={moviesList}/>}
        </section>
    )
}

export default Home;
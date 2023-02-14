import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const MovieDetailsCast = lazy(() => import('./MovieDetailsCast/MovieDetailsCast'));
const MovieDetailsReviews = lazy(() => import('./MovieDetailsReviews/MovieDetailsReviews'));

export const App = () => {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieDetailsCast />} />
              <Route path="reviews" element={<MovieDetailsReviews />}/>
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      );
}
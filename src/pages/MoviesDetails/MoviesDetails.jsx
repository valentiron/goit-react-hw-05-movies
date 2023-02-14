import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, isMovieDetail] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => {
        if (res.status !== 'Released') {
          console.log(res.status_message);
          return;
        }

        isMovieDetail(res);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const {
    name,
    title,
    release_date,
    overview,
    genres,
    poster_path,
    vote_average,
  } = movieDetails;
  const releaseYaer = new Date(release_date);
  let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  if (!poster_path) {
    poster =
      'https://img.freepik.com/free-vector/neon-style-coming-soon-background_1017-33735.jpg';
  }

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <section>
        <ButtonBack />
        <div className={css.details}>
          <img className={css.img} src={poster} alt={title || name} width="240" height="320" />
          <div className={css.description}>
            <h2>
              {title || name} ({releaseYaer.getFullYear()})
            </h2>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>
              {genres &&
                genres.length > 0 &&
                genres.map(genr => genr.name).join(', ')}
            </p>
          </div>
        </div>
      </section>
      <section className={css.info}>
        <p>Addination information</p>
        <ul className={css.nav}>
          <li>
            <NavLink className={css.navLink} to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink}to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Outlet />
        </section>
      </Suspense>
    </>
  );
};

export default MovieDetails;

import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {moviesList.map(item => (
        <li key={item.id}>
          <Link className={css.item} to={`/movies/${item.id}`} state={{from: location}}>{item.title || item.name} </Link>
        </li>
      ))}
    </ul>
  );
};  



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsReviews } from '../../api/api';

const MovieDetailsReviews = () => {
    const {movieId} = useParams();
    const[movieDetailsReviews, isMovieDetailsReviews] = useState(null);

    useEffect(() => {
        getMovieDetailsReviews(movieId).then(res => {
            if(res.total_results) {
                isMovieDetailsReviews(res.results);
            }
        }).catch(error => console.log(error));
    }, [movieId]);

    if(!movieDetailsReviews) {
        return;
    }

    return (
        <>
        <ul>
          {movieDetailsReviews.map(item => {
            const { id, author, content } = item;
            
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            )}
          )}
        </ul>
      </>
    )
}

export default MovieDetailsReviews;
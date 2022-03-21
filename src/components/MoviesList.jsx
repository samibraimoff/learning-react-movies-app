import React from 'react';
import { MovieItem } from './MovieItem';

export const MoviesList = (props) => {
  const { movies = [] } = props;
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => <MovieItem movie={movie} key={movie.imdbID} />)
      ) : (
        <h3>No films found</h3>
      )}
    </div>
  );
};

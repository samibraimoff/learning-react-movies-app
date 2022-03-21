import React from 'react';

export const MovieItem = ({ movie }) => {
  const {
    imdbID: id,
    Year: year,
    Title: title,
    Type: type,
    Poster: poster,
  } = movie;
  return (
    <div id={id} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        {poster === 'N/A' ? (
          <img
            className='activator'
            src={`https://via.placeholder.com/468x60?text=${title}`}
            alt={title}
          />
        ) : (
          <img className='activator' src={poster} alt={title} />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title} - {year}
          <span className='right'>{type}</span>
        </span>
      </div>
    </div>
  );
};

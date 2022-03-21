import React, { useState, useEffect } from 'react';

export function Search(props) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      props.searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    props.searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id='email_inline'
          type='search'
          placeholder='Search...'
          className='validate'
          onKeyDown={handleSearch}
        />
        <button
          className='btn search-btn'
          onClick={() => props.searchMovies(search, type)}
        >
          Search
        </button>
      </div>

      <div>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies</span>
        </label>

        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}

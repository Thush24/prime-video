/* eslint-disable react/prop-types */
import React from 'react';

function Details({
  casting, languages, captions, genre,
}) {
  return (
    <>
      <ul className="DetailsList">
        <li>
          <span>Directors:</span>
          {' '}
          <div>{casting.directors.join(', ')}</div>
        </li>
        <li>
          <span>Main actors:</span>
          <div>{casting.actors.join(', ')}</div>
        </li>
        <li>
          <span>Genres:</span>
          <div>{genre}</div>
        </li>
        <li>
          <span>Subtitles:</span>
          <div>{captions.join(', ')}</div>
        </li>
        <li>
          <span>Audio languages:</span>
          <div>{languages.join(', ')}</div>
        </li>
      </ul>
    </>
  );
}

export default Details;

import React from 'react';

import { useState } from "react";
import "milligram";



const movies_init = [
  { title: "Wall-E" },
  { title: "Pulp Fiction" },
  { title: "Matrix" },
  { title: "1670" },
];

function App() {
  const [title, setTitle] = useState('Podaj tytuł filmu');
  const [year, setYear] = useState('Podaj rok');
  const [movies, setMovies] = useState(movies_init);


  function clearYear(event) {
    setYear('');
  }

  function clearTitle(event) {
    setTitle('');
  }

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeYear(event) {
    setYear(event.target.value);
  }

  function handleMovieAdd() {
    setMovies([...movies, {title: title}]);
  }





  let message;
  if (title.length < 5) {
    message = "Tutuł jest za krótki. Nagrywają takie filmy?";
  } else if (title.length < 15) {
    message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
  } else {
    message = "Tytuł jest za długi, nikt tego nie zapamięta.";
  }


  return (
    <div>
      <h2>My favourite movie for today is {title}</h2>
      <input type="text" value={title} onChange={handleChangeTitle} onClick={clearTitle} title='Tytuł' />
      <input type="text" value={year} onChange={handleChangeYear} onClick={clearYear} title='Tytuł' />


      <div>{message}</div>

      <button type="button" onClick={handleMovieAdd}>
        Pokaż tytuł filmu
      </button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>

    </div>

  );
}

export default App;
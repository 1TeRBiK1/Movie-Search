import React, { useEffect, useState } from 'react'
import Header from './Movies/Header'
import Main from './Movies/Main'



function App() {

  const [ movies, setMovies ] = useState([])
  const [ error, setError ] = useState(false)

  function newSearch(nameFilms = 'Avengers') {
    fetch(`https://www.omdbapi.com/?s=${nameFilms}&page=1&apikey=25be5195`)
      .then(response => response.json())
      .then(data => {
        if(data.Response !== "True" ) setError(true)
        else {
          setError(false)
          setMovies(data.Search)
        }
      })
  }

  useEffect( () => newSearch(), [] )

  return (
    <div className="App">
      <Header searchMovies={newSearch} errorSearch={error}/>
      {error ? <div /> : <Main movies = { movies } />}
    </div>
  );
}

export default App;

import React from 'react'
import Movie from './Movie'


export default function Main({movies}){
    return (
        <div className="containerMovies">
            {movies.map(movie => <Movie info={movie} key={movie.imdbID}/>)}
        </div>
    )
}
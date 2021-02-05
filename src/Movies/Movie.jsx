import React, { useEffect, useState } from 'react'

function useRating(imdbID) {
    const [ rating, setRating ] = useState('')
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=912e5ad3`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setRating(data.imdbRating)})
        .catch((e) => console.log(e))
        
    },[])
    return rating
}

function setColorRating(rating){
    if(rating >= 7.5) return 'green'
    else if(rating >= 5.5) return 'orange'
    else return 'red'
}

export default function Movie({info}){

    const rating = useRating(info.imdbID)
    return (
        <div className="containerFilm">
            <div className="movie">
                <img src={info.Poster} className = "poster" />
                <div className = "movieInfo">
                    <span className="titleMovie">
                        <a href={`https://www.imdb.com/title/${info.imdbID}`} target="_blank">{info.Title}</a>
                    </span>
                    <span className={`rating ${setColorRating(rating)}`}>{rating}</span>
                </div>
            </div>
        </div>
    )
}
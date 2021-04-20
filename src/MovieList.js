import React,{useContext} from 'react'

import {MovieContext} from './MovieContext'

const MovieList=()=>{
    const [movies,setMovies]=useContext(MovieContext)
   

    return (
        <div>
            {
               movies.map(movie=>{
                   return(
                       <div key={Math.random()} >
                   <div>{movie.name}</div>
                    <div>{movie.price}</div>
                    </div>
                    )
                   
               }) 
            }
        </div>
    )
}

export default MovieList
import React,{useContext,useState} from 'react'
import {MovieContext} from './MovieContext'

 const AddMovies=()=>{
     const [movies,setMovies]=useContext(MovieContext)
     const [movieName,setMovieName]=useState('')
     const [ticketPrice,setTicketPrice]=useState(0)

    const addMovie=(e)=>{
        e.preventDefault()
        console.log("add movie")
        setMovies(
        [...movies,{ 
            name:movieName,
            price:ticketPrice,
            id:Math.random()
        }])
        setMovieName('')
        setTicketPrice(0)
    }
    return(
        <form>
            <input type="text" 
                name="movieName" 
                value={movieName} 
                onChange={(e)=>{setMovieName(e.target.value)}}
            />
            <input type="text" 
            name="ticketPrice"
            value={ticketPrice}
            onChange={(e)=>{setTicketPrice(e.target.value)}}
            />
            <button onClick={addMovie}>Add Movie</button>
        </form>
    )
}

export default AddMovies
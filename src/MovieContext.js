import React,{useState,createContext} from 'react'

export const MovieContext=createContext()

export const MovieProvider=(props)=>{
    const [movies,setMovies]=useState([
        {
            name:'Spiderman 1',
            price:10,
            id:Math.random()
        },
        {
            name:'Spiderman 2',
            price:15,
            id:Math.random()
        },
        {
            name:'Spiderman 3',
            price:20,
            id:Math.random()
        }
    ])
    return <MovieContext.Provider value={[movies,setMovies]}>
    {props.children}
    </MovieContext.Provider>
}




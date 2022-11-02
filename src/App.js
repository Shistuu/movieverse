import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=e58a1d26";

const movie1 = {
    "Title": "Avengers: Endgame and the Latest Captain Marvel Outrage!!",
    "Year": "2019",
    "imdbID": "tt10025738",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg"
}
const App = () => {
    const [searchTerm, setSearchTerm]= useState("");
    const [movies, setMovies]= useState([]);
    
    useEffect(() => {
        searchMovies('Harry Potter');
    }, []);

    const searchMovies = async (title) => { //to fetch the movies
        const response = await fetch(`${API_URL}&s=${title}`); //call API
        const data = await response.json(); //inside data obj we should have the details of the movie
        setMovies(data.Search); //gives access to our movies
    };

    return (
        <div className="app">
             <div className="container">
            <h1>THE MOVIEVERSE</h1>
            <h1>THE MOVIEVERSE</h1>
            </div>


            <div className="search">
                <input
                    placeholder="Find your movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //e-event
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} //if you'd written a particular movie, it'd be static but you wrote searchTerm so it's dynamic
                />
            </div>
            {
                movies?.length>0 
                ?
                (
                    <div className="container">
                        {
                            movies.map((movie)=> (
                                <MovieCard movie={movie}/>
                            ))
                        }
               {/* <MovieCard movie={movie1}/> */}
            </div>
                ) :
                (
                    <div className="empty">
                        <h2> We don't have the movie! :( </h2>
                    </div>
                )

            }
        </div>
    );
}

export default App;
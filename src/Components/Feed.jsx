import React, { useState, useEffect } from 'react'
import './Feed.css'
import './utils.css'

function Feed() {
    const [movies, setMovies] = useState([]);

    const API = 'http://www.omdbapi.com/?apikey=83c91151&'

    const getMovie = async (title) => {
        // try {
        const response = await fetch(`${API}&s={title}`);
        // if (response.ok) {
        const data = await response.json();
        setMovies(data.Search)
        //   } else {
        //     const data = await response.json();
        //     console.error('Error:', data);
        //   }
        // } catch (error) {
        //   console.error("Error:", error.message)
    }
    // useEffect(() => {
    //     getMovie('Spiderman');
    // }, [])
    return (
        <div className='feed flex jc-'>
            {
                movies.map((movie) => {
                    return (

                        <div className='feed_card'>
                            <div className="title-wrapper flex fd-column">
                                <h2>{movie.Title}</h2><br />
                                <p>{movie.Year}</p><br />
                            </div>
                            <img src={movie.Poster} alt="Poster" />
                            <button>Play</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Feed
import React from 'react'
import './Feed.css'
import './utils.css'

function Feed({ movies }) {
    return (
        <div className='feed flex'>
            {
                movies.map((movie) => {
                    return (
                        <div className='feed_card'>
                            <div className="title-wrapper flex fd-column">
                                <h2>{movie.Title}</h2><br />
                                <p>{movie.Year}</p><br />
                            </div>
                            {movie.Poster !== "N/A" ? (
                                < img className='poster' src={movie.Poster} alt="Poster" />
                            ) : (<div className='poster no_poster'><p>POSTER NOT AVAILABLE</p></div>)
                            }
                            <button>Play</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Feed
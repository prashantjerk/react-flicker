import React from 'react'
import './Feed.css'
import './utils.css'

function Feed({ movies }) {
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
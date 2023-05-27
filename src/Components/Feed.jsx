import React from 'react'
import './Feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className='feed_card'>
                <div className="title-wrapper flex fd-column jc-start">
                    <h2>The Shawshank Redemption</h2><br />
                    <p>1995</p><br />
                </div>
                <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" alt="Poster" />
                <button>Play</button>
            </div>
        </div>
    )
}

export default Feed
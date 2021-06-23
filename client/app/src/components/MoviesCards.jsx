import React from 'react'

function MoviesCards(props) {
    return (
        <div class="card">
            <img src={props.movie.poster_path} alt="gambar" />
            <div class="descriptions">
                <h1>{props.movie.title}</h1>
                <p>
                    {props.movie.overview}
                </p>
                <button>
                    Details
                </button>
            </div>
        </div>
    )
}

export default MoviesCards

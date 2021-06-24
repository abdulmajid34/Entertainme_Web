import React from 'react'

function SeriesCards(props) {
    return (
        <div class="card-series">
            <img src={props.serie.poster_path} alt="gambar" />
            <div class="descriptions-series">
                <h1>{props.serie.title}</h1>
                <p>
                    {props.serie.overview}
                </p>
                <button>
                    Details
                </button>
            </div>
        </div>
    )
}

export default SeriesCards

import React from 'react'
import { useHistory } from 'react-router-dom'

function MoviesCards(props) {
    const history = useHistory()
    
    const handleDetail = (id) => {
        console.log(`berhasil ditekan ${id}`);
        history.push(`/movies/${id}`)
    }

    return (
        <div class="card">
            <img src={props.movie.poster_path} alt="gambar" />
            <div class="descriptions">
                <h1>{props.movie.title}</h1>
                <p>
                    {props.movie.overview}
                </p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => handleDetail(props.movie._id)}>
                    Details
                </button>
            </div>
        </div>
    )
}

export default MoviesCards

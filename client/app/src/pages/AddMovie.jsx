import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useMutation } from '@apollo/client'
import { ADD_MOVIES } from '../GraphQL/mutation'
import { GET_ALLDATA } from '../GraphQL/queries'
import { useHistory } from 'react-router-dom'
import Loading from './Loading'
import NotFound from './NotFound'
import Swal from 'sweetalert2'

function AddMovie() {
    const history = useHistory()

    const [addMovie, { loading, error }] = useMutation(ADD_MOVIES, {
        refetchQueries: [{
            query: GET_ALLDATA
        }],
        onError: (err) => {
          console.log(JSON.stringify(err, null, 2));
        }
    }) 

    let [ movie, setMovie ] = useState({
        title: "",
        overview: "",
        poster_path: "",
        popularity: "",
        tags: ""
    })

    const handleSubmit = () => {
        addMovie({
            variables: {
                input: {
                    title: movie.title,
                    overview: movie.overview,
                    poster_path: movie.poster_path,
                    popularity: Number(movie.popularity),
                    tags: movie.tags.split(',')
                }
            }
        })
        history.push('/home')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Added Your Movies',
            showConfirmButton: false,
            timer: 1500
          })
    }

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <NotFound />
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center BG-IMG to-blue-500  h-screen select-none">
                <div className="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-blue-600">
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl p-6 rounded-full text-white">Create Movies</div>
                    <div className="mt-10">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="relative w-full mb-3">
                                <input type="text" data-testid="form-error" aria-label="title" onChange={(e) => setMovie({ ...movie, title: e.target.value})} className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="title"  placeholder="title" />
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="text" data-testid="form-error" aria-label="overview" onChange={(e) => setMovie({ ...movie, overview: e.target.value})} className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="overview" placeholder="overview" />
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="text" data-testid="form-error" aria-label="poster_path" onChange={(e) => setMovie({ ...movie, poster_path: e.target.value})} className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="poster_path" placeholder="url images" />
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="text" data-testid="form-error" aria-label="popularity" onChange={(e) => setMovie({ ...movie, popularity: e.target.value})} className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="popularity" placeholder="rating popularity" />
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="text" data-testid="form-error" aria-label="tags" onChange={(e) => setMovie({ ...movie, tags: e.target.value})} className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="tags" placeholder="tags" />
                            </div>
                            <div className="text-center mt-6">
                                <input type="submit" className="p-3 rounded-lg bg-blue-600 outline-none text-white shadow w-32 justify-center focus:bg-blue-700 hover:bg-blue-500" value="Login" name="submit"  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMovie

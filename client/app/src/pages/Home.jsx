import React from 'react'
import Navbar from '../components/Navbar';
import { useQuery } from '@apollo/client'
import { GET_ALLDATA } from '../GraphQL/queries'
import Loading from './Loading'
import NotFound from './NotFound'
import MoviesCards from '../components/MoviesCards';

function Home() {
    const { loading, error, data } = useQuery(GET_ALLDATA)
    console.log(data, 'INI DATA NYA');

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <NotFound />
    }

    return (
        <div>
            <Navbar />
            <div className="w-full h-full bg-white flex p-5">
                <div className="flex overflow-y-hidden h-full">
                    <div class="wrapper">
                        {
                            data.movies.map((movie, idx) => <MoviesCards movie={movie} key={idx} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

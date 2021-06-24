import React from 'react'
import Navbar from '../components/Navbar';
import { useQuery } from '@apollo/client'
import { GET_ALLDATA } from '../GraphQL/queries'
import Loading from './Loading'
import NotFound from './NotFound'
import MoviesCards from '../components/MoviesCards';
import SeriesCards from '../components/SeriesCards';

function Home() {
    const { loading, error, data } = useQuery(GET_ALLDATA)
    // console.log(data, 'INI DATA NYA');

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <NotFound />
    }

    return (
        <>
            <Navbar />
            
            <div className="">
                <div className="overflow-y-hidden h-full flex-wrap">
                    <div class="wrapper">
                        {
                            data.movies.map((movie, idx) => <MoviesCards movie={movie} key={idx} />)
                        }
                    </div>
                </div>
                <div class="container px-5 py-24 mx-auto mr-10">
                    <h1 className=" text-left font-medium text-4xl">Movies List</h1>
                    <div class="flex flex-wrap">
                        <div class="series">
                            {
                                data.series.map((serie, index) => <SeriesCards serie={serie} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

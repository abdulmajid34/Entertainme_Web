import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-yellow-600 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">
            <Link to="/home">
                <span className="text-2xl text-grey-darkest hover:text-blue-dark font-sans font-bold ml-10 text-white cursor-pointer">Entertainme_web</span>
            </Link>
        </div>

        <div className="sm:mb-0 self-center mr-16">
            <Link to="/home">
                <span className="text-md text-white cursor-pointer hover:bg-yellow-600 font-bold px-1">Home</span>
            </Link>
            <Link to="/favorites">
                <span className="text-md text-white cursor-pointer hover:bg-yellow-600 font-bold px-1">Favorites</span>
            </Link>
            <Link to="/create">
                <span className="text-md text-white cursor-pointer hover:bg-yellow-600 font-bold px-1">AddMovies</span>
            </Link>
        </div>
        </nav>
    )
}

export default Navbar

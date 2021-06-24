import React from 'react'
import Logo from '../assets/404.svg'

function NotFound() {
    return (
        <div>
            <div className="h-screen w-screen bg-yellow-400 flex flex-col justify-center items-center">
			<img src={Logo} className="w-1/6 animate-pulse" alt="" />
		</div>
        </div>
    )
}

export default NotFound

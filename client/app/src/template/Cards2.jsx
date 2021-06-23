import React from 'react'

function Cards2() {
    return (
        <div>
            <div class="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
            <div className="">
                <h1>List Movies</h1>
            </div>
                <div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
                
                <div class="w-full mb-3 pb-3 border-b border-1 border-white">
                    <h3 class="text-xl font-semibold text-shadow">Something Good</h3>
                </div>
                
                <div>
                    <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image1" class="w-full h-48 object-cover mb-2" />
                    <p class="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                    </p>
                    <button class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                    </button>
                </div>
                </div>
                <div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">
                
                <div class="w-full mb-3 pb-3 border-b border-1 border-white">
                    <h3 class="text-xl font-semibold text-shadow">Something Good</h3>
                </div>
                
                <div>
                    <img src="https://i.postimg.cc/J4khxLqf/bg02.jpg" alt="image2" class="w-full h-48 object-cover mb-2" />
                    <p class="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                    </p>
                    <button class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                    </button>
                </div>
                </div>
                <div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">
                
                <div class="w-full mb-3 pb-3 border-b border-1 border-white">
                    <h3 class="text-xl font-semibold text-shadow">Something Good</h3>
                </div>
                <div>
                    <img src="https://i.postimg.cc/VNYLzb8w/bg03.jpg" alt="image3" class="w-full h-48 object-cover mb-2" />
                    <p class="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                    </p>
                    <button class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cards2

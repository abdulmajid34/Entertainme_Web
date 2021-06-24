import React from 'react'

function Create() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center BG-IMG to-blue-500  h-screen select-none">
                <div className="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-blue-600">
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl p-6 rounded-full text-white">Login</div>
                    <div className="mt-10">
                        <form method="post">
                            <div className="relative w-full mb-3">
                                <input type="email" data-testid="form-error" aria-label="email" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="email" value=""  placeholder="email" />
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="password" data-testid="form-error" aria-label="password" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" value=""  required name="password" placeholder="password" />
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

export default Create

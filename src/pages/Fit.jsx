import React from 'react'
import fitAvatar from '../assets/FitAvatar.png'
import PamelaAvatar from '../assets/FitAvatarAssis.png'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const Fit = () => {


  return (
    <div class = "text-center w-screen">
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <Link to='/pamela'><img class="mx-auto mb-4 w-16 h-16 rounded-full absolute" src={PamelaAvatar} alt="Fit"/></Link>
                        </div>
        <div class="grid  w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">

                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={fitAvatar} alt="Fit"/>
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Fit
                    </h3>

                </div>
        </div>

        <div class="flex items-center justify-center h-full">
            <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-500 animate-bounce dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sorry :{"("}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">I'm still learning.</p>
                </div>
            </div>
    </div>

  )
}

export default Fit
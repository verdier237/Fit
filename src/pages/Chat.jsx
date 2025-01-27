import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import fitAvatar from '../assets/FitAvatar.png'
import PamelaAvatar from '../assets/FitAvatarAssis.png'
const Chat = () => {
    return (
<div class = "text-center w-screen">
        
    <div class="grid  w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    
    <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              <div class="text-center text-gray-500 dark:text-gray-400">
              <Link to='/fit'>
                 <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={fitAvatar} alt="Fit"/>
              </Link>
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Fit
                  </h3>
                  <p><Link to='/fit'>Let's talk</Link></p>
    
              </div>
    
              <div class="text-center text-gray-500 dark:text-gray-400">
              <Link to='/pamela'><img class="mx-auto mb-4 w-36 h-36 rounded-full" src={PamelaAvatar} alt="Pamela"/></Link>
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Pamela
                  </h3>
                  <p><Link to='/pamela'>Need help ?</Link></p>
    
              </div>
    
    </div>
    
    
    
    
    
    
    </div>
    
    <div class="container mx-auto my-10 p-5 bg-gray-200 rounded shadow-lg  w-3/4">
            <div class="chat-window h-96 overflow-y-scroll">
               
                <div class="message flex mb-4">
                    <div class="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div class="ml-4 bg-gray-200 p-3 rounded-lg">
                        <p class="text-sm">Hi! How can I help you today?</p>
                    </div>
                </div>
                <div class="message flex mb-4 justify-end">
                    <div class="mr-4 bg-blue-200 p-3 rounded-lg">
                        <p class="text-sm">I need help with Tailwind CSS.</p>
                    </div>
                    <div class="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                </div>
    
            </div>
            <div class="mt-4">
    
            <form>   
        <label for="talk" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Message Fit</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clip-rule="evenodd"/>
            </svg>
    
            </div>
            <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-100 rounded-2xl bg-gray-50 focus:ring-green-200 focus:border-green-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message Fit" required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-6 h-6 white-gray-800 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd"/>
            </svg>
    
            </button>
        </div>
    </form>
    
            </div>
        </div>
        </div>
    
      )
}

export default Chat
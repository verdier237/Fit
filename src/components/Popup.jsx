import React from 'react'

const Popup = (props) => {
    const text = props.text
  return (
<div>
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <div className="flex justify-center items-center mt-4">
                            <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{text}.</p>
        </div>
    </div>
</div>
  )
}

export default Popup
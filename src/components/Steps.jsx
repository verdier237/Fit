import React from 'react'

const Steps = () => {
  return (
<div class="flex items-center justify-center h-full">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                <span class="ml-2">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Step 1</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Gather all the ingredients needed for the recipe.</p>
                </span>
            </label>
        </div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                <span class="ml-2">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Step 2</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Preheat the oven to the required temperature.</p>
                </span>
            </label>
        </div>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                <span class="ml-2">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Step 3</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Mix the ingredients in a bowl until well combined.</p>
                </span>
            </label>
        </div>
    </div>
</div>
  )
}

export default Steps
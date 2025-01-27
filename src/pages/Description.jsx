import React from 'react'
import NutritionFacts from '../components/NutritionFacts';
const Description = ({show, onClose , meal}) => {
  const parseString = (input) => {
    // Replace single quotes with double quotes and clean trailing commas
    const cleanedString = input
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/,\s*(?![^\[\]]*\])/g, ''); // Remove trailing commas before closing brackets

    // Parse the cleaned JSON string
    try {
        return JSON.parse(cleanedString);
    } catch (e) {
        console.error('Failed to parse JSON:', e);
        return [];
    }
};

    const Ingredients = parseString(meal.Ingredients)

    const Steps = parseString(meal.Steps)
    if (!show) return null;
  return (
  <div className="fixed inset-0 flex items-center justify-center z-50 h-[600px]">
    
    <div className="p-1 w-full max-w-2xl h-full md:h-auto">
      <div className=" h-[630px] w-[820px] p-4 bg-gray-300 rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <div className="rounded-t border-b  dark:border-gray-600 bg-gray-200">
                <button
                  type="button"
                  className="text-black-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={onClose}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                   </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
             
             <div>
             <NutritionFacts meal = {meal}/>
             </div>
             <div className='max-w-xs text-sm break-words'>
             <b>Steps: </b>
             <ol>
              {Steps.map((item,index)=>{
                
                return(<li key={index}>
                  <input  type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  {" "+item}
                  </li>)
              })}
              </ol>
              {/* {meal.Steps} */}
             </div>
             <div className='bg-slate-200'>
              <b>Ingredients : </b>
             <ul>
              {Ingredients.map((item,index)=>{
                
                return(<li key={index}>
                  <input  type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  {" "+item}
                  </li>)
              })}
              </ul>
             </div>
          </div>
      </div>
    </div>
  </div>

  )
}

export default Description
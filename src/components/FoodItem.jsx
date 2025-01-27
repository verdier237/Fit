import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Description from '../pages/Description'
const FoodItem = (props) => {
  const meal = props.meal
  const [src,setSrc] = useState("")
  const apiUrl =`http://localhost:7000/search?query=${meal.Name}`
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const [showDesc, setShowDesc] = useState(false);


  const handleShowDesc = () => {
    setShowDesc(true);
  };

  const handleCloseDesc = () => {
    setShowDesc(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const fetchSrc = ()=>{
    axios.get(apiUrl)
  .then(response => {
    // Traiter la réponse
    console.log('Images:', response.data);
    setSrc(response.data)
  })
  .catch(error => {
    // Gérer les erreurs
    console.error('Erreur lors de la requête:', error);
  });
  }
  useEffect(()=>{
      fetchSrc()
  })
  return (
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={src}
      className='w-full'/>
  </div>
  <div className='grid grid-cols-2 mt-1'>
    <div className='flex flex-row mx-auto gap-1'>
        <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
         {meal.Time+" min"}
    </div>
    <div className='flex flex-row mx-auto gap-1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" className='my-auto'><path fill="currentColor" d="M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56m384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744c-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256s32 177.152 32 288z"></path></svg>
         {meal.N_ingredients+" steps"}
    </div>
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {meal.Name}
    </h5>
    <p className="text-sm text-black animate-typing overflow-hidden text-clip " minLength="100">
            {isExpanded || meal.Desc.length <= maxLength ? meal.Desc : `${meal.Desc.slice(0, maxLength)}...`}
          </p>
    {meal.Desc.length > maxLength && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 text-sm mt-1 hover:underline focus:outline-none"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
  </div>
  <div class="p-6 pt-0">
      <button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        onClick={handleShowDesc}>
        Details
      </button>
  </div>
  <Description 
             show={showDesc}
             onClose={handleCloseDesc}
             meal = {meal}
    />
</div>  
  )
}

export default FoodItem
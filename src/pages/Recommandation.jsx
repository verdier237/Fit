import React, { useEffect, useState } from 'react'
import FoodGrid from '../components/FoodGrid'
import ModalGenerate from '../components/ModalGenerate';
import LeaAvatar from '../assets/FitAvatarness.png'
import axios from 'axios';

const Recommandation = () => {
  const [showModal, setShowModal] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [data , setData] = useState()
  const [loading, setLoading] = useState(false);
  const fetchData = async()=>{
    setLoading(true);
    try {
      const url = `http://127.0.0.1:5005/recommandation`
      const response = await axios.post(url,{
        nothing : "nothing"
      },{
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
      });
      if (response.data["NONE"] === "nothing") {
        console.log("y'a r");
        setData([])
      }
      setData(response.data)
      console.log(data);
    } catch (error) {

    }finally{
      setLoading(false);
      setShowGrid(true);
    }
  }

  const handleShowGrid = () => {
    setShowGrid(true);
  };
  // const handleCloseGrid= () =>{
  //   setShowGrid(false);
  // }
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptPrivacy = () => {
    fetchData()
    handleShowGrid();
    setShowModal(false);
  };
  const row = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //eslint-disable-next-line 
  useEffect(()=>{
    fetchData()
  // eslint-disable-next-line 
  },[])
  return (
    <div className='text-center'>




<div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={LeaAvatar} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">I'm Lea</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Let's create the perfect plan for you</p>
    </div>
</div>




                  {/* <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-1/4 mx-auto">
                      <div>
                          <img class="w-32 h-32 rounded-lg sm:rounded-none sm:rounded-l-lg" src={LeaAvatar} alt="Lea Avatar"/>
                      </div>
                      <div class="p-5">
                          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <div>Lea</div>
                          </h3>
                          <span class="text-gray-500 dark:text-gray-400"></span>
                          <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Let's create the perfect plan for you</p>
                      </div>
                </div> */}

      <div className='flex justify-center m-5'>
      <button
        onClick={handleShowModal}
        className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Generate
      </button>
    <ModalGenerate 
         show={showModal}
         onClose={handleCloseModal}
         onAccept={handleAcceptPrivacy}
         onshow = {handleShowModal}
    />
      </div>
      <div>
        <FoodGrid row = {row} show={showGrid} data = {data}/>
      </div>
      {loading && (
                        <div className="flex justify-center items-center mt-4">
                            <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                        </div>
                    )}

    </div>

  )
}

export default Recommandation
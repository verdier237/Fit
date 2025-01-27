import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios'
import Popup from './Popup'

const ModalGenerate = ({ show, onClose, onAccept , onshow }) => {
  const [allergies , setAllergies] = useState([])
  const [allergy ,setAllergy] = useState("")
  const [weight, setWeight] = useState()
  const [height ,setHeight] = useState()
  const [actLev , setActLev] = useState()
  const [target, setTarget] = useState()
  const [targetWeight, setTargetWeight] = useState()
  const [isVegan , setIsVegan] = useState(false)
  const [text , setText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSetAllergy = (e)=>{
    setAllergy(e.target.value)
  }

  const onAddAllergies = ()=>{
  if (!allergies.includes(allergy)) {
    setAllergies([...allergies, allergy]);
  } else {
    console.log('Allergy already exists');
  }
  console.log({
    vegan : isVegan,
    allergy : allergies[0]
  });
  }
  const [data, setData] = useState({});

  const onSubmit = async()=>{
    try {
      setText("Updating parameters")
      const url = `http://localhost:5003/user`
       axios.put(url,{
        weight : weight,
        height : height,
        target : target,
        target_weight : targetWeight,
        activity_level : actLev
      },{
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
      }); 
    } catch (error) {
        alert("First parameters "+error.message)
    }
    try {
      
       axios.put(`http://localhost:5003/user/diet`,{
            diet_preferences:{
              vegan : isVegan,
              allergy : allergies[0]
            }
          },{
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
          })

    } catch (error) {
      alert("diet pref "+error.message)
    }finally{
      setTimeout(()=>{
        setText("Updating dietary")
      },1000)
    }
    try {

      axios.post(`http://localhost:5001/bmr`,{
        nothing : "nothing"
      },{
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
      })

    } catch (error) {
      
    }finally{
      setTimeout(()=>{
        setText("BMR prediction")
      },1000)
    }
    try {

      axios.post(`http://localhost:5002/CalToMain`,{
        nothing : "nothing"
      },{
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
      })
      
    } catch (error) {
      
    }finally{
      setTimeout(()=>{
        setText("Calories to maintain prediction")
      },1000)
    }
    setShowPopup(true);
     // Show the popup before fetching data
    const timer = setTimeout(() => {
      onshow();
      onAccept();
      setShowPopup(false); // Hide the popup after 5 seconds
    }, 2000);

    return () => clearTimeout(timer);



  }
  const navigate = useHistory();
  useEffect(()=>{
    if (sessionStorage.getItem('token') === null) {
      navigate.push('/login');
  }
    const fetchData = async()=>{
     
      try {
        const url = `http://localhost:5003/user/id`
        const response = await axios.get(url,{
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
        });
        if (response.data.status) {
          setData(response.data.data)
          setWeight(data.weight)
          setHeight(data.height)
          setTarget(data.target)
          setActLev(data.activity_level) 
          setAllergies([data.diet_preferences.allergy])
          setIsVegan(data.diet_preferences.vegan)
          setTargetWeight(data.target_weight)

        }  
      } catch (error) {
          console.log(error.message);
      }
    }
    fetchData()
;
    // eslint-disable-next-line
  },[show])
    if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"> 
      {showPopup && (
                    <div className="absolute inset-0 z-50 flex justify-center items-center mt-4">
                        <Popup
                          title="Important Notice"
                          text={text}
                        />
                    </div>
      )}
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Details</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

        <>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Actual weight
              </label>
              <input
                type="number"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Actual height
              </label>
              <input
                type="number"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
                required=""
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Activity level
              </label>
              <select
                id="ac"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={actLev}
                onChange={(e)=>setActLev(e.target.value)}
              >
                <option selected="1.2">Sedentary</option>
                <option value="1.375">Low active</option>
                <option value="1.55">Somewhat active</option>
                <option value="1.725">Active</option>
                <option value="1.9">Highly active</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="target"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Target
              </label>
              <select
                id="target"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={target}
                onChange={(e)=>setTarget(e.target.value)}
              >
                <option selected="gain">Gain</option>
                <option value="lose">Lose</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="target"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Desired weight
              </label>
              <input
                type="number"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="kg"
                required=""
                value={targetWeight}
                onChange={(e)=>setTargetWeight(e.target.value)}
              />
            </div>
            <div className='grid grid-cols-2'>
              <label
                htmlFor="target"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white col-span-2"
              >
                Are you vegan ?
              </label>
              <div>
              <input
                type="radio"
                name="brand"
                id="brand"
                
                placeholder="kg"
                required=""
                value={isVegan}
                onChange={(e)=>setIsVegan(e.target.value)}
              />
                            <label
                htmlFor="target"
                className="mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Yes
              </label>
              </div>

              <div>
              <input
                type="radio"
                name="brand"
                id="brand"
                
                placeholder="kg"
                required=""
                value={isVegan}
                onChange={(e)=>setIsVegan(e.target.value)}
              />
                            <label
                htmlFor="target"
                className="mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                No
              </label>
              </div>
            </div>


            <div>

            <label for="default-add" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-6 h-6 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>



        </div>
        <input type="text" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Any allergy ?" value={allergy}  onChange={(e) => onSetAllergy(e)}required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onAddAllergies}>Add</button>
    </div>

            </div>
            <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Allergies</label>
                        <div class="grid grid-cols-8 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Allergies">{
                              allergies.map((e, index) => (
                              <p key={index}>{"     "+e}</p>
                              ))

                        }
                        </div>                    
                    </div>

          </div>


          <button
            type="submit"
            className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={onSubmit}
          >
            Generate my plan
          </button>
        </>
      </div>
    </div>
  </div>
  )
}

export default ModalGenerate
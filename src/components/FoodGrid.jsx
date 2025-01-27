import React, { useEffect } from 'react'
import FoodItem from './FoodItem'

const FoodGrid = (props) => {
    // const row  = props.row
    const data = props.data
    const renderFoodItems = (data) => {
      return Object.keys(data).map(day => {
          if (typeof data[day] === "object") {
              return (
                  <div className='text-center' key={day}>
                      <div className='flex flex-row gap-4 my-10 flex-wrap m-auto mx-40 justify-center'>
                          <FoodItem meal={data[day].meal_1} />
                          <FoodItem meal={data[day].meal_2} />
                          <FoodItem meal={data[day].meal_3} />
                      </div>    
                  </div>
              );
          }
          return null;
      });
  };
  useEffect(()=>{
//
  },[data])
    if (!props.show) return null;
    return (
      <>
         {renderFoodItems(data)}
      </>



    );
}

export default FoodGrid
import React from 'react'

const Card = ({inc,img, dec}) => {
  return (
    <div className='w-60 h-96  my-10 flex items-center justify-center flex-col  '>
        <div className='w-[90%] h-[100%] flex flex-row items-center justify-start gap-4'>
      <div className='w-[98%] h-[80%] bg-white rounded-lg shadow-lg ml-4 '>
        <img src={img} alt="" />
        <div className='w-[100%] h-[16%] flex flex-row items-center justify-evenly '>

        <button onClick={dec}  type="button" class="text-white text-[35px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-xs px-3 py-2.5 text-center ml-2 w-12 mb-2">-</button>
        <button type="button" onClick={inc} class="text-white bg-gradient-to-r text-[28px] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-xs px-3 py-2.5 text-center ml-2 w-12 mb-2">+</button>
  
        </div>
        </div>
        
        </div>
        
        </div>
        
        
  
        
  
        
         )
        }
      export default Card
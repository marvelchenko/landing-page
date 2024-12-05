import React from 'react'
import { images } from '../components/Data'

const Map = () => {
  return (
    <div>
        <div className='w-full md:max-w-full text-[#43c143] bg-gradient-to-tr from-[#10311c] to-[#000000] h-full p-5'>
         <div className='flex flex-col md:flex-row items-center justify-around'>
            <div className='w-[400px] h-[300px] md:w-[600px] md:h-[300px] overflow-hidden p-4'>
            <img 
                src={images[0].map1} 
                alt="Map" 
                className='w-full h-full object-cover' 
            />
            </div>

            <div className='text-white w-10/12 md:w-4/12 md:text-start text-center '>
                <h1 className='text-4xl font-semibold pb-4'>Our Service <span className='text-green-500'>Reaches</span> everywhere </h1>
                <p className='pb-4'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
                <button className='btn font-semibold border-2 border-white bg-green-500 rounded-full px-8 py-4 hover:bg-green-950'>View coverage area</button>
            </div>
         </div>

        </div>
      
    </div>
  )
}

export default Map

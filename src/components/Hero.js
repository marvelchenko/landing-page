import React from 'react'
import { data } from '../components/Data' // Adjust the path as needed
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="text-white">
      {/* Hero Section with Background Image and Transparent Black Overlay */}
      <div
        className="h-screen bg-cover bg-center relative "
        style={{ backgroundImage: `url(${data[0].HeroImg})` }} // Set background image dynamically
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

        {/* Content */}
        <div  className="relative z-10 flex flex-col 
        justify-center m-4 items-start md:items-center h-full text-start md:text-center"
            >
          <motion.h1 className="text-5xl md:w-9/12" 
                  initial={{ y: -100, opacity: 0}}
                  animate={{ y: 0, opacity: 1}}
                  transition={{ duration: 1, delay: 1.5}}>
            Transforming Global Road Transportation
            <span className="text-green-500"> Connected OS</span> for Logistics
          
          </motion.h1>
          <motion.button className='btn  p-2 px-6 hover:bg-[#000300] hover:border-2
           hover:border-green-500 ease-in-out duration-2 mt-9 text-2xl bg-green-500 rounded'
           initial={{ y: 100, opacity: 0}}
           animate={{ y: 0, opacity: 1}}
           transition={{ duration: 1, delay: 1.5}}>
            Request Demo</motion.button>
        </div>
      </div>
    </div>
  )
}

export default Hero

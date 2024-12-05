import React from 'react'
import { motion } from 'framer-motion'

const Analy = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
  return (
    <>
        <div className='w-full flex flex-col gap-y-5 justify-center items-center bg-white py-16 px-4 h-full'>
            <motion.div className='flex flex-col md:flex-row 
            gap-10 font-sans text-4xl justify-center items-center uppercase font-bold'
            whileInView={{ opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}} 
            transition={{ duration: 1.5 }}>
            <motion.h2
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
              Fast-Paced.
            </motion.h2>
            <motion.h2 className='text-green-500'
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}
            >Innovative.</motion.h2>
            <motion.h2
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
              Seamless.</motion.h2>
            </motion.div>
            <h2 className='text-green-500 text-2xl text-center '>A logistics company built on business solutions</h2>
            <button className='btn bg-green-500 p-3 px-5 rounded-full font-semibold '>READ MORE</button>
        </div>
      
    </>
  )
}

export default Analy

import React from 'react'
import { data } from '../components/Data'
import { motion } from 'framer-motion'

const Services = () => {
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
    <div>
      <div className='w-full text-[#000300] text-center  bg-[#efefef] border-t-2 h-full p-5'>
        <div className='flex gap-15 flex-col justify-center items-center'>
           <div className='md:w-5/12 w-8/12'>
            <h3 className='font-bold text-2xl'>Our Core Services</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className='text-center p-4 gap-5 md:gap-0 justify-center items-center text-[#000300] flex flex-col md:flex-row'>
            <motion.div className='w-[230px] gap-3 h-[280px] p-5 
            flex flex-col items-center justify-center rounded-3xl 
            md:rounded-e bg-white shadow-lg'
            initial={{ x: -100, opacity: 0}}
                  animate={{ x: 0, opacity: 1}}
                  transition={{ duration: 1, delay: 1.5}}>
                <img src={data[0].HeroImg} alt="" className='w-20 bg-cover rounded border-2 shadow-lg' />
                <h2 className='font-bold'>Worldwide</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </motion.div>
            <motion.div className='text-white w-[300px] gap-3 h-[350px] p-5 flex 
            flex-col items-center justify-center rounded-3xl bg-gradient-to-t 
            from-[#145d2f] to-[#22c55e] shadow-lg'
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}>
                <img src={data[0].HeroImg} alt="" className='w-20 bg-cover rounded border-2 shadow-lg' />
                <h2 className='font-bold'>24/7 Hour Service</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </motion.div>
            <motion.div className='w-[230px] gap-3 h-[280px] p-5 
            flex flex-col items-center justify-center 
            rounded-3xl md:rounded-s bg-white shadow-lg'
            initial={{ x: 100, opacity: 0}}
                  animate={{ x: 0, opacity: 1}}
                  transition={{ duration: 1, delay: 1.5}}>
                <img src={data[0].HeroImg} alt="" className='w-20 bg-cover rounded border-2 shadow-lg' />
                <h2 className='font-bold'>Cargo Facility</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </motion.div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Services

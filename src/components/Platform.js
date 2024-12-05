import React from 'react'
import { images } from '../components/Data'

const Platform = () => {
  return (
    <div>
        <div className='w-full md:max-w-full text-[#000300] bg-[#efefef] h-full p-5'>
           <div>
           <div className='row-1 flex flex-col md:text-left text-center items-center justify-center p-4 md:w-[500px] md:ml-12 mt-4'>
                <h3 className='text-3xl md:text-4xl font-semibold'>What made you decide to use our Platform</h3>
                <p className='mt-4'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-10 '>
                <div className='row-box-1 justify-center items-center flex flex-col gap-5'>
                    <div className='w-[320px] md:w-[500px] bg-white p-10 rounded-md shadow-sm'>
                        <li className='text-green-500 font-semibold'>99% Positive Review</li>
                        <p className='ml-6 mt-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className='w-[320px] md:w-[500px] bg-white p-10 rounded-md shadow-sm'>
                        <li className='text-green-500 font-semibold'>All in one Dashboard</li>
                        <p className='ml-6 mt-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className='w-[320px] md:w-[500px] bg-white p-10 rounded-md shadow-sm'>
                        <li className='text-green-500 font-semibold'>Track Parsel by App</li>
                        <p className='ml-6 mt-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:w-[600px] w-[320px] h-[1240px] md:h-[650px] justify-center items-center rounded-3xl bg-gradient-to-t from-[#145d2f] to-[#22c55e]'>
                <div className='flex flex-col gap-4'>
                    <div className='w-[250px] h-[230px] border-2 bg-white rounded-tl-3xl overflow-hidden'>
                    <img 
                        src={images[0].image1} 
                        alt="Delivery" 
                        className='w-full h-full object-cover' 
                    />
                    </div>
                    <div className='w-[250px] h-[340px] border-2 bg-white rounded-bl-3xl overflow-hidden'>
                    <img 
                        src={images[0].image2} 
                        alt="Delivery" 
                        className='w-full h-full object-cover' 
                    />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='w-[250px] h-[340px] border-2 bg-white rounded-tr-3xl overflow-hidden'>
                    <img 
                        src={images[0].image3} 
                        alt="Delivery" 
                        className='w-full h-full object-cover' 
                    />
                    </div>
                    <div className='w-[250px] h-[230px] border-2 bg-white rounded-br-3xl overflow-hidden'>
                    <img 
                        src={images[0].image4} 
                        alt="Delivery" 
                        className='w-full h-full object-cover' 
                    />
                    </div>
                </div>
            </div>
             </div>
           </div>
           
             
        </div>
      
    </div>
  )
}

export default Platform

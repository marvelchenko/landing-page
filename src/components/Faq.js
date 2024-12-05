import React, { useState } from 'react';
import { faqData } from '../components/Data';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoIosSend } from 'react-icons/io';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='w-full md:max-w-full text-[#000300] bg-[#efefef] h-full p-5'>
            <div className='flex flex-col md:text-left text-center pb-10 md:w-[500px] md:ml-20 mt-4'>
                <h3 className='text-3xl md:text-4xl font-semibold'>Frequently Asked Questions</h3>
                <p className='mt-4'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
            </div>
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-5  '>
            <div className='md:pl-20'>
                    <div className='w-[320px] md:w-[500px] text-center flex flex-col items-center gap-5 bg-green-50 p-10 rounded-md shadow-sm'>
                        <HiChatBubbleLeftRight size={60} className='text-green-500'/>
                        <h3 className='font-semibold text-lg'>You have different question?</h3>
                        <p className=''>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        <button className='btn border-2 border-green-500 hover:bg-green-950 flex text-white justify-center items-center px-5 py-5 bg-green-500 rounded-full gap-2'>
                        <IoIosSend size={20} />
                            <p>Contact Support Team</p>
                        </button>
                    </div>
                </div>
                <div className='md:pr-20'>
            {faqData.map((item, index) => (
                <div
                    key={item.id}
                    className="mb-4 border-b pb-4"
                >
                    <div>
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <h2 className="text-lg font-medium">{item.title}</h2>
                        <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <p className="mt-2 ">{item.text}</p>
                    )}
                    </div>
                </div>
            ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;

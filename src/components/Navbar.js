import React, { useState } from 'react';
import { data } from '../components/Data';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  px-4 mx-auto text-white fixed top-0 left-0 w-lvw bg-[#000300] z-50">
      {/* Logo */}
      <img src={data[0].logo} alt="Logo" className="w-36 mt-5 p-4 h-auto" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex ">
        <li className="p-4 cursor-pointer hover:bg-green-500">Industries</li>
        <li className="p-4 cursor-pointer hover:bg-green-500">Company</li>
        <li className="p-4 cursor-pointer hover:bg-green-500">Resources</li>
        <li className="p-4 mr-3 cursor-pointer hover:bg-green-500">Contact</li>
        <li className="p-4 mr-4 btn font-semibold text-[#000300] rounded bg-zinc-50 hover:bg-green-500 cursor-pointer">Logistics Solutions</li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div onClick={handleNav} className="block md:hidden mr-4">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[80%] h-full bg-[#000300] ease-in-out duration-500 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img src={data[0].logo} alt="Logo" className="w-32 m-6 h-auto" />
        <ul className="uppercase p-4">
          <li className="p-4  cursor-pointer border-b border-gray-600 hover:bg-green-500">Industries</li>
          <li className="p-4  cursor-pointer border-b border-gray-600 hover:bg-green-500">Company</li>
          <li className="p-4  cursor-pointer border-b border-gray-600 hover:bg-green-500">Resources</li>
          <li className="p-4 cursor-pointer hover:bg-green-500 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

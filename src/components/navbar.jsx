import Logo from '../assets/logo.png';
import React, { useState } from 'react';

import {
  FaBars,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';




function App() {


    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* navbar */}
      <div className="hidden md:flex">
      <ul className='hidden md:flex'>
          <li className='px-4 cursor-pointer'>home</li>
          <li className='px-4 cursor-pointer'>About</li>
          <li className='px-4 cursor-pointer'>Skills</li>
          <li className='px-4 cursor-pointer'>My work</li>
          <li className='px-4 cursor-pointer'>Contact</li>
          
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className=" md:hidden z-10">
      <FaBars />
      </div>

      {/* mobile */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-5 text-3xl'>home</li>
          <li className='py-5 text-3xl'>About</li>
          <li className='py-5 text-3xl'>Skills</li>
          <li className='py-5 text-3xl'>My work</li>
          <li className='py-5 text-3xl'>Contact</li>
      </ul>


      {/* socials */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-500'>
            Linkedin <FaLinkedin size={30}/>

            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
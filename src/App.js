import Logo from './assets/logo.png';
import {
  FaBars,
} from 'react-icons/fa';

function App() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* navbar */}
      <div>
      <ul className='flex'>
          <li className='px-4 cursor-pointer'>home</li>
          <li className='px-4 cursor-pointer'>About</li>
          <li className='px-4 cursor-pointer'>Skills</li>
          <li className='px-4 cursor-pointer'>My work</li>
          <li className='px-4 cursor-pointer'>Contact</li>
          
        </ul>
      </div>

      {/* hamburger */}
      <div className="hidden">
      <FaBars />
      </div>

      {/* mobile */}
      <ul className="hidden">
          <li>home</li>
          <li>About</li>
          <li>Skills</li>
          <li>My work</li>
          <li>Contact</li>
      </ul>


      {/* socials */}
      <div className='hidden'></div>


    </div>
  );
}

export default App;

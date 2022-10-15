import React from 'react'
import RabitHabit from '../assets/RabitHabit.png';
import Weather from '../assets/Weather.png';
import Portfolio from '../assets/Portfolio.png';
import Password from '../assets/Password.png';


const Work = () => {
  return (
    <div class="portfolio-2 py-6 md:py-12 bg-neutral-900 text-[#D6CDB9]">
   <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <div class="md:flex md:justify-center">
         <div class="md:w-10/12 xl:w-8/12 text-center">
            <h1 class="text-4xl tracking-widest font-bold inline border-b-4 border-[#b4c2db]">Work</h1>
            <p class="py-4">The following are some of the projects I have attempted, there will be more in the future!</p>
         </div>
      </div>
      <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 md:mt-12 pb-6">
         <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
               <div class="portfolio-img relative overflow-hidden cursor-pointer">
                  <img src={RabitHabit} alt="" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">RabitHabit Tracker</h5>
                  <p class="text-gray-600">A team build project, made to track and replace bad habits!</p>
               </div>
            </div>
         </div>
         <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
               <div class="portfolio-img relative overflow-hidden cursor-pointer">
               <img src={Weather} alt="weather-app" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Weather App API</h5>
                  <p class="text-gray-600">This was a simple API project, in which this app will give you
                  the weather for the area you are in.</p>
               </div>
            </div>
         </div>
         <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
               <div class="portfolio-img relative overflow-hidden cursor-pointer">
               <img src={Password} alt="" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Password Generator</h5>
                  <p class="text-gray-600">This App will generator a random password for you.</p>
               </div>
            </div>
         </div>
         <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
               <div class="portfolio-img relative overflow-hidden cursor-pointer">
               <img src={Portfolio} alt="" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">My first portfolio</h5>
                  <p class="text-gray-600">This was my first attempt at a portfoilio long ago... there has been improvements.</p>
               </div>
            </div>
         </div>
         <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
               <div class="portfolio-img relative overflow-hidden cursor-pointer">
               <img src="" alt="" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">More to come!</h5>
                  <p class="text-gray-600"></p>
               </div>
            </div>
         </div>
         <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
            <div class="portfolio-item mx-auto max-w-sm">
               <div class="portfolio-img relative overflow-hidden cursor-pointer">
               <img src="" alt="" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">More to come!</h5>
                  <p class="text-gray-600"></p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default Work
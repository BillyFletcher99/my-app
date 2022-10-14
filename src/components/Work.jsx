import React from 'react'
import RabitHabit from '../assets/RabitHabit.png';
import Weather from '../assets/Weather.png';
import Portfolio from '../assets/Portfolio.png';
import Password from '../assets/Password.png';

const Work = () => {
  return (
    <div class="portfolio-2 py-6 md:py-12 bg-neutral-900 text-[#D6CDB9]">
   <div class="container px-4 mx-auto">
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
               <img src={Weather} alt="" className='max-w-full h-auto' />
                  <div class="portfolio-hover"></div>
               </div>
               <div class="px-1 py-4">
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Young Bloods</h5>
                  <p class="text-gray-600">FWR blocks bring in a fresh air of art and design in their blocks.</p>
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
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Nike90 Store</h5>
                  <p class="text-gray-600">FWR blocks are reusable code blocks for designers, developers and agencies.</p>
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
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Women Inventor</h5>
                  <p class="text-gray-600">You can use FWR blocks for personal or commercial purpose with attribution.</p>
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
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Pomodoro App</h5>
                  <p class="text-gray-600">FWR blocks is the must have tool for designers and developers.</p>
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
                  <h5 class="font-semibold text-xl text-[#D6CDB9] uppercase">Glax landing</h5>
                  <p class="text-gray-600">FWR blocks are made with Bootstrap and minimal custom styling.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default Work
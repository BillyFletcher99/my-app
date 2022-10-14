import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-neutral-900 text-[#D6CDB9]'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
             <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl tracking-widest font-bold inline border-b-4 border-[#b4c2db] '> About </p>
             </div>
             <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
             <div className='sm:text-right text-4xl font-bold'>
                <p>Please do take a look around!</p>
             </div>
             <div>
                <p>The world of coding is very new to me, but I have fallen headfirst into it and have enjoyed every step. The amount of knowledge one can gain from coding is limitless. And with this brings no bounds of what you can do! Please take a look at some of my work, I update regularly!</p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default About
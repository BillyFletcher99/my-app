import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const main = () => {
  return (
    <div name='Main' className='bg-[#0a192f] w-full h-screen' >

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi my name is,</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Billy Fletcher</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a inspiring coding student.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eveniet nam repellendus minus commodi libero, doloribus perspiciatis saepe, voluptas, 
                laudantium praesentium natus? Quibusdam aliquid consequatur placeat iste voluptas cum 
                laboriosam maxime.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View my work</button>
                </div>

        </div>

    </div>
  )
}

export default main
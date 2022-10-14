import React from 'react'

const main = () => {
  return (
    <div name='Main' className='bg-neutral-900 w-full h-screen'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#D6D3D1]'>Hi my name is,</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#dad4c5]'>Billy Fletcher</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#dad4c5] to-[#44403C]'>I am a aspiring coding student.</h2>
          <p className='text-[#dad4c5] py-4 max-w-[700px] opacity-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Eveniet nam repellendus minus commodi libero, doloribus perspiciatis saepe, voluptas, 
          laudantium praesentium natus? Quibusdam aliquid consequatur placeat iste voluptas cum laboriosam maxime.</p>
          <div>
             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#726d63] hover:border-[#D6CDB9]'>View my work</button>
          </div>
       </div>
    </div>
  )
}

export default main
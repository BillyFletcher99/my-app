import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-neutral-900 flex justify-center items-center p-4'>
       <form method='POST' mailto='billyfletcher99@gmail.com' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
             <p className='text-4xl tracking-widest font-bold inline border-b-4 border-[#b4c2db] text-[#D6CDB9]'>Contact</p>
             <p className='text-[#D6CDB9] py-4 rounded-xl'>Drop by and say hi!</p>
          </div>
          <input className='bg-[#F5F5F4] p-2 rounded-xl' type="text" placeholder='Josh Smith' name='Josh Smith' />
          <input className='my-4 p-2 rounded-xl bg-[#F5F5F4]' type="email" placeholder='JoshSmith@email.com' name='email' />
          <textarea className='bg-[#F5F5F4] p-2 rounded-xl' name="message" rows="10" placeholder='Your message here'></textarea>
          <button className='text-white border-2 rounded-xl hover:bg-[#726d63] hover:border-[#726d63] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
       </form>
    </div>
  )
}

export default Contact
import React from 'react'

export default function Introduction() {
  return (
      <div className='w-sreen flex flex-col  items-center pt-10 md:pt-[6.3rem]  '>
        <p className='absolute w-fit md:text-[18rem] text-[8rem] md:top-[3rem] top-[3rem] font-black opacity-5 text-center text-nowrap overflow-hidden '>
          RYAN LOUISE
          
          </p>
        <div >
        <p className='text-3xl text-center  md:text-6xl lop'>
            Hello!, I'm <span className='font-black '>RYAN LOUISE</span> a 
            <br/>
            <span className='font-black '> <span className='animate-pulse'> FONTEND WEB  </span> <span className='hidden text-stroke md:inline-block  text-white'>DEVELOPER </span><span className='md:hidden '>DEVELOPER </span> </span>
        </p>
        </div>
        <div className='flex md:pt-24 pt-8 justify-around text-sm '>
            <p className='md:w-[40%] w-[60%]'>With unwavering dedication and a profound love for design and coding, I bring your ideas to life with passion and precision.</p>
            <p className='md:block w-[40%] hidden trasn'>With unwavering dedication and a profound love for design and coding, I bring your ideas to life with passion and precision.</p>
        </div>
    </div>
  )
}

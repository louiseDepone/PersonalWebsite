import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function Introduction() {
  return (
      <div className='w-sreen    flex flex-col  items-center pt-10 md:pt-[11rem]  '>
      
        <div >
        <p className='text-3xl bg-red-6 text-center  md:text-6xl lop'>
            Hello!, I'm <span className='font-black '>RYAN LOUISE</span> a 
            <br/>
            <span className='font-black '> <span> FONTEND WEB  </span> 
            <TypeAnimation
              sequence={[
                'Developer',
                1000, // Types 'One'
                'Designer',
                1000, // Types 'One'
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className='hidden text-stroke md:inline-block  text-[2em] text-white'
            />
            
            
            
            
            <span className='md:hidden '>DEVELOPER </span> </span>
        </p>
        </div>
        <div className='flex md:pt-24 pt-8 justify-around text-sm '>
            <p className='md:w-[40%] w-[60%]'>With unwavering dedication and a profound love for design and coding, I bring your ideas to life with passion and precision.</p>
            <p className='md:block w-[40%] hidden trasn'>With unwavering dedication and a profound love for design and coding, I bring your ideas to life with passion and precision.</p>
        </div>
        
    </div>
  )
}

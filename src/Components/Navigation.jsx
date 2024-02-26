import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    const [open, setOpen] = useState(false)
  return (
    <div className={`bg-white text-sm flex justify-between items-center sticky top-0 w-screen md:justify-center md:absolute z-30 md:pt-14 p-5`}>
         <span className={` ${open ? 'hidden' : 'flex'} md:hidden text-nowrap `} >
            Philippin, Bicol Camarines Sur
        </span>
        <div className='w-[100%] '>
            <button className='md:hidden float-right' onClick={() => setOpen(!open)} >
                <svg 
                    width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 15V17C28 17.2652 27.8946 17.5196 27.7071 17.7071C27.5196 17.8946 27.2652 18 27 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H27C27.2652 14 27.5196 14.1054 27.7071 14.2929C27.8946 14.4804 28 14.7348 28 15ZM27 22H5C4.73478 22 4.48043 22.1054 4.29289 22.2929C4.10536 22.4804 4 22.7348 4 23V25C4 25.2652 4.10536 25.5196 4.29289 25.7071C4.48043 25.8946 4.73478 26 5 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V23C28 22.7348 27.8946 22.4804 27.7071 22.2929C27.5196 22.1054 27.2652 22 27 22ZM27 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7V9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10H27C27.2652 10 27.5196 9.89464 27.7071 9.70711C27.8946 9.51957 28 9.26522 28 9V7C28 6.73478 27.8946 6.48043 27.7071 6.29289C27.5196 6.10536 27.2652 6 27 6Z" fill="#3E3E41"/>
                </svg>
            </button>
            <div 
                className={`md:flex md:flex-row  md:justify-center ${open ? 'flex h-screen' : 'hidden'} flex-col gap-10  items-center pt-10 md:p-0 font-medium`}>
                <a href="#lol" className=' border-b-[2px] pb-3 px-1	 border-black border-solid'>HOME</a>
                <a className='pb-3 px-1'>PROJECTS</a>
                <a className='pb-3 px-1'>ABOUT ME</a>
                <a className='pb-3 px-1'>CONTACT </a>
            </div>
    </div>
        </div>
  )
}

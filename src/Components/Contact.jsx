import React from 'react'

export default function () {
  return (
    <div className='w-screen px-[20%] py-28 form' id='contct'>
        <div className=' py-10 text-4xl  text-center  md:text-start'>GET IN TOUCH</div>
       <div className='flex flex-col md:flex-row'>
            <div className='md:w-[50%]'>
                <form action="#" className='flex flex-col items-end contactForm'>
                  <label htmlFor="name">Name</label>
                  <input type="text" name='name' placeholder='Enter Senders Name' />
                  <label htmlFor="Email">Email</label>
                  <input type="text" name='email' placeholder='Enter Senders Email' />
                  <label htmlFor="Message">Message</label>
                  <input type="text" name='message' placeholder='Enter YourMessage'/>
                  <button className='rounded-full px-3 py-1 text-sm justify-items-end float-center border border-solid border-black w-fit'>Submit</button>
                </form>
            </div>
            <div className='md:w-[50%]'>
                constact
            </div>
       </div>
    
    </div>
  )
}

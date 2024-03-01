import React from 'react'

export default function 
() {
  return (
    <div className='relative w-screen  my-20 flex md:flex-row flex-col gap-8 justify-center items-center md:gap-[16rem]' id='aboutme' >
    <div className='flex  flex-col md:w-[50%] justify-center items-center gap-8 '>
        <div className='aboutmecarc w-[90%] rounded-md p-5 '>
             <div className='my-2 font-bold'>Creative Side</div>
            <p>When I was about to enter senior high school, I found an interest in graphic design, such as layouting a magazine. I really love tweaking typography, making it big and having it be the center of the design because it satisfies me on how designs guide the audience or the reader on where to look. While I am not great at it yet, I love to design and would love to learn about it and improve on it.</p>
        
        </div>
        <div className='aboutmecarc w-[90%] rounded-md p-5'>
        <div className='my-2 font-bold'> Music Side</div>
            <p>In the music world, I have a pretty diverse taste in genres because it depends on my mood. But when it comes to artists, I love pop girlies such as Sabrina Carpenter, Ariana Grande, Taylor Swift, and Olivia Rodrigo because of their ability to sing and write with emotion. I've been a big fan of Taylor Swift since I was in elementary school. I enjoy singing, especially when it is a sad song with a very emotional melody because that's when my voice really shines.</p>
        </div>
    </div>
    <div className='flex  flex-col md:w-[50%] justify-center items-center gap-8'>
        <div className='aboutmecarc w-[90%] rounded-md p-5'>
           <div className='my-2 font-bold'>Student Side </div>
            <p>I am currently a student at Naga College Foundation, a third-year student majoring in Computer Science. I really love logic and solving problems. While the process of thinking about how to approach things may frustrate me, it truly satisfies me when I get the hang of it and successfully solve it in the end. </p>
    
        </div>
        <div className='aboutmecarc w-[90%] rounded-md p-5'>
            <div className='my-2 font-bold'>Developer Side</div>
        
            <p>I am an aspiring frontend developer and designer. I really love designing stuff, and I enjoy developing things that others can interact with. I am happy that I found a frontend role because it allows me to merge my desire to be a developer with my passion for design.</p>
        </div>
    </div>
    </div>
  )
}

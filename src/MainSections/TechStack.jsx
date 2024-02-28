import React from 'react'
import css from "../assets/techStacks/css.png"
import html from "../assets/techStacks/html.png"
import javascript from "../assets/techStacks/javascript.png"
import laravel from "../assets/techStacks/laravel.png"
import mongodb from "../assets/techStacks/mongodb.png"
import mysql from "../assets/techStacks/mysql.png"
import nodejs from "../assets/techStacks/nodejs.png"
import react from "../assets/techStacks/react.png"
import tailwind from "../assets/techStacks/tailwind.png"

export default function TechStack() {
    const techs =[
        html,
        tailwind,
        react,
        nodejs,
        javascript,
        mongodb,
        laravel,
        mysql,
        css,
    ]
  return (
    <div className='w-screen  text-center pt-3 md:pt-19'>
        <p className='p-6'>TECHNOLOGIES</p>
        <div className='flex w-screen px-10 md:space-x-8 md:justify-center justify-evenly '>
            {techs.map((tech, index) => {
                return <img src={tech}  className='h-7 hover:animate-bounce duration-700	 '  alt="sa" />
            })}
        </div>
    </div>
  )
}

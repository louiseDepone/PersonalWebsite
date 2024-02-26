import React from 'react'
import studbud from '../assets/projects/studbud.png'
import ProjectCard from '../Components/ProjectCard'
export default function Projects() {
    const project = [
        {
            title:"STUDBUD",
            type:"Employee Scheduler with Backtracking algorithm",
            image:studbud,
            github:"#",
            preview:"#",
            description:"Explore a captivating collection of a talented designer's work, showcasing their skills and unique artistic vision. Immerse yourself in visually stunning designs, from sleek web creations to impactful branding projects."
        },
        {
            title:"EASESCHED",
            type:"Employee Scheduler with Backtracking algorithm",
            image:studbud,
            github:"#",
            preview:"#",
            description:"Explore a captivating collection of a talented designer's work, showcasing their skills and unique artistic vision. Immerse yourself in visually stunning designs, from sleek web creations to impactful branding projects."
        }
    ]
  return (
    <div className='w-screen'>
        <p className=' absolute md:tracking-[-10px] w-fit md:text-[13rem] text-[6rem]  font-black opacity-15 text-center text-nowrap overflow-hidden '>
          PROJECTS
          </p>
          <div className='flex  flex-col items-center md:pt-32 pt-14 gap-10 md:gap-24'>
            {project.map((proj, index)=> <ProjectCard 
                                    title={proj.title} 
                                    type ={proj.title}
                                    image ={proj.image}
                                    github = {proj.github}
                                    preview = {proj.github}
                                    description={proj.description}
                                    key ={ index}
                                    ll ={index} />)}
          </div>
    </div>
  )
}

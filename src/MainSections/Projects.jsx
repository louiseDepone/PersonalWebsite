import React from 'react'
import studbud from '../assets/projects/studbud.png'
import easesched from '../assets/projects/easesched.png'
import ProjectCard from '../Components/ProjectCard'
export default function Projects() {
    const project = [
        // {
        //     title:"STUDBUD",
        //     type:"Employee Scheduler with Backtracking algorithm",
        //     image:studbud,
        //     github:"#",
        //     preview:"#",
        //     description:"Explore a captivating collection of a talented designer's work, showcasing their skills and unique artistic vision. Immerse yourself in visually stunning designs, from sleek web creations to impactful branding projects."
        // },
        {
            title:"EASESCHED",
            type:"Employee Scheduler with Backtracking algorithm (ongoing)",
            image:easesched,
            github:"#",
            preview:"#",
            description:"Explore a captivating collection of a talented designer's work, showcasing their skills and unique artistic vision. Immerse yourself in visually stunning designs, from sleek web creations to impactful branding projects."
        }
    ]
  return (
    <div className='w-screen flex flex-col items-center ' id='project'>
        {/* <p className=' absolute md:tracking-[-10px] w-fit md:text-[13rem] text-[6rem]  font-black opacity-15 text-center text-nowrap overflow-hidden '>
          PROJECTS
          </p> */}
          <div className='flex   flex-col items-center md:pt-32 pt-14 gap-10 md:gap-24'>
            {project.map((proj, index)=> <ProjectCard 
                                    title={proj.title} 
                                    type ={proj.type}
                                    image ={proj.image}
                                    github = {proj.github}
                                    preview = {proj.github}
                                    description={proj.description}
                                    key ={ index}
                                    ll ={index} />)}
          </div>

              <div className='font-semibold text-black text-sm p-8 pt-10'> SEE MORE PROJECT</div>
    </div>
  )
}

import React, { useState } from 'react'
import ncf from "../assets/school/ncf.jpg"
import csr from "../assets/school/csr.jpg"
import lncf from "../assets/school/lncf.jpg"
import sti from "../assets/school/sti.jpg"
export default function Education() {
    const [school, setschool]=useState("elementary")
    const [c, setc]=useState("#")
    const [s, sc]=useState(" hidden ")
    
  const [cursor, setcursor] = useState({top:0, left:0})

    const cleick = (name) => {
        setschool(name)
}

      const over = (e) =>{
        sc("pp absolute w-24 h-24 bg-red-500 rounded-md  ")
        setcursor({
          top: e.pageY - 100,
          left: e.pageX - 100
        })
      }
  return (
    <div>
      
      <div className={ s} 
        style={{ ...cursor,
        backgroundImage: `url(${c.img})`,
        transition: "opacity 0.5s ease-in-out,height 0.5s ease-in-out,width 0.5s ease-in-out", backgroundSize: 'git' }}>
          {/* <div className='w-[100%] h-[100%] bg-black rounded-md text-white'> d</div> */}
          <div className='w-[100%] h-[100%] bg-black opacity-[70%] text-white absolute rounded-md  flex justify-center'></div>
          <div className='absolute text-white  rounded-md w-[100%] h-[100%] flex flex-col justify-center items-center p-7 gap-4'>
            <div className='text-white font-bold'>{c.name}</div>
            <div className='text-white font-normal text-xs top-4'>{c.desciption}</div>
          </div>
        </div>
    <div className='w-screen relative my-20 ' > 




        <div id='education' className='relative' onMouseMove={over} onMouseLeave={(e) =>{ 
          // console.log(e)
          sc(" absolute opacity-0 w-0 h-0 ")
          
          }}>





            <p className={`${school == "elementary" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("elementary")} onMouseEnter={() => setc({img: lncf,name:"Libmanan North Central School", desciption: "I attended LNCF Elementary School in my hometown, where I discovered my talent for singing. I was quite active during my elementary years since I wasn't shy yet. I enjoyed dancing and participated in various contests such as school folk dances and choir competitions against other schools. I had a lot of fun during my elementary years and cherished the opportunities to showcase my talents."})} >ELEMENTARY</p>
            <p className={`${school == "juniorhs" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("juniorhs")} onMouseEnter={() => setc({img:csr ,name:"Colegio Del Santisimo Rosario", desciption:"I attended my Junior High School at CSR, a Catholic school. It is where I deepened my faith in God, a faith that I still hold onto strongly. It was also here that I discovered the values and principles to uphold in my life."})}>  JUNIORHS</p>
            <p className={`${school == "senior" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("senior")}  onMouseEnter={() => setc({img:sti,name:"STI College Naga", desciption:"I studied at STI for my Senior High School education, where I pursued MAWD, which stands for Mobile App and Web Development. This is where my journey in programming began, and during the last years of my time at STI, I truly saw the beauty in programming and developing various projects. It was during these years that I developed a deep love for programming and, simultaneously, discovered my passion for graphic design."})}> SENIOR</p>
            <p className={`${school == "college" ?" opacity-100 ": " opacity-40 "  } hover:opacity-100 `} onClick={() => cleick("college")}  onMouseEnter={() => setc({img:ncf,name:"Naga College Foundation Inc.", desciption:"Currently, I am pursuing a Bachelor of Science in Computer Science at Naga College Foundation. I am expressing my deep interest in frontend web development and am hopeful about building a great future with the support of the resources that the school provides."})}>COLLEGE</p>
   
        </div>


        
    </div>
    
    </div>
  )
}

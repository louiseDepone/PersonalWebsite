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
        sc("block")
        setcursor({
          top: e.pageY - 100,
          left: e.pageX - 100
        })
      }
  return (
    <div>
      
      <div className={`pp absolute w-24 h-24 bg-red-500 rounded-md` + s} 
        style={{ ...cursor,
        backgroundImage: `url(${c.img})`, backgroundSize: 'git' }}>
          {/* <div className='w-[100%] h-[100%] bg-black rounded-md text-white'> d</div> */}
          <div className='w-[100%] h-[100%] bg-black opacity-[70%] text-white absolute rounded-md  flex justify-center'></div>
          <div className='absolute text-white  rounded-md w-[100%] h-[100%] flex flex-col justify-center items-center p-7'>
            <div className='text-white font-bold'>{c.name}</div>
            <div className='text-white font-normal text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ex impedit illo dolorem laboriosam itaque tenetur libero hic tempore suscipit, animi ratione error voluptate tempora quaerat nemo maiores voluptas ipsam.</div>
          </div>
        </div>
    <div className='w-screen relative my-20 ' > 




        <div id='education' className='relative' onMouseMove={over} onMouseLeave={() => sc("hidden")}>





            <p className={`${school == "elementary" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("elementary")} onMouseEnter={() => setc({img: lncf,name:"Libmanan North Central School"})} >ELEMENTARY</p>
            <p className={`${school == "juniorhs" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("juniorhs")} onMouseEnter={() => setc({img:csr ,name:"Colegio Del Santisimo Rosario"})}>  JUNIORHS</p>
            <p className={`${school == "senior" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("senior")}  onMouseEnter={() => setc({img:sti,name:"STI College Naga"})}> SENIOR</p>
            <p className={`${school == "college" ?" opacity-100 ": " opacity-40 "  } hover:opacity-100 `} onClick={() => cleick("college")}  onMouseEnter={() => setc({img:ncf,name:"Naga College Foundation Inc."})}>COLLEGE</p>
   
        </div>


        
    </div>
    
    </div>
  )
}

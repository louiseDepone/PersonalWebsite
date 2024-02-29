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
    <div className='w-screen  mt-20 ' > 

        <div className={`pp absolute w-24 h-24 bg-red-500 rounded-md ` + s} 
        style={{ ...cursor,
        backgroundImage: `url(${c})`, backgroundSize: 'git' }}>
          <div className='w-[100%] h-[100%] bg-black opacity-40'> d</div>
        </div>
        <div id='education' className='relative' onMouseMove={over} onMouseLeave={() => sc("hidden")}>





            <p className={`${school == "elementary" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("elementary")} onMouseEnter={() => setc(lncf)} >ELEMENTARY</p>
            <p className={`${school == "juniorhs" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("juniorhs")} onMouseEnter={() => setc(csr)}>  JUNIORHS</p>
            <p className={`${school == "senior" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("senior")}  onMouseEnter={() => setc(sti)}> SENIOR</p>
            <p className={`${school == "college" ?" opacity-100 ": " opacity-40 "  } hover:opacity-100 `} onClick={() => cleick("college")}  onMouseEnter={() => setc(ncf)}>COLLEGE</p>
        <div className='absolute right-20 bottom-0 w-[36rem]'>
            Hello world
            <p className={`${school == "elementary" ?" inline-block ": "hidden"  } `} onClick={() => cleick("elementary")}>ELEMENTARY</p>
            <p className={`${school == "juniorhs" ?" inline-block ": "hidden"  } `} onClick={() => cleick("juniorhs")}>JUNIORHS</p>
            <p className={`${school == "senior" ?" inline-block ": "hidden"  } `} onClick={() => cleick("senior")}> SENIOR</p>
            <p className={`${school == "college" ?" inline-block ": " hidden "  } `} onClick={() => cleick("college")}>COLLEGE</p>
        </div>
        </div>


        
    </div>
  )
}

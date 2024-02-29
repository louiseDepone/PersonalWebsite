import React, { useState } from 'react'

export default function Education() {
    const [school, setschool]=useState("elementary")
    

    const cleick = (name) => [
        setschool(name)
    ]
  return (
    <div className='w-screen relative mt-20'  onMouseMove={(e) =>{
          console.log(e)
          setcursor({
            top: e.pageY - 100,
            left: e.pageX - 100
          })
        }} > 

        <div id='education'>
            <p className={`${school == "elementary" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("elementary")}>ELEMENTARY</p>
            <p className={`${school == "juniorhs" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("juniorhs")}>JUNIORHS</p>
            <p className={`${school == "senior" ?" opacity-100 ": "opacity-40"  } hover:opacity-100 `} onClick={() => cleick("senior")}> SENIOR</p>
            <p className={`${school == "college" ?" opacity-100 ": " opacity-40 "  } hover:opacity-100 `} onClick={() => cleick("college")}>COLLEGE</p>
        </div>

        <div className='absolute right-20 bottom-0 w-[36rem]'>
            Hello world
            <p className={`${school == "elementary" ?" inline-block ": "hidden"  } `} onClick={() => cleick("elementary")}>ELEMENTARY</p>
            <p className={`${school == "juniorhs" ?" inline-block ": "hidden"  } `} onClick={() => cleick("juniorhs")}>JUNIORHS</p>
            <p className={`${school == "senior" ?" inline-block ": "hidden"  } `} onClick={() => cleick("senior")}> SENIOR</p>
            <p className={`${school == "college" ?" inline-block ": " hidden "  } `} onClick={() => cleick("college")}>COLLEGE</p>

            <p>I attended my elementary years at LNCF in my hometown, where I discovered my talent in singing. I was quite active during my elementary years since I was not shy yet. I danced here and there because I really loved dancing back then. I participated in various contests, such as folk dances at the school and choir competitions against other schools. I had a lot of fun during my elementary years.</p>
        </div>
        
    </div>
  )
}

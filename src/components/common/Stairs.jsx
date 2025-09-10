import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = ({children}) => {

const stairParentRef=useRef(null)
const pageRef=useRef(null)


    const currentPath = useLocation().pathname


     useGSAP(() => {
    const tl=gsap.timeline()


    tl.to(stairParentRef.current,{
      display:"block",
    })

    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25,
      }
    })

    tl.to('.stair',{
      y:"100%",
      stagger:{
        amount:-0.25,
      },
    })

    tl.to(stairParentRef.current,{
      display:"none",
    })
    tl.to('.stair',{
      y:'0%',
    })
      gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })
   
  },[currentPath])

  return (
    <>
      <section>
        
          <div>
            <div ref={stairParentRef} className='fixed w-full z-20 h-screen top-0'>
                <div className='h-full w-full flex'>
                   <div className=" stair h-full w-1/5 bg-black"></div>
                   <div className=" stair h-full w-1/5 bg-black"></div>
                   <div className=" stair h-full w-1/5 bg-black"></div>
                   <div className=" stair h-full w-1/5 bg-black"></div>
                   <div className=" stair h-full w-1/5 bg-black"></div>
               </div>
           </div>
           <div  ref={pageRef}>
            {children}
           </div>
          </div>
      </section>
    </>
  )
}

export default Stairs

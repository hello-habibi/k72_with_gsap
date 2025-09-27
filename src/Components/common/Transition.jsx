import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { useLocation } from 'react-router-dom'

const Transition = ({children}) => {

    const containerRef = useRef(null)

   const location =   useLocation().pathname;
   console.log(location);

     useGSAP (()=>{
    const tl = gsap.timeline()
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.3
      }
    })

    tl.to('.stair',{
      y:"100%",
      stagger:{
        amount:-0.3,
      }
    })
    tl.to(containerRef.current,{
        display:"none" ,
    })
  } , location)
  return (
    
    <div>
     <div ref={containerRef} className='h-screen w-screen fixed flex z-10'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Transition
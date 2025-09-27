import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-2 items-center font-[font2]'>
        <Link to={'/projects'} onClick={()=>{console.log("Project Clicked ");}} className='text-[6vw] border-2 border-white rounded-full px-3 uppercase'>Projects</Link>
        <Link to={'/agence'} className='text-[6vw] border-2 border-white rounded-full px-3 uppercase'>Agency</Link>
    </div>
  )
}

export default HomeBottomText
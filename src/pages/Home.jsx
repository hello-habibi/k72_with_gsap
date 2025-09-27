import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBottomText from '../Components/Home/HomeBottomText'

const Home = () => {
  return (
    <section>
        <div className='h-screen w-screen fixed'>
          <Video />
        </div>
        <div className='h-screen w-screen flex flex-col justify-between relative'>

<HomeHeroText />
<HomeBottomText />
        </div>
    </section>
  )
}

export default Home
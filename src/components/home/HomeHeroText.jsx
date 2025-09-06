import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <>
      <div className='font-[font1] pt-5 text-center'>
        <div className='text-[8vw] flex justify-center  items-center uppercase leading-[10vw]'>
          L'étincelle
        </div>
        <div className='text-[8vw] flex justify-center  items-start uppercase leading-[10vw]'>
          qui
          <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
            <Video />
            </div>
          génère
        </div>
        <div className='text-[8vw] flex justify-center  items-center uppercase leading-[10vw]'>
          la créativité
        </div>
      </div>
    </>
  )
}

export default HomeHeroText

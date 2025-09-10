import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="relative w-full h-screen flex justify-center lg:items-start items-center">
      <div className="font-[font1] text-white text-center">
        {/* Line 1 */}
        <div className="lg:text-[8vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
          The spark for
        </div>

        {/* Line 2 */}
        <div className="lg:text-[8vw] text-[12vw] flex  justify-center items-center uppercase lg:leading-[8vw] leading-[10vw] gap-2">
          <span>all</span>
          <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
            <Video />
          </div>
          <span>things</span>
        </div>

        {/* Line 3 */}
        <div className="lg:text-[8vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
          creative
        </div>
      </div>
    </div>
  )
}

export default HomeHeroText


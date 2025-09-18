import React from 'react'
import Video from '/video.mp4'

const Video = () => {
  return (
    <>
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={Video}></video>
    </div>
      
    </>
  )
}

export default Video

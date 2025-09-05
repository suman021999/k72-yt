import React from 'react'
import Video from '../components/home/Video'

const Home = () => {
  return (
    <>
    <div>
      <div className='h-screen w-screen fixed'>
       <Video/>
      </div>
      <div className="h-[120vh] bg-red-900 w-1/2 relative"></div>
    </div>
      
    </>
  )
}

export default Home


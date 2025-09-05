import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Agence from './Agence'

const MainPage = () => {
  return (
    <>
      <section className='text-white '>
        {/* <Link className="text-blue-500 text-4xl mr-5 " to="/">Home</Link>
        <Link className="text-blue-500 text-4xl mr-5 " to="/agence">Agence</Link>
        <Link className="text-blue-500 text-4xl mr-5 " to="/projects">Projects</Link> */}
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/agence' element={<Agence/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </section>
    </>
  )
}

export default MainPage

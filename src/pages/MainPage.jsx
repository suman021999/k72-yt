import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Agence from './Agence'
import Navbar from '../navigation/Navbar'


const MainPage = () => {





 
  return (
    <>
      <section >
        {/* <Link className="text-blue-500 text-4xl mr-5 " to="/">Home</Link>
        <Link className="text-blue-500 text-4xl mr-5 " to="/agence">Agence</Link>
        <Link className="text-blue-500 text-4xl mr-5 " to="/projects">Projects</Link> */}
        
          
        <Navbar/>



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

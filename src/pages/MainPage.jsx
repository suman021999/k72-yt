import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Agence from './Agence'
import Navbar from '../navigation/Navbar'
import FullScreenNav from '../navigation/FullScreenNav'


const MainPage = () => {





 
  return (
    <>
      <section >
        
        
        
        <Navbar/>
          <FullScreenNav/>


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

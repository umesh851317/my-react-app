import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ReactC from './pages/React'
import Navbar from './components/Navbar/NavBar'
import ReactHook from './pages/Hooks'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/react' element={<ReactC />} />
        <Route path='/reactHook' element={<ReactHook />} />
      </Routes>
    </>
  )
  // return (
  //   <div>
  //     {/* <Props/> */}
  //     {/* <Event/> */}
  //     {/* <State/> */}
  //     {/* <UseEffect/> */}
  //     <Form/>
  //   </div>
  // )
}

export default App

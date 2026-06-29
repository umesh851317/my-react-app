import { useState } from 'react'
import './index.css'
import Event from './components/eventHandling/parent'
import Props from './components/props/parent'
import State from './components/State/State'
import UseEffect from './components/Hooks/useEffect'
import Form from './components/forms/form'
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

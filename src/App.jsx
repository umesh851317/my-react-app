import { lazy, Suspense, useState } from 'react'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loader from './animation/Loader'
import Navbar from './components/Navbar/NavBar'

// ==========>>>>>>>>>>>> normal import
// import Home from './pages/Home'
// import ReactC from './pages/React'
// import ReactHook from './pages/Hooks'

// =========>>>>>>>>>>  import using lazy loader

const Home = lazy(() => import("./pages/Home"));
const ReactC = lazy(() => import("./pages/React"))
const ReactHook = lazy(() => import("./pages/Hooks"));

function App() {
  const location = useLocation();

  console.log("Current Path:", location.pathname);
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />} >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/react' element={<ReactC />} />
          <Route path='/reactHook' element={<ReactHook />} />
        </Routes>
      </Suspense>
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

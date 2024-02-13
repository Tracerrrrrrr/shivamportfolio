import React from 'react'
import {Suspense,Lazy} from 'react'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbars from './Components/Navbars'
import SideBar from './Components/SideBar'

const App = () => {
  return (
<>
<Navbars/>
{/* <Home/> */}
<SideBar/>
<Footer/>

</>
  )
}

export default App
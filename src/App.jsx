import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'  

const App = () => {
  
  // State to manage sidebar visibility, Initially set to true to show the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Navbar setSidebarOpen={setSidebarOpen}/>
      <Routes>
        <Route path='/' element={<Home sidebarOpen={sidebarOpen}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App

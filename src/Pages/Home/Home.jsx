import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = ({sidebarOpen}) => {
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen}/>
    </>
  )
}

export default Home

import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({sidebarOpen}) => {

  const [category, setCategory] = useState(0);
  

  
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} category={category} setCategory={setCategory}/>
        <div className={`container ${sidebarOpen ? "" : "large-container"}`}>
          <Feed category={category} />
        </div>
    </>
  )
}

export default Home

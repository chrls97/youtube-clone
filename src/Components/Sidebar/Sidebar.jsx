import React from 'react'
import './Sidebar.css' 
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebarOpen, category, setCategory}) => {
  return (
                //if sidebarOpen is true, show the full sidebar, otherwise show a smaller version
    <div className={`sidebar ${sidebarOpen?"":"small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={()=> setCategory(0)}>
          <img src={home}/><p>Home</p>
        </div>

         <div className={`side-link ${category === 20? 'active' : ''}`} onClick={()=> setCategory(20)}>
          <img src={game_icon}/><p>Game</p>
        </div>

         <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={()=> setCategory(2)}>
          <img src={automobiles}/><p>Auto Mobile</p>
        </div>

         <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={()=> setCategory(17)}>
          <img src={sports}/><p>Sports</p>
        </div>

         <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={()=> setCategory(24)}>
          <img src={entertainment}/><p>Entertainment</p>
        </div>

         <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={()=> setCategory(28)}>
          <img src={tech}/><p>Techonology</p>
        </div>

         <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={()=> setCategory(10)}>
          <img src={music}/><p>Music</p>
        </div>

         <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={()=> setCategory(22)}>
          <img src={blogs}/><p>Blogs</p>
        </div>

         <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={()=> setCategory(25)}>
          <img src={news}/><p>News</p>
        </div>
      </div>
      <hr />
      <div className="subsribed-list">
        <h3>Subscriptions</h3>
        <div className="side-link">
          <img src={jack}/><p>PewDiePie</p>
        </div>

         <div className="side-link">
          <img src={simon}/><p>Mr. Beast</p>
        </div>

         <div className="side-link">
          <img src={tom}/><p>Justine Bieber</p>
        </div>

         <div className="side-link">
          <img src={megan}/><p>5-Minutes Craft</p>
        </div>

         <div className="side-link">
          <img src={cameron}/><p>Nas Daily</p>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar

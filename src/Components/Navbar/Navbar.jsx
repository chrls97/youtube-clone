import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png' 
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { useNavigate } from 'react-router-dom'



const Navbar = ({setSidebarOpen}) => {

  const navigate = useNavigate();

  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
                                        {/* //if sidebarOpen is true, show the full sidebar, otherwise show a smaller version*/}
        <img src={menu_icon}  alt='Menu' className='menu-icon' onClick={()=>setSidebarOpen(setSidebarOpen=>setSidebarOpen === false? true: false)} />
                                        {/* // Logo that redirects to home page when clicked */}
        <img src={logo} alt='YouTube Logo' className='logo' onClick={()=>navigate('/')} />
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type="text" placeholder='Search'/>
          <img src={search_icon} alt="Search" className='search-icon' />
        </div>
      </div>

      <div className='nav-right flex-div'>
        <img src={notification_icon} alt="Notification" />
        <img src={profile_icon} alt="Profile" className='user-icon'/>
      </div>
    </nav>
  )
}

export default Navbar

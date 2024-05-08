import React, { useState } from 'react'
import './Nav.css'
import { assets } from '../../assets/assets'

const Nav = () => {
  const [menu,setMenu] = useState("home")
  return (
    <div className='nav'>
      <img src={assets.logo2} alt="" className="logo" />
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
        <li onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className='nav-button'>Sign in</button>

      </div>
    </div>
  )
}

export default Nav

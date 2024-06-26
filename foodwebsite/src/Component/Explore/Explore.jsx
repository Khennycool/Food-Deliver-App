import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

const Explore = () => {
  return (
    <div className='explore' id='Explore'>
      <h1>Explore Our Menu</h1>
      <p className='explore-text'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>

              </div>
          )
        })}
      </div>

    </div>
  )
}

export default Explore
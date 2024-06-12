import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' id='header'>

      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Order your favorite food here and indulge in a world of culinary delights. <br />From comforting classics to innovative dishes, we offer a diverse menu crafted to satisfy every craving. <br/>With easy online ordering and swift delivery, treat yourself to the flavors you love, right at your doorstep.</p>
        <a href='#explore-menu'><button className='header-button'>View Menu</button></a>
      </div>
      
    </div>
  )
}

export default Header

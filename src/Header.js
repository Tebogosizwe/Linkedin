import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./headerOption";

function Header() {
  return (
    <div className='header' > 
    <div className="header__left"></div>
    <img src="" alt=""/>
    <h1>This</h1>
 
    <div className="header__search">
<SearchIcon />
      <input type="text"/>
    </div>
    
  
    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      //HeaderOption

    </div>
    </div>
  )
}

export default Header
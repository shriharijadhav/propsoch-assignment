import React from 'react'
import "../styles/header.css"

import searchIcon from '../assets/icons/searchIcon.svg';
import connectionIcon from '../assets/icons/connectionIcon.svg';
import wifiIcon from '../assets/icons/wifiIcon.svg';
import batteryIcon from '../assets/icons/batteryIcon.svg';

const Header = () => {
  return (
    <div className='header'>
      <p>10:10</p>
      <p className='headerTitle'>Propsoch</p>
      <div className='headerIcons'>
      <img src={connectionIcon} width={19.23} alt="connectionIcon" />
      <img src={wifiIcon} width={17.14} alt="wifiIcon" />
      <img src={batteryIcon} width={27.33} alt="batteryIcon" />
      </div>
    </div>
  )
}

export default Header

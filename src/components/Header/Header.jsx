import React, {useState} from 'react'
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector.jsx';
import ChooseLocal from '../SearchPlace/ChooseLocal.jsx';
import './Header.css'


function Header(){


  return(
    <header>
      <div>
        <GlobalSvgSelector id='header-logo' width={65} height={65}/>
        <h1>WEATHER</h1>
      </div>
      <div>
        <GlobalSvgSelector id='change-theme' width={35} height={35}/>
        <ChooseLocal/>
      </div>
    </header>
  )
}

export default Header
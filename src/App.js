import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import WeatherAxios from './axios/index'
import Header from './components/Header/Header.jsx'
import NowWidget from './components/ThisDay/NowWidget/NowWidget.jsx';
import NowInfo from './components/ThisDay/NowInfo/NowInfo.jsx'
import TodayCards from './components/ChangeTime/TodayCards/TodayCards';
import'./index.css'

function App() {
WeatherAxios()
  
  return (
    <div className='container'>
      <Header/>
      <div className='day-info-container'>
          <NowWidget/>
          <NowInfo/>
      </div>
      <div>
        <TodayCards/>
      </div>
    </div>
  );
}

export default App;

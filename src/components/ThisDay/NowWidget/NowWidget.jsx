import React, {useEffect, useState} from 'react'
import { useAtom } from 'jotai'
import { nowWeatherAtom } from '../../../atom/index'
import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector'
import './NowWidget.css'



export default function ThisDayWidget(){
  const [getWeatherData] = useAtom(nowWeatherAtom)
  const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  if(!getWeatherData.loading){
  function pad(n) {
    return (n < 10) ? ("0" + n) : n;
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  // nowInfo
  return(
    <div className='now-widget'>
      <div className='now-widget-info'>
        <span className='now__text'>Сейчас</span>
        <span className='now__temp'>{getWeatherData.res.current.temp_c}°</span>
        <span className='now__time'>Время: {timeString}</span>
        <span className='now__city'>{getWeatherData.res.location.name}</span>
      </div>
      <img className='now-widget__icon' src={getWeatherData.res.current.condition.icon} alt="icon" />
    </div>
  )
}
}
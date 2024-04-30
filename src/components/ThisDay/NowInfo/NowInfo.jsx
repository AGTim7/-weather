import React, {useState, useEffect} from 'react'
import { useAtom } from 'jotai'
import { nowWeatherAtom } from '../../../atom/index'
import cloud from '../../../assets/images/cloud.png'
import { WeatherInfoIcon } from '../../../assets/icons/WeatherInfoIcon'
import './NowInfo.css'

export default function ThisDayInfo(){

  
  const [getWeatherData] = useAtom(nowWeatherAtom)

  if(!getWeatherData.loading){

    const tempC = getWeatherData.res.current.temp_c

    const feelslikeC = getWeatherData.res.current.feelslike_c

    const pressure = Math.floor(getWeatherData.res.current.pressure_mb/1013.2427*760)

    const pressureState = 'нормальноое'
    if(pressureState < 755){
      pressureState = 'низкое'
    }else if(pressureState > 765){
      pressureState = 'высокое'
    }

    let precip = 'Без осадков'
    if(getWeatherData.res.current.precip_mm != 0){
      precip = getWeatherData.res.current.precip_mm + ' мм'
    }
    
    const directionRu = {
      'N': 'север',
      'NNE': 'северо-восток',
      'NE': 'северо-восток',
      'ENE': 'северо-восток',
      'E': 'восток',
      'ESE': 'юго-восток',
      'SE': 'юго-восток',
      'SSE': 'юго-восток',
      'S': 'юг',
      'SSW': 'юго-запад',
      'SW': 'юго-азпад',
      'WSW': 'юго-запад',
      'W': 'запад',
      'WNW': 'северо-запад',
      'NW': 'северо-запад',
      'NNW': 'северо-запад'
    }
    const windV = getWeatherData.res.current.wind_mph
    let windPow = 'умеренный'
    if(windV < 4){
      windPow = 'легкий'
    }else if(windV > 7){
      windPow = 'сильный'
    }
    const directionEn = getWeatherData.res.current.wind_dir
    const windDir = directionRu[directionEn]
    const windInfo = windV  + ' м/с ' + windDir + ' - ' + windPow


  return(
    <div className='now-info-widget'>
      <div className='now-info'>
        <div className='now-info__icon'>
          <WeatherInfoIcon id='temperature'/>
        </div>
        <span className='now-info__name'>Температура</span>
        <span className='now-info__value'>{tempC}° - ощущается как {feelslikeC}°</span>
      </div>
      <div className='now-info'>
        <div className='now-info__icon'>
          <WeatherInfoIcon className='now-info__icon' id='pressure'/>
        </div>
        <span className='now-info__name'>Давление</span>
        <span className='now-info__value'>{pressure} мм ртутного столба - {pressureState}</span>
      </div>
      <div className='now-info'>
        <div className='now-info__icon'>
          <WeatherInfoIcon className='this-info__icon' id='precipitation'/>
        </div>
        <span className='now-info__name'>Осадки</span>
        <span className='now-info__value'>{precip}</span>
      </div>
      <div className='now-info'>
        <div className='now-info__icon'>
          <WeatherInfoIcon className='this-info__icon' id='wind'/>
        </div>
        <span className='now-info__name'>Ветер</span>
        <span className='now-info__value'>{windInfo}</span>
      </div>
      <img className='now-info__image' src={cloud} alt="cloud" />
    </div>
  )
}
}
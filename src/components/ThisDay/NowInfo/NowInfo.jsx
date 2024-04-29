import React, {useState, useEffect} from 'react'
import { useAtom } from 'jotai'
import { nowWeatherAtom } from '../../../atom/index'
import cloud from '../../../assets/images/cloud.png'
import { WeatherInfoIcon } from '../../../assets/icons/WeatherInfoIcon'
import './NowInfo.css'

export default function ThisDayInfo(){

  
  const [getWeatherData] = useAtom(nowWeatherAtom)

  if(!getWeatherData.loading){

    const temp_c = getWeatherData.res.current.temp_c

    const feelslike_c = getWeatherData.res.current.feelslike_c

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
    
    const direction_ru = {
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
    const wind_v = getWeatherData.res.current.wind_mph
    let wind_pow = 'умеренный'
    if(wind_v < 4){
      wind_pow = 'легкий'
    }else if(wind_v > 7){
      wind_pow = 'сильный'
    }
    const direction_en = getWeatherData.res.current.wind_dir
    const wind_dir = direction_ru[direction_en]
    const windInfo = wind_v  + ' м/с ' + wind_dir + ' - ' + wind_pow


  return(
    <div className='this-day-info'>
      <div className='this-info'>
        <div className='this-info__icon'>
          <WeatherInfoIcon id='temperature'/>
        </div>
        <span className='this-info__name'>Температура</span>
        <span className='this-info__value'>{temp_c}° - ощущается как {feelslike_c}°</span>
      </div>
      <div className='this-info'>
        <div className='this-info__icon'>
          <WeatherInfoIcon className='this-info__icon' id='pressure'/>
        </div>
        <span className='this-info__name'>Давление</span>
        <span className='this-info__value'>{pressure} мм ртутного столба - {pressureState}</span>
      </div>
      <div className='this-info'>
        <div className='this-info__icon'>
          <WeatherInfoIcon className='this-info__icon' id='precipitation'/>
        </div>
        <span className='this-info__name'>Осадки</span>
        <span className='this-info__value'>{precip}</span>
      </div>
      <div className='this-info'>
        <div className='this-info__icon'>
          <WeatherInfoIcon className='this-info__icon' id='wind'/>
        </div>
        <span className='this-info__name'>Ветер</span>
        <span className='this-info__value'>{windInfo}</span>
      </div>
      <img className='this-day-info__image' src={cloud} alt="cloud" />
    </div>
  )
}
}
import React from 'react'
import './Card.css'
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector.jsx'


export default function Card({data}){

  const time = data.time.split(' ')
  const img = data.condition.icon
  const temp_c = data.temp_c
  const weatherState = data.condition.text
  let precip = 'Без осадков'
  if(data.precip_mm != 0){
    precip = data.precip_mm + ' мм'
  }

      return(
        <div className='card'>
          <div className='card-today-period'>
            <span className='card-today-time'>{time[1]}</span>
          </div>
          <img src={img} alt="icon" className='sun'/>
          <div>
            <span className='card-today-temp'>{temp_c}°</span>
          </div>
          <span className='card-today-precip'>{precip}</span>
          <span className='card-today-weather'>{weatherState}</span>
        </div>
      )
  }
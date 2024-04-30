import React from 'react'
import './Card.css'
import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector.jsx'


export default function Card({data}){

  const time = data.time.split(' ')

  const img = data.condition.icon

  const tempC = data.temp_c

  const weatherState = data.condition.text

  let precip = 'Без осадков'

  if(data.precip_mm != 0){
    precip = data.precip_mm + ' мм'
  }

      return(
        <div className='card'>
          <span className='card-time'>{time[1]}</span>
          <img src={img} alt="icon" className='card-icon'/>
          <div>
            <span className='card-temp'>{tempC}°</span>
          </div>
          <span className='card-precip'>{precip}</span>
          <span className='card-weather'>{weatherState}</span>
        </div>
      )
  }
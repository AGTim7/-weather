import React from 'react'
import { useAtom } from 'jotai';
import { nowWeatherAtom } from '../../../atom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './TodayCards.css'
import Card from '../Card/Card.jsx'

export default function TodayCards(){

  const [getWeatherAtom] = useAtom(nowWeatherAtom)

  if(!getWeatherAtom.loading){
    const weatherHoursInfoAll = getWeatherAtom.res.forecast.forecastday[0].hour
    const weatherHoursInfo = []
    for(let i = 0; i < 24; i++){
      weatherHoursInfo.push(
      <Slide
      index={i}
      className='slide'
      >
        <Card data={weatherHoursInfoAll[i]}/>
      </Slide>
      )
    }

  return(
    <div className='today-cards'>
      <CarouselProvider
        naturalSlideWidth={149}
        naturalSlideHeight={200}
        totalSlides={24}
        visibleSlides={7}
      >
        <Slider className='slider'>
          {weatherHoursInfo}
        </Slider>
      </CarouselProvider>
    </div>
  ) 
}
}
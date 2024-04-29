import React,{ useContext, useEffect } from "react";
import axios from "axios";
import {atom, useAtom} from 'jotai'

import { selectCityAtom } from '../atom/index'
import { nowWeatherAtom } from '../atom/index'


export default function WeatherAxios(){

  const [selectCity,  setSelectCity] = useAtom(selectCityAtom)
  const [, setNowWeatherAtomAxios] = useAtom(nowWeatherAtom)
  const APIKEY = process.env.REACT_APP_APIKEY


  async function fetchData() {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${selectCity}&days=1&lang=ru`);
      return response.data;
    } catch (error) {
      alert('Вышла ошибка=(')
      setSelectCity('Нальчик')
      window.location.reload(true)
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        setNowWeatherAtomAxios({ res, loading: false, error: null });
      })
      .catch((error) => {
        setNowWeatherAtomAxios({ data: null, loading: false, error: error.message });
      });
  }, [selectCity]);
}
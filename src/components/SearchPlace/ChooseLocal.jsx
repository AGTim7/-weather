import React, { useState, useEffect, useRef } from 'react'
import { useAtom } from 'jotai'
import { selectCityAtom } from '../../atom'
import axios from 'axios'
import './ChooseLocal.css'

export default function ChooseLocal(){

  const [selectCity, setSelectCity] = useAtom(selectCityAtom)
  const inputRef = useRef(selectCity)
  const [cities, setCities] = useState([])
  useEffect(()=>{
    axios
    .get("https://agtim7.github.io/Russia/cities.json")
    .then(response =>{
      setCities(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  
  
      return(
    <div className='search-container'>
      <input ref={inputRef} defaultValue={selectCity} className='search-input' type="search" list='data'/>
      <datalist className='search-datalist' id='data'>
        {cities.map((item, key)=>(
          <div><option key={key} value={item.city}/></div>
        ))}
      </datalist>
      <button className='search-button' onClick={() => setSelectCity(inputRef.current.value)}>Поиск</button>
    </div>
  )
}
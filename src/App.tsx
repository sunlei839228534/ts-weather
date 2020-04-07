import React,{useState,useEffect} from 'react'
import {createAxios,key} from './api/request'
import {UserInfoResponse, weatherResponse} from './types/res'

function App () {
  const [staticMap,setStaticMap] = useState('')
  useEffect(() => {
    createAxios<UserInfoResponse>(`v3/ip?key=${key}`).then(res=>{
      console.log(res)
    })
  },[])
  useEffect(() => {
    createAxios<string>(`v3/staticmap?location=121.757560,31.144538&zoom=10&key=${key}`).then(res =>{
      setStaticMap(encodeURI(res.data))
    })
  },[])
  return (
    <div>
      <img src={`https://restapi.amap.com/v3/staticmap?location=121.757560,31.144538&zoom=10&key=${key}`} alt=""/>
    </div>
  )
}

export default App

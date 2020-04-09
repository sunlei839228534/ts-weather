import React, { useState, useEffect } from 'react'
import UserInfo from './component/UserInfo/UserInfo/UserInfo'
import Weather from './component/Weather'

import { createAxios, key } from './api/request'
import { UserInfoResponse, weatherResponse } from './types/res'


function App() {
  const [userInfo, setUserInfo] = useState<UserInfoResponse>()
  const [weatherInfo, setWeatherInfo] = useState<weatherResponse>()

  useEffect(() => {
    //通过ip获取用户的信息
    createAxios<UserInfoResponse>(`v3/ip?key=${key}`).then(res => {
      setUserInfo(res.data)
    })
  }, [])

  return (
    <div>
      <UserInfo userInfo={userInfo} />
      <Weather />
    </div>
  )
}

export default App

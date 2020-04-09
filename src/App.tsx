import React, { useState, useEffect } from 'react'
import UserInfo from './component/UserInfo'


import { createAxios, key } from './api/request'
import { UserInfoResponse, weatherResponse } from './types/res'


function App() {
  const [userInfo, setUserInfo] = useState<UserInfoResponse>()

  useEffect(() => {
    //通过ip获取用户的信息
    navigator.geolocation.getCurrentPosition((res)=>{
      console.log(res.coords)
    })
    createAxios<UserInfoResponse>(`v3/ip?key=${key}`).then(res => {
      setUserInfo(res.data)
    })
  }, [])

  return (
    <div>
      <UserInfo userInfo={userInfo}/>
      
    </div>
  )
}

export default App

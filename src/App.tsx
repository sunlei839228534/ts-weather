import React,{useState,useEffect} from 'react'
import UserInfo from './component/UserInfo'

import {createAxios,key} from './api/request'
import {UserInfoResponse, weatherResponse} from './types/res'

function App () {
  return (
    <div>
      <UserInfo></UserInfo>
    </div>
  )
}

export default App

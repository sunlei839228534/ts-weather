import React,{memo} from 'react'
import {UserInfoResponse} from '../../types/res'


interface UserInfoProps {
  userInfo?: UserInfoResponse
}

const UserInfo:React.FC<UserInfoProps> = ({userInfo}) => {
  if(userInfo) {
    return (
      <div>{userInfo.city}</div>
      )
  }else {
    return (
      <div>loading</div>
    )
  }
}

export default memo(UserInfo)
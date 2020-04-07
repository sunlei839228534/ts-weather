import axios from 'axios'
import {AxiosInstance} from '../types/axios'
export const key = '7f9f4de78211a67e7b99b578a7a29e62'

const instance = axios.create({
  baseURL: 'https://restapi.amap.com/',
  timeout: 3000
})

export const createAxios:AxiosInstance =(url,method='get',config={},data={}) => {
  let AxiosInstance = instance
  switch(method) {
    case 'get' : 
    return AxiosInstance.get(url,config)
    case 'post':
    return AxiosInstance.post(url,data,config)
    case 'delete': 
    return AxiosInstance.delete(url,config)
    case 'head':
    return AxiosInstance.head(url,config)
    default:
    return AxiosInstance.request(config)
  }
}
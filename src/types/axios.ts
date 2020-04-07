import { AxiosResponse } from "axios"

type InstanceMethod = 'request' | 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch'

export type AxiosInstance = <T>(url:string,method?:InstanceMethod,config?:any,data?:any) => Promise<AxiosResponse<T>>

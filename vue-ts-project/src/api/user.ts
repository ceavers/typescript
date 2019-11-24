import axios,{ResponseData} from './index'
import {AxiosPromise} from 'axios'

interface LoginReqArgInterface{
    user_name:string;
    password:number|string
}
export const loginReq = (data:LoginReqArgInterface):AxiosPromise<ResponseData> =>{
    return axios.request({
        url: '/api/user/login',
        data,
        method: 'POST'  
    })
}

interface GetInfoReqArgInterface{
    user_id:string
}
export const getInfoReq = (data:GetInfoReqArgInterface):AxiosPromise<ResponseData>=>{
    return axios.request({
        url:'/api/user/get_info',
        data,
        method:'POST'
    })
}
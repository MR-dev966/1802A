import request from '../util/request'
import {getOpenId} from '../util/index'


// 登陆接口
export let userLogin = (code)=>{
    return request.get(`/login/code?code=${code}`)
}

// 更新用户信息
export let updateUserInfo = (params)=>{
    return request.post('/login/insert', params);
}


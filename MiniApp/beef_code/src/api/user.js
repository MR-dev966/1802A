import request from '../util/request'

// 登陆接口
export let userLogin = (code)=>{
    return request.get(`/login/code?code=${code}`)
}

// 更新用户信息
export let updateUserInfo = (params)=>{
    return request.post('/login/insert', params);
}

// 获取优惠券列表
export let getCouponList = ()=>{
    return request.get(`/coupon/list`)
}

// 获取我领取的优惠券
export let getMyCouponList = ()=>{
    let openId = '';
    return request.get(`/coupon/${openId}`)
}
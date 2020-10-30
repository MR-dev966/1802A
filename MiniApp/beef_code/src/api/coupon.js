import request from '../util/request'
import {getOpenId} from '../util/index'

// 获取优惠券列表
export let getCouponList = ()=>{
    return request.get(`/coupon/list`)
}

// 获取我领取的优惠券
export let getMyCouponList = ()=>{
    let openId = getOpenId()
    return request.get(`/coupon/${openId}`)
}
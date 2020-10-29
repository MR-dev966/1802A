import request from '../util/request'
import {getOpenId} from '../util/index'

// 获取已领优惠券
export let getCouponList = ()=>{
    let openId = getOpenId()
    return request.get(`/coupon/${openId}`)
}

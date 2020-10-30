import request from '../util/request'
import {getOpenId} from '../util/index'

// 获取商品详情
export let getGoodsDetail = (goodsId)=>{
    return request.get(`/goodsBanner/list?goodsId=${goodsId}`)
}

// 获取购物车列表
export let getCartList = ()=>{
    let openId = getOpenId()
    return request.get(`/cart/${openId}`)
}

// 添加购物车
export let addCart = (goodsCartAddVOList)=>{
    let openId = getOpenId()
    return request.post(`/cart`, {
        goodsCartAddVOList,
        openId
    })
}

import request from '../util/request'

// 获取全部商品
export let getGoodsList = ()=>{
    return request.get('/goods/list')
}

// 获取限时特价
export let getSeckillList = ()=>{
    return request.get('/seckill/list')
}
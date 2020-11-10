import request from '@/utils/request'

// 获取首页数据
export const getHomeList = (params) => {
  return request.post('/service/home', params)
}

import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 30000
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use((response) => {
  if (response.code !== 200) {
    if (response.data.result != 0) {
      // 处理业务逻辑错误
    } else {
      return response.data
    }
  } else {
    // 处理网络请求错误
  }
}, err => {
  // 处理其他错误
  console.log('err..', err)
  return Promise.resolve()
})

export default instance

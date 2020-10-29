const Fly = require("flyio/dist/npm/wx") 

const fly = new Fly;

// 全局配置
fly.config = {
    baseURL: 'https://weapp.jasonandjay.com/',
    timeout: 3000
};
 
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvcVdHUzR2VHBZMTFHOVhCQkVmNHJQMjR2bmtJIiwiaWF0IjoxNjAzNjg5MDA1LCJleHAiOjE2MDM2OTI2MDV9.boPEMhlJgC1M6R6wlOSEbRzlRy3pqGoz8UK3_7QZJbrxGL2hM9UKct3i4_-JmvmPlPxMSLO30Hm56ztUWmrmsw`;
//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["token"] = token;
  	//打印出请求体
  	console.log(request.body)
  	//终止请求
  	//var err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
  
    // 添加请求loading
    wx.showLoading({
      title: 'Loading...', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
    });

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

 
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        wx.hideLoading();
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        wx.hideLoading();
        wx.showToast({
          title: err.toString(), //提示的内容,
          icon: 'none', //图标
        });
        //发生网络错误后会走到这里
        return Promise.resolve()
    }
)

export default fly;
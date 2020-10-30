<script>
	import {userLogin} from './api/index'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			wx.login({
			  success: async res => {
				  console.log('res...', res);
				  if (res.errMsg === 'login:ok'){
				  	let result = await userLogin(res.code)
					wx.setStorageSync('openId', result.result)
				  }else{
					  wx.showToast({
						title: '登陆失败', //提示的内容,
						icon: 'none', //图标,
					  });
				  }
			  }
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

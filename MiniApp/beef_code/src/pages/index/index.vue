<template>
	<div>
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="(item, index) in banners" :key="index">
				<image mode="widthFix" :src="item"></image>
			</swiper-item>
		</swiper>

		<section>
			<p>
				<span :class="{active: !index}" @click="changeIndex(0)">全部商品</span>
				<span :class="{active: index}" @click="changeIndex(1)">限时特价</span>
			</p>
			<section v-if="!index">
				<li v-for="(item, index) in curGoodsList" :key="index">
					<image
					  :src="`https://weapp.jasonandjay.com/fileupload${item.goodsImgUrl}`"
					  mode="widthFix"
					  lazy-load="false">
					</image>
					<p>{{item.goodsName}}</p>
				</li>
			</section>
			<section v-else>
				<li v-for="(item, index) in curSeckillList" :key="index">
					<image
					  :src="`https://weapp.jasonandjay.com/fileupload${item.goodsImgUrl}`"
					  mode="widthFix"
					  lazy-load="false">
					</image>
					<p>{{item.goodsName}}</p>
				</li>
			</section>
		</section>
	</div>
</template>

<script>
	const banners = [
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-smallfish/e6b0e580-1528-11eb-880a-0db19f4f74bb.png',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-smallfish/eca53fe0-1528-11eb-9dfb-6da8e309e0d8.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-smallfish/e6b0e580-1528-11eb-880a-0db19f4f74bb.png'
	]
	import {getGoodsList, getSeckillList} from '../../api'
	export default {
		data() {
			return {
				banners,
				goodsList: [],
				seckillList: [],
				index: 0,
				goodsPage: 1,
				seckillPage: 1
			}
		},
		computed: {
			curGoodsList(){
				return this.goodsList.slice(0, this.goodsPage*10)
			},
			curSeckillList(){
				return this.seckillList.slice(0, this.seckillPage*10)
			}
		},
		methods: {
			changeIndex(index){
				this.index = index;
				this.goodsPage = 1;
				this.seckillPage = 1;
			}
		},
		async onLoad() {
			let goodsList = await getGoodsList();
			this.goodsList = goodsList.result;
			let seckillList = await getSeckillList();
			this.seckillList = seckillList.result;
		},
		async onPullDownRefresh(){
			if (this.index === 0){
				this.goodsPage = 1;
				let goodsList = await getGoodsList();
				this.goodsList = goodsList.result;
			}else{
				this.seckillPage = 1;
				let goodsList = await getSeckillList();
				this.goodsList = goodsList.result;
			}
			wx.stopPullDownRefresh();
		},
		onReachBottom(){
			if (this.index === 0){
				this.goodsPage++;
			}else{
				this.seckillPage++;
			}
		},
		onShareAppMessage(){
			return {
				path: '/pages/index/index',
				title: '昆尚牛肉'
			}
		}
	}
</script>

<style lang="scss" scoped>
image{
	width: 100%;
}
</style>

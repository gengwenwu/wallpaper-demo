<template>
	<view class="classlist">
		<!-- 头部 loading框 -->
		<view class="loadingLayout" v-if="!classList.length && !noData">
			<uni-load-more status="loading" />
		</view>

		<!-- 列表内容 -->
		<view class="content">
			<navigator :url="'/pages/preview/preview?id=' + item._id" class="item" v-for="item in classList"
				:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill" lazy-load />
			</navigator>
		</view>

		<!-- 触底 加载框-->
		<view class="loadingLayout" v-if="classList.length || noData">
			<uni-load-more :status="noData ? 'noMore' : 'loading'" />
		</view>

		<!--  app、小程序底部安全高度 -->
		<div class="safe-area-inset-bottom"></div>
	</view>

</template>

<script setup>
	import {
		ref
	} from "vue"

	import {
		apiGetClasswList
	} from "../../api/apis.js"

	import {
		onLoad,
		onUnload,
		onReachBottom,
		onShareAppMessage,
		onShareTimeline
	} from "@dcloudio/uni-app"

	// 列表数据
	const classList = ref([])
	// 接口请求参数
	const queryParams = {
		pageNum: 1,
		pageSize: 12
	}

	const noData = ref(false)

	let pageName = null

	// onLoad 接收参数
	onLoad((e) => {
		// id
		queryParams.classid = e.id
		pageName = e.name

		// 标题
		uni.setNavigationBarTitle({
			title: e.name
		})

		getClasswList()
	})

	// 触底加载更多
	onReachBottom(() => {
		// 没有更多数据，不再请求
		if (noData.value) return

		queryParams.pageNum++
		getClasswList()
	})

	// 请求分类
	const getClasswList = async () => {
		let res = await apiGetClasswList(queryParams)
		classList.value = [...classList.value, ...res.data]

		// 没有更多数据
		if (queryParams.pageSize > res.data.length) {
			noData.value = true
		}

		uni.setStorageSync("storageClassList", classList.value)
	}

	// 分享给好友
	onShareAppMessage((e) => {
		return {
			title: "咸虾米壁纸-" + pageName,
			// 分享好友传递参数
			path: "/pages/classify/classify?id=" + queryParams.classid + "&name=" + pageName
		}
	})

	// 分享朋友圈
	onShareTimeline(() => {
		return {
			title: "咸虾米壁纸-" + pageName,
			// 网络图、本地图均可。注意：
			// 1，图片是1:1比例
			// 2，本地图片使用static目录的，放在common中的，打包后，会拿不到图片
			// 3, 分享朋友圈，参数imageUrl也可以不要写
			imageUrl: "/static/images/xxmLogo.png",
			// imageUrl: bannerList.value[0].picurl
			// 朋友圈传参，不要带path
			query: "id=" + queryParams.classid + "&name=" + pageName
		}
	})

	// 卸载
	onUnload(() => {
		
		// 清除缓存
		uni.removeStorageSync("storageClassList")
	})
</script>

<style lang="scss" scoped>
	.content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rpx;
		padding: 5rpx;

		.item {
			image {
				height: 440rpx;
				width: 100%;
				display: block;
			}
		}
	}
</style>
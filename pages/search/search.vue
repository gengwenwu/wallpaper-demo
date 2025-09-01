<template>
	<view class="searchLayout">

		<!-- 搜索 -->
		<view class="search">
			<uni-search-bar @confirm="clickTab(queryParams.keyword)" @cancel="onClear" @clear="onClear" focus
				placeholder="搜索" v-model="queryParams.keyword" />
		</view>

		<!-- 搜索历史 和 热门搜索 -->
		<view v-if="!classList.length  || noSearch">
			<!-- 最近搜索 -->
			<view class="history" v-if="historySearch.length">
				<view class="topTitle">
					<view class="text">最近搜索</view>
					<view class="icon" @click="removeHistory">
						<uni-icons type="trash" size="25" />
					</view>
				</view>
				<view class="tabs">
					<view class="tab" v-for="tab in historySearch" :key="tab" @click="clickTab(tab)"> {{tab}}</view>
				</view>
			</view>

			<!-- 热门搜索 -->
			<view class="recommend">
				<view class="topTitle">
					<view class="text">热门搜索</view>
				</view>
				<view class="tabs">
					<view class="tab" v-for="tab in recommendList" :key="tab" @click="clickTab(tab)">{{tab}}</view>
				</view>
			</view>
		</view>

		<!-- 无数据空视图 -->
		<view class="noSearch" v-if="noSearch">
			<uv-empty mode="search" icon="https://cdn.uviewui.com/uview/empty/search.png"></uv-empty>
		</view>

		<!-- 搜索到的图片列表  -->
		<view v-else>
			<view class="list">
				<navigator :url="`/pages/preview/preview?id=${item._id}`" class="item" v-for="item in classList"
					:key="item_id">
					<image :src="item.smallPicurl" mode="aspectFill" />
				</navigator>
			</view>
			<view class="safe-area-inset-bottom" v-if="noData || classList.length">
				<uni-load-more :status="noData? 'noMore' : 'loading'" />
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	import {
		onLoad,
		onUnload,
		onReachBottom
	} from "@dcloudio/uni-app"

	import {
		apiSearchWall
	} from "@/api/apis.js"

	// 查询参数
	const queryParams = ref({
		pageNum: 1,
		pageSize: 12,
		keyword: ""
	})

	// 搜索历史词
	const historySearch = ref(uni.getStorageSync("historySearch") || []);
	// 热门搜索词
	const recommendList = ref(["美女", "帅哥", "宠物", "卡通"]);

	// 没有更多
	const noData = ref(false);
	// 没有搜索结果
	const noSearch = ref(false);

	// 搜索结果列表
	const classList = ref([]);

	//点击搜索
	const onSearch = () => {
		console.log(queryParams.value.keyword);
		uni.showLoading()

		// [queryParams.value.keyword, ...historySearch.value] -> 将 keyword、historySearch 创建新的数组
		// [...new Set()] -> 去重后，使用 ... 展开后，创建新的数组
		historySearch.value = [...new Set([queryParams.value.keyword, ...historySearch.value])].splice(0, 10)
		uni.setStorageSync("historySearch", historySearch.value)

		searchData()
	}

	// 点击清除按钮
	const onClear = () => {
		initParams()
	}

	// 点击标签进行搜索
	const clickTab = (value) => {
		initParams()
		queryParams.value.keyword = value
		onSearch()
	}

	// 点击清空搜索记录
	const removeHistory = () => {
		uni.showModal({
			title: "是否清空历史搜索？",
			success: (res) => {
				if (res.confirm) {
					uni.removeStorageSync("historySearch");
					historySearch.value = [];
				}
			}
		})
	}

	// 搜索
	const searchData = async () => {
		try {
			let res = await apiSearchWall(queryParams.value)
			console.log(res);

			classList.value = [...classList.value, ...res.data]
			uni.setStorageSync("storageClassList", classList.value)

			if (queryParams.value.pageSize > res.data.length) noData.value = true
			if (classList.value.length == 0 && res.data.length == 0) noSearch.value = true
		} finally {
			uni.hideLoading()
		}
	}

	// 重制参数
	const initParams = (() => {
		classList.value = []
		noData.value = false
		noSearch.value = false
		queryParams.value = {
			pageNum: 1,
			pageSize: 12,
			keyword: ""
		}
	})

	// 触底		
	onReachBottom(() => {
		// 无数数据
		if (noData.value) return

		queryParams.value.pageNum++
		searchData()
	})

	// 页面卸载
	onUnload(() => {
		uni.removeStorageSync("storageClassList")
	})
</script>

<style lang="scss" scoped>
	.searchLayout {
		.search {
			padding: 0rpx 10rpx;
		}

		.history {
			padding: 30rpx;
		}

		.recommend {
			padding: 30rpx;
		}

		.topTitle {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32rpx;
			color: #999;

			.text {
				font-size: 24rpx;
			}
		}

		.tabs {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding-top: 20rpx;

			.tab {
				background-color: #f4f4f4;
				font-size: 28rpx;
				color: #333;
				padding: 10rpx 20rpx;
				border-radius: 50rpx;
				margin-right: 20rpx;
				margin-top: 20rpx;
			}
		}

		.list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 20rpx 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>
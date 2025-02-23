<template>
	<view class="layout">
		<view class="navbar">
			<!-- 1，系统头部bar，设置bar高度即可 -->
			<view class="statusBar" :style="{height:statusBarHeight + 'px'}"></view>
			<!-- 2，自定义bar头部 -->
			<view class="titleBar">
				<view class="title">标题</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>

		<view class="fill" :style="{height: statusBarHeight+titleBarHeight+'px'}">

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	// uniapp api-》设备 https://uniapp.dcloud.net.cn/api/system/info.html
	let SYSTEM_INFO = uni.getSystemInfoSync();
	console.log(SYSTEM_INFO);

	// #ifdef APP| H5
	let statusBarHeight = 10
	// #endif
	// #ifndef APP| H5
	// 状态栏高度 (适配手机、小程序设备)，h5看不出来变化
	let statusBarHeight = ref(SYSTEM_INFO.statusBarHeight);
	// #endif

	// #ifdef APP| H5
	let titleBarHeight = 20
	// #endif
	// #ifndef APP| H5
	// 获取小程序头部下该菜单按钮的布局位置信息，注意：getMenuButtonBoundingClientRect() api， app和h5不支持
	let MENU_BUTTON = uni.getMenuButtonBoundingClientRect();
	console.log(MENU_BUTTON);

	// 解构对象，计算头部高度
	let {
		top,
		height
	} = uni.getMenuButtonBoundingClientRect();
	// *2，是因为胶囊按钮上下边距，有2个，height是胶囊按钮高度
	let titleBarHeight = ref((top - statusBarHeight.value) * 2 + height);
	// #endif

	console.log("titleBarHeight:", titleBarHeight);
</script>

<style lang="scss" scoped>
	.layout {
		.navbar {
			// 固定定位
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			// z-index 层级默认是1，数量越大，越在上面
			z-index: 10;

			// 渐变背景色
			// to right: 从左到右，中间可以添加多个颜色。
			background:
				// 多个linear-gradient，越靠近 background，层级越高(最上面)
				// transparent=rgba(0,0,0,0), 既：透明色, 400rpx整个渐变的高度
				linear-gradient(to bottom, transparent, #fff 400rpx),
				// 20%, 绿色占比更大
				linear-gradient(to right, #beecd8 20%, #F4E2D8);

			.statusBar {}

			.titleBar {
				display: flex;
				align-items: center;
				padding: 0 30rpx;

				.title {
					font-size: 22rpx;
					font-weight: 700;
					color: $text-font-color-1;
				}

				.search {
					width: 220rpx;
					height: 50rpx;
					border-radius: 60rpx;
					background: rgba(255, 255, 255, 0.4);
					border: 1px solid #fff;
					margin-left: 30rpx;
					color: #999;
					font-size: 28rpx;

					display: flex;
					align-items: center;

					.icon {
						margin-left: 5rpx;
					}

					// 尽量使用css, 不要使用组件名，小程序会报错
					.text {
						padding-left: 12rpx;
					}
				}
			}
		}

		.fill {}
	}
</style>
<template>
	<view class="layout">
		<view class="navbar">
			<!-- 1，系统头部bar，设置bar高度即可 -->
			<view class="statusBar" :style="{height:getStatusBarHeight() + 'px'}"></view>
			<!-- 2，自定义bar头部 -->
			<view class="titleBar" :style="{height: getTitleBarHeight()+'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>

		<view class="fill" :style="{height:getNaBarHeight() + 'px'}">

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	import {
		getStatusBarHeight,
		getTitleBarHeight,
		getNaBarHeight
	} from "@/utils/system.js"

	defineProps({
		title: String,
		default: "壁纸"
	})
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
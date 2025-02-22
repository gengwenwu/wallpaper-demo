<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="/common/images/preview1.jpg" mode="aspectFill" />
			</swiper-item>
		</swiper>

		<view class="mask" v-if="maskState">
			<view class="goBack"></view>
			<view class="count">3 / 9</view>
			<view class="time"><uni-dateformat :date="new Date()" format="hh:mm" /></view>
			<view class="date"><uni-dateformat :date="new Date()" format="MM月dd日" /></view>
			<view class="footer">
				<view class="box">
					<uni-icons type="info" size="23"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="23"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	const maskState = ref(true)
	const maskChange = () => {
		maskState.value = !maskState.value
	}
</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.mask {
			// 下面&代表父级，既：mask。
			// >view代表紧邻的子元素，既mask的子元素：goBack、count、time、date、footer class的view
			// 注意，>后面的view，并不是View组件。孙子级别元素不受该属性影响。
			&>view {
				// 加定位
				position: absolute;
				color: #fff;
				/* 左右居中 */
				left: 0;
				right: 0;
				margin: auto;
				// 有多少内容，宽度有多大
				width: fit-content;
			}

			.goBack {}

			.count {
				// 距离顶部10%
				top: 10vh;

				background: rgba(0, 0, 0, 0.3);
				font-size: 28rpx;
				color: #fff;
				border-radius: 40rpx;
				padding: 8rpx 20rpx;
				// 模糊效果
				backdrop-filter: blur(10rpx);
			}

			.time {
				font-size: 140rpx;
				// 计算顶部高度，使用 calc函数，注意，参数中间的+号，左右加空格。否则不计算
				top: calc(10vh + 60rpx);
				font-weight: 100;
				// 去掉文字行高，1em就是去掉文字行高
				line-height: 1em;
				// 文字添加阴影，X轴是0，Y轴是4rpx，透明度0.3
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			}

			.date {
				font-size: 34rpx;
				top: calc(10vh + 230rpx);
				text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
			}

			.footer {
				background: rgba(255, 255, 255, 0.8);
				// 以底部为基准，向上10%高度
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				
				// 圆角不能超过长度的一半，一半正好是圆角
				border-radius: 60rpx;
				color: #000;
				// 水平
				display: flex;
				// 水平均分
				justify-content: space-around;
				// 主对轴居中
				align-items: center;
				text-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(20rpx);

				.box {
					// 垂直居中
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;

					.text {
						font-size: 26rpx;
						color: $text-font-color-2
					}
				}
			}
		}
	}
</style>
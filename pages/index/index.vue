<template>
	<view class="homeLayout pageBg">
		<!-- 头部banner -->
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" circular
				autoplay duration="600" interval="2000">
				<swiper-item v-for="item in banners">
					<image :src="item" mode="aspectFill" />
				</swiper-item>
			</swiper>
		</view>

		<!-- 通知 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" />
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay circular duration="300" interval="1500">
					<swiper-item v-for="item in notices">{{item}}</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333" />
			</view>
		</view>

		<!--  每日推荐 -->
		<view class="select">
			<common-title>
				<!-- name 是具名方式 -->
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" />
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日" />
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill" />
					</view>
				</scroll-view>
			</view>
		</view>

		<!-- 专题 -->
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>

			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>

	</view>
</template>

<script setup>
	const banners = [
		"../../common/images/banner1.jpg",
		"../../common/images/banner2.jpg",
		"../../common/images/banner3.jpg"
	]

	const notices = [
		"《挪吒2魔童闹海票》房超过100亿啦,国人的你，有贡献一票吗？",
		"美国队长4，票房扑街了",
		"特朗普，靠谱吗? 美国人民怎么看待这个问题？",
		"2025，中国经济迎来巨大挑战！"
	]
</script>

<style lang="scss" scoped>
	.homeLayout {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				// &是省略写法，代表的是自己，既swiper，全写应该是 swiper-item
				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}

		.notice {
			width: 690rpx;
			height: 80rpx;
			// 文字高度
			line-height: 80rpx;
			background: #f9f9f9;
			border-radius: 80rpx;

			/* 水平居中 */
			// margin: 0 auto; 作用是将元素在其父元素内进行水平居中对齐。这个声明是 margin 属性的缩写形式，
			// 等价于分别设置 margin-top: 0; margin-bottom: 0; margin-left: auto; 和 margin-right: auto; 
			display: flex;
			margin: 0 auto;

			.left {
				width: 140rpx;
				/* 居中 */
				// flex 适合行、列这种布局
				display: flex;
				align-items: center;
				justify-content: center;

				:deep() {
					.uni-icons {
						color: $brand-theme-color !important;
					}
				}

				.text {
					color: $brand-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
			}

			.center {
				// flex: 1表示占据剩余的宽度。
				// 既 .left 和 .right 占据部分 width 后，剩下的部分宽度都给 .center 布局。
				flex: 1;

				swiper {
					height: 100%;

					&-item {
						height: 100%;
						font-size: 30rpx;
						color: #666;

						/* 文案超长处理 */
						// 超长，隐藏
						overflow: hidden;
						// 不换行
						white-space: nowrap;
						// 多出文案省略号
						text-overflow: ellipsis;
					}
				}
			}

			.right {
				width: 70rpx;
				/* 居中 */
				display: flex;
				// align-items 属性用于定义 Flex 项目在交叉轴上的对齐方式
				align-items: center;
				justify-content: center;
			}
		}

		.select {
			padding-top: 50rpx;

			.date {
				color: $brand-theme-color;
				display: flex;
				align-items: center;

				// :deep() 是vue3 语法，穿透组件内部，修改样式。
				// 否则，下面的 .uni-icons 样式，在小程序中不生效
				:deep() {
					.uni-icons {
						// 添加 !important，样式权重最高
						color: $brand-theme-color !important;
					}
				}


				.text {
					margin-left: 5rpx;
				}
			}

			.content {
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;

				scroll-view {
					// 同一行显示，不换行
					white-space: nowrap;

					.box {
						width: 200rpx;
						height: 430rpx;
						margin-right: 15rpx;
						// 行内元素会在一行内依次排列，不会换行。
						display: inline-block;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}

					// 伪类选择器，最后一个 margin-right为30rpx，与第一个margin-left: 30rpx 保持一致
					.box:last-child {
						margin-right: 30rpx;
					}
				}
			}
		}

		.theme {
			padding: 50rpx 0;

			.more {
				font-size: 32rpx;
				color: #888;
			}

			.content {
				margin: 30rpx;
				padding: 0 30rpx;
				/* 网格布局：display、gap、grid-template-columns 3个属性常用 */
				display: grid;
				// 间隔
				gap: 15rpx;
				// 网格，横向3个，
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
<template>
	<view class="userLayout">
		<!-- 用户信息 -->
		<view class="userInfo">
			<view class="avator">
				<image src="/static/images/xxmLogo.png" mode="aspectFill" />
			</view>
			<view class="ip">100.100.100.100</view>
			<view class="address">来自于：{山东}</view>
		</view>

		<!-- 第1块区域 -->
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 2">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<text class="text">我的下载</text>
					</view>
					<view class="right">
						<text class="text" color="#aaa">33</text>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>

		<!-- 第2块区域 -->
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389" />
						<text class="text">我的下载</text>
					</view>
					<view class="right">
						<text class="text" color="#aaa">33</text>
						<uni-icons type="right" size="20" color="#aaa" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.userLayout {
		.userInfo {
			/* 居中，三要素 */
			display: flex;
			align-items: center;
			justify-content: center;
			
			// 竖向排列
			flex-direction: column;
			padding: 50rpx 0;

			.avator {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				// 给父级加圆角，一定要加这个。否则，子组件内切不到圆角(有图片的情况)
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.ip {
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}

			.address {
				font-size: 28rpx;
				color: #aaa;
			}
		}

		.section {
			width: 690rpx;
			// 上下 50rpx，左右居中
			margin: 50rpx auto;
			/* 边框、圆角、阴影 */
			border: 1px solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

			.list {
				.row {
					display: flex;
					// 居中
					align-items: center;
					// 两端对其排列方式
					justify-content: space-between;
					padding: 0 30rpx;
					height: 100rpx;
					// 底线
					border-bottom: 1px solid #eee;

					// &代表的是自己，既row。&:last-child 表示最后一个row，既：没有下划线
					&:last-child {
						border-bottom: 0;
					}

					.left {
						display: flex;
						align-items: center;

						.text {
							padding-left: 20rpx;
							color: #666;
						}
					}

					.right {
						display: flex;
						align-items: center;

						.text {
							font-size: 28rpx;
							color: #aaa;
						}
					}
				}
			}
		}
	}
</style>
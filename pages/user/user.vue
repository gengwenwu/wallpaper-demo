<template>
	<view class="userLayout pageBg">
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
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<text class="text">我的下载</text>
					</view>
					<view class="right">
						<text class="text" color="#aaa">0</text>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<text class="text">我的评分</text>
					</view>
					<view class="right">
						<text class="text" color="#aaa">2</text>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"></uni-icons>
						<text class="text">联系客服</text>
					</view>
					<view class="right">
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
					<!-- 这里使用了条件编译，官方连接：
					https://uniapp.dcloud.net.cn/tutorial/platform.html 
					-->
					<!-- #ifdef MP -->
					<!-- 1，小程序显示：联系客服 -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<!-- 2，非小程序显示：拨打电话 -->
					<button @click="clickContact">拨打电话</button>
					<!-- #endif -->
				</view>
			</view>
		</view>

		<!-- 第2块区域 -->
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="20" />
						<text class="text">订阅更新</text>
					</view>
					<view class="right">
						<uni-icons type="right" size="20" color="#aaa" />
					</view>
				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="20" />
						<text class="text">常见问题</text>
					</view>
					<view class="right">
						<uni-icons type="right" size="20" color="#aaa" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const clickContact = () => {
		// 拨打电话，官方文档：api -> 设备， https://uniapp.dcloud.net.cn/api/system/phone.html
		uni.makePhoneCall({
			phoneNumber: "114"
		})
	}
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
					background: #fff;

					// &代表的是自己，既row。&:last-child 表示最后一个row，既：没有下划线
					&:last-child {
						border-bottom: 0;
					}

					// 相对定位，“联系客服”button使用
					position: relative;

					.left {
						display: flex;
						align-items: center;
						:deep(){
							.uni-icons{
								color:$brand-theme-color !important;
							}
						}

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

					// 联系客服
					button {
						// 绝对定位
						position: absolute;
						left: 0;
						top: 0;

						height: 100%;
						width: 100%;
						// 透明度 
						opacity: 0;
					}
				}
			}
		}
	}
</style>
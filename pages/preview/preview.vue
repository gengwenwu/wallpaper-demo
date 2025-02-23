<template>
	<view class="preview">
		<!-- 轮播数字 -->
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="/common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<!-- 遮罩层 -->
		<view class="mask" v-if="maskState">
			<view class="goBack"></view>
			<view class="count">3 / 9</view>
			<view class="time"><uni-dateformat :date="new Date()" format="hh:mm" /></view>
			<view class="date"><uni-dateformat :date="new Date()" format="MM月dd日" /></view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="23"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="23"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>

		<!-- 信息弹框 https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html -->
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<!-- 这里的空view，是UI占位作用 -->
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close">
						<uni-icons @click="clickInfoClose" type="closeempty" size="18" color="#999" />
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<text class="label">壁纸ID：</text>
							<text class="value" selectable>122323232</text>
						</view>
						<view class="row">
							<text class="label">分类：</text>
							<text class="value class">明星美女</text>
						</view>
						<view class="row">
							<text class="label">发布者：</text>
							<text class="value">咸虾米</text>
						</view>
						<view class="row">
							<text class="label">评分：</text>
							<view class="value roteBox">
								<!-- 评分组件， https://uniapp.dcloud.net.cn/component/uniui/uni-rate.html -->
								<uni-rate readonly touchable value="3.5" size="16" />
								<text class="score">5分</text>
							</view>
						</view>
						<view class="row">
							<text class="label">摘要：</text>
							<text class="value">摘要文字内容填充部分，摘要文字内容填充部分，摘要文字内容填充部分，摘要文字内容填充部分，摘要文字内容填充部分，</text>
						</view>
						<view class="row">
							<text class="label">标签：</text>
							<view class="value tabs">
								<view class="tab" v-for="item in 3">标签名</view>
							</view>
						</view>
						<view class="copyright">
							声明：本图片学习使用，非商业用途。如果侵犯了您的权益，请联系QQ：490211581，维护您的权益
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<!-- 评分弹框 https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html -->
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<!-- 这里的空view，是UI占位作用 -->
					<view></view>
					<view class="title">壁纸评分</view>
					<view class="close">
						<uni-icons @click="clickScoreClose" type="closeempty" size="18" color="#999" />
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="userScore" allow-half></uni-rate>
					<text class="text">{{userScore}}分</text>
				</view>
				<veiw class="footer">
					<!-- plain 案例镂空 -->
					<button @click="submit" :disabled="!userScore" type="default" size="mini" plain>确认评分</button>
				</veiw>
			</view>
		</uni-popup>

	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	const maskState = ref(true)
	// info弹窗 (infoPopup与uni-popup的ref值一样)
	const infoPopup = ref(null)
	// 评分弹窗 (scorePopup与uni-popup的ref值一样)
	const scorePopup = ref(null)
	// 用户评分
	const userScore = ref(0)

	// 遮罩状态
	const maskChange = () => {
		maskState.value = !maskState.value
	}

	// info弹窗
	const clickInfo = () => {
		// 弹出层组件：https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html
		infoPopup.value.open();
	}

	// 关闭info弹窗
	const clickInfoClose = () => {
		infoPopup.value.close();
	}

	// 评分弹窗
	const clickScore = () => {
		scorePopup.value.open();
	}

	// 关闭评分弹窗
	const clickScoreClose = () => {
		scorePopup.value.close();
	}

	// 确认评分
	const submit = () => {
		console.log("确认评分");
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

		// 遮罩层
		.mask {

			// &>view 表示的是紧邻的子元素，享有同样的css样式设置。
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

		// 弹框 共同头部样式
		.popHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				color: $text-font-color-2;
				font-size: 26rpx;
			}

			.close {
				// 增大触摸区域
				padding: 6rpx;
			}
		}

		// 信息弹框
		.infoPopup {
			background: #fff;
			padding: 30rpx;
			// 左右上角30，下面两个0
			border-radius: 30rpx 30rpx 0 0;
			// 超出部分影藏
			overflow: hidden;

			scroll-view {
				// scroll-view，限制最大高度，这样在内容多的时候，有滚动条
				max-height: 60vh;

				.content {
					.row {
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;
						// 行高1.7倍
						line-height: 1.7em;

						.label {
							color: $text-font-color-3;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}

						.value {
							// 宽度自动分配
							flex: 1;
							width: 0;
						}

						.roteBox {
							display: flex;
							align-items: center;

							.score {
								font-size: 26rpx;
								color: $text-font-color-2;
								padding-left: 10rpx;
							}
						}

						.tabs {
							display: flex;
							// 显示不下，自动换行
							flex-wrap: wrap;

							.tab {
								border: 1px solid $brand-theme-color;
								color: $brand-theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0 10rpx 10rpx 0;
							}
						}

						.class {
							color: $brand-theme-color;
						}
					}

					.copyright {
						font-size: 28rpx;
						padding: 20rpx;
						background: #F6F6F6;
						color: #666;
						border-radius: 10rpx;
						margin: 20rpx 0;
						line-height: 1.6em;
					}
				}
			}
		}

		// 评分弹框
		.scorePopup {
			background: #fff;
			padding: 30rpx;
			width: 70vw;
			border-radius: 30rpx;

			.content {
				padding: 30rpx 0;
				// 居中
				display: flex;
				justify-content: center;
				align-items: center;

				.text {
					color: #FFCA3E;
					padding-left: 10rpx;
					width: 80rpx;
					font-size: 22rpx;
					line-height: 1em;
					text-align: right;
				}
			}

			.footer {
				padding: 10rpx 0;
				// 居中
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

	}
</style>
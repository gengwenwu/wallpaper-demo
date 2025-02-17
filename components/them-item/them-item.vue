<template>
	<view class="themeItem">
		<!-- 正常图片 -->
		<navigator url="" class="box" v-if="!isMore">
			<image class="pic" src="/common/images/classify1.jpg" mode="aspectFill" />
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>

		<!-- 更多 -->
		<navigator url="" class="box more" v-else>
			<image class="pic" src="/common/images/more.jpg" mode="aspectFill" />
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff" />
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isMore: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss" scoped>
	.themeItem {
		.box {
			height: 340rpx;
			border-radius: 10rpx;
			// 图片会将box的圆角覆盖掉(圆角没有效果)，加上overflow这个属性，图片就不会覆盖，就会显示圆角。
			overflow: hidden;
			// relative 会让元素相对于其正常位置（即文档流中的初始位置）进行定位。
			// 设置该属性后，元素依然处于文档流中，会占据原本的空间，不会影响其他元素的布局。
			// 同时，可以使用 top、right、bottom 和 left 属性来调整元素相对于其正常位置的偏移量。
			// 设置后，下面的 .mask 和 .tab 位置才会生效
			position: relative;

			.pic {
				width: 100%;
				height: 100%;
			}

			.mask {
				width: 100%;
				height: 70rpx;

				/*  显示位置 */
				position: absolute;
				bottom: 0;
				left: 0;

				color: #fff;
				/* 居中 */
				display: flex;
				align-items: center;
				justify-content: center;

				// 磨砂效果，模糊度与透明度也有关系的，譬如这里0.2
				backdrop-filter: blur(20rpx);
				background: rgba(0, 0, 0, 0.2);
				
				font-weight: 600;
				font-size: 30rpx;
			}

			.tab {
				position: absolute;
				left: 0;
				top: 0;

				color: #fff;
				padding: 6rpx 14rpx;
				// 右下角20rpx圆角
				border-radius: 0 0 20rpx 0;
				// 磨砂效果
				backdrop-filter: blur(20rpx);
				background: rgba(250, 129, 90, 0.7);

				// 网页最小文字大小12px，再设置小，没有用。需要通过 transform 缩小
				font-size: 22rpx;
				transform: scale(0.8);
				transform-origin: left top; // 缩小基准线，左和上
			}
		}

		.box.more {
			.mask {
				width: 100%;
				height: 100%;
				// 继承父类的排列顺序，纵向显示
				flex-direction: column;
			}

			.text {
				font-size: 28rpx;
			}
		}
	}
</style>
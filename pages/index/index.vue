<template>
	<view class="homeLayout">
		<!-- 头部banner -->
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" circular
				autoplay duration="1000">
				<swiper-item v-for="item in banners">
					<image :src="item" mode="aspectFill" />
				</swiper-item>
			</swiper>
		</view>
	</view>

</template>

<script setup>
	const banners = [
		"../../common/images/banner1.jpg",
		"../../common/images/banner2.jpg",
		"../../common/images/banner3.jpg"
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

				// &是省略写法，代表的是父的swiper，全写应该是 swiper-item
				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 15rpx;
					}
				}
			}
		}
	}
</style>
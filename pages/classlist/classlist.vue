<template>
	<view class="classlist">
		<view class="content">
			<navigator url="" class="item" v-for="item in 10">
				<image src="/common/images/preview2.jpg" mode="aspectFill" />
			</navigator>
		</view>
	</view>

</template>

<script setup>

</script>

<style lang="scss" scoped>
	.content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rpx;
		padding: 5rpx;

		.item {
			image {
				height: 440rpx;
				width: 100%;
				display: block;
			}
		}
	}
</style>
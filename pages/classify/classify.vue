<template>
	<view class="classLayout pageBg">
		<!-- 搜索标题 -->
		<custom-nav-bar title="分类"></custom-nav-bar>

		<view class="classify">
			<theme-item v-for="item in 15">

			</theme-item>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.classify {
		paddding: 30rpx;
		display: grid;
		// 一行显示3个，每个平铺满
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
</style>
<template>
	<view class="common-title">
		<view class="name">
			<!-- 具名插槽，name -->
			<slot name="name"></slot>
		</view>
		<view class="custom">
			<!-- 具名插槽，custom -->
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.common-title {
		display: flex;
		// 当父元素设置了 display: flex 或 display: inline-flex 时，
		// 可以使用 justify-content 属性定义子元素在主轴上的对齐方式和分布规则。
		// space-between 表示两端对其。
		justify-content: space-between;
		// 垂直居中
		align-items: center;
		padding: 0 30rpx;

		.name {
			font-size: 40rpx;
		}


	}
</style>
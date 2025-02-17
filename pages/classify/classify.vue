<template>
	<view class="classLayout">
		<view class="classify">
			<them-item v-for="item in 15">

			</them-item>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.classify {
		paddding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
</style>
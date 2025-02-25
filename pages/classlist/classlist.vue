<template>
	<view class="classlist">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill" />
			</navigator>
		</view>
	</view>

</template>

<script setup>
	import {
		ref
	} from "vue"

	import {
		apiGetClasswList
	} from "../../api/apis.js"

	import {
		onLoad
	} from "@dcloudio/uni-app"

	const classList = ref([])
	const queryParams = {}

	// onLoad 接收参数
	onLoad((e) => {
		// id
		queryParams.classid = e.id

		// 标题
		uni.setNavigationBarTitle({
			title: e.name
		})

		getClasswList()
	})

	// 请求分类
	const getClasswList = async () => {
		let data = await apiGetClasswList(queryParams)
		classList.value = data.data
	}
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
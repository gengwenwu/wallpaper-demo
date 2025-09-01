import {
	request
} from "@/utils/request.js"


// 首页banner
export function apiGetBanner() {
	return request({
		url: "/homeBanner"
	})
}

// 首页每日推荐
export function apiGetDayRandom() {
	return request({
		url: "/randomWall"
	})
}

// 首页公告, data是一个对象，严谨一些设置 {}
export function apiGetNotice(data = {}) {
	return request({
		url: "/wallNewsList",
		data
	})
}

// 首页专题
export function apiGetClassify(data = {}) {
	return request({
		url: "/classify",
		data
	})
}

// 分类
export function apiGetClasswList(data = {}) {
	return request({
		url: "/wallList",
		data
	})
}

// 评分
export function apiGetSetupScore(data = {}) {
	return request({
		url: "/setupScore",
		data
	})
}

// 壁纸下载
export function apiWriteDownload(data = {}) {
	return request({
		url: "/downloadWall",
		data
	})
}

// 单个壁纸详情
export function apiDetailWall(data = {}) {
	return request({
		url: "/detailWall",
		data
	})
}

// 个人信息
export function apiUserInfo(data = {}) {
	return request({
		url: "/userInfo",
		data
	})
}

// 我的评分/下载列表
export function apiUserWallList(data = {}) {
	return request({
		url: "/userWallList",
		data
	})
}

// 壁纸资讯公告详情
export function apiWallNewsDetail(data = {}) {
	return request({
		url: "/wallNewsDetail",
		data
	})
}


// 搜索壁纸
export function apiSearchWall(data = {}) {
	return request({
		url: "/searchWall",
		data
	})
}
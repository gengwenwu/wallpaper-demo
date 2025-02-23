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
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

// 首页公告
// export function apiGetNotice() {
// 	return request({
// 		url: "/wallNewsList"
// 	})
// }
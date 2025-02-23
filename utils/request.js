const BASE_URL = "https://tea.qingnian8.com/api/bizhi"
/**
 * 网络请求基类
 **/
export function request(config = {}) {
	// 解构参数
	let {
		url,
		method = "GET",
		header = {}
	} = config

	url = BASE_URL + url
	// header['access-key"'] = "aaaaa"

	return new Promise((resolve, reject) => {
		uni.request({
			// 参数名与value同名的简写方法
			url,
			method,
			header,
			// 通信成功
			success: res => {
				if (res.data.errCode === 0) {
					// 正确
					resolve(res)
				} else if (res.data.errCode === 400) {
					// 自定义error
					uni.showModal({
						title: "错误提示",
						content: res.data.errMsg,
						showCancel: false
					})
					reject(res.data)
				} else {
					// 其它错误
					uni.showToast({
						title: res.data.errMsg,
						icon: "none"
					})
					reject(res.data)
				}
			},
			// 通信异常
			fail: err => {
				reject(res.err)
			}
		})
	})

}
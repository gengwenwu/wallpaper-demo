//  uniapp api-》设备 https://uniapp.dcloud.net.cn/api/system/info.html
const SYSTEM_INFO = uni.getSystemInfoSync();

// 获取状态栏高度。状态栏高度 (适配手机、小程序设备)，h5看不出来变化，既：0
export const getStatusBarHeight = () => {
	return SYSTEM_INFO.statusBarHeight || 0;
}

// 获取胶囊按钮总高度
export const getTitleBarHeight = () => {
	// // 获取小程序头部下该菜单按钮的布局位置信息，
	// 注意：getMenuButtonBoundingClientRect() api， app和h5不支持
	if (uni.getMenuButtonBoundingClientRect) {
		// 小程序
		// 解构对象，计算头部高度
		let {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect();
		// *2，是因为胶囊按钮上下边距，有2个，height是胶囊按钮高度
		return (top - getStatusBarHeight()) * 2 + height;
	} else {
		// app和h5
		return 40;
	}
}

// 头部bar高度
export const getNaBarHeight = () => getStatusBarHeight() + getTitleBarHeight();

// 今日头条，头部左边logo按钮 left位置
export const getLeftIconLeft = () => {
	// #ifdef MP-TOUTIAO
	console.log(tt.getMenuButtonBoundingClientRect());
	// 深度解构，leftIcon、left、width 都是里面的属性
	let {
		leftIcon: {
			left,
			width
		},
	} = tt.getMenuButtonBoundingClientRect(); // tt 是头条的对象，类似 uni
	return left + parseInt(width) + 5;
	// #endif

	// #ifndef MP-TOUTIAO
	return 0;
	// #endif

}
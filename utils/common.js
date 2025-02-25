// 获取时间
export function compareTimestamp(timestamp) {
	const now = Date.now();
	const diff = now - timestamp;

	// 1分钟内
	if (diff < 60 * 1000) {
		return '1分钟';
	}

	// 1小时内
	if (diff < 60 * 60 * 1000) {
		const minutes = Math.floor(diff / (60 * 1000));
		return `${minutes}分钟`;
	}

	// 1天内
	if (diff < 24 * 60 * 60 * 1000) {
		const hours = Math.floor(diff / (60 * 60 * 1000));
		return `${hours}小时`;
	}

	// 1月内
	if (diff < 30 * 24 * 60 * 60 * 1000) {
		const days = Math.floor(diff / (24 * 60 * 60 * 1000));
		return `${days}天`;
	}

	// 3月内
	if (diff < 3 * 30 * 24 * 60 * 60 * 1000) {
		const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
		return `${months}月`;
	}

	// 超过3个月
	return null;
}
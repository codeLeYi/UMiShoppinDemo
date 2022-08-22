// components/content/detail/detail-shop-info/detail-shop-info.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		shop:Object
	},
	filters: {
		sellCountFilter: function (value) {
			if (value < 10000) return value;
			return (value/10000).toFixed(1) + '万'
		}
	},
	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		
	}
})

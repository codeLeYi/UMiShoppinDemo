// components/content/recommend/recommend.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		recommends:Array
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
		getRecommend(e){
			let index = e.currentTarget.dataset.index
			wx.navigateTo({
				url: '/components/common/web-link/web-link?link='+this.properties.recommends[index].link,
				})
		}
	}
})

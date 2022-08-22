// components/content/swiper/swiper.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		bannerList:Array
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
		swiperLink(e){
			let index = e.currentTarget.dataset.index
			// console.log('/components/content/swiperlink/swiperlink.wxml?link='+this.properties.bannerList[index].link);
			wx.navigateTo({
				url: '/components/common/web-link/web-link?link='+this.properties.bannerList[index].link,
			})
		}
	},

})

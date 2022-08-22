// components/content/goods/goodslist/goodslist.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		goods:{
			type:Array,
			default(){
				return []
			}
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
		getUrl(e){
			let index = e.currentTarget.dataset.index
			wx.navigateTo({
				url: '/components/common/web-link/web-link?link='+this.properties.goods[index].link,
				})
		}
	}
})

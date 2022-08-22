// components/content/goods/goodslistitem/goodslistitem.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		goodsitem:{
			type:Object,
			defalut(){
				return {}
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
		itemClick(e){
			let iid = e.currentTarget.dataset.id
			wx.navigateTo({
				url: '/pages/views/detail/detail?iid='+iid,
			})
		}
	}
})

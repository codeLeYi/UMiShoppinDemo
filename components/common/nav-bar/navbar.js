// components/common/nav-bar/navbar.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		currentIndex:{
			type:Number,
			defalut(){
				return 0
			}
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		titles: ['商品', '参数', '评论', '推荐'],
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		itemClick(e){
			let index = e.currentTarget.dataset.index
			this.triggerEvent('syncInfoIndex',index)
		}
	}
})

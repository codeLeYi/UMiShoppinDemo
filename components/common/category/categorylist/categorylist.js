// components/common/category/categorylist/categorylist.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		list:{
			type:Array,
			defalut(){
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
		itemClick(e){
			let index = e.currentTarget.dataset.index
			console.log(index);
			this.triggerEvent('catecoryIndex',index)
		}
	}
})

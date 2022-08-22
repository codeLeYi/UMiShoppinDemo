// components/common/tab-control/tab-control.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		titles:Array,
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

	},
	
	/**
	 * 组件的方法列表
	 */
	methods: {
		// 将点击的index发送给父组件
		itemClick(e){
			let index = e.currentTarget.dataset.index
			this.triggerEvent('syncIndex',index)
		}
	}
})

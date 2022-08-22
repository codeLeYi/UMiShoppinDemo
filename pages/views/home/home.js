import {getBanner,getGoodsList} from '../../../network/gethome'




Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		titles:['流行','新款','精选'],
		bannerList:[],
		recommends:[],
		goods:{
			'pop':{page:0,list:[]},
			'sell':{page:0,list:[]},
			'new':{page:0,list:[]},
		},
		currentType:'pop',
		currentIndex:0,
		goodlist:[],
		isPull:false,
		backtop:false,
		topNum:Number,
		tabbarisShow:false
	},
	//回到顶部图标是否显示
	onPageScroll:function(e){
		if (e.detail.scrollTop > 305 && e.detail.scrollTop < 2000) {
			this.setData({
				tabbarisShow:true,
				backtop:false
			})
		}else if (e.detail.scrollTop > 2000) {
			this.setData({
				tabbarisShow:true,
				backtop:true
			})
		} else{
			this.setData({
				tabbarisShow:false,
				backtop:false
			})
		}
		},
		

	//回到顶部
	backtop() {
		this.setData({
			topNum:0
		})
	},
	
	// 接受子组件点击的index并且设置goodlist的type值
		syncIndex(e){
			let index = e.detail
			switch (index) {
				case 0:
					this.setData({
						currentType:'pop'
					})		
					break;
				case 1:
					this.setData({
						currentType:'new'
					})
					break;
				case 2:
					this.setData({
						currentType:'sell'
					})
					break;	
				default:
					console.log('点击了个什么玩意？');
					break;
			}
			this.setData({
				currentIndex:index,
				goodlist:this.data.goods[this.data.currentType].list
			})
			
		},
		//发送轮播图及四个小模块的网络请求并封装到data中
		getBanner() {
			getBanner().then((res) => {
				this.setData({
					bannerList:res.data.banner.list,
					recommends:res.data.recommend.list
				})
				console.log('home接受的banner数据',res);
			})
		},
		//发送商品列表的网路数据请求并封装到data中
		getGoodList(type) {
			let page = this.data.goods[type].page + 1
			let a = this.data.goods[type].list
			getGoodsList(type,page).then(res => {
				console.log('home接受的goods数据type为',type,res);
				this.setData({
					a : a.push(...res.data.list),
					goodlist:	this.data.goods[this.data.currentType].list
				})
				this.data.goods[type].page += 1

			})
		},
				//下拉刷新
		torefresh(){
				let a = this.data.goods[this.data.currentType]
				if(!this.isPull){
					this.setData({
						isPull:true,
						['a.list']:a.list.length = 0,
						['a.page']:a.page = 0,
						goodlist:[],
					})
					//关闭加载状态 (转动的圈)，需要一点延时才能关闭
					this.getGoodList(this.data.currentType)
					this.setData({
						isPull:false
					}) 
				}
 },
		//上拉加载更多
		scrolltolower(){
			let page = this.data.goods[this.data.currentType].page
			let count = this.data.goods[this.data.currentType].list.length
			if(page * 30 > count){
				wx.showToast({
					title: '没有更多数据了',
					duration: 2000
				})
				setTimeout(() => {
					wx.hideToast()
				},1000)
			}
			else{
				this.getGoodList(this.data.currentType)
			}
		},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		//调用请求轮播图数据方法
		this.getBanner()
		//调用请求商品列表方法
		this.getGoodList('pop')
		this.getGoodList('new')
		this.getGoodList('sell')
		
		

	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {
		
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		
	
		
	},
	
	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})
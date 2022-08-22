// pages/views/detail/detail.js
import {getDetail,getReccommend,Goods,Shop,GoodsParam} from '../../../network/getdetail'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		iid:String,
				topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
				currentIndex: 0,
				backtop:false,
				topNum:Number,
				bottomId:'shopp',
				currentIndex:0
	},
	//页面数据初始化
	getDetails(){
		let iid = this.data.iid
		getDetail(iid).then((res) => {
			this.setData({
				topImages:res.result.itemInfo.topImages,
				goods:new Goods(res.result.itemInfo,res.result.columns, res.result.shopInfo.services),
				shop : new Shop(res.result.shopInfo),
				detailInfo : res.result.detailInfo,
				paramInfo : new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule),
				commentInfo:res.result.rate.cRate == 0? {} : res.result.rate.list[0]
			})
		})
	},
	//点击导航跳转指定位置
	syncInfoIndex(e){
		let index = e.detail
		this.setData({
			currentIndex:index
		})
		switch (index) {
			case 0:
				this.setData({
					bottomId:"shopp"
				})
				break;
				case 1:
					this.setData({
						bottomId:"param"
					})
					break;
					case 2:
						this.setData({
							bottomId:"comment"
						})
						break;
						case 3:
							this.setData({
								bottomId:"recommend"
							})
							break;
		
			default:
				break;
		}
	},
		//计算高度
		selectHeight(){
			let _this = this
			// 获得每个元素据顶部的高度，组成一个数组，通过高度与scrollTop的对比来知道目前滑动到那个区域
			let heightArr = [];
			let h = 0;
			const query = wx.createSelectorQuery();
			query.selectAll('.scroll').boundingClientRect()
			query.exec(res => {
			res[0].forEach(item => {
				// console.log(item.id,item.top);
			
				// h +=  item.top
				// heightArr.push(h)
			});
			// console.log('--------------');
			})
		
		},	
	//回到顶部是否显示
	onPageScroll:function(e){
		if (e.detail.scrollTop > 1000) {
			this.setData({
				backtop:true
			})
		}else {
			this.setData({
				backtop:false
			})
		} 
		// this.selectHeight()
		},
		//回到顶部
		backTop(){
			console.log('点击');
			this.setData({
				topNum:0
			})
			console.log(this.data.topNum);
		},
	getReccommendData(){
		getReccommend().then(res => {
			this.setData({
				recommends:res.data.list
			})
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.setData({
			iid:options.iid
		})
		this.getDetails()
		this.getReccommendData()

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
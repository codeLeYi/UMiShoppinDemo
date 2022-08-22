
const { request } = require('./request.js')

module.exports={

	/* 轮播图 */
	getBanner:()=>{
		return request('/home/multidata','GET',{});
	},
	/* 封装商品列表的方法 */
	getGoodsList:(type,page)=>{
		return request('/home/data','GET',{type,page});
	},

}


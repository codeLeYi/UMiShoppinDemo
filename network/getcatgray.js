import {request} from './request'

module.exports={
	//请求分类数据(左侧导航)
	getcatgray:()=>{
		return request('/category','GET',{});
	},
	//请求分类数据
	getSubcategory:()=> {
		return request('/subcategory','GET',{maitKey})
	},
	getCategoryDetail:()=>{
		return request('/subcategory/detail','GET',{miniWallkey, type})
	}

}
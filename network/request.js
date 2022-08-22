
module.exports = {
    /**
     * 封装wx.request
     * url:请求的接口地址
     * method:请求方式 GET,POST....
     *  data:要传递的参数
     
     */
    request: (url, method, data) => {
      
      	
        let _url = `http://152.136.185.210:7878/api/hy66${url}`;
        console.log("请求的地址:"+_url);
        return new Promise((resolve, reject) => {
			wx.showLoading({
				title: '正在加载',
			});
            wx.request({
                url: _url,
                data: data,
                method: method,
                header: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                success: (res) => {
										console.log('从接口获取到的数据', res);
										let data = res.data;
					if(data) {
						resolve(res.data);
						wx.hideLoading();
					}else {
						wx.showToast({
							title: '数据请求错误',
						})
					}
                },
				fail() {
					reject('接口有误，请检查')
				}
            });
			
        });
    },
}


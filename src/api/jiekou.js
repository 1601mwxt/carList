const sendRequest=(url,method='GET',body={})=>{
    // 处理url,添加时间戳，保证每次请求不会被缓存
    if(/\?/.test(url)){
        url+='&_='+(+new Date())
    }else{
        url+='?_='+(+new Date())
    }
    let params={method};
    if(method=='POST'){
        params.body=JSON.stringify(body)
    }
    console.log(url)
    return fetch(url,params).then(res=>res.json())
}
/**
 * 获取当前用户的基本信息
 * @method   get        GET方式
 * @return   promise
 */
export let  basicInformation=()=>{
    return sendRequest(`http://dsp.zybang.com/dsp-admin/user/current`)
}

/**
 * 外部用户登录接口
 * @method   post             POST方式
 * @param    userName         登录名称  (必选)     string
 * @param    password         密码      (必选)     string
 * @param    identifyCode     验证码    (必选)     string
 * @return   promise          返回一个promise
 */
export let userLogin=(userName,password,identifyCode)=>{
    return sendRequest(`http://dsp.zybang.com.cn/dsp-admin/user/login`,'POST',{userName,password,identifyCode})
}

/**
 * 登陆验证码接口
 * @method   get              GET方式
 * @param    timestamp        时间戳   (必须)     data
 * @return   promise          返回一个promise
 */
export let LoginCode=(timestamp)=>{
    return sendRequest(`http://dsp.zybang.com/dsp-admin/captcha.jpg?timestamp=${timestamp}`)
}


/**
 * 获取客户列表
 * @method   post             POST方式
 * @param    queryType        查询类型(1-客户名称/2-客户ID/3-客户行业)      （必选：否）
 * @param    content          查询内容                                    （必选：否）
 * @param    typeList         1-代理商/2-代理子客户/3-直客                 （必选：否）
 * @param    pageSize         每页展示条数，默认50                         （必选：否）
 * @param    pageNum          页码，默认1                                 （必选：否）
 * @return   promise          返回一个promise
 */
export let getCapture=(queryType,content,typeList,pageSize=50,pageNum=1)=>{
    
    return sendRequest(`http://dsp.zybang.com.cn/dsp-admin/customer/list`,'POST',{queryType,content,typeList})
}


/**
 * 修改客户状态
 * @method   post             POST方式
 * @param    idList           客户id集合           必选
 * @param    status           1-开启 2-关闭        必选
 * @return   promise          返回一个promise
 * 返回案例
 * {
    "status": 0,
     "global": "OK"
}
 */
export let getCapture=(idList=[],status)=>{
    return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/status/update`,'POST',{idList,status})
}

// ??????????????????????????????????????????????????????????????????
/**
 * 客户预算明细接口
 * @method   post             POST方式
 * @param    customerId       客户id        必选
 * @param    pageNum          页码          必选：否
 * @param    pageSize         页面大小      必选：否
 * @return   promise          返回一个promise
 * 返回案例
 * {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 50,
        "pages": 10,
        "total": "488",
        "list": [
            {
                "budget": 60000,
                "date": 1479286723123,
                "operatorName": "abc", // 操作人
            },
            {
                "budget": -1000,
                "date": 1479286723123,
                "operatorName": "edf", // 操作人
            }
        ]
    }
}
 */
export let detailedBudget=(customerId,pageNum=1,Integer=50)=>{
   if(pageNum){
    return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/budget/detail`,'POST',{customerId,pageNum});
   }
   if(Integer){
    return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/budget/detail`,'POST',{customerId});
   }
    return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/budget/detail`,'POST',{customerId})
}

/**
 * 客户预算分配接口
 * @method     post    
 * @param      customerId      客户id                     必选
 * @param      budget          本次分配的预算，单位分       必选
 * @return     promise         返回一个promise
 * 返回案例
 * {
    "status ": 0,
     "global": "OK"
    }
*/ 
export default budgetAllocation=(customerId,budget)=>{
    return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/budget/update`,'POST',{customerId,budget})
}

/**
 * 获取客户行业信息(API调用)=====>根据指定的客户id获取客户信息
 * @method     get
 * @param      customerId      客户ID           必选
 * 返回示例
 * {
    status: 0,
    data: {
        name: "营业执照五十test",
        createTime: 1487734656000,
        industryName: "汽车经销商",
        type: 3,
        industryCode: "3604",
        operatorId: 0,
        status: 1,
        reason: null,
        primaryIndustryId: 100,
        floorPrice: {
            cpm: {
                appFloorPrice: 4000,
                mFloorPrice: 4000,
                pcFloorPrice: 1000
            },
            cpc: {
                appFloorPrice: 1500,
                mFloorPrice: 1500,
                pcFloorPrice: 1500
            }
        },
        id: 1,
        secondaryIndustryId: 134,
    }
}
 */
export default clientInfo=(customerId)=>{
    return sendRequest(`/dsp-admin/api/customers/getCustomerAndIndustryById?customerId=${customerId}`)
}
/**
 * 创意列表接口
 * @method      POST 
 * @param       queryType         int        必选：否
 * @param       content           String     必选：否
 * @param       statusList        List       必选：否
 * @param       customerId        long
 * @param       startTime         String     必选
 * @param       endTime           String     必选
 * @param       adunitId          Long       必选：否
 * @param       pageNum           Integer    必选
 * @param       pageSize          Integer    必选
 * @param       campaignId        Integer    必选：否
 * @return      promise           返回一个promise
 * 请求参数示例
 * {
      "queryType" : 1, // 按照创意ID查询
      "queryConent": "1111",
      "status" : [1],      //状态： ，为null表示查询全部
      "startTime" : "2016/09/19",  //开始时间，有默认值
      "endTime" : "2016/09/29",     //结束时间
      "pageNum" : 1,  //页码
      "pageSize"       : 20 //每页大小
    }
 * 返回示例
 * {
        "data":{
               "list" : [        //返回值
                       {
                       "creativeId" : 12345,  //创意id
                       "creativeType" : 1,            //创意类型
                       //元素信息
                       "value" : "test",      //文字链内容;图片url;视频url
                       "size" : "200*300",      //尺寸
                       "operatorId": 123,     // 操作人
                       "createTime" : 1479286723123,  //创建时间
                       "modifyTime" : 1479286723123,  //修改时间
                       "status" : 1,  //状态
                       //以下是计划信息
                       "campaignId" : 123,    //计划id
                       "campaignName" : "计划名称01",  //计划名字
                       //以下是单元信息
                       "adunitId" : 1234,     //单元id
                       "adunitName" : "单元名称01",    //单元名字
                       "clickUrl": "落地页",
                       //统计数据
                       "exposeNum" : 10000,   //展示量
                       "clickNum" : 10,       //点击量
                       "clickRate" : 100,     //点击率
                       "clickPrice":10, //点击均价
                       "cpmPrice": 10, // 千次曝光均价
                       "consumed" : 10000,    //消耗，单位是分
                       }
               ],
               "total" : 51,
               "pages" : 2,
               "pageNum" : 1,
               "pageSize" : 50
        },
        "status":0
}
 */
export default List=(queryType,content,statusList,customerId,startTime,endTime,adunitId,pageNum,pageSize,campaignId)=>{
    return sendRequest(`http://dsp.zybang.com/dsp-creative/creative/list`,'post',{queryType,content,statusList,customerId,startTime,endTime,adunitId,pageNum,pageSize,campaignId})
}
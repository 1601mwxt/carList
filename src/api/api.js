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
// 获取车辆列表
export let getBrandList=()=>{
    return sendRequest('https://baojia.chelun.com/v2-car-getMasterBrandList.html')
}
// 获取cartype列表
export let getCarList=(id)=>{
    return sendRequest(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}
// 获取详情
export let detail=(id)=>{
    return sendRequest(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`)
}
// 获取车辆详情图片
export let carPic=(id,CarID,ColorID)=>{
    // return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}`)
   
    if(id&&CarID){
        return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&CarID=${CarID}`)
    }
    else if(id&&ColorID){
    return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&ColorID=${ColorID}`)
    }
    else if(id&CarID&ColorID){
        return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&CarID=${CarID}&ColorID=${ColorID}`)
    }
    else{
         return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}`)
    }
}
// 获取车辆颜色
export let colorCar=(id)=>{
    return sendRequest(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}
// 获取城市列表
/**
 * @param provinceId  省份id
 * @return promise 返回一个promise
 */
export let getCityList=(provinceId)=>{
    let search='';
    if(provinceId){
        search+=`provinceid=${provinceId}`
    }
    return sendRequest(`https://baojia.chelun.com/v1-city-alllist.html?${search}`)
}

// 获取经销商列表
/**
 * @param carId  车型id
 * @param cityId 城市ID
 * @return promise 返回一个promise
 */
export let getDealerList=(carId,cityId='201')=>{
    return sendRequest(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}
// 询问报价
/**
 * @param carId             车型id
 * @param mobile            用户手机号码
 * @param dealerIds         经销商id列表
 * @param location          用户所在城市
 * @param carname           选择车型的名字
 * @param locationid        用户所在城市的id
 * @param name              用户的名字
 * @param openUDID          设备号
 * @param flag              默认值1
* @param orderTypeId        默认值1
 * @param channelId         默认值0
 * @return promise          返回一个promise
 */
export let submit=(info)=>{
    let search='';
    for(let item in info){
        search+=`&${item}=${info[item]}`
    }
    search[0]='?'
    return sendRequest(`https://baojia.chelun.com/h2-submit-lowprice.html${search}`)
}
// 获取城市
export let City=()=>{
    return sendRequest('https://baojia.chelun.com/v1-city-alllist.html')
}
// 获取车系具体类型图片列表
/**
 * @param id             车型id
 * @param imgId          用户手机号码
 * @param colorId        经销商id列表
 * @param carId          用户所在城市
 * @param page           选择车型的名字
 * @param pageSize       用户所在城市的id
 * @return promise       返回一个promise
 */

 export let getImgDetailList=(id,imgId,colorId,carId,page=1,pageSize=30)=>{
     let search =`SerialID=${id}&ImageID=${imgId}&Page=${page}&PageSize=${pageSize}`;
     if(colorId){
         search+=`&ColorID=${colorId}`;
     };
     if(carId){
         search+=`&CarID=${carId}`;
     };
     return sendRequest(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?${search}`)
 };

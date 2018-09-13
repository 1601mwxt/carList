import {City,getCityList,getDealerList} from '../../api/api'
let state={
    showCity:false,
    city:[],
    citylist:null,
    showList:false,
    defaultCity:{name:'北京',id:'201'},
    DealerList:null,
    result:false,
    temp:[],
    dealerIds:[],
    randomNum:'获取验证码',
    flag:true
}
let mutations={
    // verification:()=>{

    // },
    changDefaultCity:(state,payload)=>{
        state.defaultCity=payload;
        console.log(state.defaultCity)
        state.showList=false;
        state.showCity=false
    },
    initDealerList:(state,payload)=>{
        payload.list.forEach(item => {
            item.promotePrice=(item.promotePrice*1).toFixed(2);
        });
        console.log(payload)
        state.DealerList=payload;
    },
    changeShowCity:(state,payload)=>{
        state.showCity=payload
    },
    initCity:(state,payload)=>{
        state.city=payload;
    },
    initCityList:(state,payload)=>{
        state.citylist=payload;
        console.log(state.citylist)
    },
    changeShowList:(state,payload)=>{
        state.showList=payload;
    },
    changeResult:(state,payload)=>{
        state.result=payload;
    },
    changeTemp:(state,payload)=>{
        console.log(payload)
        if(state.temp.indexOf(payload)!==-1){
            state.temp.splice(payload,1)
        }else{
            state.temp.push(payload)
        }
        
    //    console.log()
    },
    changeDealerIds:(state,payload)=>{
       if(state.dealerIds.indexOf(payload)!==-1){
            state.dealerIds.splice(state.dealerIds.indexOf(payload),1)
       }else{
            state.dealerIds.push(payload)
       }
    }
    
    
}
let actions={
    getCity:({commit},payload)=>{
        City().then(res=>{
            if(res.code===1){
                commit('initCity',res.data)
            }else{
                alert(res.msg)
            }
        })
    },
    getCityList:({commit},payload)=>{
        getCityList(payload).then(res=>{
            if(res.code===1){
                commit('initCityList',res.data)
            }else{
                alert(res.msg)
            }
        })
    },
    getDealerList:({commit},payload)=>{
        console.log(payload);
        getDealerList(payload.carId,payload.cityId).then(res=>{
            console.log(res)
            if(res.code===1){
                commit('initDealerList',res.data)
            }else{
                alert(res.msg)
            }
        })
    },
    
   
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}
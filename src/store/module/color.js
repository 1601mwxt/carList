import {colorCar,getImgDetailList} from '../../api/api'
let state={
    list:{},
    years:[],
    changeYear:'',
    colordetail:[],
    ImgDetailList:[],
    img:[],
    imglist:false,
    SerialID:null,
    ImageID:6,
    ColorId:null,
    swipers:false,
    enlargementImg:{},
    page:1
}
let actions={
    initColor:({commit},payload)=>{
        colorCar(payload).then(res=>{
            if(res.code===1){
                commit('getColorData',res.data)
            }else{
                alert(res.msg)
            }
        })
    },
    initImgDetailLists:({commit},payload)=>{
        state.SerialID=payload.SerialID;
        state.ImageID=payload.ImageID;
        getImgDetailList(state.SerialID,state.ImageID,state.page).then(res=>{
            if(res.code===1){
                commit('InitImgDetailList',res.data.List)
                if(payload.callback){
                    payload.callback()
                }
            }else{
                alert(res.msg)
            }
        })
    }
}
let mutations={
    getColorData:(state,payload)=>{
        state.list=payload;
        for(let i in payload){
            if(state.years.indexOf(i)===-1){
                state.years.push(i)
            }
        }
        state.years.sort((a,b)=>{
            return b-a
        })
        state.changeYear=state.years[0];
    },
    changeYears:(state,payload)=>{
        state.changeYear=payload;
        state.colordetail=state.list[state.changeYear];
    },
    changeIsImgList:(state,payload)=>{
        state.imglist=payload
    },
    InitImgDetailList:(state,payload)=>{
        // let reg = /(\{)([\d])(\})/g;
        // payload.List.forEach(item => {
        //     item.Url = item.Url.replace(reg, (a, b, c) => {
        //                 return item.LowSize
        //      })
        // });
        // console.log(payload)
        // console.log(state.img)

        state.ImgDetailList=state.ImgDetailList.concat(payload);
        state.page++;
        state.imgList=true;
    },
    changeSerialID:(state,payload)=>{
        state.SerialID=payload
    },
    changSwiper:(state)=>{
        state.swipers=!state.swipers
    },
    enlargement:(state,payload)=>{
        state.enlargementImg=state.ImgDetailList[payload];
    }
}
export default{
    namespaced:true,
    state,
    actions,
    mutations
}
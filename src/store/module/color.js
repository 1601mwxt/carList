import {colorCar,getImgDetailList} from '../../api/api'
let state={
    list:{},
    years:[],
    changeYear:'',
    colordetail:[],
    ImgDetailList:[],
    imglist:false,
    SerialID:null,
    ImageID:null,
    ColorId:null,
    swipers:false,
    enlargementImg:{},
    

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
    initImgDetailList:({commit},payload)=>{
        state.SerialID=payload.SerialID;
        state.ImageID=payload.ImageID;
        // console.log(payload)
        // console.log(state.ColorId)
        // console.log(state.SerialID)
        getImgDetailList(state.SerialID,state.ImageID).then(res=>{
            console.log(res)
            if(res.code===1){
                commit('InitImgDetailList',res.data)
            }else{
                alert(res.msg)
            }
        })
    }
}
let mutations={
    // changeCarsType:(state,payload)=>{
    //     console.log(payload)
    //     state.carsType=payload
    // },
    // changeCarId:(state,payload)=>{
    //     state.carId=payload
    //     // console.log(payload)
    // },
    // changeColor:(state,payload)=>{
    //     console.log(payload)
    //     state.colorName=payload.name;
    //     state.ColorId=payload.id
    // },
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
        console.log(state.colordetail)
    },
    InitImgDetailList:(state,payload)=>{

        // let reg = /(\{)([\d])(\})/g;
        // payload.map(item => {
        //     item.List.map(val => {
        //         val.Url = val.Url.replace(reg, (a, b, c) => {
        //         return val.LowSize
        //         })
        //     })
        // })
        // console.log(payload)
        // state.carImage=payload
        let reg = /(\{)([\d])(\})/g;
        payload.List.forEach(item => {
            item.Url = item.Url.replace(reg, (a, b, c) => {
                        return item.LowSize
             })
        });
        // console.log(payload.List)
        state.ImgDetailList=payload.List
        state.imglist=true
        // console.log(state.ImgDetailList)
    },
    // changeColorId:(state,payload)=>{
    //     state.ColorId=payload;
        
    //     // console.log(payload)
    // },
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
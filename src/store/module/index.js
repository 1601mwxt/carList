
import {getBrandList,getCarList,detail,carPic} from '../../api/api.js'


let state={
    letters:[],
    brand:{},
    saveStr:'',
    isShow:false,
    carList:null,
    isCarType:false,
    CarDetail:null,
    AllShow:true,
    carImage:null,
    colorName:'颜色',
    carsType:'车款',
    carId:null,
    ColorId:null
}
// 更改state
let mutations={
    changeColorId:(state,payload)=>{
        state.ColorId=payload;
        
        // console.log(payload)
    },
    changeCarsType:(state,payload)=>{
        console.log(payload)
        state.carsType=payload
    },
    changeCarId:(state,payload)=>{
        state.carId=payload
        // console.log(payload)
    },
    changeColor:(state,payload)=>{
        console.log(payload)
        state.colorName=payload.name;
        state.ColorId=payload.id
    },
    initState:(state,payload)=>{
        let letters=[];
        let brand={};
        payload.forEach((item)=>{
            let spell=item.Spelling[0];
            if(letters.indexOf(spell)!=-1){
                brand[spell].push(item);
            }else{
                letters.push(spell);
                brand[spell]=[item];
            }
        });
        state.letters=letters;
        state.brand=brand;
        console.log('letters----',letters)
        console.log('brand======',state.brand)
    },
    initCarList:(state,payload)=>{
        state.carList=payload
    },
    // 字母
    saveString:(state,payload)=>{
        state.saveStr=payload;
    },
    //更改show值
    changeIsShow:(state,payload)=>{
        state.isShow=payload;
    },
    // 组件是否显示
    changeCarType:(state,payload)=>{
        state.isCarType=payload
    },
    initCarDetail:(state,payload)=>{
        console.log(payload)
        state.CarDetail=payload
    },
    // 点击全部
    changeAllShow:(state,payload)=>{
        state.AllShow=payload
    },
   // imgDefault 外观内饰的图片分类
    initImageData:(state,payload)=>{
        console.log(payload)
        let reg = /(\{)([\d])(\})/g;
        payload.map(item => {
            item.List.map(val => {
                val.Url = val.Url.replace(reg, (a, b, c) => {
                return val.LowSize
                })
            })
        })
        // console.log(payload)
        state.carImage=payload
    }
}
// 异步请求数据
let actions={
    initState:({commit},payload)=>{
        getBrandList().then(res=>{
            if(res.code===1){
                commit('initState',res.data);
            }else{
                alert(res.msg)
            }
        })
    },
    initCarList:({commit},payload)=>{
        getCarList(payload).then(res=>{
            if(res.code===1){
                commit('initCarList',res.data)
            }else{
                alert(res.msg)
            }
        })
    },
    initCarDetail:({commit},payload)=>{
        detail(payload).then(res=>{
            if(res.code===1){
                commit('initCarDetail',res.data)
            }else{
                alert(res.msg)
            }
        })
    },
    // 图片数据
    initImageDatas:({commit},payload)=>{
        console.log(payload)
        // console.log(payload,state.carId,state.ColorId)
        carPic(payload.SerialID,payload.carId,payload.ColorId).then(res=>{
            console.log(res)
            if(res.code===1){
                commit('initImageData',res.data)
            }else{
                alert(res.msg)
            }
        })
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}
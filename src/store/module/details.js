import {detail} from '../../api/api.js'

let state={
    info:{},
    currentYear: '全部' // 当前选中的年份
}
let getters={
    years(state){
        if (!state.info.list){
            return [];
        }
        let arr = state.info.list.map(item=>{
            return item.market_attribute.year;
        })
        let set = new Set(arr);
        return ['全部',...set];
    },
    list(state){
        if (!state.info.list){
            return [];
        }
        // 把排量和吸气类型相同的数据做个合并
        function merge(arr){
            let types = [];
            let obj = {};
            arr.forEach(item=>{
                let type = item.exhaust_str+'/'+item.max_power_str+' '+item.inhale_type;
                if (types.indexOf(type) == -1){
                    types.push(type);
                    obj[type] = [item];
                }else{
                    obj[type].push(item);
                }
            })
            return obj;
        }

        if (state.currentYear == '全部'){
            return merge(state.info.list)
        }else{
            return merge(state.info.list.filter(item=>{
                return item.market_attribute.year == state.currentYear;
            }))
        }
    }
}
let actions={
    getDetail:({commit},payload)=>{
        // console.log(payload)
        detail(payload).then(res=>{
            // console.log(res)
            if(res.code===1){
                commit('getInfo',res.data)
            }else{
                alert(res.msg)
            }
        })
    }
}
let mutations={
    // 改变年份
    changeYear(state, payload){
        state.currentYear = payload;
    },
    // 获取到数据后处理数据，按照一定规则排序
    getInfo:(state,payload)=>{
        payload.list.sort((a, b)=>{
            // 先按照年份排序 降序,
            if (b.market_attribute.year != a.market_attribute.year){
                return b.market_attribute.year - a.market_attribute.year;
            }else{
                // 按照排量排序 升序
                if (b.exhaust_str > a.exhaust_str){
                    return -1;
                }else if(b.exhaust_str < a.exhaust_str){
                    return 1;
                }else{
                    // 按照功率排序 升序
                    if (b.max_power_str > a.max_power_str){
                        return -1;
                    }else if(b.max_power_str < a.max_power_str){
                        return 1;
                    }else{
                        // 按照指导价格排序 升序
                        if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min){
                            return -1;
                        }else{
                            return 1
                        }
                    }
                }
            }
        })
        state.info = payload;
    }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
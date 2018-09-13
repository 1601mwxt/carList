<template>
    <div class="q">
        <header>
           <p>可向多个商家咨询最低价，商家及时回复</p> 
           <img src="img/icon-help.png">
        </header>
        <div class="content">
            <div class="q-info flex-row" v-if='DealerList' @click="goType">
                <img :src="DealerList.details.serial.Picture" />
                <div class="flex-column flex-centerX">
                    <p>{{DealerList.details.serial.AliasName}}</p>
                    <p>{{DealerList.details.market_attribute.year+'款 '+DealerList.details.car_name}}</p>
                </div>
            </div>
            <div class="self-info">
                <p class="tip">个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span> 
                        <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" value="username" v-model="username">
                    </li> 
                    <li>
                        <span>手机</span> 
                        <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" value="phoneNum" v-model="phoneNum">
                    </li> 
                    <li>
                        <input type="number" placeholder="请输入六位验证码" maxlength="6" value="num" v-model="num">
                        <button :class='flag?"btn isDisable":"btn isNotDisable"' :disabled="flag" @click="verification">{{randomNum}}</button>
                    </li> 
                    <li @click="changeShowCity(true),choosee">
                        <span>城市</span> 
                        <span @click='getDealerList({carId:$route.query.id,cityId:defaultCity.id})'>{{defaultCity.name}}</span>
                    </li>
                    </ul> 
                <div class="quotation">
                    <button data-hover="hover" @click="question">询最低价</button>
                </div>
            </div>
            <div class="dealer-info">
                <p class="tip">选择报价经销商</p> 
                <ul v-if='DealerList'>
                    <li data-hover="hover" data-id="3802004"  v-for='(val,ind) in DealerList.list' :key='ind' @click='changeTemp(ind),change(val,ind)' ref='LI'>
                        <p>
                            <span>{{val.dealerShortName}}</span> 
                            <span>{{val.promotePrice}}万</span>
                        </p> 
                        <p>
                            <span>{{val.address}}</span> 
                            <span>{{'售'+val.saleRange}}</span></p>
                    </li> 
                </ul>
            </div>
        </div>
        <div class="result" v-if='result'>
            <div class="wrap">
                <img src="https://h5.chelun.com/2017/official/img/q-icon.png" />
                <p>询价成功</p>
                <p>
                    稍后有专业汽车顾问为你服务
                    <br>
                    请保持手机畅通
                </p>
                <div>
                    <button @click="changeResult(false)">确定</button>
                </div>
                
            </div>
        </div>
        <div :class="showCity?'select-city active':'select-city'" v-if='showCity'>
            <div class="province">
                <div class="location">
                    <p>自动定位</p>
                    <p>北京</p>
                </div>
                <div class="list">
                    <p>省市</p>
                    <ul>
                        <li v-for='(val,ind) in city' :key='ind' @click="getCityList(val.CityID),changeShowList(true)">{{val.CityName}}</li>
                    </ul>
                </div>
            </div>
            <div :class="showList?'city active':'city'" >
                <ul id='cityList'>
                    <li v-for='(val,ind) in citylist' :key='ind' @click="changDefaultCity({name:val.CityName,id:val.CityID}),getDealerList({carId:$route.query.id,cityId:defaultCity.id})">{{val.CityName}}</li>
                </ul>
            </div>


        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            username:"",
            phoneNum:'',
            num:'',
            randomNum:'获取验证码',
            count:5,
            flag:false
        }
    },
    computed:{
        ...mapState({
            result:state=>state.quotation.result,
            showCity:state=>state.quotation.showCity,
            city:state=>state.quotation.city,
            citylist:state=>state.quotation.citylist,
            showList:state=>state.quotation.showList,
            defaultCity:state=>state.quotation.defaultCity,
            DealerList:state=>state.quotation.DealerList,
            temp:state=>state.quotation.temp,
            // randomNum:state=>state.quotation.randomNum
        })
    },
    methods:{
        ...mapMutations({
            changeShowCity:'quotation/changeShowCity',
            changeShowList:'quotation/changeShowList',
            changDefaultCity:'quotation/changDefaultCity',
            initDealerList:'quotation/initDealerList',
            changeResult:'quotation/changeResult',
            changeTemp:'quotation/changeTemp',
            changeDealerIds:'quotation/changeDealerIds',
            // verification:'quotation/verification'
            // getRef:'quotation/getRef'
        }),
        ...mapActions({
            getCity:'quotation/getCity',
            getCityList:'quotation/getCityList',
            getDealerList:'quotation/getDealerList'

        }),
        goType(){
            // console.log('000')
            this.$router.push({path:'/Cartype'})
        },
       
        question(){
            let usernameReg=/^([\u4e00-\u9fa5]){2,4}$/; //只能是中文，长度为2-7位
            let phoneReg=/^1[3|4|5|8|7][0-9]{9}$/;
            if(!(usernameReg.test(this.username))){
                alert('请输入真实的姓名')
                return 
            }else if(!(phoneReg.test(this.phoneNum))){
                alert('请输入正确的手机号码')
                return
            }else{
                this.changeResult(true)
            }
        },
        // 选择经销商
        change(val,ind){
            if(this.temp.indexOf(ind)!==-1){
                this.$refs.LI[ind].className='active'
            }else{
                this.$refs.LI[ind].className=''
            }
            this.changeDealerIds(val.dealerId)
        },

        choosee(e){
            console.log(e)
        },
        verification(){
            let timer=setInterval(()=>{
                this.count--;
                this.flag=true;
                this.randomNum= this.count+'s';
                if(this.count===0){
                    clearInterval(timer)
                    this.flag=false;
                    this.count=6;
                    this.randomNum='获取验证码'
                }
                console.log(this.count);
            },1000)
        }
    },
    mounted() {
        this.getCity()
        
    },
}
</script>

<style>
@import url('../../static/css/quotation/Quotation.css');
</style>

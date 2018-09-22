<template>
    <div class="car-img">
        <div class="flex-row tit">
            <p data-hover='hover' @click="goColor($route)">
                <span>{{colorName}}</span>
            </p>
            <p data-hover='hover' @click="goType">
                 <span>
                    <em>{{carsType}}</em>
                </span>
            </p>
        </div>
        
        <div class="img-default">
            <div v-for="(item,index) in carImage" :key="index">
                <ul>
                    <li v-for="(value,key) in item.List" :key='key'  @click="goImgDetail(key)">
                        <div v-if="key==0" @click="initImgDetailLists({SerialID:$route.query.id,ImageID:item.Id}),changeIsImgList(true)" >
                            
                            <p>{{item.Count}}</p>
                            <p>{{item.Name}}</p>
                        </div>
                        <img :src="value.Url" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <ul class="img-list" v-if='imglist' @scroll="scroll" ref="scroll">
            <div  ref="element">
                <li v-for='(val,ind) in ImgDetailList' :key='ind' @click="changSwiper" ><img :src="val.Url.replace('{0}', val.LowSize)" alt="" ></li>
            </div>
            
        </ul>
        <SwiperWrap v-if='swipers' @click="change"></SwiperWrap>
    </div>
</template>

<script>
import Swiper from 'swiper'; 
import {mapActions,mapMutations,mapState} from 'vuex';
import SwiperWrap from './swiper.vue'
export default {
  
    computed:{
        ...mapState({
            carImage:state=>state.index.carImage,
            ImgDetailList:state=>state.color.ImgDetailList,
            imglist:state=>state.color.imglist,
            swipers:state=>state.color.swipers,
            enlargementImg:state=>state.color.enlargementImg,
            colorName:state=>state.index.colorName,
            carsType:state=>state.index.carsType,
            ImageID:state=>state.color.ImageID,
           
        }),
        // swiper(){
        //     return this.$refs.mySwiper.swiper
        // }
    },
    methods:{
        
        ...mapActions({
            initImageDatas:'index/initImageDatas',
            initImgDetailLists:'color/initImgDetailLists',
            
        }),
        ...mapMutations({
            initImageData:'index/initImageData',
            initImgDetailList:'color/initImgDetailList',
            changSwiper:'color/changSwiper',
            enlargement:'color/enlargement',
            changeIsImgList:'color/changeIsImgList'
        }),
        change(){
            console.log('000')
        },
        goColor(route){
            this.$router.push({name:'color',params:{id:route.query.id}})
        },
         goType(){
            this.$router.push({path:'/type'})
        },
        goImgDetail(key){
            console.log('key=========',key)
        },
        scroll(){
            if(this.flag){
                return 
            }
                let scrollEle = this.$refs.scroll.scrollTop;
                let elementHeight = this.$refs.element.getBoundingClientRect().height;
                if (scrollEle + window.innerHeight + 20 > elementHeight){
                    this.flag=true;
                    this.initImgDetailLists({SerialID:this.$route.query.id,ImageID:this.ImageID,callback:()=>{
                        this.flag=false
                    }});
                }
               
            }
    },
    components:{
        SwiperWrap
    },
    mounted(){
         this.initImgDetailLists({SerialID:this.$route.query.id,ImageID:this.ImageID});
    }
}
</script>

<style>
@import url('../static/css/swiper.min.css');
@import url('../../static/css/carImg/style.css');
</style>

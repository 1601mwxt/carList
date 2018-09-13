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
                        <div v-if="key==0" @click="initImgDetailList({SerialID:$route.query.id,ImageID:item.Id})" >
                            <p>{{item.Count}}</p>
                            <p>{{item.Name}}</p>
                        </div>
                        <img :src="value.Url" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <ul class="img-list" v-if='imglist' >
            <li v-for='(val,ind) in ImgDetailList' :key='ind' @click="changSwiper"><img :src="val.Url" alt="" @click="enlargement(ind)"></li>

        </ul>
        <!-- 轮播 -->
        <swiper :options="swiperOption" class="img-detail swiper-container-horizontal" v-if='swipers' ref='mySwiper'>
            <div class="swiper-wrapper">
                <swiper-slide class="swiper-slide swiper-slide-active" style="width: 375px;">
                    <li class="swiper-zoom-container" @click="changSwiper" >
                        <img :src="enlargementImg.Url" class="swiper-lazy" >
                    </li>
                </swiper-slide>
                  <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
            </div>
        </swiper>
    </div>
</template>

<script>

import {mapActions,mapMutations,mapState} from 'vuex';
 import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
     data() {
            return {
                    // page: 1,
                    // swiperOption: {
                    //     speed: 500,
                    //     lazy: true
                    // }
                
            };
        },
    computed:{
        swiperOption: {
                     notNextTick: true,
                    // spaceBetween: 30, //板块间距
                    loop: false, //无缝轮播
                    centeredSlides: true,
                    autoplay: {
                        //自动轮播
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                },
        swiper() {
                return this.$refs.mySwiper.swiper;
            },
        ...mapState({
            carImage:state=>state.index.carImage,
            ImgDetailList:state=>state.color.ImgDetailList,
            imglist:state=>state.color.imglist,
            swipers:state=>state.color.swipers,
            enlargementImg:state=>state.color.enlargementImg,
            colorName:state=>state.index.colorName,
            carsType:state=>state.index.carsType,
           
        })

    },
    methods:{
        ...mapActions({
            initImageDatas:'index/initImageDatas',
            initImgDetailList:'color/initImgDetailList',
            
        }),
        ...mapMutations({
            initImageData:'index/initImageData',
            InitImgDetailList:'color/InitImgDetailList',
            changSwiper:'color/changSwiper',
            enlargement:'color/enlargement'
        }),
        goColor(route){
            // console.log(route)
            this.$router.push({name:'color',params:{id:route.query.id}})
        },
         goType(){
            this.$router.push({path:'/type'})
        },
        goImgDetail(key){
            console.log('key=========',key)
        }
    },
     components: {
            swiper,
            swiperSlide
        },
      mounted() {
        //   this.initImageData()
           // you can use current swiper instance object to do something(swiper methods)
   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   console.log('this is current swiper instance object', this.swiper)
   this.swiper.slideTo(3, 1000, false)
    console.log('mounted');
            // 鼠标覆盖停止自动切换
            // console.log(this.swipe)
            this.swiper.el.onmouseover = function() {
                this.swiper.autoplay.stop();
                console.log("stop");
            };
            //鼠标离开开始自动切换
            this.swiper.el.onmouseout = function() {
                this.swiper.autoplay.start();
                console.log("start");
            };
        },
}
</script>

<style>
@import url('swiper/dist/css/swiper.css');
@import url('../../static/css/carImg/style.css');
</style>

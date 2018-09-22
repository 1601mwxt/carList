<template>
    <div class="img-detail">
        
            <swiper class="swiper-wrapper" :options="swiperOption" ref="mySwiper" v-if='ImgDetailList'>
                <!-- slides -->
                <swiper-slide class='swiper-slide box' v-for='(val,ind) in ImgDetailList' :key='ind' >
                   <img :src="val.Url.replace('{0}', val.LowSize)" alt=""  @click="change">
                </swiper-slide>
               
                
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
        
        
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
import {mapState,mapMutations} from 'vuex';
export default {
  name: '',
   computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   },
    ...mapState({
            ImgDetailList:state=>state.color.ImgDetailList,
             
        }),
    ...mapMutations({
        changSwiper:'color/changSwiper',
    })
 },
 data() {
   return {
     swiperOption: {
       // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
       notNextTick: true,
       loop:true,
       // swiper configs 所有的配置同swiper官方api配置
       autoplay: 3000,
       // direction : 'vertical',
       effect:"coverflow",
       grabCursor : true,
       setWrapperSize :true,
       // autoHeight: true,
       // paginationType:"bullets",
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       // if you need use plugins in the swiper, you can config in here like this
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       // debugger: true,
       // swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       // onTransitionStart(swiper){
       //   console.log(swiper)
       // },
       // more Swiper configs and callbacks...
       // ...
     }
   }
 },

methods:{
    change(){
        console.log('111')
         this.changSwiper()
     }
},
 components: {
 swiper,
 swiperSlide
},
 // you can find current swiper instance object like this, while the notNextTick property value must be true
 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true

 mounted() {
     
   // you can use current swiper instance object to do something(swiper methods)
   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   console.log('this is current swiper instance object', this.swiper)
   // this.swiper.slideTo(3, 1000, false)
 }
}
</script>

<style scoped>
    .img-detail{
        background: #000;
        top: 0;
        text-align: center;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 101;
    }
    .swiper-wrapper{
        transition-duration: 0ms;
    transform: translate3d(0px, 0px, 0px);
    }
    .box{
        width:100%;
        height:100%;
         position: relative;

    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>

<template>
  <div class="wrap">
    <!-- 汽车列表 -->
    <section class="section">
      <div class="scroll">
        <div class="carList" v-for='(val,ind) in brand' :key='ind'>
          <p class="identifying" :id='ind'>{{ind}}</p>
          <ul class="detailList" >
            <li v-for='(item,index) in val' :key='index' @click='initCarList(item.MasterID),changeCarType(true)' >
              <img :data-src='item.CoverPhoto' src='../asset/black-2.jpg' alt="">
              <span>{{item.Name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- carlist列表 -->
      <div ref='section' :class="isCarType?'car-type active':'car-type'" id='carType' v-if='isCarType'
       @touchmove.stop="Move" @touchstart='Start'
       @touchend='End'>
        <div id="typeList" v-if='carList'>
          <p v-for='(val,ind) in carList' :key='ind'>
            <span>{{val.GroupName}}</span>
            <ul>
            <li v-for='(item,ind) in val.GroupList' :key='ind' class="flex-row flex-centerY" @click="initCarDetail(item.SerialID),goDetil(item.SerialID),changeCarType(false)">
              
            <img :src='item.Picture' alt="">
            <div>
              <p>{{item.AliasName}}</p>
              <p>{{item.DealerPrice}}</p>
            </div>
            </li>
          </ul>
          </p>
          
        </div>
      </div>
    </section>
    <!-- 字母列表 -->
    <ul class="alphabet" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
      <li v-for='(val,ind) in brand' :key='ind'>{{ind}}</li>
    </ul>
    <!-- 字母遮罩层 -->
    <div class="mask" v-if='isShow'>
      <p>{{saveStr}}</p>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex';
  import LoadImage from '../util/loadImage.js'
  export default {
    name: 'HelloWorld',
    computed: {
      // 获取数据
      ...mapState({
        letters: state => state.index.letters,
        brand: state => state.index.brand,
        saveStr:state=>state.index.saveStr,
        isShow:state=>state.index.isShow,
        carList:state=>state.index.carList,
        isCarType:state=>state.index.isCarType,
        CarDetail:state=>state.index.CarDetail
      })
    },
    methods: {
      // action辅助函数  映射action
      ...mapActions({
        initState: 'index/initState',
        initCarList:'index/initCarList',
        initCarDetail:'index/initCarDetail'
      }),
      // mutation辅助函数 映射mutation
      ...mapMutations({
        saveString: 'index/saveString',
        changeIsShow:'index/changeIsShow',
        changeCarType:'index/changeCarType'
      }),
      // 触摸事件
      // 1.触摸开始
      touchStart(e) {
        if(e.target.tagName==='LI'){
          // 发送touchstart点击的值
          this.saveString(e.path[0].innerHTML);
          // 遮罩层开关---->true
          this.changeIsShow(true);
        }
      },
      // 2.触摸移动
      touchMove(e) {
        let PageY = e.touches[0].pageY;
        let index = Math.floor((PageY - this.marginTop) / this.height);
        if (index < 0) {
          index = 0
        } else if (index > this.letters.length - 1) {
          index = this.letters.length - 1
        }
        let ele = document.getElementById(this.letters[index]);
        let top = ele.offsetTop;
        document.querySelector('section').scrollTop = top;
        // 发送touchmove时的值
        this.saveString(ele.innerText);
        // 遮罩层开关------->true
        this.changeIsShow(true);
      },
      // 3. 结束触摸
      touchEnd() {
        // 遮罩层开关------->false
        this.changeIsShow(false);
      },
      showList(id){
        this.changeCarList(id)
      },
      goDetil(CarDetail){
        this.$router.push({path:'/detail',query:{id:CarDetail}})
      },
      Start(e){
        this.touch=e.touches[0]
      },
      Move(e){
        let touch=e.touches[0];
        this.offsetX=touch.pageX-this.touch.pageX;
       if(this.offsetX>0){
       this.$refs.section.style=`transform:translate3d(${this.offsetX}px,0,0)`
       }
      },
      End(){
        this.$refs.section.style=''
        if(this.offsetX>100){
          this.changeCarType(false)
        }
      }
    },
    mounted() {
      this.initState()
      this.initCarList()
    },
    updated() {
      this.height = window.innerWidth / 750 * 100 * 0.4;
      this.marginTop = (window.innerHeight - (this.letters.length) * this.height) / 2;
      LoadImage('.section')
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../static/css/index/style.css');
  .car-type{
      transform: translate3d(100%, 0, 0);
    box-shadow: -3px 0px 10px 0px rgba(0,0,0,.1);
  }
  .active{
      transform: translate3d(0,0,0);
      transition: transform 3s linear;
  }
</style>

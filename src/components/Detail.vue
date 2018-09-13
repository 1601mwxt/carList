<template>
    <div class="car">
        
         <div class="content">
            <div class="img">
                <img :src="CarDetail&&CarDetail.CoverPhoto" data-hover="hover" @click="initImageDatas({SerialID:CarDetail.SerialID,carId:carId,ColorId:ColorId}),goImg(CarDetail.SerialID)">
                <span data-hover="hover">{{CarDetail&&CarDetail.pic_group_count}}张照片</span>
            </div>
            <div class="info">
                <p>
                    
                    {{CarDetail&&CarDetail.market_attribute.dealer_price}}
                </p>
                <p>指导价 {{CarDetail&&CarDetail.market_attribute.official_refer_price}}</p>
                <div class="action active flex-row">
                    <button data-hover='hover' @click='goQuotation(CarDetail.list[0].car_id),getDealerList({carId:CarDetail.list[0].car_id,cityId:defaultCity.id})'>{{CarDetail&&CarDetail.BottomEntranceTitle}}</button>
                </div>
            </div>
            <div class="car-list" v-if='CarDetail'>
                <div class="c-type">
                     <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
                </div>
                <div class="list">
                    <div v-for='(val,ind) in list' :key='ind'>
                        <p>{{ind}}</p>   
                        <ul>
                            <li  v-for='(value,index) in val' :key='index' @click="goQuotation(value.car_id),getDealerList({carId:CarDetail.list[0].car_id,cityId:defaultCity.id})">
                                <p>{{value.market_attribute.year+'款  '+value.car_name}}</p>
                                <p>{{value.horse_power+'马力'+value.gear_num+'档'}}</p>
                                <p>
                                    <span>{{'指导价 '+value.market_attribute.official_refer_price}}</span>
                                    <span>{{value.market_attribute.dealer_price_min+'起'}}</span>
                                </p>
                                <button @click='goQuotation(value.car_id)'>{{CarDetail.BottomEntranceTitle}}</button>    
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="bottom flex-cloum flex-centerY" @click='goQuotation(CarDetail.list[0].car_id),getDealerList({carId:CarDetail.list[0].car_id,cityId:defaultCity.id})'>
            <p>询问底价</p>
            <p>本地经销商为你报价</p>
        </div>
    </div>
</template>

 <script>
import {mapActions,mapState,mapMutations,mapGetters} from 'vuex';

export default {
    computed: {
      // 获取数据
      ...mapState({
        CarDetail:state=>state.index.CarDetail,
        currentYear:state=>state.details.currentYear,
        defaultCity:state=>state.quotation.defaultCity,
        carId:state=>state.index.carId,
        ColorId:state=>state.index.ColorId

      }),
      ...mapGetters({
          years:'details/years',
          list:'details/list'
      })
    },
   methods:{
    ...mapMutations({
        getInfo:'details/getInfo',
        changeYear:'details/changeYear',
        initDealerList:'quotation/initDealerList'


    }),
    ...mapActions({
        initImageDatas:'index/initImageDatas',
        getDetail:'details/getDetail',
        getDealerList:'quotation/getDealerList'

    }),
    goImg(id){
        this.$router.push({path:'/img',query:{id:id}})
    },
    goQuotation(id){
        this.$router.push({path:'/quotation',query:{id}})
    },
    gop(val){
        console.log(val)
    }
   },
   mounted() {
       this.getDetail(this.$route.query.id);
    //    console.log(this.$route.query.id)
   }
}
</script>
<style scoped>
  @import url('../../static/css/detail/style.css');
</style>

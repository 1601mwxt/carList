<template>
    <div class="list">
        <div v-for='(val,ind) in list' :key='ind'>
            <p>{{ind}}</p>
            <ul>
                <li  v-for='(value,index) in val' :key='index'>
                    <p>{{value.market_attribute.year+'款  '+value.car_name}}</p>
                    <p>{{value.horse_power+'马力'+value.gear_num+'档'}}</p>
                    <p>
                        <span>{{'指导价 '+value.market_attribute.official_refer_price}}</span>
                        <span>{{value.market_attribute.dealer_price_min+'起'}}</span>
                    </p>
                    <button>{{CarDetail.BottomEntranceTitle}}</button>    
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import {mapActions,mapState,mapGetters} from 'vuex';

export default {
 computed: {
      // 获取数据
      ...mapState({
        CarDetail:state=>state.index.CarDetail,
      }),
      ...mapGetters({
        list: 'details/list'
      })
    },
   methods:{
    //    ...mapActions({
    //     initCarDetail:'index/initCarDetail'
    //   }),
   },
   mounted() {
    //    console.log(this.CarDetail)
   }
}
</script>

<style>
  @import url('../../static/css/detail/style.css');
</style>
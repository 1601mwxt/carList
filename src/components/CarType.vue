<template>
     <div class="type">
        <div>
            <div class="c-type">
                <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
            </div>
            <div v-for='(val,ind) in list' :key='ind'>
                <div v-for='(val,ind) in list' :key='ind'>
                     <p class="tip">{{ind}}</p>
                     <ul>
                    <li  v-for='(value,index) in val' :key='index'>
                        <p>
                            <span>{{value.market_attribute.year+'款  '+value.car_name}}</span>
                            <span>{{value.market_attribute.dealer_price_min+'起'}}</span>
                        </p>
                        <p>
                            <span>{{value.horse_power+'马力'+value.gear_num+'档'}}</span><span>{{'指导价 '+value.market_attribute.official_refer_price}}</span>
                        </p>
                    </li>
                </ul>
                </div>
            </div>
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
        currentYear:state=>state.details.currentYear
      }),
      ...mapGetters({
          years:'details/years',
          list:'details/list'
      })
    },
    methods:{
        ...mapMutations({
            getInfo:'details/getInfo',
            changeYear:'details/changeYear'

        }),
        goBack(){
            this.$router.push({path:'/img'})
        },
        
    }
}
</script>

<style lang="css" scoped>
@import url('../../static/css/type/type.css');
</style>


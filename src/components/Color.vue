<template>
    <div class="color">
        <p @click="goBack">全部颜色</p>
        <div>
            <p class="c-type">
                <span v-for='(val,ind) in years' :key='ind' @click="changeYears(val)" :class="changeYear===val?'active':''">{{val}}</span>
            </p>
            <ul>
                <li v-for='(val,ind) in colordetail' :key='ind' @click="changeColorId(val.ColorId),goBack($event,val.ColorId)
                ">
                    <span :style="{background:val.Value}" ></span>
                    {{val.Name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions,mapMutations,mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            list:state=>state.color.list,
            years:state=>state.color.years,
            changeYear:state=>state.color.changeYear,
            colordetail:state=>state.color.colordetail,
             CarDetail:state=>state.index.CarDetail,
            carId:state=>state.index.carId, 
            ColorId:state=>state.index.ColorId

        })
    },
    methods:{
        ...mapActions({
            initColor:'color/initColor',
            initImageDatas:'index/initImageDatas',

            initImgDetailList:'color/initImgDetailList'
        }),
        ...mapMutations({
            changeYears:'color/changeYears',
            InitImgDetailList:'color/InitImgDetailList',
            changeColorId:'index/changeColorId',
            changeSerialID:'color/changeSerialID',
            changeColor:'index/changeColor',
            initImageData:'index/initImageData',

        }),
        goBack(e,id){
            this.changeColor({name:e.target.innerText,id:id})
             this.$router.go(-1)
            // console.log(this.ColorId)
            this.initImageDatas({SerialID:this.CarDetail.SerialID,carId:this.carId,ColorId:this.ColorId})
            // console.log(val)
            // console.log(e.target.innerText);
            // console.log(this.$router)
            // this.$router.push({path:'/img'})
            // this.changeSerialID(this.$router.history.current.params.id);
            // this.initImgDetailList()
           

        },
        chooseYear(ind){
            this.$refs.span[ind].className='active'
        },
        colorId(val){
            console.log(this.$route.params.id)
        }
    },
    mounted() {
        this.initColor(this.$route.params.id)
        console.log(this.$route)
    },
}
</script>

<style scoped>
@import url('../../static/css/color/color.css');
</style>

<template>
<div class='login fixed' style='backgroundColor: #273849'>
     <div class="wrapper animated flipInY"     style='backgroundColor: #273849,height:100%'>
        <div class="logo"><a href="#"><i class="fa fa-bolt"></i> <span>Maniac</span></a></div>
        <div class="box">
            <div class="header clearfix">
                <div class="pull-left"><i class="fa fa-sign-in"></i> Sign In</div>
                <div class="pull-right"><a href="#"><i class="fa fa-times"></i></a></div>
            </div>
            <form id="loginform" method="post" action="index.html">
                <div class="alert alert-warning no-radius no-margin padding-sm" style="fontSize:14px"><i class="fa fa-info-circle"></i> Please sign in to maniac dashboard</div>
                <div class="box-body padding-md">
                    <div class="form-group">
                        <input type="text" v-model="username" name="username" class="form-control" placeholder="Username"/>
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" name="password" class="form-control" placeholder="Password"/>
                    </div>          
                    <div class="form-group">
                        <input type="checkbox" /> <small style="fontSize:14px">Remember me</small>
                    </div>  
                    <div class="box-footer">                                                               
                        <button type="button" class="btn btn-success btn-block" v-on:click="Login">Sign in</button>  
                    </div>
                </div>
            </form>
        </div>
        <div class="box-extra clearfix">
            <a href="#" class="pull-left btn btn-xs">Forgotten Password?</a>
            <a href="register.html" class="pull-right btn  btn-xs">Register an account</a>
        </div>
        
        <footer>
            Copyright &copy; 2014 by YAKUZI.
            
            <ul class="list-unstyled list-inline">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">UI Elements</a></li>
                <li><a href="#">Charts</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </footer>
    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    computed:{
        ...mapState({
            name:state=>state.Login.name,
            pwd:state=>state.Login.pwd
        })
    },
    methods:{
        Login(){
             _hmt.push(['_trackEvent',' 车轮报价', 'tap', '登陆按钮']);

            if(this.username===this.name&&this.password===this.pwd){
                alert('登陆成功');
                window.localStorage.setItem('status','success')
                this.$router.push({path:'/index'})
                // window.history.back()

            }
        //     }else{
        //         // alert('用户名或密码不正确')
        //         // window.localStorage.setItem('status','error')
        // // console.log(this.username)
        //     }
        }
    },
    mounted() {
    },
}
</script>

<style scoped>
    @import url('../static/css/bootstrap.css');
    @import url('../static/css/font-awesome.min.css');
    @import url('../static/css/animate/animate.min.css');
    @import url('../static/css/bootstrapValidator/bootstrapValidator.min.css');
    @import url('../static/css/iCheck/all.css'); 
    @import url('../static/css/style.css');
</style>

<template>
  <div class="full_w bg">
    <!--<Head ></Head>-->
    <div class="re mt_65 h_60"><span class="font_30_sc_re"><b>请登录</b></span></div>
    <div class="re  m_top_1 h_30 "><span class="fl m_l_13">用户名: <input type="text" id="userName"
                                                                       placeholder="请输入用户名"></span></div>
    <div class="re  m_top_1 h_30 "><span class="fl m_l_13">密码: <input type="text" id="password"
                                                                      placeholder="请输入密码"></span></div>
    <div class="re m_top_1 h_60" @click="login">登录</div>
  </div>
</template>

<script>
  import {Toast} from "vant";
  import Head from "./components/Head";

  export default {
    name: "Login",
    components: {Head},
    data() {
      return {
        userName: '',
        password: '',
      }
    },

    methods: {

      login() {
        let _this = this;
        _this.userName = document.getElementById('userName').value;
        _this.password = document.getElementById('password').value;


        _this.$post('http://127.0.0.1:10003/user/register', ({userName: _this.userName, password: _this.password})).then(re=>{
          alert("1");
        })

    }
  }}
</script>

<style scoped src="../assets/css/common/common.css">

</style>

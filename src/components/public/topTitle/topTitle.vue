<template>
  <div id="topTitleDiv">
      <a :href="imgHref"><img id="schoolImg" src="./images/Top.png" :alt="imgAlt" ></a>
      <a :href="nameHref"><span id="schoolName">{{ schoolName }}</span></a>
      <div id="userExitDiv">
        <a id="user" :href="userHref">{{ userName }}</a>
        <a :href="exitHref"><img id="exitImg" src="./images/Exit.png" :alt="exitAlt"></a>
        <!--<a :href="exitHref"><img id="exitImg" :src="exitSrc" alt="exitAlt" @click="exitAlert"></a>-->
      </div>
  </div>
</template>

<script>
//  import exitPng from '../assets/img/Exit.png'
  export default {
    name: 'topTitleDiv',
    data () {
      return {
        imgHref: 'http://www.samsph.com/',//医院官网
        nameHref: 'http://www.samsph.com/hsxx/1092/1/',//学校官网
        userHref: '#/teachingStaff-combineCourse',//预想跳转到个人信息相关界面
        exitHref: '#/login',//跳转到登录页面
        schoolName: '护士学校',
        userName: '您好,李华!',//预想根据用户信息改变
        imgAlt: '四川省医科科学院·四川省人民医院',//图片加载失败时的备注
        exitAlt: '退出图标',//图片加载失败时的备注
//        imgSrc: require('../assets/img/Top.png'),//这种写法不需要import
//        exitSrc: exitPng, //图片地址不能写在变量中，这种写法需要import
      }
    },
    methods: {
      exitAlert: function () {
        //仅供测试，预想是注销并返回登录页面
        if(confirm("您确定要退出并关闭页面吗？")){
          window.close();
        }
      }
    }
  }
</script>

<style scoped>
  html{
    font-size: 100%;
  }
  a{
    text-decoration: none;
  }
  #topTitleDiv{
    text-align: left;
    background-color: white;
  }
  #schoolImg{
    width: 25rem;
    height: 4rem;
    border-right: 0.1rem solid whitesmoke;
    padding: 0.5rem;
  }
  #schoolName{
    color: grey;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    bottom: 2rem;
  }
  #userExitDiv{
    float: right;
    display: flex;
    align-items: flex-end;
    position: relative;
    top: 1rem;
  }
  #user{
    color: black;
    text-decoration: none;
    font-size: 1rem;
  }
  #exitImg{
    position: relative;
    top: 0.75rem;
    width: 2rem;
    height: 2rem;
  }
  @media screen and (max-width:1023px){
    html{
      font-size: 56%;
    }
  }
</style>

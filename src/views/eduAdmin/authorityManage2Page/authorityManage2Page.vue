<template>
  <!--使用import引入的组件组合page页面-->
  <div id="authorityManage2Page">
    <topTitle></topTitle>
    <topBar></topBar>
    <div id="staffAuthorityAll">
      <div ><dropdownStaff></dropdownStaff></div>
      <div class="marginLeft"><staffAuthority></staffAuthority></div>
    </div>
  </div>
</template>

<script>
  /*import引入该page页面的单文件组件*/
  import topTitle from '../../../components/public/topTitle/topTitle.vue'
  import topBar from '../../../components/eduAdmin/authorityManage2Page/topBar/topBar.vue'
  import dropdownStaff from '../../../components/eduAdmin/authorityManage2Page/dropdownStaff/dropdownStaff.vue'
  import staffAuthority from '../../../components/eduAdmin/authorityManage2Page/staffAuthority/staffAuthority.vue'
  export default {
    name: 'authorityManage2Page',
    data () {
      return {
        msg: ''
      }
    },
    /*注册import引入的单文件组件*/
    components:{
      topTitle,
      topBar,
      dropdownStaff,
      staffAuthority
    }
  }
</script>

<style scoped>
  html {
    font-size: 100%;
  }
  #authorityManage2Page{
    text-align: left;
    background-color: #f0f3f8;
  }
  #staffAuthorityAll{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2rem auto 2rem 5rem;
    min-height: 50rem;
  }
  .marginLeft{
    margin-left: 3rem;
  }
  @media screen and (max-width: 1023px) {
    html {
      font-size: 56%;
    }
  }
</style>

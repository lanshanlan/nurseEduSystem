<template>
    <!--使用import引入的组件组合page页面-->
    <div id="eduPlanPage">
      <topTitle></topTitle>
      <topBar></topBar>
      <yearPlan></yearPlan>
    </div>
</template>

<script>
  /*import引入该page页面的单文件组件*/
  import topTitle from '../../../../components/public/topTitle/topTitle.vue'
  import topBar from '../../../../components/eduAdmin/eduManage/eduPlanPage/topBar/topBar.vue'
  import yearPlan from '../../../../components/eduAdmin/eduManage/eduPlanPage/yearPlan/yearPlan.vue'
  export default {
    name: 'eduPlanPage',
    data () {
      return {
        msg: ''
      }
    },
    /*注册import引入的单文件组件*/
    components: {
      topTitle,
      topBar,
      yearPlan
    }
  }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #eduPlanPage{
      text-align: left;
      height:50rem;
      background-color: #f0f3f8;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

<template>
    <div id="teachProcessPage">
      <topTitle></topTitle>
      <topBar></topBar>
      <yearProcess></yearProcess>
    </div>
</template>

<script>
  /*import引入该page页面的单文件组件*/
  import topTitle from '../../../../components/public/topTitle/topTitle.vue'
  import topBar from '../../../../components/eduAdmin/eduManage/teachProcessPage/topBar/topBar.vue'
  import yearProcess from '../../../../components/eduAdmin/eduManage/teachProcessPage/yearProcess/yearProcess.vue'
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
      yearProcess
    }
  }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #teachProcessPage{
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

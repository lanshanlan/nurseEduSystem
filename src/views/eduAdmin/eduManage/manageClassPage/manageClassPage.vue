<template>
    <!--使用import引入的组件组合page页面-->
    <div id="manageClassPage">
      <topTitle></topTitle>
      <topBar></topBar>
      <searchInfo></searchInfo>
      <stdInfoTable></stdInfoTable>
    </div>
</template>

<script>
  /*import引入该page页面的单文件组件*/
  import topTitle from '../../../../components/public/topTitle/topTitle.vue'
  import topBar from '../../../../components/eduAdmin/eduManage/manageClassPage/topBar/topBar.vue'
  import searchInfo from '../../../../components/eduAdmin/eduManage/manageClassPage/searchInfo/searchInfo.vue'
  import stdInfoTable from '../../../../components/eduAdmin/eduManage/manageClassPage/stdInfoTable/stdInfoTable.vue'
  export default {
    name: 'manageClassPage',
    data () {
      return {
        msg: ''
      }
    },
    /*注册import引入的单文件组件*/
    components: {
      topTitle,
      topBar,
      searchInfo,
      stdInfoTable
    }
  }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #manageClassPage{
      text-align: left;
      min-height: 50rem;
      background-color: #f0f3f8;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

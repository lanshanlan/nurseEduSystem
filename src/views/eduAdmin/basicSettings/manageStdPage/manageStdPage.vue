<template>
    <!--使用import引入的组件组合page页面-->
    <div id="manageStdPage">
      <topTitle></topTitle>
      <topBar></topBar>
      <dropdownInfo></dropdownInfo>
      <stdTable></stdTable>
    </div>
</template>

<script>
  /*import引入该page页面的单文件组件*/
    import topTitle from '../../../../components/public/topTitle/topTitle.vue'
    import topBar from '../../../../components/eduAdmin/basicSettings/manageStdPage/topBar/topbar.vue'
    import dropdownInfo from '../../../../components/eduAdmin/basicSettings/manageStdPage/dropdownInfo/dropdownInfo.vue'
    import stdTable from '../../../../components/eduAdmin/basicSettings/manageStdPage/stdTable/stdTable.vue'
    export default {
        name: 'manageStdPage',
        data () {
            return {
                msg: ''
            }
        },
      /*注册import引入的单文件组件*/
      components:{
        topTitle,
        topBar,
        dropdownInfo,
        stdTable
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #manageStdPage{
      text-align: left;
      min-height:50rem;
      background-color: #f0f3f8;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

<template>
  <!--使用import引入的组件组合page页面-->
  <div id="evaTeachingReasultPage">
    <topTitle></topTitle>
    <topBar></topBar>
    <tchDropdown></tchDropdown>
    <noSupervisorTable></noSupervisorTable>
    <setSupervisorDropdown></setSupervisorDropdown>
    <supervisorTable></supervisorTable>
  </div>
</template>

<script>
  /*import引入该page页面的单文件组件*/
  import topTitle from '../../../../components/public/topTitle/topTitle.vue'
  import topBar from '../../../../components/eduAdmin/eduManage/supervisorManagePage/topBar/topBar.vue'
  import tchDropdown from '../../../../components/eduAdmin/eduManage/supervisorManagePage/tchDropdown/tchDropdown.vue'
  import noSupervisorTable from '../../../../components/eduAdmin/eduManage/supervisorManagePage/noSupervisorTable/noSupervisorTable.vue'
  import setSupervisorDropdown from '../../../../components/eduAdmin/eduManage/supervisorManagePage/setSupervisorDropdown/setSupervisorDropdown.vue'
  import supervisorTable from '../../../../components/eduAdmin/eduManage/supervisorManagePage/supervisorTable/supervisorTable.vue'
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
      tchDropdown,
      noSupervisorTable,
      setSupervisorDropdown,
      supervisorTable
    }
  }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #evaTeachingReasultPage{
      min-height: 50rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

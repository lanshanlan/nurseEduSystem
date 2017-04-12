<template>
    <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <div id="" style="background-color: white">
        <table class="operationTable" style="table-layout: fixed;">
          <thead>
          <tr><th>页面链接测试</th></tr>
          </thead>
          <tbody>
          <tr><td><a href="./eduAdmin/basicSettings/manageStdPage/manageStdPage.vue">学生管理</a></td></tr>
          <tr><td><a href="./eduAdmin/basicSettings/manageTchPage/manageTchPage.vue">教师管理</a></td></tr>
          <tr><td><a href="./eduAdmin/eduManage/eduPlanPage/eduPlanPage.vue">培养方案</a></td></tr>
          <tr><td><a href="./eduAdmin/eduManage/evaTeachingResultPage/evaTeachingResultPage.vue">评教结果</a></td></tr>
          <tr><td><a href="./eduAdmin/eduManage/manageClassPage/manageClassPage.vue">班级管理</a></td></tr>
          <tr><td><a href="./eduAdmin/eduManage/supervisorManagePage/supervisorManagePage.vue">督导设置</a></td></tr>
          <tr><td><a href="./eduAdmin/eduManage/tchTeachingPlanPage/tchTeachingPlanPage.vue">教师教学计划</a></td></tr>
          <tr><td><a href="./eduAdmin/eduManage/teachProcessPage/teachProcessPage.vue">学期教学进程</a></td></tr>
          <tr><td><a href="./eduAdmin/userManage/authorityManage2Page/authorityManage2Page.vue">权限管理页面2</a></td></tr>
          <tr><td><a href="./student/inquireGradePage/inquireGradePage.vue">学生查询成绩</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }

    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

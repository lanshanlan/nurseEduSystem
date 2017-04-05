/*import 作用是引用Page页面*/
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import stInquireGrade from '../views/student/inquireGradePage/inquireGradePage.vue'
import eduAdminManageStd from '../views/eduAdmin/basicSettings/manageStdPage/manageStdPage.vue'
import eduAdminManageTch from '../views/eduAdmin/basicSettings/manageTchPage/manageTchPage.vue'
import eduAdminEduPlan from '../views/eduAdmin/eduManage/eduPlanPage/eduPlanPage.vue'
import eduAdminTeachProcess from '../views/eduAdmin/eduManage/teachProcessPage/teachProcessPage.vue'
import eduAdminTchTeachingPlan from '../views/eduAdmin/eduManage/tchTeachingPlanPage/tchTeachingPlanPage.vue'
import eduAdminManageClass from '../views/eduAdmin/eduManage/manageClassPage/manageClassPage.vue'
import eduAdminEvaTeachingResult from '../views/eduAdmin/eduManage/evaTeachingResultPage/evaTeachingResultPage.vue'
import eduAdminSupervisorManage from '../views/eduAdmin/eduManage/supervisorManagePage/supervisorManagePage.vue'
import eduAdminAuthorityManage2 from '../views/eduAdmin/userManage/authorityManage2Page/authorityManage2Page.vue'

Vue.use(Router)

export default new Router({   //将routes里的参数导出
  routes: [
    {
      path: '/',   //这里只用'/'，即为默认路径，首次打开项目进入Hello界面
      name: 'Hello',
      component: Hello
    },
    {
      path: '/stInquireGrade',
      name: 'stInquireGrade',
      component: stInquireGrade
    },
    {
      path: '/eduAdminManageStd',
      name: 'eduAdminManageStd',
      component: eduAdminManageStd
    },
    {
      path: '/eduAdminManageTch',
      name: 'eduAdminManageTch',
      component: eduAdminManageTch
    },
    {
      path: '/eduAdminEduPlan',
      name: 'eduAdminEduPlan',
      component: eduAdminEduPlan
    },
    {
      path: '/eduAdminTeachProcess',
      name: 'eduAdminTeachProcess',
      component: eduAdminTeachProcess
    },
    {
      path: '/eduAdminTchTeachingPlan',
      name: 'eduAdminTchTeachingPlan',
      component: eduAdminTchTeachingPlan
    },
    {
      path: '/eduAdminManageClass',
      name: 'eduAdminManageClass',
      component: eduAdminManageClass
    },
    {
      path: '/eduAdminEvaTeachingResult',
      name: 'eduAdminEvaTeachingResult',
      component: eduAdminEvaTeachingResult
    },
    {
      path: '/eduAdminSupervisorManage',
      name: 'eduAdminSupervisorManage',
      component: eduAdminSupervisorManage
    },
    {
      path: '/eduAdminAuthorityManage2',
      name: 'eduAdminAuthorityManage2',
      component: eduAdminAuthorityManage2
    }
  ]
})

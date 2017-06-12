/*import 作用是引用Page页面*/
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
//import stInquireGrade from '../views/student/inquireGradePage/inquireGradePage.vue'
//import eduAdminManageStd from '../views/eduAdmin/basicSettings/manageStdPage/manageStdPage.vue'
//import eduAdminManageTch from '../views/eduAdmin/basicSettings/manageTchPage/manageTchPage.vue'
//import eduAdminEduPlan from '../views/eduAdmin/eduManage/eduPlanPage/eduPlanPage.vue'
//import eduAdminTeachProcess from '../views/eduAdmin/eduManage/teachProcessPage/teachProcessPage.vue'
//import eduAdminTchTeachingPlan from '../views/eduAdmin/eduManage/tchTeachingPlanPage/tchTeachingPlanPage.vue'
//import eduAdminManageClass from '../views/eduAdmin/eduManage/manageClassPage/manageClassPage.vue'
//import eduAdminEvaTeachingResult from '../views/eduAdmin/eduManage/evaTeachingResultPage/evaTeachingResultPage.vue'
//import eduAdminSupervisorManage from '../views/eduAdmin/eduManage/supervisorManagePage/supervisorManagePage.vue'
//import eduAdminAuthorityManage2 from '../views/eduAdmin/userManage/authorityManage2Page/authorityManage2Page.vue'
//import eduAdminManageGrade from '../views/eduAdmin/basicSettings/manageGradePage/manageGradePage.vue'
const eduAdminManageStd = resolve => require(['../views/eduAdmin/basicSettings/manageStdPage/manageStdPage.vue'], resolve);
const eduAdminManageTch = resolve => require(['../views/eduAdmin/basicSettings/manageTchPage/manageTchPage.vue'], resolve);
const eduAdminEduPlan = resolve => require(['../views/eduAdmin/eduManage/eduPlanPage/eduPlanPage.vue'], resolve);
const eduAdminTeachProcess = resolve => require(['../views/eduAdmin/eduManage/teachProcessPage/teachProcessPage.vue'], resolve);
const eduAdminTchTeachingPlan = resolve => require(['../views/eduAdmin/eduManage/tchTeachingPlanPage/tchTeachingPlanPage.vue'], resolve);
const eduAdminManageClass = resolve => require(['../views/eduAdmin/eduManage/manageClassPage/manageClassPage.vue'], resolve);
const eduAdminEvaTeachingResult = resolve => require(['../views/eduAdmin/eduManage/evaTeachingResultPage/evaTeachingResultPage.vue'], resolve);
const eduAdminSupervisorManage = resolve => require(['../views/eduAdmin/eduManage/supervisorManagePage/supervisorManagePage.vue'], resolve);
const eduAdminAuthorityManage2 = resolve => require(['../views/eduAdmin/userManage/authorityManage2Page/authorityManage2Page.vue'], resolve);
const eduAdminManageGrade = resolve => require(['../views/eduAdmin/basicSettings/manageGradePage/manageGradePage.vue'], resolve);
import startTest from '../views/startTest.vue'
import checkTest from '../views/test/checkTest/checkTest.vue'

Vue.use(Router)

export default new Router({   //将routes里的参数导出
  routes: [
    //{
    //  path: '/',   //这里只用'/'，即为默认路径，首次打开项目进入Hello界面
    //  name: 'Hello',
    //  component: Hello
    //},

    //{
    //  //学生查询成绩界面
    //  path: '/studentTestInfoContent/query/stInquireGrade',
    //  name: 'stInquireGrade',
    //  component: stInquireGrade
    //},
    {
      //学生管理界面
      path: '/eduAdmin/person/eduAdminManageStd',
      name: 'eduAdminManageStd',
      component: eduAdminManageStd
    },
    {
      //教师管理界面
      path: '/eduAdmin/person/eduAdminManageTch',
      name: 'eduAdminManageTch',
      component: eduAdminManageTch
    },
    {
      //培养方案界面
      path: '/eduAdmin/plan/eduAdminEduPlan',
      name: 'eduAdminEduPlan',
      component: eduAdminEduPlan
    },
    {
      //教学进程界面
      path: '/eduAdmin/plan/eduAdminTeachProcess',
      name: 'eduAdminTeachProcess',
      component: eduAdminTeachProcess
    },
    {
      //教师教学计划界面
      path: '/eduAdmin/examination/eduAdminTchTeachingPlan',
      name: 'eduAdminTchTeachingPlan',
      component: eduAdminTchTeachingPlan
    },
    {
      //学生异动情况界面
      path: '/eduAdmin/person/eduAdminManageClass',
      name: 'eduAdminManageClass',
      component: eduAdminManageClass
    },
    {
      //评教结果界面
      path: '/eduAdmin/examination/eduAdminEvaTeachingResult',
      name: 'eduAdminEvaTeachingResult',
      component: eduAdminEvaTeachingResult
    },
    {
      //教务管理督导界面
      path: '/eduAdmin/eduAdminSupervisorManage',
      name: 'eduAdminSupervisorManage',
      component: eduAdminSupervisorManage
    },
    {
      //权限设置界面
      path: '/eduAdmin/role/eduAdminAuthorityManage2',
      name: 'eduAdminAuthorityManage2',
      component: eduAdminAuthorityManage2
    },
    {
      //年级管理界面
      path: '/eduAdmin/resource/eduAdminManageGrade',
      name: 'eduAdminManageGrade',
      component: eduAdminManageGrade
    },
    {
      path: '/checkTest',
      name: 'checkTest',
      component: checkTest
    },
    {
      path: '/',
      name: 'startTest',
      component: startTest
    }
  ]
})

<template>
  <div id="supervisorTable">
    <span><p>*下面是y已分配督导员的课程</p></span>
    <table id="supervisorTableSy" border="1">
      <thead>
      <tr>
        <th width="2rem">当前状态</th>
        <th width="2rem">序号</th>
        <th width="2rem">排课序号</th>
        <th width="8rem">排课类型</th>
        <th width="8rem">班级名称</th>
        <th width="2rem">课程名称</th>
        <th width="2rem">课程编号</th>
        <th width="2rem">任课老师</th>
        <th width="4rem">第1段</th>
        <th width="4rem">反馈</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" courseInfo in courseInfos">
        <td v-text="courseInfo.status"></td>
        <td v-text="courseInfo.NO"></td>
        <td v-text="courseInfo.manageID"></td>
        <td v-text="courseInfo.manageType"></td>
        <td v-text="courseInfo.className"></td>
        <td v-text="courseInfo.courseName"></td>
        <td v-text="courseInfo.courseID"></td>
        <td v-text="courseInfo.tch"></td>
        <td v-text="courseInfo.timePlace"></td>
        <td><button>反馈</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: 'supervisorTable',
        data () {
            return {
              courseInfos:[
                {status:'已读',NO:'01',manageID:'86851',manageType:'多个班拆分合班上课排课',className:'对口高职 2015 护理 (9+3) 1班 + 普通高中 2015 护理2班',courseName:'护理管理学',courseID:'10301',tch:'何平(61742)',timePlace:'1-19周星期二第1-4节 教学楼408(89人)'},
                {status:'未读',NO:'02',manageID:'86846',manageType:'多个班拆分合班上课排课',className:'对口高职 2015 护理 1班 + 普通高中 2015 护理1班',courseName:'护理管理学',courseID:'10301',tch:'何平(61742)',timePlace:'1-19周星期二第7-8节 教学楼206(89人)'}
              ]
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    p{
      margin-left: 5rem;
      color: grey;
    }
    #supervisorTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    button{
      float: right;
      margin-top: 0.3rem;
      margin-bottom: auto;
      margin-left: 3rem;
      background-color: #158064;
      font-size: 0.8rem;
      color:#FFF;
      font-weight: bold;
      text-align: center;
      border-radius: 0.5rem;
      padding-bottom: 0.1rem;
      height: 1.4rem;
      min-width: 5rem;
      border-color: white;
      border-style: solid;
      border-width: 0.1rem;
      /*更改button的边框属性*/
    }
    button:hover{
      background-color: #00a539;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

<template>
  <div id="noSupervisorTable">
    <span><p>*下面是筛选后的课程</p></span>
    <!--未设置督导的课程的表格-->
    <table id="noSupervisorTableSy" border="1">
      <thead>
      <tr>
        <th width="2rem">请选择</th>
        <th width="2rem">序号</th>
        <th width="2rem">排课序号</th>
        <th width="8rem">排课类型</th>
        <th width="8rem">班级名称</th>
        <th width="2rem">课程名称</th>
        <th width="2rem">课程编号</th>
        <th width="2rem">任课老师</th>
        <th width="4rem">第1段</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" courseInfo in courseInfos">
        <td>设置督导</td>
        <td v-text="courseInfo.NO"></td>
        <td v-text="courseInfo.manageID"></td>
        <td v-text="courseInfo.manageType"></td>
        <td v-text="courseInfo.className"></td>
        <td v-text="courseInfo.courseName"></td>
        <td v-text="courseInfo.courseID"></td>
        <td v-text="courseInfo.tch"></td>
        <td v-text="courseInfo.timePlace"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: 'noSupervisorTable',
        data () {
            return {
                courseInfos:[
                  {NO:'01',manageID:'86851',manageType:'多个班拆分合班上课排课',className:'对口高职 2015 护理 (9+3) 1班 + 普通高中 2015 护理2班',courseName:'护理管理学',courseID:'10301',tch:'何平(61742)',timePlace:'1-19周星期二第1-4节 教学楼408(89人)'},
                  {NO:'02',manageID:'86846',manageType:'多个班拆分合班上课排课',className:'对口高职 2015 护理 1班 + 普通高中 2015 护理1班',courseName:'护理管理学',courseID:'10301',tch:'何平(61742)',timePlace:'1-19周星期二第7-8节 教学楼206(89人)'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.courseInfos = response.body.courseInfos;
        });
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    p{
      margin-left: 5rem;
      color: grey;
    }
    #noSupervisorTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }

    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

<template>
  <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
    <div id="supervisorTable" style="background-color: white">
      <span><p>*下面是已分配督导员的课程</p></span>
      <table id="supervisorTableSy" class="operationTable" style="table-layout: fixed;">
        <!--已分配督导员的课程的表格-->
        <thead>
        <tr>
          <th>当前状态</th>
          <th>序号</th>
          <th>排课序号</th>
          <th>排课类型</th>
          <th>班级名称</th>
          <th>课程名称</th>
          <th>课程编号</th>
          <th>任课老师</th>
          <th>第1段</th>
          <th>反馈</th>
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
          <td><button class="am-btn am-btn-success am-radius">反馈</button></td>
        </tr>
        </tbody>
      </table>
    </div>
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
        font-size: 100%;
    }
    p{
      color: grey;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

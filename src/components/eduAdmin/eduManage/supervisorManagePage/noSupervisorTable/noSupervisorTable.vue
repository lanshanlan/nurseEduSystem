<template>
  <div>
    <div id="tchDropdown">
      <!--教师选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>任课教师</option>
        <option v-for="tch in tchs">{{tch}}</option>
      </select>
      <!--课程选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>任课教师</option>
        <option v-for="course in courses">{{course}}</option>
      </select>
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
      <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM">导出</button></span>
    </div>
    <div id="noSupervisorTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <span><p>*下面是筛选后的课程</p></span>
      <!--未设置督导的课程的表格-->
      <table id="noSupervisorTableSy" class="normalTable" style="table-layout: fixed;">
        <thead>
        <tr>
          <th width="15%">请选择</th>
          <th width="25%">班级名称</th>
          <th width="25%">课程名称</th>
          <th width="20%">课程编号</th>
          <th width="15%">任课老师</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for=" courseInfo in courseInfos">
          <td><u>设置督导</u></td>
          <td v-text="courseInfo.className"></td>
          <td v-text="courseInfo.courseName"></td>
          <td v-text="courseInfo.courseID"></td>
          <td v-text="courseInfo.tchName"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'noSupervisorTable',
        data () {
            return {
              tchs:[
                '何平',
                '陈浩',
                '李季'
              ],
              courses:[
                '职业生涯规划',
                '哲学与人生',
                '护理学',
                '生理学'
              ],
                courseInfos:[
                  {setted:'',looked:'',className:'对口高职 2015 护理 (9+3) 1班 + 普通高中 2015 护理2班',courseName:'护理管理学',courseID:'10301',tchName:'何平'},
                  {setted:'',looked:'',className:'对口高职 2015 护理 1班 + 普通高中 2015 护理1班',courseName:'护理管理学',courseID:'10301',tchName:'何平'}
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
    #tchDropdown{
      margin: 0.6rem 5rem;
      background-color: white;
    }
    .selectWM{
      width: 8rem;
      margin: 0 0.7rem;
    }
    .inputWM{
      width: 8rem;
      margin: 0 0.7rem;
    }
    .buttonWM{
      width: 5.6rem;
      margin: 0 0.7rem;
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

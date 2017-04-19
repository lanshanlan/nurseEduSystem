<template>
  <div>
    <div id="courseTchInfo">
      <select class="selectWM">
        <option disabled selected>选择学期</option>
        <option v-for="term in terms">{{term}}</option>
      </select>
      <span><input type="text" id="courseID" class="inputWM" placeholder="课程代码"></span>
      <span><input type="text" id="courseName" class="inputWM" placeholder="课程名称"></span>
      <span><input type="text" id="tchID" class="inputWM" placeholder="教师编码"></span>
      <span><input type="text" id="tchName" class="inputWM" placeholder="教师姓名"></span>
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查询</button></span>
    </div>
    <div id="evaResultTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <!--评教结果表格-->
      <table id="stdInfoTableSy" class="normalTable" style="table-layout: fixed;">
        <thead>
        <tr>
          <th>课程代码</th>
          <th>课程名称</th>
          <th>教师编码</th>
          <th>教师姓名</th>
          <th>参评人数</th>
          <th>综合得分</th>
          <th>等级</th>
          <th>查看留言</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="result in results">
          <td v-text="result.courseID"></td>
          <td v-text="result.courseName"></td>
          <td v-text="result.tchID"></td>
          <td v-text="result.tchName"></td>
          <td v-text="result.evaNum"></td>
          <td v-text="result.multiplyScore"></td>
          <td v-text="result.rank"></td>
          <td v-text="result.tips"></td>
        </tr>
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
              terms:[
                '2014-2015:第一学期',
                '2014-2015:第二学期',
                '2015-2016:第一学期',
                '2015-2016:第二学期',
                '2016-2017:第一学期',
                '2016-2017:第二学期',
                '2017-2018:第一学期',
                '2017-2018:第二学期'
              ],
                results:[
                  {courseID:'K2210710',courseName:'企业合作课程',tchID:'1234567',tchName:'何平',evaNum:'65',multiplyScore:'98',rank:'A',tips:'暂无'},
                  {courseID:'K2210711',courseName:'企业合作课程',tchID:'1234567',tchName:'王建',evaNum:'73',multiplyScore:'97',rank:'A',tips:'暂无'},
                  {courseID:'K2210712',courseName:'企业合作课程',tchID:'1234567',tchName:'张小山',evaNum:'56',multiplyScore:'96',rank:'A',tips:'暂无'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.results = response.body.results;
        });
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #courseTchInfo{
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
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

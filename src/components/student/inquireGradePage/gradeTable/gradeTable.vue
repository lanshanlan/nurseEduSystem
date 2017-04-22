<template>
  <div>
    <div id="stdInquireGradeChangeTerm">
      <select class="selectWM" v-model="termEle">
        <option value="0">选择学期</option>
        <option v-for="term in terms" :value="term">{{term}}</option>
      </select>
      <span><button id="changebut" class="am-btn am-btn-success am-radius buttonWM" @click="changeTerm()">切换学期</button></span>
      <span><button id="allbut" class="am-btn am-btn-success am-radius buttonWM" @click="allTerm()">所有学期成绩</button></span>
    </div>
    <div id="stdTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <table id="stdInquireGradeTableSy" class="normalTable" style="table-layout: fixed;">
        <thead>
        <tr>
          <th>学年学期</th>
          <th>课程代码</th>
          <th>课程名称</th>
          <th>课程类别</th>
          <th>总评成绩</th>
          <th>补考成绩</th>
          <th>最终</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="studentScore in studentScores">
          <td v-text="studentScore.term"></td>
          <td v-text="studentScore.courseCode"></td>
          <td v-text="studentScore.courseName"></td>
          <td v-text="studentScore.courseCategory"></td>
          <td v-text="studentScore.generalScore"></td>
          <td v-text="studentScore.makeupScore"></td>
          <td v-text="studentScore.finalScore"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'stdInquireGradeTableSy',
    data () {
      return {
        termEle:'0',
        terms:[
          '大一:第一学期',
          '大一:第二学期',
          '大二:第一学期',
          '大二:第二学期',
          '大三:第一学期',
          '大三:第二学期',
          '大四:第一学期',
          '大四:第二学期'
        ],
        studentScores:[
          {term:'2016-2017.2',courseCode:'K2210710',courseName:'企业合作课程',courseCategory:'实践类核心课程',generalScore:'80',makeupScore:'--',finalScore:'80'},
          {term:'2016-2017.2',courseCode:'K2210710',courseName:'企业合作课程',courseCategory:'实践类核心课程',generalScore:'80',makeupScore:'--',finalScore:'80'},
          {term:'2016-2017.2',courseCode:'K2210710',courseName:'企业合作课程',courseCategory:'实践类核心课程',generalScore:'80',makeupScore:'--',finalScore:'80'}
        ]
      }
    },
    beforeMount:function() {
      this.$http.post('../studentInquireGradeJson',{},{
        "Content-Type":"application/json"
      }).then(function (response) {
        console.log(response);
        this.studentScores = response.body.studentScores;
      },function(error){
        console.log("获取error");
      });
    },
    methods:{
      changeTerm: function(){
        this.$http.post('../changeTermJson',{
          "termEle":this.termEle
        },{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.studentScores = response.body.studentScores;
        },function(error){
          console.log("获取error");
        });
      },
      allTerm: function(){
        this.$http.post('../allTermJson',{},{
          "Content-Type":"application/json"
        }).then(function (response) {
          console.log(response);
          this.studentScores = response.body.studentScores;
        },function(error){
          console.log("获取error");
        });
      }
    }
  }
</script>

<style scoped>
    html{
        font-size: 62.5%;

    }
    #stdInquireGradeChangeTerm{
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
      min-width: 5.6rem;
      margin: 0 0.7rem;
    }
    @media screen and (max-width:1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

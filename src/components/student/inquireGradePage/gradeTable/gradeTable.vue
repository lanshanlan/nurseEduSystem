<template>
  <div>
    <div id="stdInquireGradeChangeTerm">
      <select class="selectWM">
        <option disabled selected>选择学期</option>
        <option v-for="term in terms">{{term}}</option>
      </select>
      <span><button id="changebut" class="am-btn am-btn-success am-radius buttonWM">切换学期</button></span>
      <span><button id="allbut" class="am-btn am-btn-success am-radius buttonWM">所有学期成绩</button></span>
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
        <tr v-for="item in items">
          <td v-text="item.term"></td>
          <td v-text="item.courseCode"></td>
          <td v-text="item.courseName"></td>
          <td v-text="item.courseCategory"></td>
          <td v-text="item.generalScore"></td>
          <td v-text="item.makeupScore"></td>
          <td v-text="item.finalScore"></td>
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
        items:[
          {term:'2016-2017.2',courseCode:'K2210710',courseName:'企业合作课程',courseCategory:'实践类核心课程',generalScore:'80',makeupScore:'--',finalScore:'80'},
          {term:'2016-2017.2',courseCode:'K2210710',courseName:'企业合作课程',courseCategory:'实践类核心课程',generalScore:'80',makeupScore:'--',finalScore:'80'},
          {term:'2016-2017.2',courseCode:'K2210710',courseName:'企业合作课程',courseCategory:'实践类核心课程',generalScore:'80',makeupScore:'--',finalScore:'80'}
        ]
      }
    },
    created:function() {
      this.$http.get('../readjson.php').then(function (response) {
        console.log(response);
        this.items = response.body.items;
      });
    },
    methods:{
      yearClick: function(year,term){
        //监听搜索内容点击选择，同步到课程表选择框
//          alert("Hello boy!");
        var changeTerm = document.getElementById("changeTerm");
        changeTerm.value = year+': '+term;
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

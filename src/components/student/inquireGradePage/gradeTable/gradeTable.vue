<template>
  <div id="stdTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
    <table id="stdInquireGradeTableSy" class="normalTable" style="table-layout: fixed;">
      <thead>
      <tr>
        <th>学年学期</th>
        <th>课程代码</th>
        <th>课程序号</th>
        <th>课程名称</th>
        <th>课程类别</th>
        <th>学分</th>
        <th>总评成绩</th>
        <th>补考成绩</th>
        <th>最终</th>
        <th>绩点</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items">
        <td v-text="item.term"></td>
        <td v-text="item.courseCode"></td>
        <td v-text="item.courseNum"></td>
        <td v-text="item.courseName"></td>
        <td v-text="item.courseCategory"></td>
        <td v-text="item.credit"></td>
        <td v-text="item.generalScore"></td>
        <td v-text="item.makeupScore"></td>
        <td v-text="item.finalScore"></td>
        <td v-text="item.performanceEvalu"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'stdInquireGradeTableSy',
    data () {
      return {
        items:[
          {term:'2016-2017.2',courseCode:'K2210710',courseNum:'K2210710.02',courseName:'企业合作课程',courseCategory:'实践类核心课程',credit:'1',generalScore:'80',makeupScore:'--',finalScore:'80',performanceEvalu:'3.5'},
          {term:'2016-2017.2',courseCode:'K2210710',courseNum:'K2210710.02',courseName:'企业合作课程',courseCategory:'实践类核心课程',credit:'1',generalScore:'80',makeupScore:'--',finalScore:'80',performanceEvalu:'3.5'},
          {term:'2016-2017.2',courseCode:'K2210710',courseNum:'K2210710.02',courseName:'企业合作课程',courseCategory:'实践类核心课程',credit:'1',generalScore:'80',makeupScore:'--',finalScore:'80',performanceEvalu:'3.5'}
        ]
      }
    },
    created:function() {
      this.$http.get('../readjson.php').then(function (response) {
        console.log(response);
        this.items = response.body.items;
      });
    }
  }
</script>

<style scoped>
    html{
        font-size: 62.5%;

    }
    @media screen and (max-width:1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

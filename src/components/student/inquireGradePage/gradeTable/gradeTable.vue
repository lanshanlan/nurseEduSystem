<template>
  <div id="stdTable">
    <table id="stdInquireGradeTableSy" border="1">
      <thead>
      <tr>
        <th width="6.6rem">学年学期</th>
        <th width="6.6rem">课程代码</th>
        <th width="6.6rem">课程序号</th>
        <th width="13.3rem">课程名称</th>
        <th width="13.3rem">课程类别</th>
        <th width="6.6rem">学分</th>
        <th width="6.6rem">总评成绩</th>
        <th width="6.6rem">补考成绩</th>
        <th width="6.6rem">最终</th>
        <th width="6.6rem">绩点</th>
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
    #stTable{

    }
    #stdInquireGradeTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    @media screen and (max-width:1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

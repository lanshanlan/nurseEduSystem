<template>
  <div id="evaResultTable">
    <!--评教结果表格-->
    <table id="stdInfoTableSy" border="1">
      <thead>
      <tr>
        <th width="4rem">课程代码</th>
        <th width="4rem">课程名称</th>
        <th width="4rem">教师编码</th>
        <th width="4rem">教师姓名</th>
        <th width="2rem">参评人数</th>
        <th width="2rem">综合得分</th>
        <th width="2rem">等级</th>
        <th width="8rem">查看留言</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" result in results">
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
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                results:[
                  {courseID:'K2210710',courseName:'企业合作课程',tchID:'1234567',tchName:'何平',evaNum:'65',multiplyScore:'98',rank:'A',tips:'暂无'},
                  {courseID:'K2210711',courseName:'企业合作课程',tchID:'1234567',tchName:'王建',evaNum:'73',multiplyScore:'97',rank:'A',tips:'暂无'},
                  {courseID:'K2210712',courseName:'企业合作课程',tchID:'1234567',tchName:'张小山',evaNum:'56',multiplyScore:'96',rank:'A',tips:'暂无'}
                ]
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #stdInfoTableSy{
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

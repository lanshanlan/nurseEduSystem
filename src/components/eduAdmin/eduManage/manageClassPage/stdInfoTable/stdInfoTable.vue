<template>
  <div id="stdInfoTable">
    <!--学生异动信息表格-->
    <table id="stdInfoTableSy" border="1">
      <thead>
      <tr>
        <th width="4rem">学制</th>
        <th width="4rem">专业</th>
        <th width="4rem">班级</th>
        <th width="4rem">学号</th>
        <th width="4rem">姓名</th>
        <th width="4rem">异动类型</th>
        <th width="4rem">异动原因</th>
        <th width="4rem">生效日期</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" stdInfo in stdInfos">
        <td v-text="stdInfo.yearPlan"></td>
        <td v-text="stdInfo.proName"></td>
        <td v-text="stdInfo.className"></td>
        <td v-text="stdInfo.stdID"></td>
        <td v-text="stdInfo.name"></td>
        <td v-text="stdInfo.changeType"></td>
        <td v-text="stdInfo.changeReason"></td>
        <td v-text="stdInfo.availableTime"></td>
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
                stdInfos:[
                  {yearPlan:'三年制',proName:'护理',className:'护理3班',stdID:'1530310503',name:'谢兴月',changeType:'请假',changeReason:'请假一学期',availableTime:'2016.03.01'},
                  {yearPlan:'五年制',proName:'护理',className:'护理4班',stdID:'1530310501',name:'张安',changeType:'转专业',changeReason:'希望转专业',availableTime:'2016年.03.02'},
                  {yearPlan:'三年制',proName:'护理',className:'护理1班',stdID:'1530310502',name:'吴晴',changeType:'挂科',changeReason:'挂科多门',availableTime:'2015.11.23'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.stdInfos = response.body.stdInfos;
        });
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

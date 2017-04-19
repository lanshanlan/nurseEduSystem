<template>
  <div>
    <div id="searchInfo">
      <!--年制选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>选择年制</option>
        <option v-for="yearPlan in yearPlans">{{yearPlan}}</option>
      </select>
      <span><input type="text" id="stdID" class="inputWM" placeholder="请输入学号"></span>
      <span><input type="text" id="stdName" class="inputWM" placeholder="请输入姓名"></span>
      <!--时间段(上)选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>时间段</option>
        <option v-for="timeHE in timeHEs">{{timeHE}}</option>
      </select>
      <span id="timeTo">至</span>
      <!--时间段(下)选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>时间段</option>
        <option v-for="timeHE in timeHEs">{{timeHE}}</option>
      </select>
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查询</button></span>
    </div>
    <div id="stdInfoTable" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <!--学生异动信息表格-->
      <table id="stdInfoTableSy" class="normalTable" style="table-layout: fixed;">
        <thead>
        <tr>
          <th>学制</th>
          <th>专业</th>
          <th>班级</th>
          <th>学号</th>
          <th>姓名</th>
          <th>异动类型</th>
          <th>异动原因</th>
          <th>生效日期</th>
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
  </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              yearPlans:[
                '五年制',
                '三年制'
              ],
              timeHEs:[
                '2013年下半年','2014年上半年','2014年下半年','2015年上半年','2015年下半年','2016年上半年','2016年下半年','2017年上半年'
              ],
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
    #searchInfo{
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
    #timeTo{
      margin: 0 0.3rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

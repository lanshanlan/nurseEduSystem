<template>
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
</template>

<script>
    export default {
        name: 'searchInfo',
        data () {
            return {
                yearPlans:[
                  '五年制',
                  '三年制'
                ],
                timeHEs:[
                  '2013年下半年','2014年上半年','2014年下半年','2015年上半年','2015年下半年','2016年上半年','2016年下半年','2017年上半年'
                ]
            }
        },
      methods:{
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

<template>
    <div id="searchInfo">
      <div class="dropdown">
        <!--年制选择下拉列表-->
        <input type="text" id="changeYearPlan" placeholder="选择年制">
        <div class="dropdown-content">
          <table v-for="yearPlan in yearPlans">
            <tr class="dropdownMenu" @click="yearPlanClick(yearPlan)">{{yearPlan}}</tr>
          </table>
        </div>
      </div>
      <span><input type="text" id="stdID" placeholder="请输入学号"></span>
      <span><input type="text" id="stdName" placeholder="请输入姓名"></span>
      <div class="dropdown">
        <!--时间段(上)选择下拉列表-->
        <input type="text" id="changeTimeHead" placeholder="时间段">
        <div class="dropdown-content">
          <table v-for="timeHE in timeHEs">
            <tr class="dropdownMenu" @click="changeTimeHeadClick(timeHE)">{{timeHE}}</tr>
          </table>
        </div>
      </div>
      <span id="timeTo">至</span>
      <div class="dropdown">
        <!--时间段(下)选择下拉列表-->
        <input type="text" id="changeTimeEnd" placeholder="时间段">
        <div class="dropdown-content">
          <table v-for="timeHE in timeHEs">
            <tr class="dropdownMenu" @click="changeTimeEndClick(timeHE)">{{timeHE}}</tr>
          </table>
        </div>
      </div>
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
        changeTimeHeadClick: function(timeHE){
          //监听搜索内容点击选择，同步到年制选择框
//          alert("Hello boy!");
          var changeTimeHead = document.getElementById("changeTimeHead");
          changeTimeHead.value = timeHE;
        },
        changeTimeEndClick: function(timeHE){
          //监听搜索内容点击选择，同步到时间段选择框
//          alert("Hello boy!");
          var changeTimeEnd = document.getElementById("changeTimeEnd");
          changeTimeEnd.value = timeHE;
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #searchInfo{
      height: 7rem;
      background-color: white;
    }
    input{
      margin-top: 2.5rem;
      font-size: 1rem;
      width: 11rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      padding-bottom: 0.2rem;
      height: 1.5rem;
      border: solid;
      border-color: #e6e6e6;
    }
    #changeYearPlan,#stdID,#stdName,#changeTimeHead{
      margin-left: 3rem;
    }
    #timeTo{
      font-size: 1rem;
      margin: auto 1rem;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: relative;
      z-index: 2;
      background-color: #f9f9f9;
      min-width: 2rem;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 1rem;
      opacity: 1.0;
    }
    .dropdown:hover .dropdown-content {
      display: block;
      background-color: #f9f9f9;
      opacity: 1.0;
      position: relative;
    }
    .dropdownMenu:hover{
      background-color:#2F6FAD ;
      cursor: default;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

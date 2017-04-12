<template>
    <div id="dropdownInfo">
      <select class="selectWM">
        <option disabled selected>选择年制</option>
        <option v-for="year in years">{{year}}</option>
      </select>
      <!--年制选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>选择年级</option>
        <option v-for="three_grade in three_grades" :value="three_grade">{{three_grade}}</option>
      </select>
      <!--年级选择下拉列表-->
      <select class="selectWM">
        <option disabled selected>选择班级</option>
        <option v-for="clacc in claccs">{{clacc}}</option>
      </select>
      <!--班级选择下拉列表-->
      <span><input type="text" id="stdID" class="inputWM" placeholder="请输入学号"></span>
      <span><button id="downloadForm" class="am-btn am-btn-success am-radius buttonWM">下载模板</button></span>
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
      <span><button id="leadIn" class="am-btn am-btn-success am-radius buttonWM">导入</button></span>
      <span><button id="leadOut" class="am-btn am-btn-success am-radius buttonWM">导出</button></span>
    </div>
</template>

<script>
    export default {
        name: 'dropdownInfo',
        data () {
            return {
              yearBool:true,
                years:[
                  '三年制',
                  '五年制'
                ],
              three_grades:[
                '一年级',
                '二年级',
                '三年级'
              ],
              five_grades:[
                '一年级',
                '二年级',
                '三年级',
                '四年级',
                '五年级'
              ],
              claccs:[
                '一班',
                '二班',
                '三班',
                '四班'
              ]
            }
        },
      methods:{
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #dropdownInfo{
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

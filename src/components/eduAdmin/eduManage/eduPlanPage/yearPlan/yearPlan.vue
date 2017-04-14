<template>
  <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
    <div id="fiveYearPlan">
      <!--五年制课程表格模块-->
      <div id="fiveYearsPlanDiv">
        <!--五年制课程表格模块下拉菜单-->
        <span><img id="fiveYearsArrow"  @click="fiveTableSlideToggle()" :src="fiveYearsArrow"></span>
        <span id="fiveYearsPlanP" @click="fiveTableSlideToggle()">五年制</span>
        <span><button id="fiveLeadIn">导入</button></span>
        <span><button id="fiveLeadOut">导出</button></span>
        <span><button id="fiveModule">下载模板</button></span>
      </div>
      <div>
        <!--五年制课程表格-->
        <table id="fiveYearsPlanTable" v-show="fiveYearsPlanTable" class="normalTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th width="2rem" rowspan="3">课程类别</th>
            <th width="2rem" rowspan="3">课程名称</th>
            <th width="3rem" rowspan="2" colspan="3">学时</th>
            <th width="16rem" colspan="16">执行学期</th>
            <th width="2rem" rowspan="2" colspan="2">考核学期</th>
          </tr>
          <tr>
            <td colspan="2">1</td>
            <td colspan="2">2</td>
            <td colspan="2">3</td>
            <td colspan="2">4</td>
            <td colspan="2">5</td>
            <td colspan="2">6</td>
            <td colspan="2">7</td>
            <td colspan="2">8</td>
          </tr>
          <tr>
            <td>总计</td>
            <td>理论</td>
            <td>实践</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>考察</td>
            <td>考试</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="course in courses">
            <td v-text="course.cozType"></td>
            <td v-text="course.cozName"></td>
            <td v-text="course.stdTimeAdd"></td>
            <td v-text="course.stdTimeTheory"></td>
            <td v-text="course.stdTimePractice"></td>
            <td v-text="course.term1st"></td>
            <td v-text="course.term1nd"></td>
            <td v-text="course.term2st"></td>
            <td v-text="course.term2nd"></td>
            <td v-text="course.term3st"></td>
            <td v-text="course.term3nd"></td>
            <td v-text="course.term4st"></td>
            <td v-text="course.term4nd"></td>
            <td v-text="course.term5st"></td>
            <td v-text="course.term5nd"></td>
            <td v-text="course.term6st"></td>
            <td v-text="course.term6nd"></td>
            <td v-text="course.term7st"></td>
            <td v-text="course.term7nd"></td>
            <td v-text="course.term8st"></td>
            <td v-text="course.term8nd"></td>
            <td v-text="course.inspect"></td>
            <td v-text="course.exam"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="threeYearsPlan">
      <!--三年制课程表格模块-->
      <div id="threeYearsPlanDiv">
        <!--三年制课程表格模块下拉菜单-->
        <span><img id="threeYearsArrow"  @click="threeTableSlideToggle()" :src="threeYearsArrow"></span>
        <span id="threeYearsPlanP" @click="threeTableSlideToggle()">三年制</span>
        <span><button id="threeLeadIn">导入</button></span>
        <span><button id="threeLeadOut">导出</button></span>
        <span><button id="threeForm">下载模板</button></span>
      </div>
      <div>
        <!--三年制课程表格-->
        <table id="threeYearsPlanTable" v-show="threeYearsPlanTable" class="normalTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th width="2rem" rowspan="3">课程类别</th>
            <th width="2rem" rowspan="3">课程名称</th>
            <th width="3rem" rowspan="2" colspan="3">学时</th>
            <th width="16rem" colspan="16">执行学期</th>
            <th width="2rem" rowspan="2" colspan="2">考核学期</th>
          </tr>
          <tr>
            <td colspan="2">1</td>
            <td colspan="2">2</td>
            <td colspan="2">3</td>
            <td colspan="2">4</td>
            <td colspan="2">5</td>
            <td colspan="2">6</td>
            <td colspan="2">7</td>
            <td colspan="2">8</td>
          </tr>
          <tr>
            <td>总计</td>
            <td>理论</td>
            <td>实践</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>前9周</td>
            <td>后9周</td>
            <td>考察</td>
            <td>考试</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="course in courses">
            <td v-text="course.cozType"></td>
            <td v-text="course.cozName"></td>
            <td v-text="course.stdTimeAdd"></td>
            <td v-text="course.stdTimeTheory"></td>
            <td v-text="course.stdTimePractice"></td>
            <td v-text="course.term1st"></td>
            <td v-text="course.term1nd"></td>
            <td v-text="course.term2st"></td>
            <td v-text="course.term2nd"></td>
            <td v-text="course.term3st"></td>
            <td v-text="course.term3nd"></td>
            <td v-text="course.term4st"></td>
            <td v-text="course.term4nd"></td>
            <td v-text="course.term5st"></td>
            <td v-text="course.term5nd"></td>
            <td v-text="course.term6st"></td>
            <td v-text="course.term6nd"></td>
            <td v-text="course.term7st"></td>
            <td v-text="course.term7nd"></td>
            <td v-text="course.term8st"></td>
            <td v-text="course.term8nd"></td>
            <td v-text="course.inspect"></td>
            <td v-text="course.exam"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    import arrowright from "./images/arrowright.png"
    import arrowdown from "./images/arrowdown.png"
    export default {
        name: 'yearPlan',
        data () {
            return {
                fiveYearsPlanTable:false,
                threeYearsPlanTable:false,//用于更改课程表格显示与否的变量
                fiveYearsArrow: arrowright,
                threeYearsArrow:arrowright,//用于更改箭头图标为向右还是向下的变量
                courses:[
                  {cozType:'公共基础课',cozName:'职业生涯规划',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'1',exam:''},
                  {cozType:'公共基础课',cozName:'哲学与人生',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'2',exam:''},
                  {cozType:'公共基础课',cozName:'经济政治与社会',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'3',exam:''},
                  {cozType:'公共基础课',cozName:'职业道德与法律',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1st:'36',term1nd:'36',term2st:'',term2nd:'',term3st:'',term3nd:'',term4st:'',term4nd:'',term5st:'',term5nd:'',term6st:'',term6nd:'',term7st:'',term7nd:'',term8st:'',term8nd:'',inspect:'4',exam:''},
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.courses = response.body.courses;
        });
      },
      methods:{
         fiveTableSlideToggle: function(){
           var fiveYearsPlanTable = document.getElementById("fiveYearsPlanTable");
           if (this.fiveYearsPlanTable === true){
             this.fiveYearsPlanTable = false;
             this.fiveYearsArrow = arrowright;
           }
           else {
             this.fiveYearsPlanTable = true;
             this.fiveYearsArrow = arrowdown;
           }
         },
//        用于更改五年制课程表格的显示与否、箭头图标为向右还是向下的函数
        threeTableSlideToggle: function(){
          var threeYearsPlanTable = document.getElementById("threeYearsPlanTable");
          if (this.threeYearsPlanTable === true){
            this.threeYearsPlanTable = false;
            this.threeYearsArrow = arrowright;
          }
          else {
            this.threeYearsPlanTable = true;
            this.threeYearsArrow = arrowdown;
          }
        }
//        用于更改三年制课程表格的显示与否、箭头图标为向右还是向下的函数
      }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }

    #fiveYearsPlanDiv,#threeYearsPlanDiv{
      position: relative;
      background-color: #158064;
      border:thin solid #d4d4d9;
      height: 2rem;
      width: 100%;
    }
    #fiveYearsPlanP,#threeYearsPlanP{
      position: absolute;
      background-color: #158064;
      /*background-color: red;*/
      height: 1.7rem;
      width: 10rem;
      padding-top: 0.3rem;
      text-align: center;
      color:#FFF;
    }
    #fiveYearsPlanP:hover,#threeYearsPlanP:hover{
      background-color: #00a539;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
    img:hover{
      background-color: white;
    }
    button{
      float: right;
      margin-top: 0.3rem;
      margin-bottom: auto;
      margin-right: 5rem;
      background-color: #158064;
      font-size: 0.8rem;
      color:#FFF;
      text-align: center;
      border-radius: 0.5rem;
      padding-bottom: 0.1rem;
      height: 1.4rem;
      min-width: 5rem;
      border-color: white;
      border-style: solid;
      border-width: 0.1rem;
    /*更改button的边框属性*/
    }
    button:hover{
      background-color: #00a539;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

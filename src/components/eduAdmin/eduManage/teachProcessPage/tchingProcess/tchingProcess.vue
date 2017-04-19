<template>
    <div id="tchingProcess" style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <div v-for="(yearPlan,index) in yearPlans">
        <div :id="yearPlan.English + 'YearsPlanDiv'" class="yearsPlanDiv">
          <!--年制模块下拉菜单-->
          <span><img :id="yearPlan.English + 'Arrow'" class="yearsPlanImg" @click="yearsPlanSlideToggle(yearPlan.English)" :src="arrowright"></span>
          <span :id="yearPlan.English + 'P'" class="yearsPlanP" @click="yearsPlanSlideToggle(yearPlan.English)">{{yearPlan.China}}</span>
        </div>

        <div :id="yearPlan.English + 'ProcessMenu'" style="display: none">
          <div v-for="(grade,index) in grades">
            <div :id="yearPlan.English + grade + 'GradeProcessDiv'" class="gradeProcessDiv">
              <!--年级教学进程下拉菜单-->
              <span><img :id="yearPlan.English + grade + 'Arrow'" class="gradeProcessImg" @click="TableSlideToggle(yearPlan.English,grade)" :src="arrowright"></span>
              <span :id="yearPlan.English + grade + 'P'" class="gradeProcessP" @click="TableSlideToggle(yearPlan.English,grade)">{{grade}}级</span>
            </div>

            <div :id="yearPlan.English + grade + 'Table'" style="display: none">
              <table class="normalTable" style="table-layout: fixed">
                <thead>
                <tr>
                  <th width="12%" rowspan="2">课程类别</th>
                  <th width="12%" rowspan="2">课程名称</th>
                  <th width="18%" colspan="3">学时</th>
                  <th width="48%" colspan="8">执行学期</th>
                  <th width="10%" rowspan="2">课程状态</th>
                </tr>
                <tr>
                  <td>总计</td>
                  <td>理论</td>
                  <td>实践</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="course in courses">
                  <td v-text="course.cozType"></td>
                  <td v-text="course.cozName"></td>
                  <td v-text="course.stdTimeAdd"></td>
                  <td v-text="course.stdTimeTheory"></td>
                  <td v-text="course.stdTimePractice"></td>
                  <td v-text="course.term1"></td>
                  <td v-text="course.term2"></td>
                  <td v-text="course.term3"></td>
                  <td v-text="course.term4"></td>
                  <td v-text="course.term5"></td>
                  <td v-text="course.term6"></td>
                  <td v-text="course.term7"></td>
                  <td v-text="course.term8"></td>
                  <td v-text="course.cozStatus"></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import arrowright from "./images/arrowright.png"
  import arrowdown from "./images/arrowdown.png"
    export default {
        name: '',
        data () {
            return {
              arrowright:arrowright,
              arrowdown:arrowdown,
              yearPlans:[
                {China:'五年制',English:'five'},
                {China:'三年制',English:'three'}
              ],
              grades:[
                '2016','2015','2014','2013'
              ],
              courses:[
                {cozType:'公共基础课',cozName:'职业生涯规划',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'36',term2:'',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',cozStatus:'未完成'},
                {cozType:'公共基础课',cozName:'哲学与人生',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'36',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',cozStatus:'未完成'},
                {cozType:'公共基础课',cozName:'经济政治与社会',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'',term3:'36',term4:'',term5:'',term6:'',term7:'',term8:'',cozStatus:'未完成'}
              ]
            }
        },
      beforeMount:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.courses = response.body.courses;
        });
      },
      methods:{
        yearsPlanSlideToggle:function(yearPlanEnglish){
          var processMenu = document.getElementById(yearPlanEnglish + "ProcessMenu");
          var arrow = document.getElementById(yearPlanEnglish + "Arrow");
          if (arrow.src === this.arrowright){
            processMenu.style.display = "inline";
            arrow.src = this.arrowdown;
          }
          else {
            processMenu.style.display = "none";
            arrow.src = this.arrowright;
          }
        },
        TableSlideToggle:function(yearPlanEnglish,grade){
          var table = document.getElementById(yearPlanEnglish + grade + "Table");
          var arrow = document.getElementById(yearPlanEnglish + grade + "Arrow");
          if (arrow.src === this.arrowright){
            table.style.display = "inline";
            arrow.src = this.arrowdown;
          }
          else {
            table.style.display = "none";
            arrow.src = this.arrowright;
          }
        }
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    .yearsPlanDiv{
      position: relative;
      background-color: #158064;
      border-top:3px solid white;
      height: 2.5rem;
      width: 100%;
    }
    .gradeProcessDiv{
      position: relative;
      background-color: #158064;
      border-top:1px solid #ececec;
      height: 2rem;
      width: 100%;
    }
    .yearsPlanP{
      position: absolute;
      background-color: #158064;
      /*background-color: red;*/
      height: 2rem;
      width: 10rem;
      padding-top: 0.5rem;
      text-align: center;
      font-size: 1rem;
      color:#FFF;
    }
    .gradeProcessP{
      position: absolute;
      background-color: #158064;
      /*background-color: red;*/
      height: 1.7rem;
      width: 10rem;
      padding-top: 0.3rem;
      text-align: center;
      font-size: 0.9rem;
      color:#FFF;
    }
    .yearsPlanP:hover,img:hover{
      background-color: #00a539;
    }
    .yearsPlanImg{
      width: 2.5rem;
      height: 2.5rem;
    }
    .gradeProcessImg{
      width: 2rem;
      height: 2rem;
      margin-left: 0.7rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

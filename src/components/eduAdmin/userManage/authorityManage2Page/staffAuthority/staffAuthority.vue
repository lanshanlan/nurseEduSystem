<template>
    <div id="staffAuthority">
      <p class="topP" id="topStaff">督导</p>
      <ul>
        <li class="checkboxAuthority" v-for="tchAuthority in tchAuthoritys">
          <input type="checkbox" name="staffAuthorityForm" value="tchAuthority.value" v-model="tchAuthority.checked">{{tchAuthority.output}}
        </li>
      </ul>
      <div>
        <span><button id="saveInf">保存</button></span>
        <span><button id="cancel">取消</button></span>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'staffAuthority',
        data () {
            return {
                tchAuthoritys:[
                  {value:'tch1',checked:true,output:'查看个人成绩'},
                  {value:'tch2',checked:true,output:'查看全班成绩'},
                  {value:'tch3',checked:true,output:'管理成绩（导入、更新、修改、提交成绩）'},
                  {value:'tch4',checked:true,output:'管理教师个人信息'},
                  {value:'tch5',checked:true,output:'班主任信息管理'},
                  {value:'tch6',checked:true,output:'班级信息管理'},
                  {value:'tch7',checked:true,output:'管理学生在校信息'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.tchAuthoritys = response.body.tchAuthoritys;
        });
      }
    }
</script>

<style scoped>
  html {
    font-size: 100%;
  }
  #staffAuthority{
    width: 45rem;
    min-height: 30rem;
    border: 2px solid #d4d4d9;
  }
  .topP{
    font-size: 1.5rem;
    margin-top: 0;
    padding: 1rem 3rem 1rem;
    border-bottom: 2px solid #158064;
  }
  ul li{
    list-style: none;
    float: left;
    min-height: 2rem;
    font-size: 0.6rem;
    width: 12rem;
    margin-right: 2rem;
  }
  button{
    margin-top: 5rem;
    margin-right: 3.5rem;
    float: right;
    background-color: #158064;
    font-size: 0.8rem;
    color:#FFF;
    font-weight: bold;
    text-align: center;
    border-radius: 0.5rem;
    padding-bottom: 0.2rem;
    height: 2rem;
    min-width: 5rem;
    border: none;
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

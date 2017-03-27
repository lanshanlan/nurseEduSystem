<template>
  <div id="tchTable">
    <!--教师信息表格-->
    <table id="eduAdminTchTableSy" border="1">
      <thead>
      <tr>
        <th width="4rem">教师姓名</th>
        <th width="4rem">性别</th>
        <th width="4rem">职称</th>
        <th width="8rem">编号</th>
        <th width="6rem">链接</th>
        <th width="4rem">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="tchInfo in tchInfos">
        <td v-text="tchInfo.name"></td>
        <td v-text="tchInfo.sex"></td>
        <td v-text="tchInfo.proRank"></td>
        <td v-text="tchInfo.tchID"></td>
        <td v-text="tchInfo.interlink"></td>
        <td><img id="saveInfo" src="./images/modify.png"><img id="deleteInfo" src="./images/delete.png"></td>
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
                tchInfos:[
                  {name:'何平',sex:'男',proRank:'副教授',tchID:'1234567',interlink:'192.168.3.4'},
                  {name:'王建',sex:'男',proRank:'副教授',tchID:'1234567',interlink:'192.168.3.4'},
                  {name:'张小山',sex:'男',proRank:'副教授',tchID:'1234567',interlink:'192.168.3.4'}
                ]
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 62.5%;
    }
    #eduAdminTchTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

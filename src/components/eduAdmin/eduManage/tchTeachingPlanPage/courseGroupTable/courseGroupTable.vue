<template>
  <div id="courseGroupTable">
    <!--课程培养方案表格-->
    <table id="courseGroupTableSy" border="1">
      <thead>
      <tr>
        <th width="4rem">教研组名称</th>
        <th width="4rem">教师姓名</th>
        <th width="4rem">组长</th>
        <th width="4rem">导出</th>
        <th width="4rem">审核</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" courseGroupInfo in  courseGroupInfos">
        <td v-text="courseGroupInfo.groupName"></td>
        <td v-text="courseGroupInfo.tchName"></td>
        <td v-text="courseGroupInfo.headman"></td>
        <td><button id="download">下载</button></td>
        <!--下载培养方案的按钮-->
        <td>
          <img id="adopt" src="./images/save.png">
          <img id="notAdopt" src="./images/restore.png">
        </td>
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
                courseGroupInfos:[
                  {groupName:'临床医学',groupID:'2017001',tchName:'李伟',tchID:'111', headman:'何平'},
                  {groupName:'临床护理',groupID:'2017002',tchName:'张亮',tchID:'222',headman:'张扬'},
                  {groupName:'护用药理',groupID:'2017003',tchName:'邓常',tchID:'333',headman:'李季'}
                ]
            }
        },
      created:function() {
        this.$http.get('../readjson.php').then(function (response) {
          console.log(response);
          this.courseGroupInfos = response.body.courseGroupInfos;
        });
      }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }
    #courseGroupTableSy{
      position: relative;
      margin: 2rem auto;
      width: 90%;
      border: 0 solid #d4d4d9;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
    }
    button{
      margin: 0.2rem auto;
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
    img{
      width: 2rem;
      height: 2rem;
      border: thin solid white;
    }
    img:hover{
      cursor: pointer;
      border: thin solid grey;
    }
    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

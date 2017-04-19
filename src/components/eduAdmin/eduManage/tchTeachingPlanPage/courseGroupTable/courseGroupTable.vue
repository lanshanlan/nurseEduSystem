<template>
  <div>
    <div id="searchInfo">
      <span><input type="text" id="groupID" class="inputWM" placeholder="请输入教研组编号"></span>
      <span><input type="text" id="tchID" class="inputWM" placeholder="请输入教师编号"></span>
      <span><button id="searchFor" class="am-btn am-btn-success am-radius buttonWM">查找</button></span>
    </div>
    <div style="padding: 0.6rem 5rem;background-color: #f3f3f3">
      <div id="courseGroupTable" style="background-color: white">
        <!--课程培养方案表格-->
        <table id="courseGroupTableSy" class="operationTable" style="table-layout: fixed;">
          <thead>
          <tr>
            <th>教研组名称</th>
            <th>教师姓名</th>
            <th>组长</th>
            <th>导出</th>
            <th>审核</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for=" courseGroupInfo in  courseGroupInfos">
            <td v-text="courseGroupInfo.groupName"></td>
            <td v-text="courseGroupInfo.tchName"></td>
            <td v-text="courseGroupInfo.headman"></td>
            <td><button id="download" class="am-btn am-btn-success am-radius">下载</button></td>
            <!--下载培养方案的按钮-->
            <td>
              <img id="adopt" src="./images/save.png">
              <img id="notAdopt" src="./images/restore.png">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
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

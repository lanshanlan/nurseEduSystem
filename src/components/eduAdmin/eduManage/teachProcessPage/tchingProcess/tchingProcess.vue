<template>
    <div id="tchingProcess">
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
              grades:{
                '2016级','2015级','2014级','2013级'
              },
              courses:[
                {cozName:'职业生涯规划',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'36',term2:'',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'已安排',exam:''},
                {cozName:'哲学与人生',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'36',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'已安排',exam:''},
                {cozName:'经济政治与社会',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'',term3:'36',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'已安排',exam:''},
                {cozName:'职业道德与法律',stdTimeAdd:'36',stdTimeTheory:'32',stdTimePractice:'4',term1:'',term2:'',term3:'',term4:'36',term5:'',term6:'',term7:'',term8:'',inspect:'已安排',exam:''},
                {cozName:'语文',stdTimeAdd:'180',stdTimeTheory:'156',stdTimePractice:'24',term1:'108',term2:'72',term3:'',term4:'',term5:'',term6:'',term7:'',term8:'',inspect:'已安排',exam:'1'}
              ]
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 100%;
    }

    @media screen and (max-width: 1023px) {
        html {
            font-size: 56%;
        }
    }
</style>

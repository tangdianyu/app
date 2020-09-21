<template>
  <div class="inner">
    <div class="main">
      <div class="head">
        <p class="wisdom">新闻动态</p>
        <div class="r_wisdom">
          <img :src="address" alt="">
          <router-link :to="{name:'index'}">首页</router-link>
          >
          <router-link :to="{name:'index'}">新闻动态</router-link>
        </div>
      </div>
      <div class="content">
        <div class="con_list" v-for="(item,index) in data" :key="index">
          <div class="list_text">{{item.text}}</div>
          <div class="list_time">{{item.time}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "announcement",
    data(){
      return{
        address: 'static/images/address.png',
        data:[
          {
            text:"2020年7月中心员工考勤(已更新至第五周)",
            time:"2020-07-28"
          },
          {
            text:"2020年6月中心员工考勤(已更新至第4周)",
            time:"2020-06-28"
          }
        ]
      }
    },

    created() {
      // this.newsData = res.newsPath;

    },
    methods:{

    },


  }
</script>
<style scoped lang="less">
  .inner {
    width: 100%;
    background-color: #f7f7f7;
    .main {
      width: 1336px;
      margin: 0 auto;
      .head {
        width: 100%;
        height: 76px;
        color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*border:1px solid #fff;*/

        .wisdom {
          font-size: 25px;
          border-left: 4px solid #4e89e3;
          padding-left: 20px;
          box-sizing: border-box;

        }

        .r_wisdom {
          box-sizing: border-box;
          padding-top: 20px;

          img {
            width: 20px;
          }

          a {
            font-size: 16px;

            color: #7d7d7d;
          }
        }
      }
      .content{
        box-sizing: border-box;
        padding:20px 15%;
        height: 509px;
        background-color: #fff;
        .con_list{
          width: 100%;
          display: flex;
          font-size: 16px;
          padding-bottom:20px;
          color:#888;
          .list_text{
            flex:3;
            position: relative;
            &:before {
              content: "";
              display: block;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              position: absolute;
              top: 44%;
              left: -2%;
              background-color: #5090ea;
            }
          }
          .list_time{
            flex:1;
          }
        }
      }
    }


  }
</style>

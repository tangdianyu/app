<template>
  <div class="inner">
    <div class="main">
      <div class="head">
        <p class="wisdom">通知公告</p>
        <div class="r_wisdom">
          <img :src="address" alt="">
          <router-link :to="{name:'index'}">首页</router-link>
          >
          <router-link :to="{name:''}">通知公告</router-link>
        </div>
      </div>
      <div class="content">
        <div class="l_cont">
          <div class="tips"></div>
          <div class="l_box">
            <a href="#">通知公告</a>
            <a href="#">行政公告</a>
            <a href="#">人事公告</a>
            <a href="#">财务公告</a>
            <a href="#">宣传公告</a>
          </div>
        </div>
        <div class="r_cont">
            <div class="r_cont_wrap">
              <div class="r_cont_box">
                <div class="r_cont_sort">部门</div>
                <div class="r_cont_title">标题</div>
                <div class="r_cont_time">时间</div>
              </div>

              <div class="r_cont_box r_cont_boxs" v-for="(item,index) in pageData" :key="index">
                <div class="r_cont_sort r_cont_sorts">{{item.sort}}</div>
                <div class="r_cont_title r_cont_titles">{{item.text}}</div>
                <div class="r_cont_time">{{item.time}}</div>
              </div>

            </div>
          <div class="page">
            <div id="test1"></div>
          </div>
        </div>
      </div>




    </div>

  </div>
</template>

<script>
  import res from '../pageData/index'

  export default {
    name: "announcement",
    data(){
      return{
        address: 'static/images/address.png',
        carsol: [],
        pageData:null
      }
    },

    created() {


    },
    methods:{

    },
    mounted() {
      let that = this;
      layui.use('laypage', function(){
        var laypage = layui.laypage;

        //执行一个laypage实例
        laypage.render({
          elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
          ,count: res.announcement.length
          ,limit:12,
          theme:"#4e89e3"
          ,jump: function(obj){
            const pageDate = res.announcement.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
            that.pageData = pageDate;
            }

        });

      });
    }
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
        width: 100%;
        display:flex;
        justify-content: space-between;
        .l_cont{
              .tips {
              width: 241px;
              height: 4px;
              background-image: linear-gradient(-90deg,#94b8ee 0%,#dfe2e6 0%, #4e89e3 100%,);
            }
          .l_box{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
                width: 241px;
                height: 344px;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px 0px rgba(0, 85, 129, 0.06);
            a{
              &:nth-child(2){
                color:#588fe1;
              }
            }

          }
        }

        .r_cont{
          width: 1032px;
          height: 903px;
          background-color: #ffffff;
          box-shadow: 0px 0px 10px 0px rgba(0, 85, 129, 0.06);
          .r_cont_wrap{
            height: 805px;
            .r_cont_box{
              display:flex;
              padding:20px 0;
              width: 100%;
              .r_cont_sort{
                text-align: center;
                flex:2;

              }
              .r_cont_sorts{
                position: relative;
                &:before {
                  content: "";
                  display: block;
                  width: 5px;
                  height: 5px;

                  border-radius: 50%;
                  position: absolute;
                  top: 48%;
                  left: 30%;
                  background-color: #5090ea;
                }
              }
              .r_cont_title{
                text-align: center;
                flex:4;
              }
              .r_cont_time{
                text-align: center;
                flex:2;
              }
              .r_cont_titles{
                text-align: left;
              }
            }
          }

          .r_cont_boxs{
             border-bottom:solid 1px #e5e5e5;
          }
          .page{
            height:calc(903px - 805px);
            display:flex;
            justify-content: center;
            align-items: center;
          }

        }
      }

    }


  }
</style>

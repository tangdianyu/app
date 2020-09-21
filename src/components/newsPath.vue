<template>
  <div class="inner">
    <div class="main">
      <div class="head">
        <p class="wisdom">新闻动态</p>
        <div class="r_wisdom">
          <img :src="address" alt="">
          <router-link :to="{name:'index'}">首页</router-link>
          >
          <router-link :to="{name:''}">新闻动态</router-link>
        </div>
      </div>

      <div class="content">
        <div class="con_head">
          <div class="con_head_l">
            <img :src="news" alt="">

          </div>
          <div class="con_head_r">
            <div class="img_item" v-for="(item,index) in newsArr" :key="index" :class="index == 0?'active':''">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="news_inner">
          <div class="news_inner_head">
            <div class="title">
              最新
              <p></p>
            </div>
            <div class="title">
              最热

            </div>
            <div class="title">
              最热

            </div>
          </div>
          <div class="news_inner_item" v-for="(item,index) in newsData" :key="index">
            <div class="item_title">{{item.name}}</div>
            <div class="item_text">{{item.text}}
            </div>
            <div class="item_author">
              <div class="author_l">
                <span>{{item.author.name}}</span>
                <span>{{item.author.time}}</span>
              </div>
              <div class="author_r">
                <div class="a_list"><img :src="read" class="imgwidth" alt="">已读 <span>{{item.author.read}}</span></div>
                <div class="a_list"><img :src="like" alt="" class="imgwidth">点赞 <span>{{item.author.like}}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="page">
          <div id="test1"></div>
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
        news: 'static/images/news.png',
        read: 'static/images/read.png',
        like: 'static/images/like.png',
        newsArr: ['static/news/new1.jpg','static/news/news.jpg','static/news/new2.jpg','static/news/news3.jpg','static/news/news4.jpg','static/news/news5.jpg',],
        newsData:[]
      }
    },

    created() {
      // this.newsData = res.newsPath;

    },
    methods:{

    },
    mounted() {
      let that = this;
      layui.use('laypage', function(){
        var laypage = layui.laypage;

        laypage.render({
          elem: 'test1'
          ,count: res.newsPath.length
          ,limit:3,
          theme:"#4e89e3"
          ,jump: function(obj){
            that.newsData = res.newsPath.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);

          }

        });

      });
    }

  }
</script>
<style scoped lang="less">
  .con_head_l{
    position: relative;
    &:before{
      content:"陕西省党政代表团考察国家超级计算无锡中心";
      display:block;
      position: absolute;
      background-image: linear-gradient(270deg, #4d96f5 0%, #7355b0 100%);
      color:#fff;
      bottom:0;
      left:0;
      height: 50px;
      line-height: 50px;
      text-indent: 5px;
      width: 80%;
      font-size: 18px;
      border-radius: 0 20px 0 0;
    }
  }
  .con_head_r .img_item.active{
    position: relative;
    &:before{
      content:"超算中心人才济济";
      display:block;
      position: absolute;
      background-image: linear-gradient(270deg, #4d96f5 0%, #7355b0 100%);
      color:#fff;
      bottom:0;
      left:0;
      height: 30px;
      line-height: 30px;
      text-indent: 5px;
      width: 100%;
    }
  }
  .page{
    height:100px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
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
      .con_head{
        display:flex;
        justify-content: space-between;
        height: 305px;
        .con_head_l{
          width: 500px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .con_head_r{
          width: 773px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .img_item{
            width: 240px;
            height: 140px;
            margin-bottom:24px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .news_inner{
        width: 100%;

        .news_inner_head{
          display:flex;
          .title{
            position: relative;
            width: 87px;
            height: 21px;
            font-size: 21px;
            font-weight: bold;
            color: #5697f1;
            padding-left:15px;
          margin:25px 0;
            p{
              position: absolute;
              top:7px;
              left:1px;
              width: 65px;
              height: 23px;
              background-image: linear-gradient(90deg,
              #7ed9ff 0%,
              #ffffff 100%);
              opacity: 0.5;

            }

          }
        }
        .news_inner_item{
          width: 100%;
          padding:15px 15px;
          background-color: #fff;
          margin-bottom:20px;
          box-sizing: border-box;
          .item_title{
           padding-bottom:15px;
            font-size: 22px;
            color:#538ce4;
          }
          .item_text{
            color:#888;
            line-height: 30px;
            text-align: justify;
            font-size: 16px;
          }
          .item_author{
            display:flex;
            justify-content: space-between;
            font-size: 14px;
            color:#888;
            padding:15px 0;
            .author_l{
              span{
                margin-right:20px;
              }
            }
            .author_r{
              display:flex;
              .a_list{
                margin-right:20px;
                display:flex;
                width: 90px;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                .imgwidth{
                  width: 20px;
                  vertical-align: middle;

                }
              }
            }
          }
        }
      }
    }


  }
</style>

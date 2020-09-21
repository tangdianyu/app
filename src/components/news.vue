<template>
  <div class="main_inner" >
    <div class="text_inner">
      <div class="head">


        <h3> <div class="title">
          党员风采
          <p></p>
        </div><i>more>></i></h3>
      </div>
      <div class="news">
        <div class="news_item" v-for="(v,i) in news.inner">
          <p>{{v.text}}</p>
          <span>{{v.time}}</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import res from '../pageData/index'
    export default {
        name: "news",
      data(){
          return{
            news:''
          }
      },
      created() {
        this.news = res.news;

      }
    }
</script>

<style scoped lang="less">
  .title{
    position: relative;
    width: 87px;
    height: 21px;
    font-size: 21px;
    font-weight: bold;
    color: #9f0000;
    padding-left:15px;

    p{
      position: absolute;
      top:7px;
      left:1px;
      width: 65px;
      height: 23px;
      background-image: linear-gradient(90deg,
      #ee5074 10%,
      #fdd5cd 100%);
      opacity: 0.5;

    }

  }
  .main_inner {
    width: 640px;


    .text_inner {
      height: 367px;
      background-color: #fff;
      padding-top: 30px;
      padding-left: 25px;
      box-sizing: border-box;

      .head {
        h4 {
          width: 444px;

          font-size: 27px;
          color: #5090ea;
        }

        h3 {
          margin-top:10px;
          height: 21px;
          display: flex;
          justify-content: space-between;

          p {
            width: 96px;
            background-color: #5090ea;
            font-size: 23px;
            font-weight: bold;
            color: #ffffff;
          }

          i {
            margin-top:10px;
            font-style: normal;
            font-size: 14px;
            color: #a0a0a0;
            padding-right: 18px;
          }

        }
      }

      .news {
        width: 100%;

        .news_item {
          height: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e5e5;

          padding: 0 10px 0 20px;
          box-sizing: border-box;
          position: relative;

          &:before {
            content: "";
            display: block;
            width: 5px;
            height: 5px;

            border-radius: 50%;
            position: absolute;
            top: 48%;
            left: 1%;
            background-color: #5090ea;
          }

          &:last-child {
            border-bottom: 0 none;
          }

          &:nth-child(1) {
            border-top: 1px solid #e5e5e5;
            margin-top: 20px;
          }

          p {
            font-size: 17px;
            font-weight: bold;
            color: #333333;
          }

          span {
            font-size: 16px;
            color: #a0a0a0;
          }
        }
      }
    }
  }
</style>

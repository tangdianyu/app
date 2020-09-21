<template>
  <div class="inner">
    <div class="main">
      <div class="head">
        <p class="wisdom">智慧党建</p>
        <div class="r_wisdom">
          <img :src="address" alt="">
          <router-link :to="{name:'index'}">首页</router-link>
          >
          <router-link :to="{name:''}">智慧党建</router-link>
        </div>
      </div>
      <div class="top_bg"></div>
      <section class="main_content">
        <div class="left_content">
          <v-carsol :height="height"></v-carsol>
          <v-news></v-news>
        </div>
        <div class="imgShow">
          <div class="title">
            党员风采
            <p></p>
          </div>
          <div class="imgwrap">
            <div class="img-item" v-for="(item,index) in wisdom" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
        </div>


      </section>
    </div>

  </div>
</template>

<script>
  import vCarsol from '../components/carsol'
  import vNews from '../components/news'

  export default {
    name: "wisdom",
    data() {
      return {
        address: 'static/images/adress.png',
        height:'291px ',
        wisdom:[
          "static/wisdom/pic1.jpg","static/wisdom/pic2.jpg",
          "static/wisdom/pic3.jpg","static/wisdom/pic4.jpg",
          "static/wisdom/pic5.jpg","static/wisdom/pic6.jpg",
          "static/wisdom/pic7.jpg",
          "static/wisdom/pic9.jpg","static/wisdom/pic10.jpg"
        ]
      }
    },

    components: {
      vCarsol,
      vNews
    }
  }
</script>

<style scoped lang="less">
  .inner {
    width: 100%;
    background: #f7f7f7 url('../assets/WISDOM_BG.png') no-repeat top / 100%;
    .main {
      width: 1336px;
      margin: 0 auto;

      .top_bg {
        width: 100%;
        height: 110px;
        background: url('../assets/banner.png') no-repeat top / 100%;
      }

      .head {
        width: 100%;
        height: 76px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*border:1px solid #fff;*/

        .wisdom {
          font-size: 25px;
          border-left: 4px solid #fff;
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
            color: #fff;
          }
        }
      }
    }

    .main_content {
      background-color: #fff;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding:20px 20px 0;
      box-sizing: border-box;

      .imgShow{
        width: 606px;
        .title{
          position: relative;
            width: 87px;
            height: 21px;
            font-size: 21px;
            font-weight: bold;
            color: #9f0000;
          padding-left:15px;
          margin-bottom:21px;
          margin-top:31px;
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
        .imgwrap{
          width: 100%;
          display:flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .img-item{
            width: 189px;
            height: 132px;
            margin-bottom:30px;
            &:nth-child(1){
              position: relative;


                &:before{
                  content:"超算中心团队活动";
                  display:block;
                  position: absolute;
                  background-image: linear-gradient(270deg,
                  rgba(255, 171, 150, 1) 0%,
                  #ee4d73 100%);
                  opacity: 0.95;
                  color:#fff;
                  bottom:0;
                  left:0;
                  height: 30px;
                  line-height: 30px;
                  text-indent: 5px;
                  width: 100%;

              }
            }
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
<style>
  .main_inner .el-carousel__container{
    height: 291px;
  }
</style>

<template>
  <div class="app_inner">

    <main>
      <div class="main_inner">
        <v-carsol :height="height"></v-carsol>
      </div>
      <div class="main_inner" v-for="(item,index) in notice" :key="index">
        <div class="text_inner">
          <div class="head">
            <h4>{{item.title}}</h4>
            <h3><p>{{item.sort}}</p> <i>more>></i></h3>
          </div>
          <div class="news">
            <div class="news_item" v-for="(v,i) in item.inner">
              <p>{{v.text}}</p>
              <span>{{v.time}}</span>
            </div>

          </div>
        </div>

      </div>
      <div class="main_inner main_inners" v-for="(vInner,ix) in notices">
        <div class="text_inner text_inners" >
          <div class="head">
            <h4>{{vInner.title}}</h4>
            <h3><p>{{vInner.sort}}</p> <i>more>></i></h3>
          </div>
          <div class="news">
            <div class="news_item news_items" v-for="(vText,iv) in vInner.inner" :class="ix==0&&iv==1?'blue':'' " >
              <div class="items_t">
                <p :class="ix==0&&iv==1?'blue':'' ">{{vText.text}}</p>
                <span>{{vText.time}}</span>
              </div>
              <div class="items_b">
                {{vText.desc}}
              </div>
            </div>


          </div>
        </div>

      </div>
      <div class="business">
        <div class="business_item">
          <p>技术研发中心</p>
          <span>more</span>
        </div>
        <div class="business_item">
          <p>人工智能研发中心</p>
          <span>more</span>
        </div>
        <div class="business_item">
          <p>系统运维中心</p>
          <span>more</span>
        </div>
        <div class="business_item">
          <p>综合管理办公室</p>
          <span>more</span>
        </div>
      </div>

    </main>
    <div class="honor">
      <div class="h_head">
        Honor Wall
      </div>
      <div class="h_head">
        荣誉墙
      </div>
      <div class="honor_carsol">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(items,im) in honor" :key="im">
              <div class="imgInners">
                <img :src="items.url" alt="">
                <p>{{items.text}}</p>
              </div>
            </div>

          </div>


        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

      </div>
    </div>

  </div>
</template>

<script>

  // import $ from 'jquery'
  import res from '../pageData/index'
  import '../../static/util/swiper-3.4.2.min.css'
  import '../../static/util/swiper-3.4.2.min'
  import vCarsol from '../components/carsol'
  export default {
    name: 'index',
    data() {
      return {
        carsol: [],
        notice: '',
        notices: '',
        height:'367px',
        honor: [
          // [
          {url: "static/honor/2016p1.jpg", "text": "2016世界领先科技成果奖"},
          {url: "static/honor/2016p2.jpg", "text": "2016GB奖证书"},
          {url: "static/honor/2016p4.jpg", "text": "2016gb领奖图全体正面"},
          {url: "static/honor/2016p3.png", "text": "TOP500证书2016.6.20"},
          {url: "static/honor/2017p5.jpg", "text": "2017互联网领先科技成果"},
          {url: "static/honor/2017p6.jpg", "text": "2017GB领奖"},
          {url: "static/honor/2017p8.jpg", "text": "2017领先科技成果"},
          // ],[
          {url: "static/honor/2018p9.jpg", "text": "2016GB奖证书"},
          {url: "static/honor/2018p10.jpg", "text": "2018腾飞奖"},
          {url: "static/honor/max.png", "text": "吉尼斯证书2016.06.20"},
          {url: "static/honor/t1.jpg", "text": "top500证书2017.6.19"},
          {url: "static/honor/t2.jpg", "text": "top500证书2016.11.14"},
          {url: "static/honor/t3.jpg", "text": "top500证书2017.11"},
          // ]


        ]
      }
    },
    created() {
      this.ajaxHandle();

      this.notice = res.notice;
      this.notices = res.notices;
    },
    methods: {
      ajaxHandle() {
        let url = "http://47.101.161.17:1337";
        let imgObj = {};
        this.$jq.get("http://47.101.161.17:1337/Carousels", (res) => {
          console.log(res)
          res.forEach(v => {
            imgObj.url = url + v.img.url;
            imgObj.title = v.title;
            imgObj.date = v.date;
            this.carsol.push(imgObj)
            imgObj = {};
          })
          this.carsol = JSON.parse(JSON.stringify(this.carsol));


        })

      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 7,
        spaceBetween: 20,
        loop: true,
        autoplay: 2000,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',


      })
    },
    components:{
      vCarsol
    }

  }
</script>


<style scoped lang="less">
  .blue{
    color:#5797f0!important;
  }
  .app_inner {

    background: #f7f7f7 url('../assets/bg.png') no-repeat bottom / 100%;
  }

  main {
    width: 1296px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 60px;

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
            padding-top: 13px;
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
              left: 0%;
              background-color: #5090ea;
            }

            &:last-child {
              border-bottom: 0 none;
            }

            &:nth-child(1) {
              margin-top: 30px;
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

          .news_items {
            height: 84px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px 10px 20px;

            &:before {
              top: 30%;
            }

            .items_t {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;

            }

            .items_b {
              font-size: 13px;
            }
          }
        }
      }

      .text_inners {
        margin-top: 33px;
        height: 470px;
      }
    }

    .business {
      display: flex;
      margin-top: 88px;
      width: 100%;

      .business_item:nth-child(1) {
        background: url('../assets/research.png') no-repeat center / cover;
      }

      .business_item:nth-child(2) {
        background: url('../assets/intelligent.png') no-repeat center / cover;
      }

      .business_item:nth-child(3) {
        background: url('../assets/defend.png') no-repeat center / cover;
      }

      .business_item:nth-child(4) {
        background: url('../assets/complex.png') no-repeat center / cover;
      }

      .business_item {
        width: 271px;
        height: 221px;
        margin-right: 19px;
        color: #fff;
        box-sizing: border-box;
        padding-left: 31px;

        p {
          font-size: 24px;
          padding-top: 86px;

          padding-bottom: 39px;
        }

        span {
          display: block;
          width: 101px;
          font-size: 15px;
          padding: 10px 0;
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
        }
      }
    }

  }

  .honor {
    width: 1331px;
    margin: 153px auto 0;
    padding-bottom:43px;

    .h_head {
      color: #1c206f;
      text-align: center;

      &:nth-child(1) {
        font-size: 29px;
        padding-bottom: 16px;
      }

      &:nth-child(2) {
        font-size: 23px;
      }
    }

    .honor_carsol {
      position: relative;
      margin-top: 25px;
      width: 100%;

      .imgInners {
        width: 173px;
        height: 120px;
        display: inline-block;
        box-sizing: border-box;
        padding-right: 16px;

        &:last-child {
          margin-right: 0px;
        }

        img {
          width: 100%;
          height: 100%;
        }

        p {
          font-size: 13px;
          color: #fff;
        }
      }
    }

  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    right:-34px;
    top:45%;
    width: 32px;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    left:-48px;
    top:45%;
    width: 32px;
  }

  .swiper-button-prev{background:url("../assets/prev.png") no-repeat center / 30px}
  .swiper-button-next{background:url("../assets/next.png") no-repeat center / 30px}

</style>
<style lang="less">


  .honor .honor_carsol {
    .el-carousel .el-carousel--horizontal {
      width: 100%;
    }

    .el-carousel--horizontal {

    }

    .el-carousel.el-carousel--horizontal .el-carousel__container {
      width: 100%;


    }
  }
</style>

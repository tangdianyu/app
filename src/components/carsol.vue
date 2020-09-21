<template>
  <div class="main_inner">

    <div class="block">
      <el-carousel :height="height" >
        <el-carousel-item v-for="(item,index) in carsol" :key="index">
          <div class="imgInner">
            <img :src="item.url" alt="" class="i-img">
            <div class="title">
              <p>{{item.date}}</p>
              <div class="text">{{item.title}}</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
    export default {
        name: "carsol",
      data(){
          return{
            num:"367px",
            carsol: [],

          }
      },
      props:['height'],
      created() {
        this.ajaxHandle();
        console.log(this.height)

      },
      methods:{
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
      }
    }
</script>

<style scoped lang="less">
  .main_inner {
    width: 640px;

    .block {
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }

      .i-img {
        width: 100%;
        height: 100%;
      }

      .imgInner {
        width: 100%;
        height: 100%;
        position: relative;

      }

      .title {
        position: absolute;
        z-index: 10;
        top: 72%;
        width: 467px;
        height: 82px;
        background-image: linear-gradient(270deg, #4d96f5 0%, #7355b0 100%);
        opacity: 0.95;
        border-radius: 0 20px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding-left: 20px;
        color: #fff;

        &:before{

            content:'';
            display:block;





        }

        p {
          padding-bottom: 10px;
          width: 100%;
        }

        .title {
          padding-top: 10px;
        }

      }
    }
  }
</style>
<style lang="less">
  .main_inner {
  .el-carousel__indicators--horizontal {
    left: 82%;
    transform: translateX(2%);
    bottom: 16px;

  .el-carousel__indicator--horizontal {
    margin-right: 8px;
  }
  }



  .el-carousel__button {
    border-radius: 50%;
    width: 9px;
    height: 9px;
  }
  }
</style>

<template>
  <header>

      <div class="bg_head">
        <img :src="logo" alt="">
        <h3>标语标语标语 口号口号口号</h3>
      </div>
      <nav>
        <div class="nav_item">
          <router-link :to="{name:item.link}" v-for="(item,index) in nav" :key="index">{{item.name}}
          </router-link>
        </div>
      </nav>
    </header>

</template>

<script>
  // :class="activeIndex == index ? 'link-active':'active'
  export default {
    name: "conponentNav",
    data() {
      return {
        logo: "static/images/logo.png",
        nav: [
          {
            name: "智慧党建",
            link: "wisdom",
          },
          {
            name: "通知公告",
            link: "announcement",
          }, {
            name: "新闻动态",
            link: "news"
          },
          {
            name: "考勤管理",
            link: "Attendance"
          },
          {
            name: "文档中心",
            link: "documentation"
          },
        ],
        activeIndex: 0
      }
    },
    methods:{
      activeHandle(index){
        console.log(index)
      }
    }
  }
</script>

<style scoped lang="less">
  .router-link-exact-active.router-link-active{
    background-image: linear-gradient(270deg, rgba(255, 171, 150, 1) 0%, #ee4d73 100%);
  }
  /*.link-active{*/
  /*  background-image: linear-gradient(270deg, rgba(255, 171, 150, 1) 0%, #ee4d73 100%);*/
  /*}*/

  header {
    width: 100%;

    .active{
      width: 143px;
      height: 66px;
      background-image: linear-gradient(270deg,
      #4d96f5 0%,
      #5c65dc 100%);
    }
    .bg_head {
      width: 100%;
      height: 180px;
      background-color: #0b2d60;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        padding-right: 20px;
      }
      h3 {
        color: #fff;
        padding-left: 20px;
        letter-spacing: 1px;
        font-size: 20px;
      }
    }
    nav {
      width: 100%;
      background-color: #252836;

      .nav_item {
        width: 1088px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        text-align: center;

        a {
          display: inline-block;
          width: 143px;
          color: #fff;
          font-size: 16px;
          line-height: 66px;
        }
      }
    }

  }
</style>

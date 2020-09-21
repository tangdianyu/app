<template>
  <footer>
    <img :src="logo" alt="">
    国家超级计算机无锡中心
  </footer>
</template>

<script>
    export default {
        name: "footerNode",
      data(){
        return {
          logo:"static/images/logo.png"
        }
      }
    }
</script>

<style scoped lang="less">
  footer{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 20px;
      margin-right: 15px;

    }

    font-size: 16px;
    font-weight: 700;
    color:#7d7d7d;
    background-color: #252836;

  }
</style>

<template>
  <div id="app" >
    <div class="viev-container">
      <!-- 缓存--><keep-alive> 
       <router-view />
      </keep-alive> 
   
    </div>
    <ul class="tabbar-wrap">
      <li class="ul-li" v-for="(item,index) in list" :key="index" @click.prevent="changeState(item,index)">
        <img :src="item.isSelect ? item.selectedImage:item.normalImage" alt />
        <p class="font-size" :class="[item.isSelect?'active':'']">{{item.name }}</p>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      active: 1,
      list: [
        {
          isSelect: true,
           selectedImage: require("./assets/xkb.png"),
           normalImage: require("./assets/xka.png"),
          id: 1,
          path: "/home",
          name: "课程"
        },
        {
          isSelect: true,
          selectedImage: require("./assets/studtb.png"),
            normalImage: require("./assets/studya.png"),
          id: 1,
          path: "/classtransfer",
          name: "学习"
        },
        {
          isSelect: true,
            selectedImage: require("./assets/myb.png"),
           normalImage: require("./assets/mya.png"),
          id: 1,
          path: "/Selecttheclass",
          name: "我的"
        }
      ]
    };
  },
  methods: {
    changeState(item, idx) {
      this.list.forEach((e, index) => {
        e.isSelect = false;
      });
      this.list[idx].isSelect = true;
      this.$router.push({
        path: item.path
      });
    }
  }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  width: 100vw; 
  -webkit-overflow-scrolling: touch;
  padding-left: calc(100vw - 100%); 
  overflow-x: hidden;


}
* {
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  margin: auto;
  margin-top: 10px;
 
}
.tabbar-wrap {
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0px;
   background:#fff;
  height: 40px;
  padding: 0 3px;
}
.ul-li {
  margin-top:5px;
  margin-bottom:5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  img{
    width:23px;
  }
  p{
    font-size: 12px;
    
  }
}
.active {
  color: rgba(149, 108, 222, 1) !important;
/* border-bottom:solid red 1px; */
}
.font-size {
  margin: 5px;
  font-size: 14px;
}
.viev-container{
  margin-bottom:40px;
 margin-top:35px;
}

</style>

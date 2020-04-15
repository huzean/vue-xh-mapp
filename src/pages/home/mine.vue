<template>
  <div>
    <Head v-for="(item,index) in title " :key="index" :title="item.text"></Head>
    <p :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow">我爱云虹</p>
    <br />
  </div>
</template>
<script>
import Head from "@/components/head/head";
export default {
  data() {
    return {
      isshow: true,
      title: [{ text: "我的" }]
    };
  },
  components: {
    Head
  }
};
</script>
<style lang="less" scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
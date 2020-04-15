<template>
  <van-swipe class="my-swipe" :autoplay="opt.autoplay" :indicator-color="opt.indicatorColor">
    <slot></slot>
  </van-swipe>
</template>
<script>
const defaultOpiton = {
  autoplay: 3000,
  indicatorColor: "white"
};
export default {
  props: {
    options: {
      type: Object,
      default: () => defaultOpiton
    }
  },
  data() {
    return {
      opt: defaultOpiton
    };
  },
  created() {
    // console.log("props", this.props.options);
    this.opt = Object.assign({}, defaultOpiton);
  }
};
</script>

<style></style>

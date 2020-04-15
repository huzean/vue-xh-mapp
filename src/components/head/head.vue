<template>
  <header class="head">
    <span class="icon-wrap">
      <slot name="left" >
          <svgIcon iconName="iconarrow_back" /> 
         
      </slot>
    </span>
    <p class="content">{{title}}</p>
    <span class="right">
      <slot name="right">
        <svgIcon iconName="icongengduosangedian" />
        <svgIcon iconName="iconjiantou9" />
      </slot>
    </span>
  </header>
</template> 
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      defaule: "",
    },
   
  }
};
</script>

<style scoped  lang='less'>

.head {
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  width: 375px;
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  margin:0 auto;
  background:#fff;
  .icon-wrap {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    line-height: 45px;
    text-align: center;
  }
  .right {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
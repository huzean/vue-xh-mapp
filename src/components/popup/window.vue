<template>
  <div v-show="show"> 
    <div class="modal-bg">
      <div class="modal-container">
        <div class="modal-header">确定转入该班级？</div>
        <div class="modal-main">
          <br />11111111111
          <br />111111111
          1111111111111111144444444444444444444444
          <br />11111111111444444444444444
        </div>
        <div class="modal-footer">
          <div @click="close">取消</div>
          <div @click="confirm">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentShow: false
 
    };
  },
  props: {
    value: Boolean,
    show: Boolean
  },
  watch: {
    value(newVal, lodVal) {
      this.currentShow = newVal;
   }, 
    show(newVal, lodVal) {
      this.currentShow = newVal;
    }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
      this.$emit("", true);
    },
    close() {
      this.$emit("", true);
      this.$emit("close");
    }
  }
};
</script>
<style scoped lang="less">
.red {
  color: red;
}
.blue {
  color: blue;
}
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  // display: none;
}
.modal-container {
  width: 290px;
  // height: 100%;
  background: #fff;
  border-radius: 9px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-header {
  // height: 56px;
  font-size: 18px;
  color: #000;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.modal-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  justify-content: space-around;
  // height: 50px;
 
  div {  
  border-right: 1px solid red;
     width: 100%;
    font-size: 16px;
    height:45px;
    line-height: 45px ;
  }
    div:nth-child(2) {
       border-right: none;
  
    }
}
.modal-footer button {
  width: 100px;
}
.modal-main {
  padding: 15px ;
}
</style>

<template>
<div>
  <div class="modal-bg" v-show="show" @mouseup="cancelMove">
    <div class="modal-container">
      <div
        class="modal-header"
        @mousedown="setStartingPoint"
        @mousemove="modalMove"
        @mouseup="cancelMove"
      >{{ title }}</div>
      <div class="modal-main">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <div>
          <el-button round @click="hideModal">取消</el-button>
        </div>
        <div :class="{blue: !isshow,red: isshow}" @click="isshow=!isshow">
          <el-button type="primary" round @click="submit">确认</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return { x: 0, y: 0, node: null, isCanMove: false, isshow: true };
  },
  mounted() {
    this.node = document.querySelector(".modal-container");
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    submit() {
      this.$emit("submitt");
    },
    setStartingPoint(e) {
      this.x = e.clientX - this.node.offsetLeft;
      this.y = e.clientY - this.node.offsetTop;
      this.isCanMove = true;
    },
    modalMove(e) {
      if (this.isCanMove) {
        this.node.style.left = e.clientX - this.x + "px";
        this.node.style.top = e.clientY - this.y + "px";
      }
    },
    cancelMove() {
      this.isCanMove = false;
    }
  }
};
</script>
<style scoped lang="less">
//  弹窗字体颜色
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
}
.modal-container {
  width: 290px;
  height: 134px;
  background: #fff;
  border-radius: 9px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-header {
  height: 56px;
  font-size: 18px;
  color: #000;
  display: flex;
  justify-content: center;
  line-height: 100px;
  cursor: move;
  //  span{
  //    line-height: 100px;
  //  }
}
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 57px;
  // border: 1px solid #ddd;
  div {
    width: 50%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-size: 16px;

    div:nth-child(2) {
      border-right: none;
    }
  }
}
.modal-footer button {
  width: 100px;
}
.modal-main {
  padding: 15px 40px;
}
</style> 
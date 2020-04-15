<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :class="svgClass" :xlink:href="name" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: false
    },
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    name() {
      return `#${this.iconName}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 18px;
  height:18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <div>
    <ul>
      <span>
        <li>{{content}}</li>
        <button @click="handleClick">删除</button>
      </span>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["content"],
  methods: {
    handleClick: function() {
      this.$emit("delete", this.content);
    }
  }
};
</script>
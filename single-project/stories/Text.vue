<template>
<div class="cmp-text" :attrs="$attrs" :class="{ 'ellipsis': ellipsis }">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    ellipsis: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.cmp-text.ellipsis {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
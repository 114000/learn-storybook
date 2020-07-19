<template>
<div class="bar-chart">
  <div 
    class="bar" 
    v-for="(v, i) in val" :key="i" 
    :style="{ height: v + 'px' }">

    <span>{{ v }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    val: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style>
.bar-chart {
  display: flex;
  align-items: flex-end;
}
.bar-chart .bar {
  width: 40px;
  background: #cd164e;
  margin-right: 30px;
  color: white;
  padding-top: 6px;
  text-align: center;
}
</style>
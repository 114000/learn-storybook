<template>
<div>
  search:
  <input v-model="params.search" style="width: 200px" />
  pagination:
  <span
    class="p-btn" 
    :class="{ active: i === Number(params.page) }" 
    v-for="i in 9" 
    :key="i"
    @click="params.page = i"  
  >{{ i }}</span>
</div>
</template>

<script>
import { watchEffect } from '@vue/composition-api'
import { useQueryParams } from '../composition'
export default {
  props: {
    search: {
      type: String,
      default: '1234567'
    },
    page: {
      type: Number,
      default: 1
    }
  },
  setup ({ search, page }) {
    const { params } = useQueryParams({
      search,
      page
    }, false)

    watchEffect(() => {
      const variables = {
        search: params.search,
        page: Number(params.page)
      }
      console.log('fetch', variables)
    }, { deep: true })


    return {
      params
    }
  }
}
</script>

<style>
.p-btn {
  padding: 10px;
}
.active {
  border: 1px solid #cd164e;
}
</style>
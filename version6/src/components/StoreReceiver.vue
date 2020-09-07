<template>
<div>
  status: {{ user.isLogin }}
  user: {{ user.userName }}
</div>
</template>

<script>
import { getUseUserStore } from '../store'
export default {
  setup () {
    
    const useUserStore = getUseUserStore()
    const { store } = useUserStore()

    return {
      user: store
    }
  }
}
</script>

<style>

</style>
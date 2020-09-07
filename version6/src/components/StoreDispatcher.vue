<template>
<div>
  <button type="primary" @click="login">login</button>
  <button @click="logout">logout</button>
</div>
</template>

<script>
import { getUseUserStore } from '../store'
export default {
  setup () {
    const useUserStore = getUseUserStore()

    const { dispatch } = useUserStore()


    function login () {
      dispatch('isLogin', true)
      dispatch('userName', 'abc')
    }

    function logout () {
      dispatch('isLogin', false)
      dispatch('userName', '')
    }

    return {
      login,
      logout
    }
    
  }
}
</script>

<style>

</style>
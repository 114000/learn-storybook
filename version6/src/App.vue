<template>
  <div id="app">
    <query-control />
    <tag-table />
    <window-width />
    status: {{ user.isLogin }}
    user: {{ user.userName }}
    <login />
  </div>
</template>

<script>
import { QueryControl, WindowWidth, TagTable, Login } from './components'
import { getUseUserStore } from './store'

export default {
  name: 'App',
  components: {
    TagTable,
    WindowWidth,
    QueryControl,
    Login
  },
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<div>
  window width: {{ state.windowWidth }}
  <br>
  target: {{ target }}
  <br>
  eventName: {{ eventName }}
</div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import { useNativeEventListener } from '../composition'

export default {
  props: {
    target: {
      type: String,
      default: 'window',
    },
    eventName: {
      type: String,
      default: 'resize'
    }
  },
  setup ({ target, eventName }) {
    const state = reactive({
      windowWidth: window.innerWidth
    })

    useNativeEventListener(window[target], eventName, function () {
      state.windowWidth = window.innerWidth
    })

    return {
      state
    }
  }
}
</script>

<style>

</style>
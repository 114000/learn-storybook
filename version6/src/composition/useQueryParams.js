import { reactive, watchEffect, onMounted, onBeforeMount } from '@vue/composition-api'

export function useQueryParams (defaultParams, raw = true, delay = 16) {
  
  const params = reactive(defaultParams)
  let lastSearch = ''
  let timer = null
  let listeners = []

  watchEffect(() => {
    
    const search = Object.keys(params).reduce((s, key, i) => {
      return s + (i === 0 ? '?' : '&') + `${key}=${params[key]}`
    }, '')

    if (lastSearch === search) return

    window.history.pushState('', null, search)
    listeners.forEach(l => l(params, window.location))
    lastSearch = search
  })

  onMounted(() => {
    
    function loop () {
      
      if (lastSearch !== window.location.search) {
        window.location.search
          .replace(/^\?/, '')
          .split('&')
          .map(str => str.split('='))
          .forEach((pair) => {
            params[pair[0]] = raw ? JSON.parse(pair[1]) : pair[1]
            
          })
        
        lastSearch = window.location.search
      }

      setTimeout(loop, delay)
    }

    timer = setTimeout(loop, delay)
  })

  onBeforeMount(() => {
    clearTimeout(timer)
    listeners = []
  })

  return { params }
}
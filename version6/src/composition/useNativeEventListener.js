import { onMounted, onBeforeUnmount } from '@vue/composition-api'

export function useNativeEventListener (target, evName, callback) {

  const dispose = () => {
    target.removeEventListener(evName, callback, false)
  }
  onMounted(() => {
    target.addEventListener(evName, callback, false)
  })

  onBeforeUnmount(dispose)

  return dispose
}
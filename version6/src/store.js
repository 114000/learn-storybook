import { Store } from './composition'

let user = null

export function getUseUserStore () {
  if (user === null) {
    user = new Store({
      isLogin: false,
      userName: ''
    })
  }

  return user.useStore
}
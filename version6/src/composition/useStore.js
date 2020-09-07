import { reactive } from '@vue/composition-api'

export class Store {
  

  store = null

  constructor (store) {
    this.store = reactive(store)
  }


  useStore = () => {
    if (this.store === null) throw new ReferenceError('store is' + this.store)

    const dispatch = (name, value) => {
      console.log('dispatch', name, value)
      this.store[name] = value
    }

    return { store: this.store, dispatch }
  }


}
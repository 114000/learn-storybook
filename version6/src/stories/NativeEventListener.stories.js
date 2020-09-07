// import Vue from 'vue'
// import VueCompositionApi from '@vue/composition-api'
// Vue.use(VueCompositionApi)

import NativeEventListener from '../components/NativeEventListener.vue'

export default {
  title: 'Composition/NativeEventListener',
  component: NativeEventListener,
  argTypes: {
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NativeEventListener },
  template: '<NativeEventListener />',
})

export const Primary = Template.bind({})
Primary.args = {
  
  
}
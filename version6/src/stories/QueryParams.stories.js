// import Vue from 'vue'
// import VueCompositionApi from '@vue/composition-api'
// Vue.use(VueCompositionApi)

import QueryParams from '../components/QueryParams.vue'

export default {
  title: 'Composition/QueryParams',
  component: QueryParams,
  argTypes: {
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QueryParams },
  template: '<QueryParams />',
})

export const Primary = Template.bind({})
Primary.args = {
}
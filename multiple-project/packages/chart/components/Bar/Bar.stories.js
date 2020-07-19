import { action } from '@storybook/addon-actions';
import { withKnobs, array } from '@storybook/addon-knobs'

import md from './Bar.md'
import Bar from './Bar.vue'

export default {
  title: 'Chart | Bar',
  component: Bar,
  decorators: [withKnobs],
  parameters: {
    notes: md
  }
};



export const BarDemo = () => ({
  components: { Bar },
  props: {
    val: {
      default: array('Val', [500, 100, 230, 430, 220])
    }
  },
  template: `
    <bar :val="val" />
  `,
  methods: { action: action('clicked') },
});


import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Text from './Text.vue'
import MyButton from './MyButton'

export default {
  title: 'Text',
  component: Text,
};

export const TextButton = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const JsxButton = () => ({
  components: { MyButton },
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>;
  },
  methods: { action: linkTo('clicked') },
});

// support jsx
export const TestComponent = () => ({
  components: { Text },
  render (h) {
    return (
      <Text 
        ellipsis
        style="background:red; width: 100px; border: 1px solid #000;"
      >$123,456,789.00</Text>
    )
  }
})
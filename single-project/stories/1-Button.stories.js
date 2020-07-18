import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Text from './Text.vue'
import MyButton from './MyButton';

export default {
  title: 'Button',
  component: MyButton,
};

export const TextButton = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const Jsx = () => ({
  components: { MyButton },
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>;
  },
  methods: { action: linkTo('clicked') },
});

export const Emoji = () => ({
  components: { MyButton },
  template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  methods: { action: action('clicked') },
});


// support jsx
export const TestComponent = () => ({
  components: { Text },
  render (h) {
    return <div style="width: 100px; border: 1px solid #000;">
      <Text 
        ellipsis
        style="background:red;"
      >$123,456,789.00</Text>
    </div>
  }
})
import { action } from '@storybook/addon-actions';

import MyButton from './Button';

export default {
  title: 'UI | Button',
  component: MyButton,
};

export const ButtonDemo = () => ({
  components: { MyButton },
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>;
  },
  methods: { action: action('clicked') },
});

ButtonDemo.story = {
  name: 'Button',
  parameters: { notes: '暂无文档' }
}


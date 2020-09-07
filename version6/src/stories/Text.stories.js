import TextView from '../components/Text.vue';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    background: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextView },
  // render: (h) => <TextView 
  //   ellipsis={this.$props.ellipsis}
  //   style={{ width: this.$props.width + 'px', background: this.$props.background }}  
  // >{ this.$props.children }</TextView>
  template: `
    <TextView 
      :ellipsis="$props.ellipsis"  
      :style="{ width: $props.width + 'px', background: $props.background }"
    >{{$props.children}}</TextView>`,
});

export const Normal = Template.bind({});
Normal.args = {
  children: '$12345677890',
  ellipsis: true,
  background: '#ff7780',
  width: 200
};

Normal.decorator = [asd]

export const LongText = Template.bind({});
LongText.args = {
  children: '$12345677890abcde6fhaianwudq[1823h4jbs',
  ellipsis: true,
  background: '#ff7780',
  width: 200
};


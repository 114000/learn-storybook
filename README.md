title: storybook startup
speaker: binyu.wang
css:
  - /style.css

<slide class="aligncenter" video="/video.mp4 autoplay loop">

<h1 class="text-landing">Storybook</h1>

<slide class="bg-light">

<div class="fadeInUp">

### 1. 开始使用 
### 2. 一些配置 
### 3. 插件使用
### 4. 进行测试

</div>


<slide class="aligncenter bg-light">

## 1. 开始使用

<slide class="aligncenter bg-light">

### 1.1 新建项目


<div class="content-left animated fadeInLeft delay-800">

``` bash
$ vue create <project> && cd <project>
<p>$ npx -p @storybook/cli sb init --type vue
<p>$ npm run storybook
```

- storybook <https://storybook.js.org/docs/guides/guide-vue/>
- vue cli

</div>


<div class=" content-right animated fadeInRight delay-800">

```
/- <project>
  |- .storybook/       # 配置项目录
  |- public/
  |- src/
  |- stories/          # stories
  |- storybook-static/ # 打包后静态站 
  |- test/
  |- ...
```

</div>


<slide class="aligncenter bg-light">


### 1.2 写一个组件

上手简单，最原始的项目就可以使用 .vue .jsx 开发组件

<hr>

<div class="content-left animated fadeInLeft delay-800">

``` html
<template>
<div class="cmp-text" :attrs="$attrs" :class="{ 'ellipsis': ellipsis }">
  <slot></slot>
</div>
</template>
<script>
export default {
  props: { ellipsis: { type: Boolean, default: false } }
}
</script>
<style>
.cmp-text.ellipsis {
  width: 100%; overflow: hidden; 
  text-overflow: ellipsis; white-space: nowrap;
}
</style>
```

</div>


<div class=" content-right animated fadeInRight delay-800">

``` jsx
export const TextDemo = () => ({
  components: { Text },
  render (h) {
    return (
      <Text 
        ellipsis
        style="background:red; width: 100px;"
      >$123,456,789.00</Text>
    )
  }
})

TextDemo.story = {
  name: '文本组件是我的中文名字'
}
```

</div>

<div class=" content-botton animated fadeInUp delay-1500">

- [另一种 story 写法 StoriesOf API](https://storybook.js.org/docs/formats/storiesof-api/)

</div>

<slide class="aligncenter bg-light">

<iframe src="/single-project/storybook-static/?path=/story/text--test-component" style="width: 90%; height: 70vh;">

<slide class="aligncenter bg-light">

### 1.3 组织多项目

<hr>

<div class="content-left animated fadeInLeft delay-800">

#### 创建项目

``` bash
$ npm i lerna -g
$ mkdir <project> && cd <project>
<p>$ lerna init
<p>$ lerna create <package> -y

# ...

<p>$ npx -p @storybook/cli sb init --type vue
<p>$ npm i vue vue-loader vue-template-compiler -D
<p>$ echo node_modules > .gitignore
```

</div>


<div class=" content-right animated fadeInRight delay-800">

#### 目录结构

``` bash
/- <project>
 |- .storybook/      # 配置项目录
 |- packages/
 |   |- <package>/components/Button/
 |      |- Button.vue
 |      |- Button.stories.js
 |   |- <package>/components/BarChart/
 |      |- BarChart.js
 |      |- BarChart.stories.mdx
 |- storybook-static/ # 打包后静态站 
```

</div>

<slide class="aligncenter bg-light">


## 2. 一些配置


<slide class="aligncenter  bg-light">

### 2.1 预设 

> 全局配置 .storybook/main.js 

---

<div class="content-left animated fadeInLeft delay-800">

``` diff
module.exports = {
- stories: ['../stories/**/*.stories.js']
+ stories: ['../packages/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links',
+   '@storybook/addon-docs'
  ],
+ webpackFinal: async config => {

+   const aliasPairs = {
+     '@group/ui': path.resolve('../packages/ui/components'),
+     '@group/chart': path.resolve('../packages/chart/components'),
+   }

+   Object.assign(config.resolve.alias, aliasPairs)
    
+   return config
+ },
}

```

</div>

<div class=" content-right animated fadeInRight delay-800">

- stories: 文件 glob 模式
- addons: 注册插件
- webpackFinal: 得到 storybook 处理后最终的 webpack 配置
- [其他Presets API](https://storybook.js.org/docs/presets/writing-presets/#presets-api)
- [React + TS 配置](https://github.com/coloration/ti/blob/master/.storybook/main.js)

</div>


<slide class="aligncenter bg-light">

### 2.2 添加全局装饰器和参数

> 预览配置 .storybook/preview.js

---

<div class="content-left animated fadeInLeft delay-800">

``` jsx
import { addDecorator, addParameters } from '@storybook/vue'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

// 容器盒子

// jsx
addDecorator(() => ({ render() { return (
  <div style={{ padding: '4rem 6rem', background: '#eee' }}>
    <div style={{ background: '#fff' }}>
      <story/>
    </div>
  </div>
)}}))

// or template
addDecorator(() => ({ 
  template: `<div style="text-align:center"><story/></div>` 
}))

```

</div>

<div class=" content-right animated fadeInRight delay-800">

``` jsx
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    theme:{
      brandTitle:'Custom Head',
      brandUrl: 'https://github.com'
    },
  }
})
```

- [装饰器, 参数详情](https://storybook.js.org/docs/basics/writing-stories/#decorators)


</div>


<slide class="aligncenter bg-light">

### 2.3 三级配置

> Story > Component > Global

---


<div style="display: flex; align-items: stretch;">

``` js
// button.stories.js
export const ButtonDemo = () => ({
  components: { MyButton: Button },
  render(h) { return <my-button /> }
}) 
ButtonDemo.story = {
  // ... 配置
}
```


``` js
// button.stories.js

export default {
  title: 'UI | Button',
  component: Button,
  // ... 配置
};

```


``` js
// .storybook/preview.js

// ... 配置
addDecorator()
addParameters()



```

</div>


<slide class="aligncenter bg-light">

### 2.4 Storybook 的UI配置 

> 管理配置 .storybook/manager.js

<https://storybook.js.org/docs/configurations/options-parameter/>

---

``` js
import { addons } from '@storybook/addons';

addons.setConfig({
  
  isFullscreen: false, // show story component as full screen
  showNav: true, // display panel that shows a list of stories
  showPanel: true, // display panel that shows addon configurations

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'bottom',

  // ...
});
```

<slide class="aligncenter  bg-light">

## 3. 插件使用


<slide class="aligncenter  bg-light">

### 3.1 [knobs - 可输入的props](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

<div class="content-left animated fadeInLeft delay-800">

``` js
// .storybook/main.js
module.exports = {
  addons: [
    // ...
    '@storybook/addon-knobs/register', // UI props
  ],
};
```

``` js 
// bar.stories.js
import { withKnobs, array } from '@storybook/addon-knobs'

export const BarDemo = () => ({
  components: { Bar },
  props: {
    val: { default: array('Val', [500, 100, 230, 430, 220])}
  },
  template: `<bar :val="val" />`,
  methods: { action: action('clicked') },
})

BarDemo.story = {
  decorators: [withKnobs]
}
```

</div>

<div class=" content-right animated fadeInRight delay-800">

  <iframe src="/multiple-project/storybook-static/?path=/story/chart-bar--bar-demo" style="width: 90%; height: 70vh;">

</div>

<slide class="aligncenter  bg-light">


### 3.2 [notes - 编写markdown](https://github.com/storybookjs/storybook/tree/master/addons/notes)

<div class="content-left animated fadeInLeft delay-800">

``` js
// .storybook/main.js
module.exports = {
  addons: [
    // ...
    '@storybook/addon-notes/register', // UI props
  ],
};
```

``` js
// bar.stories.js
import barNotes from './Bar.md'

export default {
  title: 'Chart | Bar',
  parameters: { notes: barNotes }
};

export const BarDemo = () => ({
  // ...
})

BarDemo.story = {
  parameters: { notes: barNotes }
}
```

</div>

<div class=" content-right animated fadeInRight delay-800">

  <iframe src="/multiple-project/storybook-static/?path=/info/chart-bar--bar-demo" style="width: 90%; height: 70vh;">

</div>


<slide class="aligncenter bg-light">

### 3.3 [docs - mdx](https://github.com/storybookjs/storybook/tree/master/addons/docs)

<div class="content-left animated fadeInLeft delay-800">

``` js
// .storybook/main.js
module.exports = {
  addons: [
    // ...
    '@storybook/addon-docs',
  ],
};
```

``` md
// text.stories.mdx !!
<Meta title='UI | Text' component={Text} />

# Text

文本组件

## Useage

<Preview>
  <Story name='Text mdx' height='100px' decorators={[withKnobs]}>{{
    components: { TextView },
    // mdx 不支持 render
    template: <TextView>$123,456,789.00</TextView>`
  }}</Story>
</Preview>

## Props
<!-- 自动显示Props -->
<Props of={TextView} />
```

</div>

<div class="content-right animated fadeInRight delay-800">

  <iframe src="/multiple-project/storybook-static/?path=/docs/ui-text--text-mdx" style="width: 90%; height: 70vh;">

</div>


<slide class="aligncenter bg-light">

### 3.4 插件相关

---

::: div {.alignleft }

- #### [官方插件列表](https://storybook.js.org/docs/addons/addon-gallery/)
- #### [自定义插件](https://storybook.js.org/docs/addons/writing-addons/)

:::


<slide class="aligncenter  bg-light">


## 4. 测试

<slide class="aligncenter  bg-light">

### 4.1 Structural Testing 结构测试

每次构建记录故事快照，在下次修改后进行对照

<hr>

- [Snapshot 快照测试](https://storybook.js.org/docs/testing/structural-testing/)



<slide class="aligncenter  bg-light">

### 4.2 Interaction Testing 交互测试

<hr>

- storybook 外 jest mocha
- storybook 内 jest with [addon specification](https://github.com/mthuret/storybook-addon-specifications)


<slide class="aligncenter  bg-light">

### 4.3 Automated Visual Testing 视觉还原测试

<https://storybook.js.org/docs/testing/automated-visual-testing/>

![](/visual-test.png)

<br>

![](/visual-test2.png)






<slide class="aligncenter  bg-light">

#### 4.3.1 集成方案

许多库和服务都开箱即用地集成了Storybook，集成程度各不相同。有些甚至使用复杂的机器学习而不是1：1像素比较。

- [Chromatic](https://www.chromatic.com/)

#### 4.3.2 自助餐

- jest
- puppeteer
- jest-puppeteer
- jest-image-snapshot
- start-server-and-test

<slide class="aligncenter  bg-light">

### 4.4 Manual Testing 手动测试

<hr>

爱了，我最喜欢的测试。不过是要用 story 覆盖组件大部分的使用情况。（如之后的例子）

<slide class="aligncenter  bg-light">

## Ex. Examples

<slide class="aligncenter bg-light">

[composition api library 文档 - @vueuse/core](https://vueuse.js.org/?path=/story/docs--read-me)

<iframe src="https://vueuse.js.org/" style="width: 90%; height: 70vh;">



<slide class="aligncenter bg-light">

[组件库 - @axa-fr/react-toolkit-all](https://axaguildev.github.io/react-toolkit/v1.1.0/storybook)

<iframe src="https://axaguildev.github.io/react-toolkit/v1.1.0/storybook" style="width: 90%; height: 70vh;">


<slide class="aligncenter bg-light">

[单组件 - react-dates](https://airbnb.io/react-dates)


<iframe src="https://airbnb.io/react-dates" style="width: 90%; height: 70vh;">



<slide class="aligncenter bg-light">

## END.
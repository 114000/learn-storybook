title: storybook startup
speaker: binyu.wang
css:
  - /style.css

<slide class="aligncenter" video="/video.mp4 autoplay loop">

# Storybook {.text-landing}


<slide class="bg-apple">

<div class="fadeInUp">

### 1. 开始使用 
### 2. 一些配置 
### 3. 插件使用
### 4. 进行测试

</div>


<slide class="aligncenter bg-apple">

## 1. 开始使用 {.animated.pulse}

<slide class="aligncenter bg-apple">

### 1.1 新建项目 { .fadeInDown }

:::div { .content-left.animated.fadeInLeft.delay-800 }

``` bash
$ vue create <project> && cd <project>
<p>$ npx -p @storybook/cli sb init --type vue
<p>$ npm run storybook
```

- storybook <https://storybook.js.org/docs/guides/guide-vue/>
- vue cli

:::


:::div {.content-right.animated.fadeInRight.delay-800 }

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

:::



<slide class="aligncenter bg-apple">


### 1.2 写一个组件

上手简单，最原始的项目就可以使用 .vue .jsx 开发组件

:::div { .content-left.animated.fadeInLeft.delay-800 }

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

:::


:::div { .content-right.animated.fadeInRight.delay-800 }

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

:::


:::div { .content-botton.animated.fadeInUp.delay-1500 }

- [另一种 story 写法 StoriesOf API](https://storybook.js.org/docs/formats/storiesof-api/)

:::

<slide class="aligncenter bg-apple">

<iframe src="/single-project/storybook-static" style="width: 90%; height: 70vh;">

<slide class="aligncenter bg-apple">

### 1.3 组织多项目

<hr>

:::div { .content-left.animated.fadeInLeft.delay-800 }

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

:::

:::div { .content-right.animated.fadeInRight.delay-800 }

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

:::

<slide class="aligncenter bg-apple">


## 2. 一些配置 {.animated.pulse}



<slide class="aligncenter  bg-apple">

### 2.1 预设 

> .storybook/main.js

---

::: div {.content-left }

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

:::

::: div {.content-right }

- stories: 文件 glob 模式
- addons: 注册插件
- webpackFinal: 得到 storybook 处理后最终的 webpack 配置
- [其他Presets API](https://storybook.js.org/docs/presets/writing-presets/#presets-api)
- [React + TS 配置](https://github.com/coloration/ti/blob/master/.storybook/main.js)

:::


<slide class="aligncenter bg-apple">

### 2.2 添加全局装饰器和参数

> .storybook/preview.js

---

::: div {.content-left}

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

:::

::: div {.content-right }

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


:::


<slide class="aligncenter bg-apple">

### 3.1 三级配置

> Story > Component > Global

---


<div style="display: flex;">

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


<slide class="aligncenter bg-apple">

### Storybook 的UI配置 

> .storybook/manager.js



<slide class="aligncenter  bg-apple">

## 3. 插件使用


<slide class="aligncenter  bg-apple">

### 3.1 [knobs - 可输入的props](https://github.com/storybookjs/storybook/tree/master/addons/knobs)


<slide class="aligncenter  bg-apple">


### 3.2 [notes - 编写markdown](https://github.com/storybookjs/storybook/tree/master/addons/notes)

<slide class="aligncenter bg-apple">

### 3.3 [docs - mdx](https://github.com/storybookjs/storybook/tree/master/addons/docs)


<slide class="aligncenter bg-apple">

### 3.4 插件相关

---

::: div {.alignleft }

- #### [官方插件列表](https://storybook.js.org/docs/addons/addon-gallery/)
- #### [自定义插件](https://storybook.js.org/docs/addons/writing-addons/)

:::


<slide class="aligncenter  bg-apple">


## 4. 测试

<slide class="aligncenter  bg-apple">

### 4.1 Structural Testing 结构测试

- [Snapshot 快照测试](https://storybook.js.org/docs/testing/structural-testing/)

每次构建记录故事快照，在下次修改后进行对照

<slide class="aligncenter  bg-apple">

### 4.2 Interaction Testing 交互测试

- storybook 外 jest mocha
- storybook 内 jest with [addon specification](https://github.com/mthuret/storybook-addon-specifications)


<slide class="aligncenter  bg-apple">

### 4.3 Automated Visual Testing 视觉还原测试

<https://storybook.js.org/docs/testing/automated-visual-testing/>

![](/visual-test.png)

<br>

![](/visual-test2.png)






<slide class="aligncenter  bg-apple">

#### 4.3.1 集成方案

许多库和服务都开箱即用地集成了Storybook，集成程度各不相同。有些甚至使用复杂的机器学习而不是1：1像素比较。

- [Chromatic](https://www.chromatic.com/)

#### 4.3.2 自助餐

- jest
- puppeteer
- jest-puppeteer
- jest-image-snapshot
- start-server-and-test

<slide class="aligncenter  bg-apple">

### 4.4 Manual Testing 手动测试

爱了，不过不是手动测试每个功能点啦。要用 story 覆盖组件大部分的使用情况。（如之后的例子）

<slide class="aligncenter  bg-apple">

## Ex. Examples

<slide class="aligncenter bg-apple">

[composition api library 文档 - @vueuse/core](https://vueuse.js.org/?path=/story/docs--read-me)

<iframe src="https://vueuse.js.org/" style="width: 90%; height: 70vh;">



<slide class="aligncenter bg-apple">

[组件库 - @axa-fr/react-toolkit-all](https://axaguildev.github.io/react-toolkit/v1.1.0/storybook)

<iframe src="https://axaguildev.github.io/react-toolkit/v1.1.0/storybook" style="width: 90%; height: 70vh;">


<slide class="aligncenter bg-apple">

[单组件 - react-dates](https://airbnb.io/react-dates)


<iframe src="https://airbnb.io/react-dates" style="width: 90%; height: 70vh;">



<slide class="aligncenter bg-apple">

## END.
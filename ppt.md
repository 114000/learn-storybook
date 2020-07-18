
1. 开始使用
2. 插件 addons

--- 
# Storybook


Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

---

# 1. 开始使用

--- 


### 1.1 单项目使用

``` bash
$ vue create <project> 
$ npx -p @storybook/cli sb init --type vue
```

- storybook: <https://storybook.js.org/docs/guides/guide-vue/>
- vue cli
---

``` bash
/- <project>
  |- .storybook/       # 配置项目录
  |- public/
  |- src/
  |- stories/          # stories
  |- storybook-static/ # 打包后静态站 
  |- test/
  |- ...
```


---

### 1.2 组织多项目


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


---

插件

--- 


1. knobs
    knobs插件提供一个表单控制台，用户可以通过表单控制台来改变组件相关属性，展示不同属性下的组件
2.actions
    actions插件让用户在对组件的操作，可以反应在底部的日志里面
3.storysource
    addon插件可以让你直接在界面上看到当前sotry的源码
4.docs
    addon-docs插件让你可以为你的组件编写文档
addon-actions：组件操作事件，如click、change
addon-links：链接，如某个Story中单击按钮，链接到另一个Story中
addon-notes：Story的备注
addon-options：调整StoryBook的外观
addon-knobs：在页面上改变变量

---

示例


---

测试

---

快照测试

---



import { addDecorator, addParameters } from '@storybook/vue'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addDecorator(() => ({ render() { return (
  <div style={{ padding: '4rem 6rem', boxSizing: 'border-box', background: '#efefef' }}>
    <div style={{  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', background: '#fff' }}>
      <story/>
    </div>
  </div>
)} }))

// addDecorator(() => ({ 
//  template: `<div style="text-align:center"><story/></div>` 
// }))




addParameters({
  // docs: {
  //   container: DocsContainer,
  //   page: DocsPage,
  // },
  // options: {
  //   theme:{
  //     brandTitle:'Custom Head',
  //     brandUrl: 'https://github.com'
  //   },
  // },
  notes: '# 暂无文档'
})
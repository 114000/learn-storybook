module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "refs": {
    "design-system": { 
      "title": "Design System", 
      /** 
       * 获取 https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com/stories.json
       * "design-system-avatar--basic": {
       *   "id": "design-system-avatar--basic",
       *   "name": "Basic",
       *   "kind": "Design System/Avatar",
       *   "parameters": {
       *   "framework": "react",
       *   "fileName": "517"
       * }
    },
       */

      "url": "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com"
    },
    "test": { 
      "title": "Test", 
      "url": "https://www.baidu.com"
    },
    "vueuse": {
      "title": "VueUse",
      "url": "https://vueuse.js.org"
    },
    "reactdates": {
      "title": "React Dates",
      "url": "https://airbnb.io/react-dates"
    },
    "axaguildev": {
      "title": "axaguildev",
      "url": "https://axaguildev.github.io/react-toolkit/v1.1.0/storybook"
    }
   }
}
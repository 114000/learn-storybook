(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1263:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(146);__webpack_require__(79);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.addDecorator)((function(){return{render:function render(){var h=arguments[0];return h("div",{style:{padding:"4rem 6rem",boxSizing:"border-box",background:"#efefef"}},[h("div",{style:{boxShadow:"0 0 20px rgba(0, 0, 0, 0.2)",background:"#fff"}},[h("story")])])}}})),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.addParameters)({notes:"# 暂无文档"})},1287:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(146);module._StorybookPreserveDecorators=!0,Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1289)],module)}.call(this,__webpack_require__(1288)(module))},1289:function(module,exports,__webpack_require__){var map={"./chart/components/Bar/Bar.stories.js":1319,"./ui/components/Button/Button.stories.js":1323,"./ui/components/Text/Text.stories.mdx":1321};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1289},1312:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_docgen_loader_lib_index_js_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(186);__webpack_require__.n(_node_modules_vue_docgen_loader_lib_index_js_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},1313:function(module,exports,__webpack_require__){(exports=__webpack_require__(449)(!1)).push([module.i,"\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n}\n.bar-chart .bar {\n  width: 40px;\n  background: #cd164e;\n  margin-right: 30px;\n  color: white;\n  padding-top: 6px;\n  text-align: center;\n}\n",""]),module.exports=exports},1316:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_docgen_loader_lib_index_js_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(187);__webpack_require__.n(_node_modules_vue_docgen_loader_lib_index_js_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},1317:function(module,exports,__webpack_require__){(exports=__webpack_require__(449)(!1)).push([module.i,"\n.cmp-text.ellipsis {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\r\n",""]),module.exports=exports},1319:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BarDemo",(function(){return BarDemo}));var dist=__webpack_require__(194),addon_knobs_dist=__webpack_require__(67),Bar_Barvue_type_script_lang_js_={props:{val:{type:Array,default:function _default(){return[]}}}},componentNormalizer=(__webpack_require__(1312),__webpack_require__(195));const __vuedocgen_export_0=Object(componentNormalizer.a)(Bar_Barvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"bar-chart"},_vm._l(_vm.val,(function(v,i){return _c("div",{key:i,staticClass:"bar",style:{height:v+"px"}},[_c("span",[_vm._v(_vm._s(v))])])})),0)}),[],!1,null,null,null).exports;var Bar_Bar=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Bar",description:"",tags:{},props:[{name:"val",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}]};__webpack_require__(184).withSource;var addSourceDecorator=__webpack_require__(184).addSource,BarDemo=(__webpack_exports__.default={title:"Chart | Bar",component:Bar_Bar,decorators:[addon_knobs_dist.withKnobs],parameters:{storySource:{source:"import { action } from '@storybook/addon-actions';\nimport { withKnobs, array } from '@storybook/addon-knobs'\n\nimport md from './Bar.md'\nimport Bar from './Bar.vue'\n\nexport default {\n  title: 'Chart | Bar',\n  component: Bar,\n  decorators: [withKnobs],\n  parameters: {\n    notes: md\n  }\n};\n\n\n\nexport const BarDemo = () => ({\n  components: { Bar },\n  props: {\n    val: {\n      default: array('Val', [500, 100, 230, 430, 220])\n    }\n  },\n  template: `\n    <bar :val=\"val\" />\n  `,\n  methods: { action: action('clicked') },\n});\n\n",locationsMap:{"chart-bar--bar-demo":{startLoc:{col:23,line:18},endLoc:{col:2,line:29},startBody:{col:23,line:18},endBody:{col:2,line:29}}}},notes:'# Bar 柱状图\r\n\r\n\r\n|Props|Type|Desc|\r\n|:---|:---|:---|\r\n|val|`Array<number>`|柱状图数据|\r\n\r\n\r\n``` html\r\n<bar :val="[500, 100, 230, 430, 220]" />\r\n```'}},addSourceDecorator((function(){return{components:{Bar:Bar_Bar},props:{val:{default:Object(addon_knobs_dist.array)("Val",[500,100,230,430,220])}},template:'\n    <bar :val="val" />\n  ',methods:{action:Object(dist.action)("clicked")}}}),{__STORY__:"import { action } from '@storybook/addon-actions';\nimport { withKnobs, array } from '@storybook/addon-knobs'\n\nimport md from './Bar.md'\nimport Bar from './Bar.vue'\n\nexport default {\n  title: 'Chart | Bar',\n  component: Bar,\n  decorators: [withKnobs],\n  parameters: {\n    notes: md\n  }\n};\n\n\n\nexport const BarDemo = () => ({\n  components: { Bar },\n  props: {\n    val: {\n      default: array('Val', [500, 100, 230, 430, 220])\n    }\n  },\n  template: `\n    <bar :val=\"val\" />\n  `,\n  methods: { action: action('clicked') },\n});\n\n",__ADDS_MAP__:{"chart-bar--bar-demo":{startLoc:{col:23,line:18},endLoc:{col:2,line:29},startBody:{col:23,line:18},endBody:{col:2,line:29}}},__MAIN_FILE_LOCATION__:"/Bar.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"E:\\git\\learn\\learn-storybook\\multiple-project\\packages\\chart\\components\\Bar",__IDS_TO_FRAMEWORKS__:{}}))},1321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"textMdx",(function(){return textMdx}));__webpack_require__(2),__webpack_require__(48),__webpack_require__(34),__webpack_require__(10),__webpack_require__(17),__webpack_require__(3),__webpack_require__(64),__webpack_require__(40),__webpack_require__(1314),__webpack_require__(1315),__webpack_require__(5),__webpack_require__(37),__webpack_require__(0);var esm=__webpack_require__(41),blocks=__webpack_require__(79),dist=__webpack_require__(67),Text_Textvue_type_script_lang_js_={props:{ellipsis:{type:Boolean,default:!1}}},componentNormalizer=(__webpack_require__(1316),__webpack_require__(195));const __vuedocgen_export_0=Object(componentNormalizer.a)(Text_Textvue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("div",{staticClass:"cmp-text",class:{ellipsis:this.ellipsis},attrs:{attrs:this.$attrs}},[this._t("default")],2)}),[],!1,null,null,null).exports;var Text_Text=__vuedocgen_export_0;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Text",description:"",tags:{},props:[{name:"ellipsis",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"UI | Text",component:Text,mdxType:"Meta"}),Object(esm.mdx)("h1",{id:"text"},"Text"),Object(esm.mdx)("p",null,"文本组件"),Object(esm.mdx)("h2",{id:"useage"},"Useage"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-html"}),"<TextView ellipsis>$123,456,789.00</TextView>\n")),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Text mdx",height:"100px",decorators:[dist.withKnobs],mdxType:"Story"},{components:{TextView:Text_Text},props:{ellipsis:{default:Object(dist.boolean)("Ellipsis",!0)},content:{default:Object(dist.text)("Content","$123,456,789.00")}},template:'<TextView :ellipsis="ellipsis" style="background:red; width: 100px; border: 1px solid #000;">{{content}}</TextView>'})),Object(esm.mdx)("h2",{id:"props"},"Props"),Object(esm.mdx)(blocks.Props,{of:Text_Text,mdxType:"Props"}))}MDXContent.isMDXComponent=!0;var textMdx=function(){return{components:{TextView:Text_Text},props:{ellipsis:{default:Object(dist.boolean)("Ellipsis",!0)},content:{default:Object(dist.text)("Content","$123,456,789.00")}},template:'<TextView :ellipsis="ellipsis" style="background:red; width: 100px; border: 1px solid #000;">{{content}}</TextView>'}};textMdx.story={},textMdx.story.name="Text mdx",textMdx.story.parameters={mdxSource:"{\n  components: {\n    TextView\n  },\n  props: {\n    ellipsis: {\n      default: boolean('Ellipsis', true)\n    },\n    content: {\n      default: text('Content', '$123,456,789.00')\n    }\n  },\n  // 不支持 render\n  template: `<TextView :ellipsis=\"ellipsis\" style=\"background:red; width: 100px; border: 1px solid #000;\">{{content}}</TextView>`\n}"},textMdx.story.decorators=[dist.withKnobs];var componentMeta={title:"UI | Text",includeStories:["textMdx"]},mdxStoryNameToKey={"Text mdx":"textMdx"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))}});__webpack_exports__.default=componentMeta},1323:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ButtonDemo",(function(){return ButtonDemo}));__webpack_require__(22);var dist=__webpack_require__(194),Button={name:"my-button",data:function data(){return{buttonStyles:{border:"1px solid #eee",borderRadius:3,backgroundColor:"#FFFFFF",cursor:"pointer",fontSize:15,padding:"3px 10px",margin:10}}},template:'\n    <button :style="buttonStyles" @click="onClick">\n      <slot></slot>\n    </button>\n  ',methods:{onClick:function onClick(){this.$emit("click")}}},addSourceDecorator=(__webpack_require__(184).withSource,__webpack_require__(184).addSource),ButtonDemo=(__webpack_exports__.default={parameters:{storySource:{source:"import { action } from '@storybook/addon-actions';\n\nimport MyButton from './Button';\n\nexport default {\n  title: 'UI | Button',\n  component: MyButton,\n};\n\nexport const ButtonDemo = () => ({\n  components: { MyButton },\n  render(h) {\n    return <my-button onClick={this.action}>With JSX</my-button>;\n  },\n  methods: { action: action('clicked') },\n});\n\nButtonDemo.story = {\n  name: 'Button',\n  parameters: { notes: '暂无文档' }\n}\n\n",locationsMap:{"ui-button--button-demo":{startLoc:{col:26,line:10},endLoc:{col:2,line:16},startBody:{col:26,line:10},endBody:{col:2,line:16}}}}},title:"UI | Button",component:Button},addSourceDecorator((function(){return{components:{MyButton:Button},render:function render(h){var _this=this;return h("my-button",{on:{click:function click($event){for(var _len=arguments.length,attrs=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++)attrs[_key-1]=arguments[_key];_this.action.apply(_this,[$event].concat(attrs))}}},["With JSX"])},methods:{action:Object(dist.action)("clicked")}}}),{__STORY__:"import { action } from '@storybook/addon-actions';\n\nimport MyButton from './Button';\n\nexport default {\n  title: 'UI | Button',\n  component: MyButton,\n};\n\nexport const ButtonDemo = () => ({\n  components: { MyButton },\n  render(h) {\n    return <my-button onClick={this.action}>With JSX</my-button>;\n  },\n  methods: { action: action('clicked') },\n});\n\nButtonDemo.story = {\n  name: 'Button',\n  parameters: { notes: '暂无文档' }\n}\n\n",__ADDS_MAP__:{"ui-button--button-demo":{startLoc:{col:26,line:10},endLoc:{col:2,line:16},startBody:{col:26,line:10},endBody:{col:2,line:16}}},__MAIN_FILE_LOCATION__:"/Button.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"E:\\git\\learn\\learn-storybook\\multiple-project\\packages\\ui\\components\\Button",__IDS_TO_FRAMEWORKS__:{}}));ButtonDemo.story={name:"Button",parameters:{notes:"暂无文档"}}},186:function(module,exports,__webpack_require__){var api=__webpack_require__(448),content=__webpack_require__(1313);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},187:function(module,exports,__webpack_require__){var api=__webpack_require__(448),content=__webpack_require__(1317);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},463:function(module,exports,__webpack_require__){__webpack_require__(464),__webpack_require__(610),__webpack_require__(611),__webpack_require__(1261),__webpack_require__(1263),module.exports=__webpack_require__(1287)},528:function(module,exports){}},[[463,1,2]]]);
//# sourceMappingURL=main.7ad41d15a216bd7bfdf4.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{728:function(a,t,s){"use strict";s.r(t);var e=s(68),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[s("code",[a._v("webpack-bundle-analyzer")]),a._v("是一个前端分析工具，可以生成可视化大小的webpack输出文件与互动缩放树形图，为开发人员对Application进行优化提供更为直观的指导依据。")]),a._v(" "),s("h2",{attrs:{id:"angular集成webpack-bundle-analyzer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular集成webpack-bundle-analyzer"}},[a._v("#")]),a._v(" Angular集成webpack-bundle-analyzer")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[s("code",[a._v("webpack-bundle-analyzer")]),a._v("是一个开发者工具，实际发布的Application并不依赖于它，因此，我们需要将"),s("code",[a._v("webpack-bundle-analyzer")]),a._v("安装到"),s("code",[a._v("devDependencies")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -D webpack-bundle-analyzer\n")])])]),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("p",[a._v("修改package.json文件，在scripts中，增加新的执行命令：")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"bundle-report"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ng build --configuration=production --stats-json && webpack-bundle-analyzer dist/stats.json"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("p",[a._v("此时就可以使用新添加的命令对Angular Application进行分析了：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run bundle-report\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/269363/1561538113639-assets/web-upload/c6b3fa2a-2b5f-44aa-b14b-27d5f1cbe0e8.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[a._v("#")]),a._v(" 结论")]),a._v(" "),s("p",[a._v("通过使用"),s("code",[a._v("webpack-bundle-analyzer")]),a._v("，我们可以直观的看到那些模块体积比较大，这样我们就可以有针对性的对其进行优化。对应Web应用来说，文件越小是越好的，性能也会更优。")])])}),[],!1,null,null,null);t.default=n.exports}}]);
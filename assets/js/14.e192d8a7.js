(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{733:function(e,s,t){"use strict";t.r(s);var a=t(68),l=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("项目中需要将前端的静态资源打包集成到zuul中，直接将静态资源放到zuul项目的/src/main/resources/static下，通过浏览器访问，发现无法访问。原因是zuul对所有的请求都进行了路由转发。")]),e._v(" "),t("p",[e._v("一开始的配置如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("zuul:\n    servlet-path: /\n    sensitive-headers:\n")])])]),t("p",[e._v("在这种配置下，zuul对于后台其他restful服务进行的自动转发：")]),e._v(" "),t("p",[e._v("如eureka中注册了a服务，当访问"),t("code",[e._v("/a/service")]),e._v("时，zuul自动将该请求转发到a服务上。")]),e._v(" "),t("p",[e._v("通过修改配置，实现了静态资源的集成，配置如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("zuul:\n# servlet-path: /\n    sensitive-headers:\n    ignored-services: '*'\n    routes:\n        a: /a/**\n        b: /b/**\n")])])]),t("p",[e._v("禁用zuul的自动路由配置，通过指定路由，去掉"),t("code",[e._v("serlvet-path")])]),e._v(" "),t("p",[e._v("实现集成静态资源。")])])}),[],!1,null,null,null);s.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{683:function(t,e,_){"use strict";_.r(e);var r=_(68),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"typescript编码指南"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#typescript编码指南"}},[t._v("#")]),t._v(" TypeScript编码指南")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/10/20/08/39/business-1754904_960_720.jpg",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"命名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[t._v("#")]),t._v(" 命名")]),t._v(" "),_("ol",[_("li",[t._v("使用 "),_("code",[t._v("PascalCase")]),t._v(" 方式对类进行命名.")]),t._v(" "),_("li",[t._v("接口命名中不要使用前缀字母 "),_("code",[t._v("I")]),t._v(" .")]),t._v(" "),_("li",[t._v("使用 "),_("code",[t._v("PascalCase")]),t._v(" 方式对枚举值进行命名.")]),t._v(" "),_("li",[t._v("使用 "),_("code",[t._v("camelCase")]),t._v(" 方式对函数进行命名.")]),t._v(" "),_("li",[t._v("使用 "),_("code",[t._v("camelCase")]),t._v(" 方式对属性和本地变量进行命名.")]),t._v(" "),_("li",[t._v("私有属性命名不要使用前缀 "),_("code",[t._v("_")]),t._v(" .")]),t._v(" "),_("li",[t._v("尽可能在命名中使用整个单词 .")])]),t._v(" "),_("h2",{attrs:{id:"组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#components",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("组件")]),t._v(" "),_("ol",[_("li",[t._v("每个逻辑组件一个文件 (例如： parser, scanner, emitter, checker).")]),t._v(" "),_("li",[t._v("不要添加新文件. 😃")]),t._v(" "),_("li",[t._v('带有".generated.*"后缀的文件是自动生成的，不要手动去修改.')])]),t._v(" "),_("h2",{attrs:{id:"类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#types",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("类型")]),t._v(" "),_("ol",[_("li",[t._v("除非您需要跨多个组件共享，否则不要导出类型/函数.")]),t._v(" "),_("li",[t._v("不要向全局命名空间引入新类型/值.")]),t._v(" "),_("li",[t._v("共享类型应在 "),_("code",[t._v("types.ts")]),t._v(" 中定义.")]),t._v(" "),_("li",[t._v("在文件中，应首先输入类型定义.")])]),t._v(" "),_("h2",{attrs:{id:"null-和-undefined"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),_("code",[t._v("null")]),t._v(" 和 "),_("code",[t._v("undefined")])]),t._v(" "),_("ol",[_("li",[t._v("使用 "),_("code",[t._v("undefined")]),t._v(" , 不要使用 "),_("code",[t._v("null")]),t._v(" .")])]),t._v(" "),_("h2",{attrs:{id:"一般假设"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一般假设"}},[t._v("#")]),t._v(" 一般假设")]),t._v(" "),_("ol",[_("li",[t._v("将节点，符号等对象视为创建它们的组件之外的不可变对象。 不要改变它们。")]),t._v(" "),_("li",[t._v("创建后，默认情况下将数组视为不可变.")])]),t._v(" "),_("h2",{attrs:{id:"类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#classes",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("类")]),t._v(" "),_("ol",[_("li",[t._v("为保持一致性，请不要在核心编译器管道中使用类。 请改用函数闭包.")])]),t._v(" "),_("h2",{attrs:{id:"标志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标志"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#flags",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("标志")]),t._v(" "),_("ol",[_("li",[t._v("应该将类型上超过2个相关的布尔属性转换为标志。")])]),t._v(" "),_("h2",{attrs:{id:"注释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#comments",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("注释")]),t._v(" "),_("ol",[_("li",[t._v("对函数，接口，枚举和类使用JSDoc样式注释。")])]),t._v(" "),_("h2",{attrs:{id:"字符串"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#strings",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("字符串")]),t._v(" "),_("ol",[_("li",[t._v("使用双引号.")]),t._v(" "),_("li",[t._v("用户可见的所有字符串都需要进行本地化（在diagnosticMessages.json中创建一个条目）。")])]),t._v(" "),_("h2",{attrs:{id:"诊断信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#诊断信息"}},[t._v("#")]),t._v(" 诊断信息")]),t._v(" "),_("ol",[_("li",[t._v("在句子末尾使用句号.")]),t._v(" "),_("li",[t._v("对不确定的实体使用不定的文章.")]),t._v(" "),_("li",[t._v("应该命名确定的实体（这是为变量名，类型名等等。）.")]),t._v(" "),_("li",[t._v('在陈述规则时，主题应该是单数的 (e.g. "An external module cannot..." instead of "External modules cannot...").')]),t._v(" "),_("li",[t._v("使用现在时.")])]),t._v(" "),_("h2",{attrs:{id:"诊断消息代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#诊断消息代码"}},[t._v("#")]),t._v(" 诊断消息代码")]),t._v(" "),_("p",[t._v("诊断分为一般范围。 如果添加新的诊断消息，请使用大于相应范围中最后使用的数字的第一个整数。")]),t._v(" "),_("ul",[_("li",[t._v("1000 句法消息的范围")]),t._v(" "),_("li",[t._v("2000 用于语义消息")]),t._v(" "),_("li",[t._v("4000 用于声明发出消息")]),t._v(" "),_("li",[t._v("5000 用于编译器选项消息")]),t._v(" "),_("li",[t._v("6000 用于命令行编译器消息")]),t._v(" "),_("li",[t._v("7000 对于noImplicitAny消息")])]),t._v(" "),_("h2",{attrs:{id:"一般构造"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一般构造"}},[t._v("#")]),t._v(" 一般构造")]),t._v(" "),_("p",[t._v("出于各种原因，我们避免某些结构，并使用我们自己的一些结构。 其中：")]),t._v(" "),_("ol",[_("li",[t._v("不要使用 "),_("code",[t._v("for..in")]),t._v(" 语句; 相反，使用 "),_("code",[t._v("ts.forEach")]),t._v(" ， "),_("code",[t._v("ts.forEachKey")]),t._v(" 和 "),_("code",[t._v("ts.forEachValue")]),t._v(" 。 请注意它们的语义略有不同。")]),t._v(" "),_("li",[t._v("当它不是非常不方便时，尝试使用 "),_("code",[t._v("ts.forEach")]),t._v(" ， "),_("code",[t._v("ts.map")]),t._v(" 和 "),_("code",[t._v("ts.filter")]),t._v(" 而不是循环。")])]),t._v(" "),_("h2",{attrs:{id:"风格"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#风格"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#style",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),t._v("风格")]),t._v(" "),_("ol",[_("li",[t._v("使用箭头函数而不是匿名函数。必要时仅限制环绕箭头功能参数。例如， "),_("code",[t._v("（x）=> x + x")]),t._v(" 错误，但以下是正确的:")]),t._v(" "),_("li",[_("code",[t._v("x => x + x")])]),t._v(" "),_("li",[_("code",[t._v("(x,y) => x + y")])]),t._v(" "),_("li",[_("code",[t._v("<T>(x: T, y: T) => x === y")])]),t._v(" "),_("li",[t._v("始终用花括号环绕循环和条件体。 允许在同一行上的语句省略大括号.")]),t._v(" "),_("li",[t._v("开放的花括号总是与任何必要条件都在同一条线上.")]),t._v(" "),_("li",[t._v("带括号的构造应该没有周围的空格。单个空格在这些构造中使用逗号，冒号和分号。 例如：")]),t._v(" "),_("li",[_("code",[t._v("for (var i = 0, n = str.length; i < 10; i++) { }")])]),t._v(" "),_("li",[_("code",[t._v("if (x < 10) { }")])]),t._v(" "),_("li",[_("code",[t._v("function f(x: number, y: string): void { }")])]),t._v(" "),_("li",[t._v("每个变量语句使用一个声明 "),_("br"),t._v("(i.e. 使用"),_("code",[t._v("var x = 1; var y = 2;")]),t._v(" 而不是 "),_("code",[t._v("var x = 1, y = 2;")]),t._v(").")]),t._v(" "),_("li",[_("code",[t._v("else")]),t._v(" 与闭合的大括号分开.")]),t._v(" "),_("li",[t._v("每个缩进使用4个空格.")])]),t._v(" "),_("blockquote",[_("p",[t._v("原文地址: "),_("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("在实际开发过程中，可能有些编码风格和文中的有不同，但只要风格统一就好。不要不同的风格混搭使用。"),_("br"),t._v("比如：")]),t._v(" "),_("ol",[_("li",[t._v("字符串不要一会使用单引号，一会使用双引号")]),t._v(" "),_("li",[t._v("缩进有的文件使用2个空格，有的文件使用4个")])])])}),[],!1,null,null,null);e.default=v.exports}}]);
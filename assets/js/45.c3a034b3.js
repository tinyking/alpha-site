(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{708:function(a,s,t){"use strict";t.r(s);var e=t(68),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("p",[a._v("打开"),t("code",[a._v("/etc/profile")]),a._v(", 添加如下代码：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/jdk\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JRE_HOME")]),a._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])])]),t("p",[a._v("执行代码，使配置生效")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),t("p",[a._v("安装命令 "),t("strong",[a._v("需要root权限")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("alternatives --install /usr/bin/java java /opt/jdk/bin/java "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1600")]),a._v("\nalternatives --install /usr/bin/javac javac /opt/jdk/bin/javac "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1600")]),a._v("\n")])])]),t("h1",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("blockquote",[t("p",[a._v("windows下，path路径以"),t("code",[a._v(";")]),a._v("分割，bat变量"),t("code",[a._v("%JAVA_HOME%")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
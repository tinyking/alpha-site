(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{700:function(t,o,e){"use strict";e.r(o);var n=e(68),a=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.cubrid.org/blog/how-to-monitor-java-garbage-collection",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"what-is-gc-monitoring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-gc-monitoring"}},[t._v("#")]),t._v(" What is GC Monitoring?")]),t._v(" "),e("p",[e("strong",[t._v("Garbage Collection Monitoring")]),t._v(" refers to the "),e("em",[t._v("process of figuring out how JVM is running GC")]),t._v(". For example, we can find out:")]),t._v(" "),e("ol",[e("li",[t._v("When an object in young has moved to old and by how much,")]),t._v(" "),e("li",[t._v("or wehn "),e("code",[t._v("stop-the-world")]),t._v(" has occurred and for how long.")])]),t._v(" "),e("p",[t._v("GC Monitoring is carried out to see "),e("em",[t._v("if JVM is running GC efficiently")]),t._v(", and "),e("em",[t._v("to check if additional GC tuning is necessary")]),t._v(". Based on this information, the application can be edited or GC method can be changed ("),e("strong",[t._v("GC tuning")]),t._v(").")]),t._v(" "),e("h1",{attrs:{id:"how-to-monitor-gc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-monitor-gc"}},[t._v("#")]),t._v(" How to Monitor GC?")]),t._v(" "),e("p",[t._v("There are different ways to monitor GC, but the only difference is how the GC operation information is shown. GC is done by JVM, and since the GC monitoring tools disclose the GC information provided by JVM, you will get the same results on matter how you monitor GC. Therefore, you do not need to learn all methods to monitor GC, but since it only requires a little amount of time to learn each GC monitoring method, knowing a few of them can help you use the right one for different situations and environments.")]),t._v(" "),e("p",[t._v('The tools or JVM options listed below cannot be used universally regardless of the HVM vendor. This is because there is no need for a "standard" for disclosing GC information. In this example we will use '),e("strong",[t._v("HotSpot JVM")]),t._v(" (Oracle JVM). Since NHN is using Oracle(Sun) JVM, there should be no difficulties in applying the tools or JVM options that we are explaining here.")]),t._v(" "),e("p",[t._v("First, the GC monitoring methods can be separated into "),e("strong",[t._v("CUI")]),t._v(" and "),e("strong",[t._v("GUI")]),t._v(' depending on the access interface. The typical CUI GC monitoring method involves using a separate CUI application called "'),e("strong",[t._v("jstat")]),t._v('", or selecting a JVM option called "'),e("strong",[t._v("verbosegc")]),t._v('" when running JVM.')]),t._v(" "),e("p",[t._v('GUI GC monitoring is done by using a separate GUI application, and three most commonly used applications would be "jconsole", "jvisualvm" and "Visual GC".')]),t._v(" "),e("p",[t._v("Let's learn more about each method.")]),t._v(" "),e("h1",{attrs:{id:"jstat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[t._v("#")]),t._v(" jstat")]),t._v(" "),e("p",[e("strong",[t._v("jstat")]),t._v(" is a monitoring tool in HotSpot JVM. Other monitoring tools for HotSpot JVM are "),e("strong",[t._v("jps")]),t._v(" and "),e("strong",[t._v("jstatd")]),t._v(". Sometimes, you need all three tools to monitor a Java application.")]),t._v(" "),e("p",[e("strong",[t._v("jstat")]),t._v(" does not provide only the GC operation information display. It also provides class loader operation information or Just-in-Time compiler operation information. Among all the information jstat can provide, in this article we will only cover its functionality to monitor GC operating information.")]),t._v(" "),e("p",[e("strong",[t._v("jstat")]),t._v(" is located in "),e("code",[t._v("$JDK_HOME/bin")]),t._v(", so if java or javac can run without setting a separate directory from the command line, so can jstat.")]),t._v(" "),e("p",[t._v("You can try running the following in the command line.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$> jstat –gc  $<vmid$> 1000\n \nS0C       S1C       S0U    S1U      EC         EU          OC         OU         PC         PU         YGC     YGCT    FGC      FGCT     GCT\n3008.0   3072.0    0.0     1511.1   343360.0   46383.0     699072.0   283690.2   75392.0    41064.3    2540    18.454    4      1.133    19.588\n3008.0   3072.0    0.0     1511.1   343360.0   47530.9     699072.0   283690.2   75392.0    41064.3    2540    18.454    4      1.133    19.588\n3008.0   3072.0    0.0     1511.1   343360.0   47793.0     699072.0   283690.2   75392.0    41064.3    2540    18.454    4      1.133    19.588\n \n$>\n")])])]),e("p",[t._v("Just like in the example, the real type data will be output along with the following columns:")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("S0C S1C S0U S1U EC EU OC OU PC")])]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("vmid")]),t._v(" (Virtual Machine ID), as its name implies, is the ID for the VM. Java applications running either on a local machine or on a remote machine can be specified using vmid. The vmid for Java application running on a local machine is called "),e("strong",[t._v("lvmid")]),t._v(" (Local vmid), and usually is PID. To find out the lvmid, you can write the PID value using a "),e("strong",[t._v("ps")]),t._v(" command or Windows task manager, but we suggest "),e("strong",[t._v("jps")]),t._v(" because PID and lvmid does not always match. "),e("strong",[t._v("jps")]),t._v(" stands for Java PS. "),e("strong",[t._v("jps")]),t._v(" shows vmids and main method information. Just like ps shows PIDs and process names.")]),t._v(" "),e("p",[t._v("Find out the vmid of the Java application that you want to monitor by using jps, then use it as a parameter in jstat. If you use jps alone, only bootstrap information will show when several WAS instances are running in one equipment. We suggest that you use "),e("code",[t._v("ps -ef | grep java")]),t._v(" command along with jps.")]),t._v(" "),e("p",[t._v("GC performance data needs constant observation, therefore when running jstat, try to output the GC monitoring information on a regular basis.")]),t._v(" "),e("p",[t._v('For example, running "'),e("code",[t._v("jstat –gc <vmid> 1000")]),t._v('" (or 1s) will display the GC monitoring data on the console every 1 second. "'),e("code",[t._v("jstat –gc <vmid> 1000 10")]),t._v('" will display the GC monitoring information once every 1 second for 10 times in total.')]),t._v(" "),e("p",[t._v("There are many options other than "),e("code",[t._v("-gc")]),t._v(", among which GC related ones are listed below.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Option Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("gc")]),t._v(" "),e("td",[t._v("It shows the current size for each heap area and its current usage (Ede, survivor, old, etc.), total number of GC performed, and the accumulated time for GC operations.")])]),t._v(" "),e("tr",[e("td",[t._v("gccapactiy")]),t._v(" "),e("td",[t._v("It shows the minimum size (ms) and maximum size (mx) of each heap area, current size, and the number of GC performed for each area. (Does not show current usage and accumulated time for GC operations.)")])]),t._v(" "),e("tr",[e("td",[t._v("gccause")]),t._v(" "),e("td",[t._v('It shows the "information provided by -gcutil" + reason for the last GC and the reason for the current GC.')])]),t._v(" "),e("tr",[e("td",[t._v("gcnew")]),t._v(" "),e("td",[t._v("Shows the GC performance data for the new area.")])]),t._v(" "),e("tr",[e("td",[t._v("gcnewcapacity")]),t._v(" "),e("td",[t._v("Shows statistics for the size of new area.")])]),t._v(" "),e("tr",[e("td",[t._v("gcold")]),t._v(" "),e("td",[t._v("Shows the GC performance data for the old area.")])]),t._v(" "),e("tr",[e("td",[t._v("gcoldcapacity")]),t._v(" "),e("td",[t._v("Shows statistics for the size of old area.")])]),t._v(" "),e("tr",[e("td",[t._v("gcpermcapacity")]),t._v(" "),e("td",[t._v("Shows statistics for the permanent area.")])]),t._v(" "),e("tr",[e("td",[t._v("gcutil")]),t._v(" "),e("td",[t._v("Shows the usage for each heap area in percentage. Also shows the total number of GC performed and the accumulated time for GC operations.")])])])])])}),[],!1,null,null,null);o.default=a.exports}}]);
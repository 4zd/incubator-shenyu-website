"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9552],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2615:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={slug:"PredicateJudge-SPI",title:"PredicateJudge -- analyze the design based on SPI",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",tags:["SPI","Apache ShenYu"]},p=void 0,d={permalink:"/blog/PredicateJudge-SPI",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/blog/PredicateJudge-SPI-code Analysis.md",source:"@site/blog/PredicateJudge-SPI-code Analysis.md",title:"PredicateJudge -- analyze the design based on SPI",description:"Apache Shenyu has been identified as a gateway application which supports a variety of protocols and  microservice frameworks such as  Dubbo, gRPC, Spring-Cloud, etc.  To do this, the product has accomplished an elegant SPI (Service Provider Interface) as its foundation, and make the  Rule data parsing and predicting program very simple , resiliency and security. As to rule data parsing processing,  the SPI design increases the product's scalability. When appending new plugin, in most cases, the   existing module is enough for rule data parsing , otherwise it can be rapidly carry out with tiny effort.",date:"2021-09-08T07:53:26.445Z",formattedDate:"September 8, 2021",tags:[{label:"SPI",permalink:"/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:5.435,truncated:!1,nextItem:{title:"Apache ShenYu Start Demo",permalink:"/blog/start-demo"}},s=[{value:"Top level design of SPI",id:"top-level-design-of-spi",children:[]},{value:"Implementation of shenyu-plugin SPI",id:"implementation-of-shenyu-plugin-spi",children:[{value:"Design of PredicateJudge SPI",id:"design-of-predicatejudge-spi",children:[]},{value:"How to use PredicateJudge",id:"how-to-use-predicatejudge",children:[]},{value:"SPI profile",id:"spi-profile",children:[]}]},{value:"The usage of PredicateJudge SPI in Shenyu gateway",id:"the-usage-of-predicatejudge-spi-in-shenyu-gateway",children:[]},{value:"Others",id:"others",children:[{value:"Examples of PredicateJudge  judgement",id:"examples-of-predicatejudge--judgement",children:[]}]}],u={toc:s};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache Shenyu")," has been identified as a gateway application which supports a variety of protocols and  microservice frameworks such as  Dubbo, gRPC, Spring-Cloud, etc.  To do this, the product has accomplished an elegant ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," (Service Provider Interface) as its foundation, and make the  Rule data parsing and predicting program very simple , resiliency and security. As to rule data parsing processing,  the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," design increases the product's scalability. When appending new plugin, in most cases, the   existing module is enough for rule data parsing , otherwise it can be rapidly carry out with tiny effort. "),(0,r.kt)("h2",{id:"top-level-design-of-spi"},"Top level design of SPI"),(0,r.kt)("p",null," In ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," archtecure is defined in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-spi"))," module and composed of three parts:   ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," interface,  factory  design pattern,  and configuration file. There is  two interface defined as annotation: @SPI and @Join. When class file with  @Join annotation,  it means that it will join as an ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," extension class, in other words, it is an application or registration.  The  @SPI denotes that the class is an ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," extension class."),(0,r.kt)("p",null,"Fig 1 classes in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-spi"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"toplevel-SPI",src:a(3454).Z})),(0,r.kt)("p",null,"The SPI configuration directory is  ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/shenyu/."),"  that is specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHENYU_DIRECTORY = "META-INF/shenyu/";\n')),(0,r.kt)("p",null,"When starting the gateway system , the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionLoader")," will scan the profiles under  ",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIRECTORY"),',  in turn, load and validate and then  initialize each configed class. The configuration file uses  "Key = class-file" format.  During operation of the system,  the corresponding ',(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," implementation class will be invoked through the factory mechanism."),(0,r.kt)("h2",{id:"implementation-of-shenyu-plugin-spi"},"Implementation of shenyu-plugin SPI"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin"))," module,  various plugins for HTTP routing are implemented according to the plugin mechanism, including  request, redirect, response and rewrite, etc.  Plugins for microservice frameworks such as Dubbo, gRPC , Spring-Cloud and Tars have been developed in the gateway product.  And plugins are still increasing. If  no such  dependent module fo parsing and judge routing  parameters and data,  each plugin is necessary to implement the parsing functions, and has to frequently  modify  to support their matching rules, such as wildcard, regular expression, SpEL expression, etc. Therefore,  they made a high level abstraction for routing parameter data following the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," framework in  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin"))," module.  The rule analysis consists of three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ParameterData"),"- parameter data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PredicatJudge"),"-  predicate whether the actural data match the rule")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"- combine multiple conditions, the final used strategy"))),(0,r.kt)("p",null,"These implementation classes are defined in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-base"))," module. In each plugin, resolution and predication of  the routing parameter can be realized through ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin")," using the above  ",(0,r.kt)("inlineCode",{parentName:"p"},"SPIs"),". That is dedicated and easy to extend, in line with SOLID principle."),(0,r.kt)("p",null,"\u200b      This section analyzes the  ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictJudge")," in detail. You can find the dependency to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-spi"))," in the pom.xml of this module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spi</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"design-of-predicatejudge-spi"},"Design of PredicateJudge SPI"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"  is used to analyze and judge various routing rules configed in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu")," gateway.  The name and functions of this SPI are similar to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html"},"Predicate"),"  in Java, but the acceptance behavior is further  abstracted applying for routing aspect. This ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," is implemented through the Factory pattern.  Let's look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Predictejudge")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SPI\n@FunctionalInterface\npublic interface PredicateJudge {\n\n    /**\n     * judge conditionData and realData is match.\n     *\n     * @param conditionData {@linkplain ConditionData}\n     * @param realData       realData\n     * @return true is pass  false is not pass.\n     */\n    Boolean judge(ConditionData conditionData, String realData);\n}\n")),(0,r.kt)("p",null,"The class diagram is as follows:"),(0,r.kt)("p",null,"Fig 2-",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate")," class diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"predicate-class-diagram",src:a(4751).Z})),(0,r.kt)("p",null,"The important  methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudgeFactory"),"  are shown as follows:"),(0,r.kt)("p",null,"Whenever need to parsing and matching routing data, you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static PredicateJudge newInstance(final String operator) {\n        return ExtensionLoader.getExtensionLoader(PredicateJudge.class).getJoin(processSpecialOperator(operator));\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static Boolean judge(final ConditionData conditionData, final String realData) {\n        if (Objects.isNull(conditionData) || StringUtils.isBlank(realData)) {\n            return false;\n        }\n        return newInstance(conditionData.getOperator()).judge(conditionData, realData);\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConditionData")," contains of four attributes of String type: ",(0,r.kt)("inlineCode",{parentName:"p"},"paramType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),",",(0,r.kt)("inlineCode",{parentName:"p"},"paramName"),",",(0,r.kt)("inlineCode",{parentName:"p"},"paramValue")," "),(0,r.kt)("h4",{id:"paramtypeenum"},"ParamTypeEnum"),(0,r.kt)("p",null,"Where ",(0,r.kt)("strong",{parentName:"p"},"paramType")," must be the  enumeration type  ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamTypeEnum"),". The default supported ",(0,r.kt)("inlineCode",{parentName:"p"},"paramType")," are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"post, uri,query, host, ip,header, cookie,req_method\n")),(0,r.kt)("h4",{id:"operatorenum"},"OperatorEnum"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"operator")," must be the enumeration type ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatorEnum"),", currently  supported operators are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   match, =,regex, >,<, contains, SpEL,  Groovy, TimeBefore,TimeAfter\n")),(0,r.kt)("p",null,"Base on the above defination , the plugin module provides  the following  eight ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),"  implemetation classes to realize the logic of these operators respectively. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Implementation class"),(0,r.kt)("th",{parentName:"tr",align:null},"Logic description"),(0,r.kt)("th",{parentName:"tr",align:null},"corespondece operator"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ContainsPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},'"contain" relation, the actual data needs contain the specified string'),(0,r.kt)("td",{parentName:"tr",align:null},"contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EqualsPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},'equals "="'),(0,r.kt)("td",{parentName:"tr",align:null},"=")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MatchPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"used for URI context path matching"),(0,r.kt)("td",{parentName:"tr",align:null},"match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimerAfterPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the local time is after the specified time"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeBefore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimerBeforePredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the local time is before the specified time"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeAfter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GroovyPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"used Groovy syntax toe set ParamName and value data"),(0,r.kt)("td",{parentName:"tr",align:null},"Groovy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RegexPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"used Regex to match"),(0,r.kt)("td",{parentName:"tr",align:null},"regex")))),(0,r.kt)("h3",{id:"how-to-use-predicatejudge"},"How to use PredicateJudge"),(0,r.kt)("p",null,"When you want to parse parameters, you only need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudgeFactory")," as follows. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PredicateJudgeFactory.judge(final ConditionData conditionData, final String realData);\n")),(0,r.kt)("h3",{id:"spi-profile"},"SPI profile"),(0,r.kt)("p",null,"The implementation class is configed in the file under directory ",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIRECTORY")," . It  will be loaded and cached at startup. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"equals=org.apache.shenyu.plugin.base.condition.judge.EqualsPredicateJudge\n\ncontains=org.apache.shenyu.plugin.base.condition.judge.ContainsPredicateJudge\nGroovy=org.apache.shenyu.plugin.base.condition.judge.GroovyPredicateJudge\nmatch=org.apache.shenyu.plugin.base.condition.judge.MatchPredicateJudge\nregex=org.apache.shenyu.plugin.base.condition.judge.RegexPredicateJudge\nSpEL=org.apache.shenyu.plugin.base.condition.judge.SpELPredicateJudge\nTimeAfter=org.apache.shenyu.plugin.base.condition.judge.TimerAfterPredicateJudge\nTimeBefore=org.apache.shenyu.plugin.base.condition.judge.TimerBeforePredicateJudge\n")),(0,r.kt)("h2",{id:"the-usage-of-predicatejudge-spi-in-shenyu-gateway"},"The usage of PredicateJudge SPI in Shenyu gateway"),(0,r.kt)("p",null,"Most plugins in ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu")," are inherited from ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin"),".  In this abstract class, the filter functions (selection and matching) are achieved through  ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," will be invoked from ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"  to predicate each condition data. "),(0,r.kt)("p",null,"Fig 3- class diagram of plugins with ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin-SPI-class-diagram",src:a(7554).Z})),(0,r.kt)("p",null,"The process from client request  calling the routing parsing moodule is showed as following chart."),(0,r.kt)("p",null,"Fig 4- flow chart for Shenyu gateway filter  with parameter processing"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SPI-flow-diagram",src:a(5138).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When startup, the system will load ",(0,r.kt)("inlineCode",{parentName:"li"},"SPI")," classes from profile and cache them."),(0,r.kt)("li",{parentName:"ul"},"When the client sends a new request to the Shenyu gateway,  will call the corresponding plugin within  the gateway."),(0,r.kt)("li",{parentName:"ul"},"When analyzing real data with routing rules, the  ",(0,r.kt)("inlineCode",{parentName:"li"},"PredicateJudge")," implementation class  will be invoked according to the contained operator.")),(0,r.kt)("h2",{id:"others"},"Others"),(0,r.kt)("h3",{id:"examples-of-predicatejudge--judgement"},"Examples of PredicateJudge  judgement"),(0,r.kt)("h4",{id:"containspredicatejudge---contains-rule"},'ContainsPredicateJudge- " contains\u201c rule'),(0,r.kt)("p",null,"For example, giving a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConditionData"),"  with: ",(0,r.kt)("inlineCode",{parentName:"p"},"paramType"),'="uri", ',(0,r.kt)("inlineCode",{parentName:"p"},"paramValue"),' \u662f "/http/**",  when using the "contains" relation: ',(0,r.kt)("inlineCode",{parentName:"p"},"ContainsPredicateJudge"),", the matching result is as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"ConditionData"),'  (operator="contains")'),(0,r.kt)("th",{parentName:"tr",align:null},"real data"),(0,r.kt)("th",{parentName:"tr",align:null},"judge result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'paramType="uri",    "/http/**"'),(0,r.kt)("td",{parentName:"tr",align:null},'"/http/**/test"'),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"/test/http/**/other"'),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"/http1/**"'),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"About other ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," implemetantion classes, you  can  refer to the code and test classes."))}c.isMDXComponent=!0},5138:function(e,t,a){t.Z=a.p+"assets/images/SPI-flow-diagram-590f2cd298ae7655330a62a2010b006e.png"},7554:function(e,t,a){t.Z=a.p+"assets/images/plugin-SPI-class-diagram-fa432591b833ff178cb662ce352f5b23.png"},4751:function(e,t,a){t.Z=a.p+"assets/images/predicate-class-diagram-67a93b8c3e49800b23fe717c22027c54.png"},3454:function(e,t){t.Z="data:image/png;base64,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"}}]);
import{_ as o,c as t,o as i,j as e,a as n}from"./chunks/framework.CbTTSUx4.js";const I=JSON.parse('{"title":"52.Vue3 中 CompositionAPI 的优势是？","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewVue/52.Vue3中 CompositionAPI 的优势是？.md","filePath":"InterviewVue/52.Vue3中 CompositionAPI 的优势是？.md"}'),s={name:"InterviewVue/52.Vue3中 CompositionAPI 的优势是？.md"},a=e("h1",{id:"_52-vue3-中-compositionapi-的优势是",tabindex:"-1"},[n("52.Vue3 中 CompositionAPI 的优势是？ "),e("a",{class:"header-anchor",href:"#_52-vue3-中-compositionapi-的优势是","aria-label":'Permalink to "52.Vue3 中 CompositionAPI 的优势是？"'},"​")],-1),l=e("ul",null,[e("li",null,"在 Vue2 中采用的是 OptionsAPI，用户提供的 data、props、methods、computed、watch 等属性(用户编写复杂业务逻辑会出现反复横跳的问题)"),e("li",null,"Vue2 中所有的属性都是通过 this 访问，this 存在指向明确问题"),e("li",null,"Vue2 中很多未使用的方法或者属性依旧会被打包，并且所有全局 API 都在 Vue 对象上公开。CompositionAPI 对 tree-shaking 更加友好，代码也更容易压缩"),e("li",null,"组件逻辑共享问题，Vue2 采用 mixins 实现组件之间的逻辑共享，但是会有数据来源不明确，命名冲突等问题。Vue3 采用 CompositionAPI 提供公共逻辑非常方便"),e("li",null,"简单的组件仍然可以采用 OptionsAPI 进行编写，compositionAPI 在复杂的逻辑中有着明显的优势。")],-1),u=[a,l];function p(r,_,c,m,d,V){return i(),t("div",null,u)}const P=o(s,[["render",p]]);export{I as __pageData,P as default};

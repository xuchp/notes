import{_ as e,c as a,o as t,a7 as i}from"./chunks/framework.CbTTSUx4.js";const p=JSON.parse('{"title":"47. 谈谈你对 vuex 的个人理解","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewVue/47.谈谈你对 vuex 的个人理解.md","filePath":"InterviewVue/47.谈谈你对 vuex 的个人理解.md"}'),l={name:"InterviewVue/47.谈谈你对 vuex 的个人理解.md"},o=i('<h1 id="_47-谈谈你对-vuex-的个人理解" tabindex="-1">47. 谈谈你对 vuex 的个人理解 <a class="header-anchor" href="#_47-谈谈你对-vuex-的个人理解" aria-label="Permalink to &quot;47. 谈谈你对 vuex 的个人理解&quot;">​</a></h1><h3 id="_1-1-概念" tabindex="-1">1.1 概念 <a class="header-anchor" href="#_1-1-概念" aria-label="Permalink to &quot;1.1 概念&quot;">​</a></h3><ul><li>vuex 是一个专门为 Vue.js 应用程序开发的<strong>状态管理模式</strong>，采用集中存储管理应用的所有组件的状态。核心就是解决数据的共享。</li><li>以相应的规则保证状态以一种可预测的方式发生变化。</li></ul><p><img src="https://gitee.com/xuchp/typora-pics/raw/master/images/vuex.png" alt="vuex"></p><h3 id="_1-2-状态修改" tabindex="-1">1.2 状态修改 <a class="header-anchor" href="#_1-2-状态修改" aria-label="Permalink to &quot;1.2 状态修改&quot;">​</a></h3><ul><li>组件中 commit() -&gt; mutation -&gt;修改状态</li><li>组件中 dispatch() -&gt; action(为了解决接口的复用问题，封装公共的逻辑) -&gt; commit() -&gt;mutation -&gt;修改状态</li></ul><h3 id="_1-3-缺点" tabindex="-1">1.3 缺点 <a class="header-anchor" href="#_1-3-缺点" aria-label="Permalink to &quot;1.3 缺点&quot;">​</a></h3><p>Vuex 中 store 只有一份，复杂的数据需要依赖于模块。Vuex 状态是一个树状结构，最终会将模块的状态挂载到根模块上。</p><ul><li>模块和状态的名字冲突</li><li>数据不够扁平化，调用的时候过长</li><li>更改状态 mutation 和 action 的选取</li><li>模块需要增加 namespaced</li><li>对 TS 支持并不友好</li><li>……</li></ul><h3 id="_1-4-原理" tabindex="-1">1.4 原理 <a class="header-anchor" href="#_1-4-原理" aria-label="Permalink to &quot;1.4 原理&quot;">​</a></h3><p>对于 Vuex3 核心就是通过 new Vue()创建了一个 Vue 实例，进行数据共享。</p><p>对于 Vuex4 核心就是通过创建一个响应式对象进行数据共享<code>reactive()</code></p>',12),r=[o];function _(u,n,c,s,h,d){return t(),a("div",null,r)}const x=e(l,[["render",_]]);export{p as __pageData,x as default};

import{_ as e,c as t,o as a,a7 as c}from"./chunks/framework.CbTTSUx4.js";const s=JSON.parse('{"title":"11. Watch&computed","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewVue/11.watch&computed.md","filePath":"InterviewVue/11.watch&computed.md"}'),o={name:"InterviewVue/11.watch&computed.md"},r=c('<h1 id="_11-watch-computed" tabindex="-1">11. Watch&amp;computed <a class="header-anchor" href="#_11-watch-computed" aria-label="Permalink to &quot;11. Watch&amp;computed&quot;">​</a></h1><p>Vue2中有三种 watcher(渲染 watcher、计算属性 watcher、用户 watcher)</p><p>Vue3 中有三种 effect(渲染 effect、计算属性 effect、用户 effect)</p><h3 id="_1-1-computed" tabindex="-1">1.1 computed <a class="header-anchor" href="#_1-1-computed" aria-label="Permalink to &quot;1.1 computed&quot;">​</a></h3><ul><li>计算属性仅当用户取值时才会执行对应的方法</li><li>computed属性是具备缓存的，依赖的值不发生变化，对其取值时计算属性方法不会重新执行。</li><li>计算属性可以简化模板中的复杂表达式</li><li>计算属性中不支持异步逻辑</li><li>computed属性是可以在模板中使用的</li></ul><h3 id="_1-2-watch" tabindex="-1">1.2 watch <a class="header-anchor" href="#_1-2-watch" aria-label="Permalink to &quot;1.2 watch&quot;">​</a></h3><p>watch 则是监控值的变化，当值发生变化时调用对应的回调函数。经常用于监控某个值的变化，进行一些操作。(异步要注意静态问题)</p><blockquote><p>Vue3提供了 onCleanUp 函数，让用户方便使用也解决了清理问题</p></blockquote><h3 id="_1-3-源码剖析" tabindex="-1">1.3 源码剖析 <a class="header-anchor" href="#_1-3-源码剖析" aria-label="Permalink to &quot;1.3 源码剖析&quot;">​</a></h3>',9),h=[r];function i(d,l,u,_,p,n){return a(),t("div",null,h)}const f=e(o,[["render",i]]);export{s as __pageData,f as default};
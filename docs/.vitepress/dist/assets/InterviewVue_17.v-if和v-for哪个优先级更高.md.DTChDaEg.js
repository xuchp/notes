import{_ as i,c as s,o as a,a7 as t}from"./chunks/framework.CbTTSUx4.js";const f=JSON.parse('{"title":"17. v-if 和 v-for 哪个优先级更高","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewVue/17.v-if和v-for哪个优先级更高.md","filePath":"InterviewVue/17.v-if和v-for哪个优先级更高.md"}'),e={name:"InterviewVue/17.v-if和v-for哪个优先级更高.md"},n=t(`<h1 id="_17-v-if-和-v-for-哪个优先级更高" tabindex="-1">17. v-if 和 v-for 哪个优先级更高 <a class="header-anchor" href="#_17-v-if-和-v-for-哪个优先级更高" aria-label="Permalink to &quot;17. v-if 和 v-for 哪个优先级更高&quot;">​</a></h1><p>v-for 和 v-if 避免在同一个标签中使用，如果遇到需要同事使用时可以考虑写成计算属性的方式。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--应当避免这种写法 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i in arr&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;exists&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>在 Vue2 中解析时，先解析 v-for 再解析 v-if。会导致循环后再对每一项进行判断，浪费性能</li><li>在 Vue3 中，v-if 优先级高于 v-for</li></ul>`,4),l=[n];function r(h,o,p,k,_,d){return a(),s("div",null,l)}const c=i(e,[["render",r]]);export{f as __pageData,c as default};

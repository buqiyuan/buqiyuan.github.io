import{_ as s,c as a,k as n,a as l,t as p,V as o,o as e}from"./chunks/framework.37cce752.js";const t=JSON.parse('{"title":"Typescirpt 之协变与逆变","description":"深入学习Typescript的关键特性之 Covariance and contravariance","frontmatter":{"date":"2021/08/08","title":"Typescirpt 之协变与逆变","description":"深入学习Typescript的关键特性之 Covariance and contravariance","tags":["typescript"]},"headers":[],"relativePath":"essay/2021/Typescript之协变与逆变.md","filePath":"essay/2021/Typescript之协变与逆变.md"}'),c={name:"essay/2021/Typescript之协变与逆变.md"},r={id:"frontmatter-title",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),C=o('<p>typescript 除了静态类型检查，其实还有一各特点说的很恰当，就是<code>类型编程</code>，这点与 java 对比的话，比 java 灵活的多。 如果有面向对象编程基础的话，看泛型并不难，从教程中看到协变、逆变这两个词就有点高大上，再看 wiki 定义</p><blockquote><p>协变与逆变(Covariance and contravariance )是在计算机科学中，描述具有父/子型别关系的多个型别通过型别构造器、构造出的多个复杂型别之间是否有父/子型别关系的用语。</p></blockquote><p>懵不懵？</p><p>白话版：具有父子关系的多个类型，在通过某种构造关系构造成的新的类型，如果还具有父子关系则是协变的，而关系逆转了就是逆变的</p><h2 id="协变的例子" tabindex="-1">协变的例子 <a class="header-anchor" href="#协变的例子" aria-label="Permalink to &quot;协变的例子&quot;">​</a></h2><p>和 java 类似的，从对象的角度来讲，Animal 是父类，Dog 是子类，子类更具象，属性或者方法更多，向上赋值没问题，可以理解为<code>砍掉</code>了多余的属性</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">wangwang</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> animal1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> dog1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span></span>\n<span class="line"><span style="color:#A6ACCD;">animal1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dog1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrAnimal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Animal</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrDog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Dog</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 兼容，可以赋值，这个就是协变，也就是Array衍生后的类型是协变</span></span>\n<span class="line"><span style="color:#A6ACCD;">arrAnimal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arrDog</span></span></code></pre></div><h2 id="逆变的例子" tabindex="-1">逆变的例子 <a class="header-anchor" href="#逆变的例子" aria-label="Permalink to &quot;逆变的例子&quot;">​</a></h2><p>具有父子关系的类型，如果用在函数参数的时候，与原始类型项目，赋值兼容性相反了，就是逆变，<code>从函数调用来讲，成员属性和方法要全乎的才能调用，不然如果实现里面用到了没有的属性就操作了呀</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">wangwang</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AnimalFn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Animal</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DogFn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> animalFn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AnimalFn</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> dogFn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DogFn</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 这样不行</span></span>\n<span class="line"><span style="color:#A6ACCD;">animalFn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dogFn </span><span style="color:#676E95;font-style:italic;">// [!code  error]</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 这样可以 也就是放在函数参数上的话 函数之间的关系逆变了</span></span>\n<span class="line"><span style="color:#A6ACCD;">dogFn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> animalFn</span></span></code></pre></div><h2 id="双向协变" tabindex="-1">双向协变 <a class="header-anchor" href="#双向协变" aria-label="Permalink to &quot;双向协变&quot;">​</a></h2><p>Ts 在函数参数的比较中实际上默认采取的策略是双向协变：只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。</p><p>如果害怕调用出问题，可以通过<code>tsconfig.json</code>中修改<code>strictFunctionType</code>属性来严格控制协变和逆变。</p>',13);const A=s(c,[["render",function(s,o,t,c,A,i){return e(),a("div",null,[n("h1",r,[l(p(s.$frontmatter.title)+" ",1),y]),C])}]]);export{t as __pageData,A as default};

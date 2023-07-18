import{_ as s,c as a,k as n,a as l,t as p,V as o,o as e}from"./chunks/framework.37cce752.js";const t=JSON.parse('{"title":"CSS命名——BEM","description":"","frontmatter":{"title":"CSS命名——BEM","author":"猿谋人","date":"2022/10/06","order":1,"tags":["CSS","规范"],"editLink":false},"headers":[],"relativePath":"categories/CSS/CSS 命名--BEM.md","filePath":"categories/CSS/CSS 命名--BEM.md"}'),c={name:"categories/CSS/CSS 命名--BEM.md"},r={id:"frontmatter-title",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),i=o('<h2 id="bem-是什么" tabindex="-1">BEM 是什么 <a class="header-anchor" href="#bem-是什么" aria-label="Permalink to &quot;BEM 是什么&quot;">​</a></h2><p>BEM 是一种 CSS 命名规范。</p><p>BEM 代表 “块（block），元素（element），修饰符（modifier）”。</p><p>在选择器中，由以下三种符号来表示扩展的关系：</p><pre><code>-   中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。\n__  双下划线：双下划线用来连接块和块的子元素\n_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态\n</code></pre><h2 id="使用-bem-示例对比" tabindex="-1">使用 BEM 示例对比 <a class="header-anchor" href="#使用-bem-示例对比" aria-label="Permalink to &quot;使用 BEM 示例对比&quot;">​</a></h2><p>Block</p><p>如下面的例子，li.item 是列表的一个子元素</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 常规写法和BEM写法相同 */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span></span></code></pre></div><p>元素(Element)</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 常规写法 */</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Pricing</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Contact</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">/* BEM写法 */</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list__item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Pricing</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list__item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Contact</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 常规写法 */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* BEM写法 */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list__item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>修饰符(modifier)</p><p>一个“修饰符”可以理解为一个块的特定状态！</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 常规写法 */</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Pricing</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Contact</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">/* BEM写法 */</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list__item-active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Pricing</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list__item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Contact</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 常规写法 */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* BEM写法 */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list__item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list__item_active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="bem-的好处" tabindex="-1">BEM 的好处 <a class="header-anchor" href="#bem-的好处" aria-label="Permalink to &quot;BEM 的好处&quot;">​</a></h2><ul><li>摆脱特异性的困扰</li><li>修复继承问题</li><li>停止担心命名</li></ul><h2 id="css-命名几大原则" tabindex="-1">css 命名几大原则 <a class="header-anchor" href="#css-命名几大原则" aria-label="Permalink to &quot;css 命名几大原则&quot;">​</a></h2><h3 id="短命名比长命名会更好" tabindex="-1">短命名比长命名会更好 <a class="header-anchor" href="#短命名比长命名会更好" aria-label="Permalink to &quot;短命名比长命名会更好&quot;">​</a></h3><p>因为短命名缩短书写时间，也减小了 css 文件大小！例如这个例子:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//  推荐</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">some-intro</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// 不推荐</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">some-introduction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="组合命名比单命名会更好" tabindex="-1">组合命名比单命名会更好 <a class="header-anchor" href="#组合命名比单命名会更好" aria-label="Permalink to &quot;组合命名比单命名会更好&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 不建议</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">//推荐</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cs-header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="面向属性的命名和面向语义的命名" tabindex="-1">面向属性的命名和面向语义的命名 <a class="header-anchor" href="#面向属性的命名和面向语义的命名" aria-label="Permalink to &quot;面向属性的命名和面向语义的命名&quot;">​</a></h3><p>面向属性的命名指选择器的命名是跟着具体的 CSS 样式走的，与项目、页面、模块统统没有关系。例如，比较经典的清除浮动类名.clearfix:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">clearfix</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> table</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> both</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>面向语义的命名则是根据应用元素所处的上下文来命名的。例如:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上述两种命名方式各有优缺点:</p><ol><li>面向属性</li></ol><ul><li><strong>「优点」</strong>:在于 CSS 的重用率高，性能最佳，即插即用，方便快捷，开发也极为迅速，因为它省去了大量在 HTML 和 CSS 文件之间切换的时间。</li><li><strong>「缺点」</strong>：在于由于属性单一，其适用场景有限，另外因为使用方便，易被过度使用，从而带来更高的维护成本。</li></ul><ol><li>面向语义</li></ol><ul><li>**「优点」**是应用场景广泛，可以实现非常精致的布局效果，扩展方便；</li><li><strong>「缺点」</strong>：在于代码啰唆，开发效率一般，因为所有 HTML 都需要命名，哪怕是一个 10 像素的间距。这就导致很多开发者要么选择直接使用标签选择器，要么就选择一个简单的类名，然后通过父子关系限定样式，结果带来了更糟糕的维护问题。</li></ul><h2 id="命名汇总推荐" tabindex="-1">命名汇总推荐 <a class="header-anchor" href="#命名汇总推荐" aria-label="Permalink to &quot;命名汇总推荐&quot;">​</a></h2><h3 id="状态" tabindex="-1">状态 <a class="header-anchor" href="#状态" aria-label="Permalink to &quot;状态&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">前一个 prev</span></span>\n<span class="line"><span style="color:#A6ACCD;">后一个 next</span></span>\n<span class="line"><span style="color:#A6ACCD;">当前的 current</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">显示的 show</span></span>\n<span class="line"><span style="color:#A6ACCD;">隐藏的 hide</span></span>\n<span class="line"><span style="color:#A6ACCD;">打开的 open</span></span>\n<span class="line"><span style="color:#A6ACCD;">关闭的 close</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">选中的 selected</span></span>\n<span class="line"><span style="color:#A6ACCD;">有效的 active</span></span>\n<span class="line"><span style="color:#A6ACCD;">默认的 default</span></span>\n<span class="line"><span style="color:#A6ACCD;">反转的 toggle</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">禁用的 disabled</span></span>\n<span class="line"><span style="color:#A6ACCD;">危险的 danger</span></span>\n<span class="line"><span style="color:#A6ACCD;">主要的 primary</span></span>\n<span class="line"><span style="color:#A6ACCD;">成功的 success</span></span>\n<span class="line"><span style="color:#A6ACCD;">提醒的 info</span></span>\n<span class="line"><span style="color:#A6ACCD;">警告的 warning</span></span>\n<span class="line"><span style="color:#A6ACCD;">出错的 error</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">大型的 lg</span></span>\n<span class="line"><span style="color:#A6ACCD;">小型的 sm</span></span>\n<span class="line"><span style="color:#A6ACCD;">超小的 xs</span></span></code></pre></div><h3 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">文档 doc</span></span>\n<span class="line"><span style="color:#A6ACCD;">头部 header(hd)</span></span>\n<span class="line"><span style="color:#A6ACCD;">主体 body</span></span>\n<span class="line"><span style="color:#A6ACCD;">尾部 footer(ft)</span></span>\n<span class="line"><span style="color:#A6ACCD;">主栏 main</span></span>\n<span class="line"><span style="color:#A6ACCD;">侧栏 side</span></span>\n<span class="line"><span style="color:#A6ACCD;">容器 box/container</span></span></code></pre></div><h3 id="通用部件" tabindex="-1">通用部件 <a class="header-anchor" href="#通用部件" aria-label="Permalink to &quot;通用部件&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">列表 list</span></span>\n<span class="line"><span style="color:#A6ACCD;">列表项 item</span></span>\n<span class="line"><span style="color:#A6ACCD;">表格 table</span></span>\n<span class="line"><span style="color:#A6ACCD;">表单 form</span></span>\n<span class="line"><span style="color:#A6ACCD;">链接 link</span></span>\n<span class="line"><span style="color:#A6ACCD;">标题 caption/heading/title</span></span>\n<span class="line"><span style="color:#A6ACCD;">菜单 menu</span></span>\n<span class="line"><span style="color:#A6ACCD;">集合 group</span></span>\n<span class="line"><span style="color:#A6ACCD;">条 bar</span></span>\n<span class="line"><span style="color:#A6ACCD;">内容 content</span></span>\n<span class="line"><span style="color:#A6ACCD;">结果 result</span></span></code></pre></div><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">按钮 button(btn)</span></span>\n<span class="line"><span style="color:#A6ACCD;">字体 icon</span></span>\n<span class="line"><span style="color:#A6ACCD;">下拉菜单 dropdown</span></span>\n<span class="line"><span style="color:#A6ACCD;">工具栏 toolbar</span></span>\n<span class="line"><span style="color:#A6ACCD;">分页 page</span></span>\n<span class="line"><span style="color:#A6ACCD;">缩略图 thumbnail</span></span>\n<span class="line"><span style="color:#A6ACCD;">警告框 alert</span></span>\n<span class="line"><span style="color:#A6ACCD;">进度条 progress</span></span>\n<span class="line"><span style="color:#A6ACCD;">导航条 navbar</span></span>\n<span class="line"><span style="color:#A6ACCD;">导航 nav</span></span>\n<span class="line"><span style="color:#A6ACCD;">子导航 subnav</span></span>\n<span class="line"><span style="color:#A6ACCD;">面包屑 breadcrumb(crumb)</span></span>\n<span class="line"><span style="color:#A6ACCD;">标签 label</span></span>\n<span class="line"><span style="color:#A6ACCD;">徽章 badge</span></span>\n<span class="line"><span style="color:#A6ACCD;">巨幕 jumbotron</span></span>\n<span class="line"><span style="color:#A6ACCD;">面板 panel</span></span>\n<span class="line"><span style="color:#A6ACCD;">洼地 well</span></span>\n<span class="line"><span style="color:#A6ACCD;">标签页 tab</span></span>\n<span class="line"><span style="color:#A6ACCD;">提示框 tooltip</span></span>\n<span class="line"><span style="color:#A6ACCD;">弹出框 popover</span></span>\n<span class="line"><span style="color:#A6ACCD;">轮播图 carousel</span></span>\n<span class="line"><span style="color:#A6ACCD;">手风琴 collapse</span></span>\n<span class="line"><span style="color:#A6ACCD;">定位浮标 affix</span></span></code></pre></div><h3 id="语义化小部件" tabindex="-1">语义化小部件 <a class="header-anchor" href="#语义化小部件" aria-label="Permalink to &quot;语义化小部件&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">品牌 brand</span></span>\n<span class="line"><span style="color:#A6ACCD;">标志 logo</span></span>\n<span class="line"><span style="color:#A6ACCD;">额外部件 addon</span></span>\n<span class="line"><span style="color:#A6ACCD;">版权 copyright</span></span>\n<span class="line"><span style="color:#A6ACCD;">注册 regist(reg)</span></span>\n<span class="line"><span style="color:#A6ACCD;">登录 login</span></span>\n<span class="line"><span style="color:#A6ACCD;">搜索 search</span></span>\n<span class="line"><span style="color:#A6ACCD;">热点 hot</span></span>\n<span class="line"><span style="color:#A6ACCD;">帮助 help</span></span>\n<span class="line"><span style="color:#A6ACCD;">信息 info</span></span>\n<span class="line"><span style="color:#A6ACCD;">提示 tips</span></span>\n<span class="line"><span style="color:#A6ACCD;">开关 toggle</span></span>\n<span class="line"><span style="color:#A6ACCD;">新闻 news</span></span>\n<span class="line"><span style="color:#A6ACCD;">广告 advertise(ad)</span></span>\n<span class="line"><span style="color:#A6ACCD;">排行 top</span></span>\n<span class="line"><span style="color:#A6ACCD;">下载 download</span></span></code></pre></div><h3 id="功能部件" tabindex="-1">功能部件 <a class="header-anchor" href="#功能部件" aria-label="Permalink to &quot;功能部件&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">左浮动 fl</span></span>\n<span class="line"><span style="color:#A6ACCD;">右浮动 fr</span></span>\n<span class="line"><span style="color:#A6ACCD;">清浮动 clear</span></span></code></pre></div><h2 id="命名网站推荐" tabindex="-1">命名网站推荐 <a class="header-anchor" href="#命名网站推荐" aria-label="Permalink to &quot;命名网站推荐&quot;">​</a></h2><p><a href="https://link.zhihu.com/?target=https%3A//unbug.github.io/codelf/%23%25E6%2595%25B0%25E6%258D%25AE%25E6%25B1%25A0" target="_blank" rel="noreferrer">codelf</a></p><h2 id="参考文档" tabindex="-1">参考文档： <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档：&quot;">​</a></h2><ol><li><p>张鑫旭的《css 选择世界》</p></li><li><p><a href="https://link.zhihu.com/?target=https%3A//www.cnblogs.com/qianxiaox/p/13816077.html" target="_blank" rel="noreferrer">CSS 的 BEM 规范学习</a></p></li></ol>',49);const y=s(c,[["render",function(s,o,t,c,y,C){return e(),a("div",null,[n("h1",r,[l(p(s.$frontmatter.title)+" ",1),D]),i])}]]);export{t as __pageData,y as default};

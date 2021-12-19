"use strict";(self.webpackChunkMP_CU_Doc=self.webpackChunkMP_CU_Doc||[]).push([[980],{6856:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4f4ccb8f",path:"/guide/configuration.html",title:"配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"目录结构",slug:"目录结构",children:[]},{level:2,title:"配置环境",slug:"配置环境",children:[]},{level:2,title:"配置文件",slug:"配置文件",children:[]},{level:2,title:"配置说明",slug:"配置说明",children:[{level:3,title:"config",slug:"config",children:[]},{level:3,title:"data",slug:"data",children:[]},{level:3,title:"methods",slug:"methods",children:[]}]}],filePathRelative:"guide/configuration.md",git:{updatedTime:1639913417e3}}},4530:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6252);const t=(0,e.uE)('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>默认的MP-CU项目，目录结构是下面这样的。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├─ mp-cu (UI组件库核心文件夹)\n│  ├─ colorUI\n│  ├─ lib\n│  ├─ store\n│  └─ main.js\n├─ mp-sdk (额外扩展的文件夹)\n│  ├─ components\n│  ├─ icon\n│  │  └─ doc.scss\n│  ├─ js\n│  │  ├─ api.js\n│  │  └─ tools.js\n│  └─ wxs\n│     └─ tools.wxs\n├─ packageA (分包A = 模板模块)\n├─ packageB (分包B = 实验室模块)\n├─ pages\n├─ static\n├─ app.scss\n├─ app.js\n├─ config.js (MP-CU用户配置文件)\n├─ app.json\n└─ project.config.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境" aria-hidden="true">#</a> 配置环境</h2><p>MP-CU需要scss的支持，在根目录下，<code>project.config.json</code> 配置文件内的 <code>&quot;setting&quot;</code> 节点下，配置：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;useCompilerPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;sass&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>由于小程序默认开启了 <code>v2</code> 的样式，在v2模式下，<code>ColorUI</code> 部分样式会失效。 完整 <code>ColorUI</code> 样式，需要在 <code>app.json</code> 文件内，删除 <code>&quot;style&quot;: &quot;v2&quot;</code> 即可</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v2&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后，在根目录的 <code>app.scss</code> 文件里引入相关框架的css文件。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;./mp-cu/colorUI/scss/ui&#39;</span><span class="token punctuation">;</span></span>\n\n<span class="token comment">/*  实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，\n    可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。*/</span>\n\n<span class="token comment">/* @import &#39;./mp-sdk/icon/doc&#39;; */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>您可单独设置一个 <code>config.js</code> 里面配置相关信息，然后暴露方法给 <code>app.js</code> 在全局引用</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ColorUi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span>\n<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  \n    ColorUi<span class="token punctuation">,</span>        <span class="token comment">//挂载到app上，此步骤必须要有！</span>\n    <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>config.js</code> 配置文件需要您定义成类似以下的内容</p>',15),p=(0,e.Uk)("由于微信小程序无法使用vue.key来全局命名变量，导致习惯vue的用户很不习惯，而且微信内部并不存在像vuex这样的状态管理机制，为满足上述想法，colorUI MP-CU 为您定制了一套自有的扩展包，你可以在全局导入变量、函数、方法，同时您也可以定义您自己的状态（"),o=(0,e._)("code",null,"vuex",-1),c=(0,e.Uk)("）. 内置的vuex 渲染引擎参考了 "),l={href:"https://github.com/xiaoyao96/wxMiniStore",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("wxMiniStore"),u=(0,e.Uk)(" 的项目。"),i=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//引入框架的方法函数库</span>\n<span class="token keyword">import</span> ColorUI <span class="token keyword">from</span> <span class="token string">&#39;./mp-cu/main&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> colorUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorUI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   config<span class="token operator">:</span> <span class="token punctuation">{</span>\n       theme<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>\n       main<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span>\n       text<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n       footer<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n       share<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n       shareTitle<span class="token operator">:</span> <span class="token string">&#39;MP CU**（ ColorUI3.x 原生小程序版）**&#39;</span><span class="token punctuation">,</span>\n       homePath<span class="token operator">:</span> <span class="token string">&#39;/pages/home/home&#39;</span><span class="token punctuation">,</span>\n       tabBar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   data<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//全局data</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span> \n   methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//全局函数</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明" aria-hidden="true">#</a> 配置说明</h2><p>我们不建议您直接修改mp-cu文件夹下的相关文件，以免后续升级更新时，被覆盖，所以，建议在外部<code>config.js</code>里配置。</p><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>你可能已经注意到了，在 ColorUI 配置中有一项 <code>config</code> 配置项。</p><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>theme</td><td>string</td><td>auto, light, dark</td><td>auto</td><td>设置默认主题</td></tr><tr><td>main</td><td>string</td><td>-</td><td>blue</td><td>设置默认强调色</td></tr><tr><td>text</td><td>string</td><td>0-4</td><td>1</td><td>设置默认字号等级</td></tr><tr><td>footer</td><td>boolean</td><td>-</td><td>true</td><td>显示底部colorUI版权</td></tr><tr><td>homePath</td><td>string</td><td>-</td><td>/pages/index/index</td><td>设置首页路径</td></tr><tr><td>tabBar</td><td>array</td><td>-</td><td>-</td><td>配置系统tabBar</td></tr><tr><td>share</td><td>boolean</td><td>-</td><td>false</td><td>开启全局分享</td></tr><tr><td>shareTitle</td><td>string</td><td>-</td><td>-</td><td>全局分享标题</td></tr></tbody></table><blockquote><p>如果属于开源作品，请带上ColorUI版权，<code>footer: true</code></p><p>一些组件会用到跳回主页，请每个项目设置好 <code>homePath</code></p><p>自动跟随系统主题功能，需要在 <code>app.json</code> 文件里配置：</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;darkmode&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',8),d=(0,e.Uk)("开启自动跟随后，在安卓机端切换主题时，会重载小程序，具体原因，"),b={href:"https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("参考微信官方说明"),k=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>配置的config你可以在 <code>page</code>，<code>components</code> 中通过 <code>this.data.$cuConfig</code> 获得</p></div><h4 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar" aria-hidden="true">#</a> tabBar</h4><p>此处的tabBar，非原生的tabBar。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>tabBar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;文档&#39;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;/static/tab_icon/document.png&#39;</span><span class="token punctuation">,</span>\n        curIcon<span class="token operator">:</span> <span class="token string">&#39;/static/tab_icon/document_cur.png&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token string">&#39;/pages/home/home&#39;</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;tab&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;我的&#39;</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;/static/tab_icon/my.png&#39;</span><span class="token punctuation">,</span>\n        curIcon<span class="token operator">:</span> <span class="token string">&#39;/static/tab_icon/my_cur.png&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token string">&#39;/pages/my/home&#39;</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;tab&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>-</td><td>-</td><td>标题名称</td></tr><tr><td>icon</td><td>string</td><td>-</td><td>-</td><td>默认图标</td></tr><tr><td>curIcon</td><td>string</td><td>-</td><td>-</td><td>选中的图标</td></tr><tr><td>url</td><td>string</td><td>-</td><td>-</td><td>跳转路径</td></tr><tr><td>type</td><td>string</td><td>tab, nav, tap</td><td>-</td><td>跳转类型</td></tr></tbody></table><blockquote><p>跳转类型: <code>tab</code> = <code>wx.switchTab()</code></p><p>跳转类型: <code>nav</code> = <code>wx.navigateTo()</code></p><p>跳转类型: <code>tap</code> = <code>this.triggerEvent(&quot;tap&quot;)</code> (此模式下，非跳转，而是触发事件)</p></blockquote><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>只要您在 <code>app.js</code> 里面挂载上ColorUI以后，您不需要在 <code>page</code>，<code>components</code> 中获取系统信息，因为ColorUI已经帮您写好在对应的data里面了，您只需要使用就可以了。</p><blockquote><p>例如在demo的home 页面中，在page的data中并没有定义sys_navBar，但是在页面和js中仍然可以使用，这些数据是根据手机状态实时变化的！</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// ColorUI 为您在data中事先定义好的数据\nsys_info\nsys_navBar\nsys_statusBar\nsys_capsule\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//引入框架的方法函数库</span>\n<span class="token keyword">import</span> ColorUI <span class="token keyword">from</span> <span class="token string">&#39;./mp-cu/main&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> colorUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorUI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   config<span class="token operator">:</span> <span class="token punctuation">{</span>\n       \n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   data<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//全局data</span>\n       name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//全局函数</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>您在 <code>config.js</code> 里面配置的data数据，也可以在页面的data里面访问到，ColorUI将配置的数据定义到$cuData属性里面中了。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>配置的data内容你可以在 <code>page</code>，<code>components</code> 中通过 <code>this.data.$cuData</code> 获得</p></div><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h3><p>注意，您设置的函数，data，等配置名称不能存在以下情况，[<code>&quot;data&quot;</code> , <code>&quot;onLoad&quot;</code>, <code>&quot;onShow&quot;</code>, <code>&quot;onReady&quot;</code>, <code>&quot;onHide&quot;</code>, <code>&quot;onUnload&quot;</code>, <code>&quot;onPullDownRefresh&quot;</code>, <code>&quot;onReachBottom&quot;</code>, <code>&quot;onShareAppMessage&quot;</code>, <code>&quot;onPageScroll&quot;</code>, <code>&quot;onTabItemTap&quot;</code>, <code>&quot;setTheme&quot;</code>, <code>&quot;setMain&quot;</code>, <code>&quot;setText&quot;</code>, <code>&quot;_toHome&quot;</code>, <code>&quot;_backPage&quot;</code>, <code> &quot;sys_isFirstPage&quot;</code> ]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//引入框架的方法函数库</span>\n<span class="token keyword">import</span> ColorUI <span class="token keyword">from</span> <span class="token string">&#39;./mp-cu/main&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> colorUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorUI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   config<span class="token operator">:</span> <span class="token punctuation">{</span>\n       \n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   data<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//全局data</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">//全局函数</span>\n       <span class="token function">cuLog</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> <span class="token operator">...</span>optionalParams</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token operator">...</span>optionalParams<span class="token punctuation">)</span>\n       <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在项目所有页面中，都可以直接调用<code>this.cuLog ()</code>,就可以调用该config 文件中的函数体</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>配置的函数方法，都会在<code>page</code>，<code>components</code>里面注册在相应位置，您只需要调用即可</p></div>',18),g={},h=(0,a(3744).Z)(g,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("blockquote",null,[(0,e._)("p",null,[p,o,c,(0,e._)("a",l,[r,(0,e.Wm)(a)]),u])]),i,(0,e._)("blockquote",null,[(0,e._)("p",null,[d,(0,e._)("a",b,[m,(0,e.Wm)(a)])])]),k],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);
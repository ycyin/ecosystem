import{_ as r,c as k,a as i,b as l,d as e,e as a,f as h,r as n,o}from"./app-cd0ms_pU.js";const c={},g={class:"hint-container details"};function A(v,s){const p=n("NpmBadge"),d=n("RevealJs"),t=n("RouteLink");return o(),k("div",null,[s[7]||(s[7]=i("h1",{id:"revealjs",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#revealjs"},[i("span",null,"revealjs")])],-1)),l(p,{package:"@vuepress/plugin-revealjs"}),s[8]||(s[8]=e(`<p>在你的 VuePress 站点中添加幻灯片。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-prismjs@next</span></span></code></pre></div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">revealJsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-revealjs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    revealJsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 插件选项</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="幻灯片语法" tabindex="-1"><a class="header-anchor" href="#幻灯片语法"><span>幻灯片语法</span></a></h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- slide1 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- slide2 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- slide3 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),i("details",g,[s[0]||(s[0]=i("summary",null,"示例",-1)),l(d,{id:"revealjs-31",code:"eJzjUlZWeLpz9/PG9c87258taH+5aAYX15MdDU92rHrWvfTZnM5n09qfrp3+dFKPQvTLyfue9S2N1cgoKSkottLXz80sLkkt0s3IL0jVS87P1VR4Pqvl2bqtLybs5eLS1dXlApn9ZPfi5wsaX66e8WTXOi6uhISErGKFaCNdkxpDXdNYruT8vOIShcSUFAVbBY1EHYUkTQVbO4VqLgWFzDQFjZLKgtT8NIUkBVtbWwX10ryU1LTMvNQUdU2FotSS0qI8hUQFbQVDLqBqJH4SVy3IGi4AEi9W9Q==",theme:"auto"}),s[1]||(s[1]=e(`<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 幻灯片标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">一个拥有文字和 </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">链接</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">https://mister-hope.com</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 的段落</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 代码高亮</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js [2-4|1-5]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;undefined&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))]),s[9]||(s[9]=e("<p>默认情况下，我们使用 <code>auto</code> 主题来渲染幻灯片，你也可以通过 <code>@slidestart 主题名称</code> 使用其他主题。</p><p>你可以通过插件选项中的 <code>themes</code> 启用以下主题:</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>",3)),i("p",null,[s[3]||(s[3]=a("各主题的外观，详见 ")),l(t,{to:"/zh/plugins/markdown/revealjs/themes.html"},{default:h(()=>s[2]||(s[2]=[a("幻灯片主题")])),_:1})]),s[10]||(s[10]=e(`<h2 id="幻灯片布局" tabindex="-1"><a class="header-anchor" href="#幻灯片布局"><span>幻灯片布局</span></a></h2><p>默认情况下，插件会注册一个 <code>SlidePage</code> 布局来供你渲染“幻灯片页”。</p><p>在使用此布局的页面中，你应该只包含单个幻灯片语法，不包含其他内容，以避免渲染问题:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">layout: SlidePage</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slidestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 此处是幻灯片内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@slideend</span></span></code></pre></div><p>你可以通过插件选项中的 <code>layout</code> 来自定义此行为，比如使用 <code>false</code> 来禁用它或填入其他布局名称。</p><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h2>`,6)),i("p",null,[s[5]||(s[5]=a("请见 ")),l(t,{to:"/zh/plugins/markdown/revealjs/demo.html"},{default:h(()=>s[4]||(s[4]=[a("幻灯片演示")])),_:1}),s[6]||(s[6]=a("。"))]),s[11]||(s[11]=e(`<h2 id="自定义-reveal-js" tabindex="-1"><a class="header-anchor" href="#自定义-reveal-js"><span>自定义 Reveal.js</span></a></h2><h3 id="内置插件" tabindex="-1"><a class="header-anchor" href="#内置插件"><span>内置插件</span></a></h3><p>你可以通过插件选项中的 <code>plugins</code> 启用 reveal.js 中的内置插件。它接受以下插件名称的数组:</p><ul><li><code>highlight</code></li><li><code>math</code></li><li><code>search</code></li><li><code>notes</code></li><li><code>zoom</code></li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>为了支持 Markdown 语法，我们总会启用 <code>markdown</code> 插件。</p></div><h3 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h3><p>你也可以在<a href="https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a>中导入并调用 <code>defineRevealJsConfig</code> 来自定义 reveal.js:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/client.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineRevealJsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-revealjs/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineRevealJsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 在此设置 reveal.js 选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>Reveal.js 还提供了<a href="https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware" target="_blank" rel="noopener noreferrer">更多的插件</a>，你可以通过 <code>plugin</code> 选项在 <code>defineRevealJsConfig</code> 中添加它们，这种自定义行为不会影响你声明的内置插件。</p></div><h3 id="页面级配置" tabindex="-1"><a class="header-anchor" href="#页面级配置"><span>页面级配置</span></a></h3><p>你也可以在 Frontmatter 设置 <code>revealJs</code> 以设置特定页面的 reveal.js 选项。</p><p>Reveal.js 选项，请参见<a href="https://revealjs.com/config/" target="_blank" rel="noopener noreferrer">reveal.js config</a>，Reveal.js 用法，请参阅 <a href="https://revealjs.com/" target="_blank" rel="noopener noreferrer">reveal.js 文档</a>。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3><ul><li><p>类型： <code>RevealJsPlugin[]</code></p></li><li><p>详情：需要启用 Reveal.js 内置的插件</p><p>可用值：<code>highlight</code>、<code>math</code>、<code>search</code>、<code>notes</code>、<code>zoom</code></p></li></ul><h3 id="themes" tabindex="-1"><a class="header-anchor" href="#themes"><span>themes</span></a></h3><ul><li><p>类型： <code>RevealJsTheme[]</code></p></li><li><p>默认值：<code>[&#39;auto&#39;]</code></p></li><li><p>详情：需要启用的 Reveal.js 主题</p><p>可用值：<code>auto</code>、<code>black</code>、<code>white</code>、<code>league</code>、<code>beige</code>、<code>sky</code>、<code>night</code>、<code>serif</code>、<code>simple</code>、<code>solarized</code>、<code>blood</code>、<code>moon</code></p></li></ul><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h3><ul><li>类型： <code>string | false</code></li><li>默认值：<code>&#39;SlidePage&#39;</code></li><li>详情：用于渲染幻灯片的布局组件名称</li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li>类型： <code>number</code></li><li>默认值：<code>800</code></li><li>详情：渲染幻灯片的延迟时间</li></ul><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 CSS 变量自定义样式：</p><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --reveal-c-accent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--vp-c-accent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --reveal-c-control</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--vp-c-control</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --reveal-c-control-hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--vp-c-control-hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --reveal-c-shadow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--vp-c-shadow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div>`,24))])}const B=r(c,[["render",A],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/zh/plugins/markdown/revealjs/","title":"revealjs","lang":"zh-CN","frontmatter":{"description":"revealjs","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/markdown/revealjs/"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"revealjs"}],["meta",{"property":"og:description","content":"revealjs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-22T11:49:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T11:49:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"revealjs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T11:49:24.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"幻灯片语法","slug":"幻灯片语法","link":"#幻灯片语法","children":[]},{"level":2,"title":"幻灯片布局","slug":"幻灯片布局","link":"#幻灯片布局","children":[]},{"level":2,"title":"演示","slug":"演示","link":"#演示","children":[]},{"level":2,"title":"自定义 Reveal.js","slug":"自定义-reveal-js","link":"#自定义-reveal-js","children":[{"level":3,"title":"内置插件","slug":"内置插件","link":"#内置插件","children":[]},{"level":3,"title":"高级配置","slug":"高级配置","link":"#高级配置","children":[]},{"level":3,"title":"页面级配置","slug":"页面级配置","link":"#页面级配置","children":[]}]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"themes","slug":"themes","link":"#themes","children":[]},{"level":3,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]}],"git":{"updatedTime":1727005764000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/markdown/revealjs/README.md"}');export{B as comp,u as data};

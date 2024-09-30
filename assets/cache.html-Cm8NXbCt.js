import{_ as a,c as t,a as s,b as n,d as l,o as p,r as c}from"./app-DpIpD2dl.js";const h={};function o(r,e){const i=c("NpmBadge");return p(),t("div",null,[e[0]||(e[0]=s("h1",{id:"cache",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cache"},[s("span",null,"cache")])],-1)),n(i,{package:"@vuepress/plugin-cache"}),e[1]||(e[1]=l(`<p>This plugin is used to solve the issue of long startup times in VuePress.</p><p>By caching the <code>markdown render</code> during the initial startup of the VuePress development server, the plugin skips unnecessary <code>markdown render</code> on subsequent startups, thus speeding up the startup process.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-cache@next</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">Using it as last plugin</p><p>It is recommended to place <code>cachePlugin</code> as the last item in the <code>plugins</code> configuration, as this can ensure maximum utilization of caching.</p></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cachePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-cache&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ... other plugins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // using as the last plugin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    cachePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li><p>Type: <code>&#39;memory&#39;</code> | <code>&#39;filesystem&#39;</code></p></li><li><p>Default: <code>&#39;memory&#39;</code></p></li><li><p>Details:</p><p>Cache Types</p><ul><li><code>&#39;memory&#39;</code> is for memory cache, using memory cache can achieve optimal optimization effects, but as the project scales up, it occupies more memory, suitable for projects with fewer pages.</li><li><code>&#39;filesystem&#39;</code> is for file system cache, for complex projects with many pages, file cache is recommended.</li></ul></li></ul><h3 id="enableinci" tabindex="-1"><a class="header-anchor" href="#enableinci"><span>enableInCi</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Whether to enable the cache in CI environment.</p><p>In most cases, the cache plugin could slow down the speed in ci.</p></li></ul>`,11))])}const m=a(h,[["render",o],["__file","cache.html.vue"]]),k=JSON.parse('{"path":"/plugins/tools/cache.html","title":"cache","lang":"en-US","frontmatter":{"description":"cache","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/tools/cache.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/tools/cache.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"cache"}],["meta",{"property":"og:description","content":"cache"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T04:52:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T04:52:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cache\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-25T04:52:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"enableInCi","slug":"enableinci","link":"#enableinci","children":[]}]}],"git":{"updatedTime":1721883121000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/tools/cache.md"}');export{m as comp,k as data};

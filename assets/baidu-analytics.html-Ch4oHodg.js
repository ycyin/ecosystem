import{_ as a,c as t,a as e,b as n,d as l,o as p,r}from"./app-cd0ms_pU.js";const h={};function o(d,s){const i=r("NpmBadge");return p(),t("div",null,[s[0]||(s[0]=e("h1",{id:"baidu-analytics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#baidu-analytics"},[e("span",null,"baidu-analytics")])],-1)),n(i,{package:"@vuepress/plugin-baidu-analytics"}),s[1]||(s[1]=l(`<p>Integrate <a href="https://tongji.baidu.com/" target="_blank" rel="noopener noreferrer">Baidu Analytics</a> into VuePress.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Do not enable <a href="https://tongji.baidu.com/web/help/article?id=324&amp;type=0" target="_blank" rel="noopener noreferrer">SPA mode in Baidu Analytics</a>. The plugin will report page view events correctly.</p></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-baidu-analytics@next</span></span></code></pre></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">baiduAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-baidu-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    baiduAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3><p>The plugin will automatically report page view events when visiting and switching pages.</p><p>Besides, a global <code>hmt</code> array is available on the <code>window</code> object, and you can use it for <a href="https://tongji.baidu.com/holmes/Analytics/%E6%8A%80%E6%9C%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97/JS%20API/JS%20API%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C" target="_blank" rel="noopener noreferrer">custom events reporting</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details: The ID of Baidu Analytics, which is the query of <code>hm.js</code> URL.</p></li></ul>`,11))])}const k=a(h,[["render",o],["__file","baidu-analytics.html.vue"]]),g=JSON.parse('{"path":"/plugins/analytics/baidu-analytics.html","title":"baidu-analytics","lang":"en-US","frontmatter":{"description":"baidu-analytics","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/analytics/baidu-analytics.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/analytics/baidu-analytics.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"baidu-analytics"}],["meta",{"property":"og:description","content":"baidu-analytics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-29T05:40:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-29T05:40:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"baidu-analytics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-29T05:40:07.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Reporting Events","slug":"reporting-events","link":"#reporting-events","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]}]}],"git":{"updatedTime":1716961207000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/analytics/baidu-analytics.md"}');export{k as comp,g as data};

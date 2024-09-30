import{_ as r,c as d,d as a,a as t,e as l,b as n,f as s,r as i,o as p}from"./app-DpIpD2dl.js";const m={};function u(h,e){const o=i("RouteLink");return p(),d("div",null,[e[11]||(e[11]=a('<h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>插件可为你生成以下三种格式的 feed 文件:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><p>请按照需要生成的格式，在插件选项中设置 <code>atom</code>, <code>json</code> 或 <code>rss</code> 为 <code>true</code>。</p><p>为了正确生成 Feed 链接，你需要在插件选项中设置 <code>hostname</code>。</p><h2 id="可读的预览" tabindex="-1"><a class="header-anchor" href="#可读的预览"><span>可读的预览</span></a></h2><p>当你在浏览器中打开 Feed 文件时，我们会通过 xsl 模板将 atom 和 rss feed xml 魔法般地转换为可读的 html。你可以查看本站的 <a href="/zh/atom.xml" target="_blank" rel="noopener noreferrer">atom</a> 和 <a href="/zh/rss.xml" target="_blank" rel="noopener noreferrer">rss</a> feed 作为案例！</p><p>如果你想在开发服务器中预览 Feed，你需要在插件选项中设置 <code>devServer: true</code>。如果你没有使用默认的 <code>http://localhost:{port}</code>，你还需要设置 <code>devHostname</code>。</p><h2 id="频道设置" tabindex="-1"><a class="header-anchor" href="#频道设置"><span>频道设置</span></a></h2><p>你可以通过设置 <code>channel</code> 选项来自自定义 Feed 频道的各项信息。</p><p>我们推荐进行如下设置:</p><ul><li>将建立 Feed 的日期转换为 ISOString 写入到 <code>channel.pubDate</code> 中</li><li>通过 <code>channel.ttl</code> 中设置内容的更新周期(单位: 分钟)</li><li>通过 <code>channel.copyright</code> 设置版权信息</li><li>通过 <code>channel.author</code> 设置频道作者。</li></ul>',13)),t("p",null,[e[1]||(e[1]=l("详细的选项及其默认值详见 ")),n(o,{to:"/zh/plugins/blog/feed/channel.html"},{default:s(()=>e[0]||(e[0]=[l("配置 → 频道设置")])),_:1})]),e[12]||(e[12]=t("h2",{id:"feed-生成",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#feed-生成"},[t("span",null,"Feed 生成")])],-1)),e[13]||(e[13]=t("p",null,"默认情况下，所有文章均会被添加至 feed 流。",-1)),t("p",null,[e[3]||(e[3]=l("你可以在 frontmatter 中配置 ")),e[4]||(e[4]=t("code",null,"feed",-1)),e[5]||(e[5]=l(" 和其他选项控制每个页面的 Feed 项目内容，详见 ")),n(o,{to:"/zh/plugins/blog/feed/frontmatter.html"},{default:s(()=>e[2]||(e[2]=[l("Frontmatter 选项")])),_:1}),e[6]||(e[6]=l(" 了解它们如何被转换。"))]),t("p",null,[e[8]||(e[8]=l("你可以通过配置插件选项中的 ")),e[9]||(e[9]=t("code",null,"getter",-1)),e[10]||(e[10]=l(" 完全控制 Feed 项目的生成逻辑。 详细的选项及其默认值详见 ")),n(o,{to:"/zh/plugins/blog/feed/getter.html"},{default:s(()=>e[7]||(e[7]=[l("配置 → Feed 获取器")])),_:1})]),e[14]||(e[14]=t("h3",{id:"多语言配置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#多语言配置"},[t("span",null,"多语言配置")])],-1)),e[15]||(e[15]=t("p",null,"插件会针对每个语言生成单独的 Feed。",-1)),e[16]||(e[16]=t("p",null,[l("你可以通过插件选项中的 "),t("code",null,"locales"),l(" 分别对不同语言提供不同的默认设置。")],-1))])}const c=r(m,[["render",u],["__file","guide.html.vue"]]),g=JSON.parse('{"path":"/zh/plugins/blog/feed/guide.html","title":"指南","lang":"zh-CN","frontmatter":{"description":"指南 使用 插件可为你生成以下三种格式的 feed 文件: Atom 1.0 JSON 1.1 RSS 2.0 请按照需要生成的格式，在插件选项中设置 atom, json 或 rss 为 true。 为了正确生成 Feed 链接，你需要在插件选项中设置 hostname。 可读的预览 当你在浏览器中打开 Feed 文件时，我们会通过 xsl 模板将 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/blog/feed/guide.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/blog/feed/guide.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"指南"}],["meta",{"property":"og:description","content":"指南 使用 插件可为你生成以下三种格式的 feed 文件: Atom 1.0 JSON 1.1 RSS 2.0 请按照需要生成的格式，在插件选项中设置 atom, json 或 rss 为 true。 为了正确生成 Feed 链接，你需要在插件选项中设置 hostname。 可读的预览 当你在浏览器中打开 Feed 文件时，我们会通过 xsl 模板将 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-29T05:40:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-29T05:40:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-29T05:40:07.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"可读的预览","slug":"可读的预览","link":"#可读的预览","children":[]},{"level":2,"title":"频道设置","slug":"频道设置","link":"#频道设置","children":[]},{"level":2,"title":"Feed 生成","slug":"feed-生成","link":"#feed-生成","children":[{"level":3,"title":"多语言配置","slug":"多语言配置","link":"#多语言配置","children":[]}]}],"git":{"updatedTime":1716961207000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/blog/feed/guide.md"}');export{c as comp,g as data};

import{_ as n,c as t,a as s,e as a,b as l,f as o,d as p,r,o as d}from"./app-cd0ms_pU.js";const c={};function h(u,e){const i=r("RouteLink");return d(),t("div",null,[e[3]||(e[3]=s("h1",{id:"guide",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#guide"},[s("span",null,"Guide")])],-1)),s("p",null,[e[1]||(e[1]=a("Comparing to ")),l(i,{to:"/plugins/development/palette.html"},{default:o(()=>e[0]||(e[0]=[s("code",null,"@vuepress/plugin-palette",-1)])),_:1}),e[2]||(e[2]=a(", this plugin allows you to:"))]),e[4]||(e[4]=p(`<ul><li>Derive related styles based on user configuration</li><li>Provide style customization similar to theme in plugins</li><li>Group applications across multiple plugins or themes via id option</li></ul><p>Before using the plugin, you need to understand the id option, as well as three styling concepts: configuration, palette and generator.</p><h2 id="id-option" tabindex="-1"><a class="header-anchor" href="#id-option"><span>ID Option</span></a></h2><p>To get started, you should understand that this plugin is designed to take across plugins and theme (unlike the official one only for theme).</p><p>We are providing <code>id</code> option to do that, and using this plugin (by calling <code>useSassPalette</code>) with same ID won&#39;t have any side effects. Also, all the alias and module names have an ID prefix.</p><p>This will allow you to:</p><ul><li><p>Share same style system across your plugins (or themes) using same ID without any side effects.</p><p>All aliases and module names have an ID prefix, which means you can use a set of style variables within your plugins (or theme) to unify your styles without being affected by other plugins (or themes).</p><p>Users can configure all color variables, breakpoints, and other style configurations in the same file and have them automatically applied on themes and plugins with the same ID.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p><code>vuepress-theme-hope</code> and other related plugins use the same ID <code>hope</code> to call the plugin, so the styles configured by the user in the theme will automatically take effect in all plugins.</p></div></li><li><p>With different ID, plugins and theme won&#39;t affect others. We recommend you to set the <code>id</code> variable with your plugin name.</p><p>With the default settings, users will set your plugin style under <code>.vuepress/styles</code> directory with Sass files starting with your ID prefix. And you can access the variables you need with <code>\${id}-config</code> and <code>\${id}-paleete</code>.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p><code>vuepress-theme-hope</code> is using ID <code>&quot;hope&quot;</code>, and just imagine a <code>vuepress-plugin-abc</code> is using <code>&quot;abc&quot;</code>. They can get their own variables with module name <code>hope-config</code> <code>hope-palette</code> and <code>abc-config</code> <code>abc-palette</code>.</p></div></li><li><p>Calling the plugin with the same ID has no side effects.</p><div class="hint-container tip"><p class="hint-container-title">example</p><p><code>vuepress-theme-hope</code> and other related plugins use the same ID <code>hope</code> to call the plugin.</p></div></li></ul><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><p>Config file is used for Sass variable only. It holds Sass variables which can be used via <code>\${id}-config</code> in other files later.</p><p>You can specify a file (probably in <code>.vuepress/styles/</code> directory) as user config file. So you can get the module containing every variable later in Sass files. Also, you are able to provide a default config files where you can place fallback values for variables with <code>!default</code>.</p><details class="hint-container details"><summary>An example</summary><p>Imagine you are invoking the plugin with the following options in <code>vuepress-plugin-abc</code>:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useSassPalette</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  defaultConfig</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress-plugin-abc/styles/config.scss&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>User config file:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$navbar-height: 3.5rem;</span></span></code></pre></div><p>Default config file:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$navbar-height: 2rem !default;</span></span>
<span class="line"><span>$sidebar-width: 18rem !default;</span></span></code></pre></div><p>You can get the following variables in the plugin Sass files:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// &lt;style lang=&quot;scss&quot;&gt; block in vue sfc or scss file directly imported in scripts</span></span>
<span class="line"><span>@debug abc-config.$navbar-height; // 3.5rem</span></span>
<span class="line"><span>@debug abc-config.$sidebar-width; // 18rem</span></span></code></pre></div></details><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h3><p>We are using <code>additionalData</code> options to let <code>\${id}-config</code> module available in your styles, but this has some limitations.</p><p><code>additionalData</code> only works on Scss entry, so <code>\${id}-config</code> is available only in :</p><ul><li><code>&lt;style lang=&quot;scss&quot;&gt;</code> block in component files</li><li>Scss files imported by script files directly (e.g.: <code>import &quot;./a-scss-file.scss&quot;</code> in client app enhance file).</li></ul><p>If the Scss file is not imported directly, but is imported through <code>@use</code> or <code>@import</code> api, the module won&#39;t be available. So that in this case, you should manually import the module with <code>@use &quot;@sass-palette/\${id}-config&quot;;</code>.</p><h2 id="palette" tabindex="-1"><a class="header-anchor" href="#palette"><span>Palette</span></a></h2><p>Palette files are used for CSS variable injection, where each variable will be injected in to root with kebab-name of variable name.</p><p>You can specify a file (probably in <code>.vuepress/styles/</code> directory) as user palette file, and the default filename is <code>\${id}-palette.scss</code>. Also, you are able to provide a default palette files where you can place fallback values for variables with <code>!default</code>.</p><details class="hint-container details"><summary>An example</summary><p>Imagine you are invoking the plugin with the following options in <code>vuepress-plugin-abc</code>:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useSassPalette</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  defaultPalette</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress-plugin-abc/styles/palette.scss&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>If users are setting:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$color-a: red;</span></span></code></pre></div><p>And you are providing a default palette file with:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$color-a: blue !default;</span></span>
<span class="line"><span>$color-b: green !default;</span></span></code></pre></div><p>Then the below CSS variables will be available under root selector:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>:root {</span></span>
<span class="line"><span>  --color-a: red;</span></span>
<span class="line"><span>  --color-b: green;</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>Like config file, palette file provides a module named <code>\${$id}-palette</code> (also including generator values), and it is also limited by <code>additionalData</code> option, so you should import the module manually if you want to use it in other Sass files.</p><h3 id="color-settings" tabindex="-1"><a class="header-anchor" href="#color-settings"><span>Color Settings</span></a></h3><p>Since the default theme is providing darkmode, so you probably want different colors under lightmode and darkmode.</p><p>To achieve that, you should set color variables with a map containing <code>light</code> and <code>dark</code> keys. Later, the plugin will generate different colors for you.</p><details class="hint-container details"><summary>An example</summary><div class="language-scss line-numbers-mode" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// User palette</span></span>
<span class="line"><span>$text-color: (</span></span>
<span class="line"><span>  light: #222,</span></span>
<span class="line"><span>  dark: #999,</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Default palette</span></span>
<span class="line"><span>$text-color: (</span></span>
<span class="line"><span>  light: #2c3e50,</span></span>
<span class="line"><span>  dark: #9e9e9e,</span></span>
<span class="line"><span>) !default;</span></span>
<span class="line"><span>$bg-color: (</span></span>
<span class="line"><span>  light: #fff,</span></span>
<span class="line"><span>  dark: #1e1e1e,</span></span>
<span class="line"><span>) !default;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you will get:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>:root {</span></span>
<span class="line"><span>  --text-color: #222;</span></span>
<span class="line"><span>  --bg-color: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[data-theme=&#39;dark&#39;] {</span></span>
<span class="line"><span>  --text-color: #999;</span></span>
<span class="line"><span>  --bg-color: #1e1e1e;</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><h3 id="allowed-variable-types" tabindex="-1"><a class="header-anchor" href="#allowed-variable-types"><span>Allowed Variable Types</span></a></h3><p>Only colors (or color map for light/dark mode), length and strings are allowed in palette. Any other type will be dropped.</p><div class="hint-container tip"><p class="hint-container-title">Why only allow color and length besides strings</p><p>In common situations, you probably only want to make calculations with color and length. So it&#39;s quite safe to drop other type support, because any other value you want can be converted to string.</p><details class="hint-container details"><summary>Example</summary><p>If you want a <code>--move-transition</code> with <code>width 0.3s ease</code>, you can use strings:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// this will be regarded as a list with (length, time, function) by Sass</span></span>
<span class="line"><span>// and will trigger a warning and be dropped by plugin</span></span>
<span class="line"><span>$moveTransition: width 0.3s ease;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// this will get what you want</span></span>
<span class="line"><span>// :root {</span></span>
<span class="line"><span>//   --move-transition: width 0.3s ease</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span>$moveTransition: &#39;width 0.3s ease&#39;;</span></span></code></pre></div></details></div><h2 id="helper" tabindex="-1"><a class="header-anchor" href="#helper"><span>Helper</span></a></h2><p>We are exposing internal functions which <code>@vuepress/plugin-sass-palette</code> uses, as a helper module.</p><p>You can use this helper with <code>@sass-palette/helper</code> alias and call its function to achieve similar features yourself.</p><h2 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>Generator</span></a></h2><p>A generator file is facing developers to generate derived values based on palette file variables.</p><p>You can access variables from palette file directly in this file and generate new values based on them.</p><p>Variables in generator file will be also injected as CSS variables like palette, and they will be available in palette module.</p><details class="hint-container details"><summary>Example</summary><p>You may want a <code>$theme-color-light</code> based on <code>$theme-color</code>. So you can write a generator like this:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@use &#39;sass:color&#39;;</span></span>
<span class="line"><span>@use &#39;@sass-palette/helper&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$theme-color-light: (</span></span>
<span class="line"><span>  light: color.scale(helper.get-color($theme-color), $lightness: 10%),</span></span>
<span class="line"><span>  dark: color.scale(helper.get-dark-color($theme-color), $lightness: 10%),</span></span>
<span class="line"><span>) !default;</span></span></code></pre></div><p>You can also generate values based on variables provided by config files by importing it:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// generator with id &quot;abc&quot;</span></span>
<span class="line"><span>@use &#39;sass:color&#39;;</span></span>
<span class="line"><span>@use &#39;@sass-palette/abc-config&#39;;</span></span>
<span class="line"><span>@use &#39;@sass-palette/helper&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$code-c-bg: abc-config.$highlighter == &#39;shiki&#39;? #fff: #f8f8f8;</span></span></code></pre></div></details><h2 id="user-styles" tabindex="-1"><a class="header-anchor" href="#user-styles"><span>User Styles</span></a></h2><p>If you are a theme developer, you may probably want to provide your users a way to custom your theme or the site.</p><p>In this case you should set <code>style</code> option as the user style file when using this plugin.</p><p>Later, you should manually include user style file by importing <code>@sass-palette/\${id}-style</code> <strong>after your theme styles</strong>.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p><code>@sass-palette/\${id}-style</code> is an alias to user style file, and you can import it in JS/TS/SASS.</p></div>`,41))])}const k=n(c,[["render",h],["__file","guide.html.vue"]]),m=JSON.parse('{"path":"/plugins/development/sass-palette/guide.html","title":"Guide","lang":"en-US","frontmatter":{"description":"Guide Comparing to , this plugin allows you to: Derive related styles based on user configuration Provide style customization similar to theme in plugins Group applications acro...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/development/sass-palette/guide.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/development/sass-palette/guide.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Guide"}],["meta",{"property":"og:description","content":"Guide Comparing to , this plugin allows you to: Derive related styles based on user configuration Provide style customization similar to theme in plugins Group applications acro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T09:14:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T09:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T09:14:27.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"ID Option","slug":"id-option","link":"#id-option","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[{"level":3,"title":"Limitations","slug":"limitations","link":"#limitations","children":[]}]},{"level":2,"title":"Palette","slug":"palette","link":"#palette","children":[{"level":3,"title":"Color Settings","slug":"color-settings","link":"#color-settings","children":[]},{"level":3,"title":"Allowed Variable Types","slug":"allowed-variable-types","link":"#allowed-variable-types","children":[]}]},{"level":2,"title":"Helper","slug":"helper","link":"#helper","children":[]},{"level":2,"title":"Generator","slug":"generator","link":"#generator","children":[]},{"level":2,"title":"User Styles","slug":"user-styles","link":"#user-styles","children":[]}],"git":{"updatedTime":1727082867000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"plugins/development/sass-palette/guide.md"}');export{k as comp,m as data};

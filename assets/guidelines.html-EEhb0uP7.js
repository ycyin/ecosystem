import{_ as o,c as a,d as s,b as i,o as l,r as n}from"./app-cd0ms_pU.js";const c={};function r(d,e){const t=n("PaletteDisplay");return l(),a("div",null,[e[0]||(e[0]=s('<h1 id="theme-guidelines" tabindex="-1"><a class="header-anchor" href="#theme-guidelines"><span>Theme Guidelines</span></a></h1><p>To avoid theme developers and users setting unneeded options, we have a set of guidelines that should be followed when creating a theme.</p><h2 id="dom-structure" tabindex="-1"><a class="header-anchor" href="#dom-structure"><span>DOM Structure</span></a></h2><p>A theme must implement the following DOM structure:</p><ul><li>Container: An element which contains the entire theme. This element should have an attribute <code>vp-container</code>.</li><li>Content: An element which holds markdown render results. This element should have an attribute <code>vp-content</code>.</li></ul><p>A theme may have the following optional elements:</p><ul><li>Navbar: Navbar of the site. This element should have an attribute <code>vp-navbar</code>.</li><li>Sidebar: Sidebar of the site. This element should have an attribute <code>vp-sidebar</code>.</li><li>Outline: Headings or outline of the main content. This element should have an attribute <code>vp-outline</code>.</li><li>Comment: Comment service (comment box and comment list). This element should have an attribute <code>vp-comment</code>.</li><li>Footer: Footer of the site. This element should have an attribute <code>vp-footer</code>.</li></ul><p>A theme must:</p><ul><li>Set <code>data-theme</code> to <code>dark</code> on html in darkmode.</li><li>Set <code>data-theme</code> to <code>light</code> on html in lightmode.</li></ul><p>If it only have one color scheme, it still needs to set <code>data-theme</code> to <code>light</code> or <code>dark</code> to indicate the default color scheme.</p><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><p>To support search plugins, a theme shall check whether <code>&lt;SearchBox /&gt;</code> is globally registered and render it in it&#39;s own navbar or sidebar if it is available.</p><h2 id="color-variables" tabindex="-1"><a class="header-anchor" href="#color-variables"><span>Color Variables</span></a></h2><p>A theme must implement the following color variables:</p><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>Text</span></a></h3><ul><li><code>--vp-c-text</code>: Default text color.</li><li><code>--vp-c-text-mute</code>: Colors for muted texts, such as &quot;inactive menu&quot; or &quot;info texts&quot;.</li><li><code>--vp-c-text-subtle</code>: Color for subtle text, such as as &quot;placeholders&quot; or &quot;caret icon&quot;.</li></ul><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><ul><li><code>--vp-c-bg</code>: The bg color used for main screen.</li><li><code>--vp-c-bg-alt</code>: The alternative bg color used in places such as &quot;sidebar&quot;, or &quot;code block&quot;.</li><li><code>--vp-c-bg-elv</code>: The elevated bg color. This is used at parts where it &quot;floats&quot;, such as &quot;dialog&quot;.</li></ul><h3 id="shadow" tabindex="-1"><a class="header-anchor" href="#shadow"><span>Shadow</span></a></h3><ul><li><code>--vp-c-shadow</code>: Shadow color</li></ul><h3 id="accent" tabindex="-1"><a class="header-anchor" href="#accent"><span>Accent</span></a></h3><p>Accent color and brand colors which used for interactive components.</p><ul><li><p><code>--vp-c-accent</code>: The most solid color used mainly for colored text. It must satisfy the contrast ratio against when used on top of <code>--vp-c-accent-soft</code>.</p></li><li><p><code>--vp-c-accent-hover</code>: Color used for hover state.</p></li><li><p><code>--vp-c-accent-bg</code>: Color used for solid background. It must satisfy the contrast ratio with <code>--vp-c-accent-text</code> on top of it.</p></li><li><p><code>--vp-c-accent-text</code>: Color used for text with <code>--vp-c-accent-bg</code> background. It must satisfy the contrast ratio with <code>--vp-c-accent-bg</code>.</p></li><li><p><code>--vp-c-accent-soft</code>: The color used for subtle background such as custom container or badges. It must satisfy the contrast ratio when putting <code>--vp-c-accent</code> colors on top of it.</p><p>The soft color must be semi transparent alpha channel. This is crucial because it allows adding multiple &quot;soft&quot; colors on top of each other to create a accent, such as when having inline code block inside custom containers.</p></li></ul><h3 id="borders" tabindex="-1"><a class="header-anchor" href="#borders"><span>Borders</span></a></h3><ul><li><code>--vp-c-border</code>: Border color for interactive components. For example this should be used for a button outline.</li><li><code>--vp-c-border-hard</code>: Darker border colors, which is used for &quot;hard&quot; borders closed to text, such as table and kbd.</li><li><code>--vp-c-divider</code>: Color for separators, used to divide sections within the same components, such as having separator on &quot;h2&quot; heading.</li></ul><h3 id="controls" tabindex="-1"><a class="header-anchor" href="#controls"><span>Controls</span></a></h3><ul><li><code>--vp-c-control</code>: Background color for interactive controls, such as buttons or checkboxes.</li><li><code>--vp-c-control-hover</code>: Background color for hover state of interactive controls.</li><li><code>--vp-c-control-disabled</code>: Color for disabled state of interactive controls.</li></ul><h2 id="transition-timing" tabindex="-1"><a class="header-anchor" href="#transition-timing"><span>Transition timing</span></a></h2><ul><li><code>--vp-t-color</code>: Color transition timing.</li><li><code>--vp-t-transform</code>: Transform transition timing.</li></ul><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>',30)),i(t)])}const u=o(c,[["render",r],["__file","guidelines.html.vue"]]),p=JSON.parse('{"path":"/themes/guidelines.html","title":"Theme Guidelines","lang":"en-US","frontmatter":{"description":"Theme Guidelines To avoid theme developers and users setting unneeded options, we have a set of guidelines that should be followed when creating a theme. DOM Structure A theme m...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/themes/guidelines.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/themes/guidelines.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Theme Guidelines"}],["meta",{"property":"og:description","content":"Theme Guidelines To avoid theme developers and users setting unneeded options, we have a set of guidelines that should be followed when creating a theme. DOM Structure A theme m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-12T10:00:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-12T10:00:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Theme Guidelines\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-12T10:00:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"DOM Structure","slug":"dom-structure","link":"#dom-structure","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]},{"level":2,"title":"Color Variables","slug":"color-variables","link":"#color-variables","children":[{"level":3,"title":"Text","slug":"text","link":"#text","children":[]},{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"Shadow","slug":"shadow","link":"#shadow","children":[]},{"level":3,"title":"Accent","slug":"accent","link":"#accent","children":[]},{"level":3,"title":"Borders","slug":"borders","link":"#borders","children":[]},{"level":3,"title":"Controls","slug":"controls","link":"#controls","children":[]}]},{"level":2,"title":"Transition timing","slug":"transition-timing","link":"#transition-timing","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"updatedTime":1726135201000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":3}]},"autoDesc":true,"filePathRelative":"themes/guidelines.md"}');export{u as comp,p as data};

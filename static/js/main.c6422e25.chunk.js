(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{150:function(e,t,c){},282:function(e,t,c){},283:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(16),r=c.n(i),s=(c(150),c(28)),l=c(29),j=c(31),d=c(30),o=c(110),b=c(2),m=c(45),h=(c(284),c(89)),p=c(10),O=(c(114),c(87)),x=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,u=function(e,t){var c=0===e.name.indexOf("title")?"h1":"div";c=e.href?"a":c;var a="string"===typeof e.children&&(e.children.indexOf(".jpg")>-1||e.children.indexOf(".png")>-1||e.children.indexOf(".svg")>-1||e.children.match(x))?n.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(a=n.a.createElement(O.a,Object(b.a)({},e.children))),n.a.createElement(c,Object(b.a)({key:t.toString()},e),a)},g=c(1),N=["dataSource","isMobile"],f=["children","subItem"],v=h.a.Item,k=h.a.SubMenu,y=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).phoneClick=function(){var e=!a.state.phoneOpen;a.setState({phoneOpen:e})},a.state={phoneOpen:void 0},a}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.dataSource,a=t.isMobile,n=Object(m.a)(t,N),i=this.state.phoneOpen,r=c.Menu.children.map((function(e){var t=e.children,c=e.subItem,a=Object(m.a)(e,f);return c?Object(g.jsx)(k,Object(b.a)(Object(b.a)({},a),{},{title:Object(g.jsx)("div",Object(b.a)(Object(b.a)({},t),{},{className:"header3-item-block ".concat(t.className).trim(),children:t.children.map(u)})),popupClassName:"header3-item-child",children:c.map((function(e,t){var c=e.children,a=c.href?Object(g.jsx)("a",Object(b.a)(Object(b.a)({},c),{},{children:c.children.map(u)})):Object(g.jsx)("div",Object(b.a)(Object(b.a)({},c),{},{children:c.children.map(u)}));return Object(g.jsx)(v,Object(b.a)(Object(b.a)({},e),{},{children:a}),e.name||t.toString())}))}),e.name):Object(g.jsx)(v,Object(b.a)(Object(b.a)({},a),{},{children:Object(g.jsx)("a",Object(b.a)(Object(b.a)({},t),{},{className:"header3-item-block ".concat(t.className).trim(),children:t.children.map(u)}))}),e.name)})),s=void 0===i?300:null;return Object(g.jsx)(p.c,Object(b.a)(Object(b.a)(Object(b.a)({component:"header",animation:{opacity:0,type:"from"}},c.wrapper),n),{},{children:Object(g.jsxs)("div",Object(b.a)(Object(b.a)({},c.page),{},{className:"".concat(c.page.className).concat(i?" open":""),children:[Object(g.jsx)(p.c,Object(b.a)(Object(b.a)({animation:{x:-30,type:"from",ease:"easeOutQuad"}},c.logo),{},{children:Object(g.jsx)("img",{width:"100%",src:c.logo.children,alt:"img"})})),a&&Object(g.jsxs)("div",Object(b.a)(Object(b.a)({},c.mobileMenu),{},{onClick:function(){e.phoneClick()},children:[Object(g.jsx)("em",{}),Object(g.jsx)("em",{}),Object(g.jsx)("em",{})]})),Object(g.jsx)(p.c,Object(b.a)(Object(b.a)({},c.Menu),{},{animation:a?{x:0,height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:s,reverse:!!i,children:Object(g.jsx)(h.a,{mode:a?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"light",children:r})}))]}))}))}}]),c}(n.a.Component),w=c(288),M=c(32),_=c(90),S=(c(279),_.a.BgElement),W=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource,c=e.isMobile;delete e.dataSource,delete e.isMobile;var a=t.BannerAnim.children.map((function(e,t){var a=e.BannerElement,n=a.className;delete a.className;var i=e.bg,r=e.textWrapper,s=e.title,l=e.content,j=e.button,d=e.page,o=c?null:{delay:1e3,minMove:.1,data:[{id:"bg".concat(t),value:15,type:"x"},{id:"wrapperBlock".concat(t),value:-15,type:"x"}]};return Object(g.jsxs)(_.a,Object(b.a)(Object(b.a)({followParallax:o},a),{},{prefixCls:n,children:[Object(g.jsx)(S,Object(b.a)(Object(b.a)({},i),{},{id:"bg".concat(t)}),"bg"),Object(g.jsx)("div",Object(b.a)(Object(b.a)({},d),{},{children:Object(g.jsxs)(M.a,Object(b.a)(Object(b.a)({type:["bottom","top"],delay:200},r),{},{id:"wrapperBlock".concat(t),children:[Object(g.jsx)("div",Object(b.a)(Object(b.a)({},s),{},{children:"string"===typeof s.children&&s.children.match(x)?Object(g.jsx)("img",{src:s.children,width:"100%",alt:"img"}):s.children}),"logo"),Object(g.jsx)("div",Object(b.a)(Object(b.a)({},l),{},{children:l.children}),"content"),Object(g.jsx)(O.a,Object(b.a)(Object(b.a)({type:"ghost"},j),{},{children:j.children}),"button")]}),"text")}))]}),t.toString())}));return Object(g.jsxs)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e),t.wrapper),{},{children:[Object(g.jsx)(p.b,{enter:{opacity:0,type:"from"},leave:{opacity:0},component:"",children:Object(g.jsx)(_.b,Object(b.a)(Object(b.a)({},t.BannerAnim),{},{children:a}),"BannerAnim")},"bannerGroup"),Object(g.jsx)(p.c,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner2-icon",style:{bottom:40},children:Object(g.jsx)(w.a,{})},"icon")]}))}}]),c}(n.a.PureComponent),z=(c(67),c(44)),C=(c(68),c(37)),P=c(42),B=c.n(P),E=["dataSource","isMobile"],A=["children"],R=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.dataSource,c=(e.isMobile,Object(m.a)(e,E)),a=t.wrapper,n=t.titleWrapper,i=t.page,r=t.OverPack,s=t.childWrapper;return Object(g.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},c),a),{},{children:Object(g.jsxs)("div",Object(b.a)(Object(b.a)({},i),{},{children:[Object(g.jsx)("div",Object(b.a)(Object(b.a)({},n),{},{children:n.children.map(u)})),Object(g.jsx)(B.a,Object(b.a)(Object(b.a)({},r),{},{children:Object(g.jsx)(M.a,{type:"bottom",leaveReverse:!0,component:z.a,componentProps:s,children:s.children.map((function(e,t){var c=e.children,a=Object(m.a)(e,A);return Object(g.jsx)(C.a,Object(b.a)(Object(b.a)({},a),{},{children:Object(g.jsx)("div",Object(b.a)(Object(b.a)({},c),{},{children:c.children.map(u)}))}),t.toString())}))},"block")}))]}))}))}}]),c}(n.a.PureComponent),Q=["titleWrapper"],F=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getBlockChildren=function(e){return e.map((function(e,t){var c=e.titleWrapper,a=Object(m.a)(e,Q);return Object(g.jsx)(C.a,Object(b.a)(Object(b.a)({},a),{},{children:c.children.map(u)}),t.toString())}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var c=this.getBlockChildren(t.block.children);return Object(g.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e),t.wrapper),{},{children:Object(g.jsxs)("div",Object(b.a)(Object(b.a)({},t.page),{},{children:[Object(g.jsx)("div",Object(b.a)(Object(b.a)({},t.titleWrapper),{},{children:t.titleWrapper.children.map(u)})),Object(g.jsx)(B.a,Object(b.a)(Object(b.a)({},t.OverPack),{},{children:Object(g.jsx)(M.a,Object(b.a)(Object(b.a)({type:"bottom",leaveReverse:!0},t.block),{},{component:z.a,children:c}),"block")}))]}))}))}}]),c}(n.a.PureComponent);var I=function(e){var t=Object.assign({},e),c=t.dataSource,a=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:a?"bottom":"right",one:a?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return Object(g.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},t),c.wrapper),{},{children:Object(g.jsxs)(B.a,Object(b.a)(Object(b.a)({component:z.a},c.OverPack),{},{children:[Object(g.jsx)(p.c,Object(b.a)(Object(b.a)({animation:n.one,resetStyle:!0},c.imgWrapper),{},{component:C.a,componentProps:{md:c.imgWrapper.md,xs:c.imgWrapper.xs},children:Object(g.jsx)("span",Object(b.a)(Object(b.a)({},c.img),{},{children:Object(g.jsx)("img",{src:c.img.children,width:"100%",alt:"img"})}))}),"img"),Object(g.jsx)(M.a,Object(b.a)(Object(b.a)({type:n.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},c.childWrapper),{},{component:C.a,componentProps:{md:c.childWrapper.md,xs:c.childWrapper.xs},children:c.childWrapper.children.map(u)}),"text")]}))}))},q=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getBlockChildren=function(e){return e.map((function(e){var t=Object.assign({},e),c=t.title,a=t.img,n=t.content;return["title","img","content"].forEach((function(e){return delete t[e]})),Object(g.jsxs)("li",Object(b.a)(Object(b.a)({},t),{},{children:[Object(g.jsx)("span",Object(b.a)(Object(b.a)({},a),{},{children:Object(g.jsx)("img",{src:a.children,width:"100%",alt:"img"})})),Object(g.jsx)("h2",Object(b.a)(Object(b.a)({},c),{},{children:c.children})),Object(g.jsx)("div",Object(b.a)(Object(b.a)({},n),{},{children:n.children}))]}),t.name)}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource,c=e.isMobile;delete e.dataSource,delete e.isMobile;var a=this.getBlockChildren(t.block.children),n=c?"bottom":"left",i=c?{y:30,opacity:0,delay:600,type:"from",ease:"easeOutQuad"}:{x:30,opacity:0,type:"from",ease:"easeOutQuad"};return Object(g.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e),t.wrapper),{},{children:Object(g.jsxs)(B.a,Object(b.a)(Object(b.a)({},t.OverPack),{},{component:z.a,children:[Object(g.jsxs)(M.a,Object(b.a)(Object(b.a)({type:n,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},t.textWrapper),{},{component:C.a,children:[Object(g.jsx)("div",Object(b.a)(Object(b.a)({},t.titleWrapper),{},{children:t.titleWrapper.children.map(u)}),"title"),Object(g.jsx)(M.a,Object(b.a)(Object(b.a)({component:"ul",type:n,ease:"easeOutQuad"},t.block),{},{children:a}),"ul")]}),"text"),Object(g.jsx)(p.c,Object(b.a)(Object(b.a)({animation:i,resetStyle:!0},t.img),{},{component:C.a,children:Object(g.jsx)("img",{src:t.img.children,width:"100%",alt:"img"})}),"img")]}))}))}}]),c}(n.a.Component),T=["title","childWrapper"],L=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getLiChildren=function(e){return e.map((function(e,t){var c=e.title,a=e.childWrapper,n=Object(m.a)(e,T);return Object(g.jsxs)(C.a,Object(b.a)(Object(b.a)({},n),{},{title:null,content:null,children:[Object(g.jsx)("h2",Object(b.a)(Object(b.a)({},c),{},{children:"string"===typeof c.children&&(c.children.match(x)||c.children.indexOf(".png")>-1)?Object(g.jsx)("img",{src:c.children,width:"100%",alt:"img"}):c.children})),Object(g.jsx)("div",Object(b.a)(Object(b.a)({},a),{},{children:a.children.map(u)}))]}),t.toString())}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var c=this.getLiChildren(t.block.children);return Object(g.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e),t.wrapper),{},{children:Object(g.jsxs)(B.a,Object(b.a)(Object(b.a)({},t.OverPack),{},{children:[Object(g.jsx)(M.a,Object(b.a)(Object(b.a)({type:"bottom",leaveReverse:!0,component:z.a},t.block),{},{children:c}),"ul"),Object(g.jsx)(p.c,Object(b.a)(Object(b.a)({animation:{y:"+=30",opacity:0,type:"from"}},t.copyrightWrapper),{},{children:Object(g.jsx)("div",Object(b.a)(Object(b.a)({},t.copyrightPage),{},{children:Object(g.jsx)("div",Object(b.a)(Object(b.a)({},t.copyright),{},{children:t.copyright.children}))}))}),"copyright")]}))}))}}]),c}(n.a.Component);L.defaultProps={className:"footer1"};var D,V=L,X={wrapper:{className:"header3 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header3-logo",children:"./static/Logo-zh.png"},Menu:{className:"header3-menu kuz6n1nenuq-editor_css",children:[{name:"item0",className:"header3-item",children:{href:"#",children:[{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u9996\u9875"})}),name:"text"}]}},{name:"item1",className:"header3-item",children:{href:"#",children:[{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u4ea7\u54c1\u4ecb\u7ecd"})}),name:"text"}]}},{name:"item2",className:"header3-item",children:{href:"#",children:[{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u65d7\u8230\u5e97"})})}),name:"text"}]},subItem:[{className:"item-sub",children:{className:"item-sub-item",href:"https://mall.jd.com/index-107665.html",children:[{name:"image0",className:"item-image",children:"./static/jingdong-logo.svg"},{name:"title",className:"item-title",children:"\u4eac\u4e1c\u81ea\u8425\u5e97\u94fa"},{name:"content",className:"item-content",children:"\u54c1\u8d28\u4fdd\u969c\uff0c\u914d\u9001\u53ca\u65f6"}]}},{className:"item-sub",children:{className:"item-sub-item",href:"https://3mzb.tmall.com/shop/view_shop.htm?spm=a230r.7195193.1997079397.2.55cc3e73djXRDH",children:[{name:"image0",className:"item-image",children:"./static/tianmao-logo.svg"},{name:"title",className:"item-title",children:"\u5929\u732b\u65d7\u8230\u5e97"},{name:"content",className:"item-content",children:"\u7406\u60f3\u751f\u6d3b\u4e0a\u5929\u732b"}]}},{className:"item-sub",children:{className:"item-sub-item",href:"https://tjsunbang.1688.com/?spm=a2615.7691479.autotrace-topNav.1.63c535e1yxfT0h",children:[{name:"image0",className:"item-image",children:"./static/1688-logo.svg"},{name:"title",className:"item-title",children:"\u963f\u91cc\u5df4\u5df41688"},{name:"content",className:"item-content",children:"\u6279\u53d1\u3001\u5b9a\u5236\u3001\u627e\u6e90\u5934\u5c31\u4e0a1688"}]}}]},{name:"item3",className:"header3-item",children:{href:"#",children:[{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u5173\u4e8e\u6211\u4eec"})}),name:"text"}]}}]},mobileMenu:{className:"header3-mobile-menu"}},H={wrapper:{className:"banner2"},BannerAnim:{children:[{name:"elem0",BannerElement:{className:"banner-user-elem"},page:{className:"home-page banner2-page"},textWrapper:{className:"banner2-text-wrapper"},bg:{className:"bg bg0 kuz5rduc3e-editor_css"},title:{className:"banner2-title kuz5t6yuo8-editor_css",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u4e16\u754c\u5404\u5730\u5bc4\u5e0c\u671b\u4e8e\u79d1\u5b66"})})})},content:{className:"banner2-content kuz5toxfycu-editor_css",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u6211\u4eec\u81f4\u529b\u4e8e\u4ee5\u79d1\u6280\u6539\u5584\u4eba\u4eec\u7684\u751f\u6d3b\uff0c\u6ee1\u8db3\u4e0d\u540c\u884c\u4e1a\u7684\u9700\u6c42"})})})})},button:{className:"banner2-button kuz5tz7x9rj-editor_css",children:"Learn More"}}]}},J={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u4ea7\u54c1\u4e0e\u670d\u52a1"}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon kv6buq8x1eb-editor_css",children:"./static/page2-1.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u5b89\u5168\u4e0e\u5de5\u4e1a\u4ea7\u54c1"})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u4e2a\u4eba\u5b89\u5168\u9632\u62a4\u3001\u5de5\u4e1a\u80f6\u5e26\u53ca\u80f6\u7c98\u5242\u3001\u5de5\u4e1a\u7814\u78e8\u3001\u95ed\u5408\u53ca\u906e\u853d\u4ea7\u54c1\u3001\u7535\u6c14\u7535\u529b\u4ea7\u54c1\u3001\u6c7d\u8f66\u552e\u540e\u4ea7\u54c1"})})}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"./static/page2-2.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u65e5\u7528\u54c1\u3001\u6d88\u8d39\u54c1"})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u5bb6\u88c5\u53ca\u6539\u5584\uff08\u5305\u62ec\u6c7d\u8f66\u7f8e\u5bb9\u517b\u62a4\u4e1a\u52a1\uff09\u3001\u6587\u6559\u529e\u516c\u6587\u4eea\u3001\u5bb6\u5ead\u7528\u54c1\u3001\u4e2a\u4eba\u5065\u5eb7\u62a4\u7406"})})}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"./static/page2-3.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u533b\u7597\u4ea7\u54c1"})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u533b\u7597\u89e3\u51b3\u65b9\u6848\u3001\u53e3\u8154\u62a4\u7406\u3001\u5206\u79bb\u53ca\u8fc7\u6ee4\u79d1\u5b66\u3001\u98df\u54c1\u5b89\u5168"})})}]}}]}},K={wrapper:{className:"home-page-wrapper teams1-wrapper"},page:{className:"home-page teams1"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u70ed\u9500\u4ea7\u54c1"})})})}]},block:{className:"block-wrapper",children:[{name:"block0",className:"block kuz7p4e8ygb-editor_css",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://img12.360buyimg.com/n1/jfs/t1/176648/20/7190/305479/608b9ffcE13f1199e/79acffd1bc33366c.jpg"},{name:"title",className:"teams1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M FUTURO"})})},{name:"content",className:"teams1-job",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u62a4\u591a\u4e50\u7ecf\u5178\u7cfb\u5217\u62a4\u8e1d/\u811a\u8155\u9632\u62a4 \u80bf\u80c0\u9632\u62a4\u8212\u9002\u578b\u5355\u53ea\u88c5 \u80a4\u8272 L\u7801\uff0838~44.5cm\uff09"})})})},{name:"content1",className:"teams1-content kuz7osua3q-editor_css",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:Object(g.jsx)("br",{})})})}]}},{name:"block1",className:"block kuz7wfgp4l-editor_css",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://img11.360buyimg.com/n7/jfs/t1/177363/9/410/220390/60811d8dE096fe309/869737bc30fc132f.jpg"},{name:"title",className:"teams1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M\u8033\u7f69"})})},{name:"content",className:"teams1-job",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u513f\u7ae5\u9694\u97f3\u8033\u7f69\u964d\u566a\u97f3\u5b66\u751f\u5b9d\u5b9d\u7537\u5973\u7ae5\u964d\u566a\u7761\u7720\u5b66\u4e60\u5de5\u4f5c\u98de\u673a\u51fa\u884c\u8212\u9002\u9632\u5435 X4A \u5934\u6234\u5f0f\u8f7b\u8584\u8212\u9002\u6b3e 33\u5206\u8d1d"})})},{name:"content1",className:"teams1-content kuz7p5pudhd-editor_css",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:Object(g.jsx)("br",{})})})})}]}},{name:"block2",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://img14.360buyimg.com/n12/s288x288_jfs/t1/149374/38/8763/157828/5f63256eE439d6db2/3996149a419e03b6.jpg!cc_288x288.jpg"},{name:"title",className:"teams1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u8010\u9002\u5eb7\u521b\u53e3\u8d34"})})})},{name:"content",className:"teams1-job",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u9632\u6c34\u900f\u6c14\u521b\u53e3\u8d34 \u900f\u6c14\u8212\u9002 8\u7247/20/50\u7247/\u7b11\u8138\u521b\u53ef\u8d3420\u7247\u88c5 20\u7247/\u76d2"})})},{name:"content1",className:"teams1-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:Object(g.jsx)("br",{})})})}]}},{name:"block~kuz7noodnhg",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://img13.360buyimg.com/n12/s288x288_jfs/t1/139935/31/8268/124388/5f601996E645bc613/553583e0aec3328e.jpg!cc_288x288.jpg"},{name:"title",className:"teams1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M\u9632\u6bd2\u9762\u5177\u5957\u88c5"})})},{name:"content",className:"teams1-job",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u7845\u80f6\u9632\u6bd2\u53e3\u7f69\u5316\u5de5\u519c\u836f\u55b7\u6f06\u9632\u6cb9\u6f06\u5473\u6c14\u4f53\u5f02\u5473\u4e03\u4ef6\u5957\uff08\u56db\u6b3e\u5957\u88c5\u53ef\u9009\uff09 6502QL\u7845\u80f6\u9762\u7f69+6001\u6709\u673a\u6c14\u4f53\u6ee4\u76d2\u4e03\u4ef6\u5957"})})},{name:"content1",className:"teams1-content kuz80tipe6d-editor_css",children:"AntV \u662f\u8682\u8681\u91d1\u670d\u5168\u65b0\u4e00\u4ee3\u6570\u636e\u53ef\u89c6\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u4e00\u5957\u7b80\u5355\u65b9\u4fbf\u3001\u4e13\u4e1a\u53ef\u9760\u3001\u65e0\u9650\u53ef\u80fd\u7684\u6570\u636e\u53ef\u89c6\u5316\u6700\u4f73\u5b9e\u8df5\u3002"}]}},{name:"block~kuz7nr0cnvo",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://img10.360buyimg.com/n12/s288x288_jfs/t1/166148/31/4353/128268/600f7d08Ee66d5cfa/3cddefefef301576.jpg!cc_288x288.jpg"},{name:"title",className:"teams1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M\u53e3\u7f69"})})})})},{name:"content",className:"teams1-job",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"KN95\u7ea7\u522b\u6d3b\u6027\u70ad9541/9501V+\u9632\u96fe\u973ePM2.5\u9632\u9897\u7c92\u7269\u7c89\u5c18\u6709\u673a\u84b8\u6c14\u5f02\u5473\u9632\u98de\u6cab 9501+\u8033\u6234\u5f0f\u3010\u65e0\u960050\u53ea/\u888b\u3011\u73af\u4fdd\u88c5"})})},{name:"content1",className:"teams1-content kuz83uhxlwt-editor_css",children:"AntV \u662f\u8682\u8681\u91d1\u670d\u5168\u65b0\u4e00\u4ee3\u6570\u636e\u53ef\u89c6\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u4e00\u5957\u7b80\u5355\u65b9\u4fbf\u3001\u4e13\u4e1a\u53ef\u9760\u3001\u65e0\u9650\u53ef\u80fd\u7684\u6570\u636e\u53ef\u89c6\u5316\u6700\u4f73\u5b9e\u8df5\u3002"}]}},{name:"block~kuz7nrq3l0j",className:"block",md:8,xs:24,titleWrapper:{children:[{name:"image",className:"teams1-image",children:"https://img.alicdn.com/bao/uploaded/i3/2197077955/O1CN01iIacYb28dRO44lpXz_!!0-item_pic.jpg_180x180.jpg"},{name:"title",className:"teams1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M\u7535\u5de5\u7edd\u7f18\u80f6\u5e03"})})},{name:"content",className:"teams1-job",children:Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:["1500\u7535\u5de5\u7edd\u7f18\u80f6\u5e263M1600\u7535\u6c14\u7edd\u7f18\u7535\u7ebf\u80f6\u5e03\u65e0\u94c5PVC\u80f6\u5e26\u9632\u6f6e\u5355\u5377",Object(g.jsx)("br",{})]})})},{name:"content1",className:"teams1-content kuz871nalv8-editor_css",children:"AntV \u662f\u8682\u8681\u91d1\u670d\u5168\u65b0\u4e00\u4ee3\u6570\u636e\u53ef\u89c6\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u4e00\u5957\u7b80\u5355\u65b9\u4fbf\u3001\u4e13\u4e1a\u53ef\u9760\u3001\u65e0\u9650\u53ef\u80fd\u7684\u6570\u636e\u53ef\u89c6\u5316\u6700\u4f73\u5b9e\u8df5\u3002"}]}}]}},U={wrapper:{className:"home-page-wrapper pricing0-wrapper"},OverPack:{playScale:.3,className:"home-page pricing0"},imgWrapper:{className:"pricing0-img-wrapper",md:12,xs:24},img:{className:"pricing0-img",name:"image",children:"https://www.3m.com.cn/wps/wcm/connect/73cd672b-2f13-49b7-bd6d-baf5e0bfa8af/ChinaMilestone-09.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-73cd672b-2f13-49b7-bd6d-baf5e0bfa8af-mzMs3ql"},childWrapper:{className:"pricing0-text-wrapper",md:12,xs:24,children:[{name:"title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u5929\u6d25\u4f17\u90a6\u5de5\u8d38\u6709\u9650\u516c\u53f8"})}),className:"pricing0-title"},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:["\xa0 \xa0 \xa0\u516c\u53f8\u4e8e2004\u5e74\u5728\u5929\u6d25\u6ce8\u518c\u6210\u7acb\uff0c\u5c5e\u4e8e\u975e\u91d1\u5c5e\u77ff\u7269\u5236\u54c1\u4e1a\uff0c\u4e3b\u8425\u884c\u4e1a\u4e3a\u975e\u91d1\u5c5e\u77ff\u7269\u5236\u54c1\u4e1a\uff0c\u6211\u516c\u53f8\u4ee5\u7ecf\u9500\u6279\u53d1\u7684\u6a21\u5f0f\u7ecf\u8425\uff0c\u5458\u5de5\u4eba\u65701000",Object(g.jsx)("span",{children:"\u4eba\u4ee5\u4e0a\uff0c\u6ce8\u518c\u8d44\u672c109\u4e07\u5143\u3002\u5929\u6d25\u4f17\u90a6\u5de5\u8d38\u6709\u9650\u516c\u53f8\u529e\u516c\u5730\u5740\u4e3a\u5929\u6d25\u5b9d\u577b\u8282\u80fd\u73af\u4fdd\u5de5\u4e1a\u533a\u5b9d\u5bcc\u905333\u53f7\uff0c\u5982\u679c\u60a8\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u3001\u6280\u672f\u6216\u670d\u52a1\u6709\u5174\u8da3\uff0c\u968f\u65f6\u6b22\u8fce\u60a8\u7684\u6765\u7535\u6216\u4e0a\u95e8\u54a8\u8be2"})]})})})})}),className:"pricing0-content kuz64g2vhob-editor_css"},{name:"pricing",children:"\xa52,200",className:"pricing0-pricing kuz644nsar-editor_css"},{name:"button",children:{icon:"shopping-cart",href:"#",type:"primary",children:"\u7acb\u5373\u8d2d\u4e70",className:"kuz64dcp4hp-editor_css"}}]}},Y={wrapper:{className:"home-page-wrapper content6-wrapper"},OverPack:{className:"home-page content6"},textWrapper:{className:"content6-text",xs:24,md:10},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u8054\u7cfb\u6211\u4eec"})}),className:"title-h1"},{name:"content",className:"title-content kuz6aj191mj-editor_css",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u6b22\u8fce\u6765\u7535\uff0c\u975e\u5e38\u671f\u5f85\u4e0e\u60a8\u7684\u5408\u4f5c"})})}]},img:{children:"./static/address2.png",className:"content6-img",xs:24,md:14},block:{children:[{name:"block0",img:{children:"./static/mobile.svg",className:"content6-icon"},title:{className:"content6-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u5ba2\u670d\u7535\u8bdd"})})},content:{className:"content6-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"86-22-29230706"})})}},{name:"block1",img:{className:"content6-icon",children:"./static/email.svg"},title:{className:"content6-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u7535\u5b50\u90ae\u7bb1"})})},content:{className:"content6-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"seveice@zhongbanggongmao.cn"})})}},{name:"block2",img:{className:"content6-icon",children:"./static/address.svg"},title:{className:"content6-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u516c\u53f8\u5730\u5740"})})},content:{className:"content6-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\uff08\u4e2d\u56fd\uff09 \u5929\u6d25\u5e02\u5b9d\u577b\u533a\u987a\u9a70\u57ce\u5e02\u827a\u588522-1-301"})})}}]}},G={wrapper:{className:"home-page-wrapper footer1-wrapper"},OverPack:{className:"footer1",playScale:.2},block:{className:"home-page",gutter:0,children:[{name:"block0",xs:24,md:6,className:"block",title:{className:"logo kv6cx2228yf-editor_css",children:"./static/footer-logo.png"},childWrapper:{className:"slogan",children:[{name:"content0",children:"\u60a8\u662f\u5426\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u6216\u670d\u52a1\u6709\u95ee\u9898\u6216\u610f\u89c1\uff1f \u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u6211\u4eec"}]}},{name:"block1",xs:24,md:6,className:"block",title:{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u65d7\u4e0b\u5e97\u94fa"})})},childWrapper:{children:[{name:"link0",href:"https://mall.jd.com/index-107665.html",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u4eac\u4e1c\u65d7\u8230\u5e97"})})}),target:"_blank"},{name:"link1",href:"https://3mzb.tmall.com/shop/view_shop.htm?spm=a230r.7195193.1997079397.2.55cc3e73djXRDH",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u5929\u732b\u65d7\u8230\u5e97"})})}),target:"_blank"},{name:"link2",href:"https://tjsunbang.1688.com/?spm=a2615.7691479.autotrace-topNav.1.63c535e1yxfT0h",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u963f\u91cc1688"})}),target:"_blank"}]}},{name:"block2",xs:24,md:6,className:"block",title:{children:"\u5173\u4e8e"},childWrapper:{children:[{href:"#",name:"link0",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u516c\u53f8\u4ecb\u7ecd"})})},{href:"#",name:"link1",children:"\u8054\u7cfb\u6211\u4eec"}]}},{name:"block3",xs:24,md:6,className:"block",title:{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"\u7279\u522b\u9e23\u8c22"})})},childWrapper:{children:[{href:"https://www.3m.com",name:"link0",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M"})}),target:"_blank"},{href:"https://www.3m.com.cn/",name:"link1",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"3M\u4e2d\u56fd"})}),target:"_blank"}]}}]},copyrightWrapper:{className:"copyright-wrapper"},copyrightPage:{className:"home-page"},copyright:{className:"copyright",children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:["\xa92021 by ",Object(g.jsx)("a",{href:"https://www.zhongbanggongmao.cn",children:"\u5929\u6d25\u4f17\u90a6\u5de5\u8d38\u6709\u9650\u516c\u53f8"})," All Rights Reserved"]})})}};c(282);Object(o.enquireScreen)((function(e){D=e}));var Z=("undefined"!==typeof window?window:{}).location,$=void 0===Z?{}:Z,ee=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).state={isMobile:D,show:!$.port},a}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;Object(o.enquireScreen)((function(t){e.setState({isMobile:!!t})})),$.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[Object(g.jsx)(y,{id:"Nav3_0",dataSource:X,isMobile:this.state.isMobile},"Nav3_0"),Object(g.jsx)(W,{id:"Banner2_0",dataSource:H,isMobile:this.state.isMobile},"Banner2_0"),Object(g.jsx)(R,{id:"Feature0_0",dataSource:J,isMobile:this.state.isMobile},"Feature0_0"),Object(g.jsx)(F,{id:"Teams1_0",dataSource:K,isMobile:this.state.isMobile},"Teams1_0"),Object(g.jsx)(I,{id:"Pricing0_0",dataSource:U,isMobile:this.state.isMobile},"Pricing0_0"),Object(g.jsx)(q,{id:"Feature4_0",dataSource:Y,isMobile:this.state.isMobile},"Feature4_0"),Object(g.jsx)(V,{id:"Footer1_0",dataSource:G,isMobile:this.state.isMobile},"Footer1_0")];return Object(g.jsx)("div",{className:"templates-wrapper",ref:function(t){e.dom=t},children:this.state.show&&t})}}]),c}(n.a.Component),te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,289)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(ee,{}),document.getElementById("root")),te()}},[[283,1,2]]]);
//# sourceMappingURL=main.c6422e25.chunk.js.map
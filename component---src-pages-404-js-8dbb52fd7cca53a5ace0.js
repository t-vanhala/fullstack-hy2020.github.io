(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"64fX":function(e,a,t){},CN8t:function(e,a,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),o=t.n(r),l=t("9Koi"),i=(t("64fX"),t("jsr+")),c=t("AxK6"),s=t("98iT"),u=t.n(s),m=t("TiAl"),p=t("0Yyr"),f=[{src:t.n(p).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:u.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){var e=Object(l.a)(),a=e.t,t=e.i18n,r=Object(m.b)(t.language,a);return o.a.createElement(i.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},o.a.createElement(i.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},f.map((function(e){return o.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},o.a.createElement(c.a,{contain:!0,darkThemeInvert:!0,src:e.src,alt:e.alt,className:"col-6"}))}))),o.a.createElement(i.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},o.a.createElement("div",{className:"footer__navigation-link-container"},r.map((function(e){return o.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)})))))}},XFRJ:function(e,a,t){"use strict";t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("aHCT"),t("y7hu"),t("m4Pe");var n=t("jsr+"),r=t("Wbzz"),o=t("q1tI"),l=t.n(o),i=t("u1fg");var c=function(e){var a,t=e.className,o=e.wrapperClassName,c=e.link,s=e.content,u=e.stack,m=e.bold,p=e.thickBorder,f=e.upperCase,g=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),d=l.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},s.map((function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return l.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},g),l.a.createElement("div",{className:"arrow__rectangle "+(m?"bold":"")+" "+(p?"arrow__rectangle--thick-border":""),style:t},e.link?l.a.createElement(r.Link,{to:e.link},f?e.text.toUpperCase():e.text):f?e.text.toUpperCase():e.text),l.a.createElement("div",{className:"arrow__point "+(p?"arrow__point--thick-border":""),style:t}))})));return u||c?!u&&c?a=l.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},l.a.createElement(r.Link,{to:c,style:{display:"inline-block"}},d)):u&&(a=l.a.createElement("div",{className:"col-10 spacing--after "+o},l.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map((function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return l.a.createElement(r.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},g),l.a.createElement(n.a,{flex:!0,className:"arrow__rectangle",style:a},l.a.createElement("p",{className:"arrow--stacked-title"},l.a.createElement("span",null,e.text))),l.a.createElement("div",{className:"arrow__point",style:a}))}))))):a=l.a.createElement("div",{className:"col-10 spacing--after"},d),a};c.defaultProps={className:"",wrapperClassName:""},a.a=c},m4Pe:function(e,a,t){},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2","pale-pink":"#F9B9D3","sqlgreen":"#C5FF73"}')},w2l6:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),o=t("XFRJ"),l=t("jsr+"),i=t("CN8t"),c=t("Bl7J"),s=t("vrFN"),u=t("u1fg"),m=t("xB9W");var p=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={siteLanguage:"fi"},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var p=n.prototype;return p.componentDidMount=function(){var e=window.location.pathname.indexOf("/en")>-1?"en":window.location.pathname.indexOf("/zh")>-1?"zh":window.location.pathname.indexOf("/fr")>-1?"fr":"fi";this.setState({siteLanguage:e})},p.render=function(){var e="en"===this.state.siteLanguage?"Page not found":"fr"===this.state.siteLanguage?"Page non trouvée":"Sivua ei löytynyt";return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:e+" | Full stack open",lang:this.state.siteLanguage}),r.a.createElement(l.a,{className:"container spacing--large spacing--after"},r.a.createElement("h1",null,"404 - ",e),r.a.createElement("p",{className:"col-10 spacing--small spacing--after"},"Uncaught ReferenceError: unknown is not defined"),r.a.createElement(o.a,{className:"col-10 arrow__container--with-link",bold:!0,thickBorder:!0,link:Object(m.a)(this.state.siteLanguage,"/"),content:[{backgroundColor:u.main,text:"Go back home"}]})),r.a.createElement(i.a,{lang:this.state.siteLanguage}))},n}(n.Component);a.default=p},xB9W:function(e,a,t){"use strict";a.a=function(e,a,t){return void 0===t&&(t=""),"fi"===e?"/osa"+a+t:"/"+e+"/part"+a+t}},y7hu:function(e,a,t){"use strict";t("t+fG")("link",(function(e){return function(a){return e(this,"a","href",a)}}))}}]);
//# sourceMappingURL=component---src-pages-404-js-8dbb52fd7cca53a5ace0.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{1459:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gift",function(){return t(5133)}])},4381:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),o=t(214),a=t.n(o);function i(){return(0,r.jsx)("footer",{className:a().footer,children:(0,r.jsx)("a",{children:(0,r.jsx)("h5",{children:"If you chase to cancle the order please imediatelly call us at this +8801674859280 or +8801773496858 and tell your ordering name"})})})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),c=t(387),l=t(7190);var s={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=r(i.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,y=e.shallow,v=e.scroll,_=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,b=r(l.useIntersection({rootMargin:"200px"}),2),j=b[0],g=b[1],w=a.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);a.default.useEffect((function(){var e=g&&t&&i.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=s[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(o,d,h,{locale:n})}),[h,d,g,_,t,o]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,h,m,y,v,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof _?_:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(h,E,o&&o.locales,o&&o.domainLocales);k.href=L||i.addBasePath(i.addLocale(h,E,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=o.useRef(),s=r(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},5133:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(5893),o=(t(429),t(9008)),a=t(4381),i=t(5666),c=t.n(i),l=t(214),s=t.n(l);function u(e,n,t,r,o,a,i){try{var c=e[a](i),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,o)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)}))}}function d(){function e(){return(e=f(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t={},Array.from(n.currentTarget.elements).forEach((function(e){e.name&&(t[e.name]=e.value)})),e.next=5,fetch("/api/giftapi",{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"POST"});case 5:console.log(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:s().title,children:["My ",(0,r.jsx)("a",{children:"Gift Plan"})]}),(0,r.jsx)("p",{children:"The healthy lovely gifts are available within us. The baskets will be included chocolates chit sheets and so many surprises. Go ahead to chase one, for your father mother brother sister or any of your loving person and dont forget about your friends."}),(0,r.jsx)("br",{}),(0,r.jsxs)("form",{onSubmit:function(n){return e.apply(this,arguments)},children:[(0,r.jsx)("h2",{children:"What is your Occasion ?"}),(0,r.jsx)("input",{type:"text",name:"occasion",placeholder:"occasion"}),(0,r.jsx)("h2",{children:"Tell us something about your Budget between 1000 to 5000 taka?"}),(0,r.jsx)("input",{name:"budget",placeholder:"budget"}),(0,r.jsx)("h2",{children:"Delivery will conduct within 7 days, is it okay ? Then tell your time, "}),(0,r.jsx)("input",{name:"deliverytime",placeholder:"dd/mm/yy"}),(0,r.jsx)("h2",{children:"Where you can collect your Gift Basket ?"}),(0,r.jsx)("input",{name:"deliverylocation",type:"text",placeholder:"location"}),(0,r.jsx)("h2",{children:"Leave your mobile number here and please tell us your good name,"}),(0,r.jsx)("input",{name:"customerNameAndNumber",placeholder:"name: +8801*********"}),(0,r.jsx)("h2",{children:"Anything more you need ? Tell us here.. . ."}),(0,r.jsx)("textarea",{name:"message",rows:"4",cols:"40"}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"submit",className:s().card,children:"Confirm Your Gift Basket Order"})]}),(0,r.jsx)("h4",{children:"For the Sylhet City Peoples pickup location is fixed at Lamabazar point near PanshiBazar opposite of UCBL Bank."})]})}var h=t(1664);function p(){return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Gift Basket"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{className:s().main,children:(0,r.jsx)("div",{children:(0,r.jsx)(d,{})})}),(0,r.jsx)(h.default,{href:"/",className:s().back,children:" Back "}),(0,r.jsx)(a.Z,{})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footermain:"Home_footermain__JCJpT",back:"Home_back__93Alp",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},429:function(e,n){"use strict";var t,r;const o=Symbol("response");const a=Symbol("passThrough");const i=Symbol("waitUntil");t=i,r=a},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=1459,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
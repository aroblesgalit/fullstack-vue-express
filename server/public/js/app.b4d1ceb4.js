(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8ea6fdf2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3785:function(e,t,n){"use strict";n("4570")},4049:function(e,t,n){"use strict";n("fb20")},4570:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["g"])("Home"),a=Object(r["g"])(" | "),u=Object(r["g"])("About");function s(e,t){var n=Object(r["x"])("router-link"),s=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",c,[Object(r["h"])(n,{to:"/"},{default:Object(r["D"])((function(){return[o]})),_:1}),a,Object(r["h"])(n,{to:"/about"},{default:Object(r["D"])((function(){return[u]})),_:1})]),Object(r["h"])(s)],64)}n("3785");var i=n("6b0d"),l=n.n(i);const f={},p=l()(f,[["render",s]]);var b=p,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=n("cf05"),O=n.n(j),v={class:"home"},h=Object(r["f"])("img",{alt:"Vue logo",src:O.a},null,-1);function m(e,t,n,c,o,a){var u=Object(r["x"])("Post");return Object(r["q"])(),Object(r["e"])("div",v,[h,Object(r["h"])(u)])}n("99af");var g=function(e){return Object(r["t"])("data-v-2e080e96"),e=e(),Object(r["r"])(),e},x={class:"container"},y=g((function(){return Object(r["f"])("h1",null,"Latest Posts",-1)})),w={class:"create-post"},P=g((function(){return Object(r["f"])("label",{for:"create-post"},"Say something...",-1)})),k=g((function(){return Object(r["f"])("hr",null,null,-1)})),_={key:0,class:"error"},A={class:"posts-container"},R=["item","index","onDblclick"],q={class:"text"};function D(e,t,n,c,o,a){return Object(r["q"])(),Object(r["e"])("div",x,[y,Object(r["f"])("div",w,[P,Object(r["E"])(Object(r["f"])("input",{type:"text",id:"create-post","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.text=e}),placeholder:"Create a post"},null,512),[[r["B"],o.text]]),Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return a.createPost&&a.createPost.apply(a,arguments)})},"Post!")]),k,o.error?(Object(r["q"])(),Object(r["e"])("p",_,Object(r["z"])(o.error),1)):Object(r["d"])("",!0),Object(r["f"])("div",A,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(o.posts,(function(e,t){return Object(r["q"])(),Object(r["e"])("div",{class:"post",item:e,index:t,key:e._id,onDblclick:function(t){return a.deletePost(e._id)}},[Object(r["g"])(Object(r["z"])("".concat(e.createdAt.getMonth()+1,"/").concat(e.createdAt.getDate(),"/").concat(e.createdAt.getFullYear()))+" ",1),Object(r["f"])("p",q,Object(r["z"])(e.text),1)],40,R)})),128))])])}var S=n("1da1"),M=(n("96cf"),n("5530")),C=n("d4ec"),E=n("bee2"),T=(n("d81d"),n("bc3a")),z=n.n(T),H="/api/posts/",L=function(){function e(){Object(C["a"])(this,e)}return Object(E["a"])(e,null,[{key:"getPosts",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get(H);case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map((function(e){return Object(M["a"])(Object(M["a"])({},e),{},{createdAt:new Date(e.createdAt)})})));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"insertPost",value:function(e){return z.a.post(H,{text:e})}},{key:"deletePost",value:function(e){return z.a.delete("".concat(H).concat(e))}}]),e}(),J=L,V={name:"Post",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createPost:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,J.insertPost(e.text);case 2:return t.next=4,J.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,J.deletePost(e);case 2:return n.next=4,J.getPosts();case 4:t.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}};n("4049");const B=l()(V,[["render",D],["__scopeId","data-v-2e080e96"]]);var F=B,I={name:"Home",components:{Post:F}};const U=l()(I,[["render",m]]);var Y=U,G=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],K=Object(d["a"])({history:Object(d["b"])("/"),routes:G}),N=K;Object(r["c"])(b).use(N).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},fb20:function(e,t,n){}});
//# sourceMappingURL=app.b4d1ceb4.js.map
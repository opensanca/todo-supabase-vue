(function(e){function t(t){for(var n,u,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about",login:"login"}[e]||e)+"."+{about:"8cebd3e7",login:"def23396"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2b44":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},o=[],u=r("2877"),i={},c=Object(u["a"])(i,a,o,!1,null,null,null),s=c.exports,l=r("a18c");r("64e5"),r("2b44");n["a"].config.productionTip=!1,new n["a"]({router:l["a"],render:function(e){return e(s)}}).$mount("#app")},"92c4":function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r("940b"),a=Object(n["a"])("https://zxatkyskpkrykzqnwbku.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTYyNjkzMCwiZXhwIjoxOTM1MjAyOTMwfQ.DyFyDBjEXxD64sHVedusdPFPAhLAHV5WbJF5p8sEtDI");function o(){return null!==a.auth.user()}t["a"]=a},a18c:function(e,t,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0");var n=r("2b0e"),a=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Tarefas")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.titulo,expression:"titulo"}],domProps:{value:e.titulo},on:{input:function(t){t.target.composing||(e.titulo=t.target.value)}}}),r("button",{on:{click:function(t){return e.adicionarTarefa()}}},[e._v("Nova tarefa")]),r("ul",e._l(e.tarefas,(function(t){return r("Tarefa",{key:t.id,attrs:{tarefa:t},on:{concluir:function(r){return e.concluirTarefa(t)}}})})),1)])},u=[],i=r("1da1"),c=(r("4de4"),r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.tarefa.titulo,expression:"tarefa.titulo"}],domProps:{value:e.tarefa.titulo},on:{change:function(t){return e.salvarAlteracaoDeTitulo()},input:function(t){t.target.composing||e.$set(e.tarefa,"titulo",t.target.value)}}}),r("button",{on:{click:function(t){return e.concluir()}}},[e._v("✔")])])}),s=[],l=r("92c4"),f={name:"Tarefa",props:["tarefa"],methods:{salvarAlteracaoDeTitulo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.tarefa,t.next=4,l["a"].from("tarefas").update({titulo:r.titulo}).eq("id",r.id);case 4:n=t.sent,n.error&&alert(n.error.message),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0),alert("Não foi possível concluir a tarefa!");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},concluir:function(){this.$emit("concluir")}},components:{}},p=f,d=r("2877"),v=Object(d["a"])(p,c,s,!1,null,null,null),m=v.exports,b={name:"Home",data:function(){return{titulo:"",tarefas:[]}},methods:{adicionarTarefa:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].from("tarefas").insert({user_id:l["a"].auth.user().id,titulo:e.titulo});case 3:r=t.sent,r.error?alert(r.error.message):(e.titulo="",e.carregarTarefas()),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0),alert("Não foi possível cadastrar a tarefa!");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},concluirTarefa:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].from("tarefas").update({concluida:!0}).eq("id",e.id);case 3:n=r.sent,n.error?alert(n.error.message):t.carregarTarefas(),r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error(r.t0),alert("Não foi possível concluir a tarefa!");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()},carregarTarefas:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tarefas=[],t.prev=1,t.next=4,l["a"].from("tarefas").select("id, titulo").filter("concluida","eq",!1);case 4:r=t.sent,r.error?alert(r.error.message):e.tarefas=r.data,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0),alert("Não foi possível carregar as tarefas!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},mounted:function(){this.carregarTarefas()},components:{Tarefa:m}},h=b,g=Object(d["a"])(h,o,u,!1,null,null,null),w=g.exports;n["a"].use(a["a"]);var y=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return r.e("login").then(r.bind(null,"a55b"))}}],x=new a["a"]({mode:"history",base:"/",routes:y});x.beforeEach((function(e,t,r){"Login"===e.name||Object(l["b"])()?r():r({name:"Login"})}));t["a"]=x}});
//# sourceMappingURL=app.b226c0b5.js.map
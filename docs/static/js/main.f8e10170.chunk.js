(this["webpackJsonpvideo-favourites"]=this["webpackJsonpvideo-favourites"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(20),i=n.n(c),s=n(7),o=n(8),u=n(10),d=n(9),l=n(12),m=n(2),j=n(13),b=n.n(j),h=n(15),p=2e3,v=[{id:0,title:"\xbfQu\xe9 es CodelyTV? \ud83c\udf44\ud83d\udd1d - Formaci\xf3n para programadores y divulgaci\xf3n del mundo del desarrollo",url:"https://www.youtube.com/watch?v=rpMQd2DazTc",embed:"https://www.youtube.com/embed/rpMQd2DazTc",thumbnail:"https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg"},{id:1,title:"Introducci\xf3n a PHP: C\xf3mo configurar tu entorno de desarrollo \ud83d\udc18",url:"https://www.youtube.com/embed/watch?v=v2IjMrpZog4",embed:"https://www.youtube.com/embed/v2IjMrpZog4",thumbnail:"https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg"},{id:2,title:"Comunicaci\xf3n entre microservicios: \ud83d\udd4b Event-Driven Architecture",url:"https://www.youtube.com/watch?v=V4mjxJ5czog",embed:"https://www.youtube.com/embed/V4mjxJ5czog",thumbnail:"https://img.youtube.com/vi/V4mjxJ5czog/maxresdefault.jpg"},{id:3,title:"\ud83e\udd14 Cu\xe1ndo usar #interfaces\u2026 y cu\xe1ndo EVITARLAS",url:"https://www.youtube.com/watch?v=uP1CoHtjALg",embed:"https://www.youtube.com/embed/uP1CoHtjALg",thumbnail:"https://img.youtube.com/vi/uP1CoHtjALg/maxresdefault.jpg"},{id:4,title:'Qu\xe9 es la "Composici\xf3n sobre herencia" \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\ude94 (#CompositionOverInheritance)',url:"https://www.youtube.com/watch?v=OyTPDFyGWRc",embed:"https://www.youtube.com/embed/OyTPDFyGWRc",thumbnail:"https://img.youtube.com/vi/OyTPDFyGWRc/maxresdefault.jpg"},{id:5,title:"ReactJS vs VueJS vs Angular 6 \u26a1\ufe0f| 1/5 Qu\xe9 aporta un framework y qu\xe9 es un componente",url:"https://www.youtube.com/watch?v=lttZCIin4HM",embed:"https://www.youtube.com/embed/lttZCIin4HM",thumbnail:"https://img.youtube.com/vi/lttZCIin4HM/maxresdefault.jpg"}],O=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=(n(27),n(0)),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("div",{className:"loader-text",children:this.props.message||"Loading..."}),Object(f.jsx)("div",{className:"loader-spinner",children:Object(f.jsx)("i",{className:"zmdi zmdi-spinner zmdi-hc-spin"})})]})}}]),n}(r.Component),w=(n(29),n(30),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.data,t=e.id,n=e.thumbnail,r=e.title;return Object(f.jsx)(l.b,{className:"grid-item-link",to:"/".concat(t),children:Object(f.jsxs)("div",{className:"grid-item",children:[Object(f.jsx)("img",{className:"preview-image",src:n,alt:r}),Object(f.jsx)("div",{className:"preview-title",children:r})]})})}}]),n}(r.Component)),g=(n(39),function(){return Object(f.jsxs)("div",{className:"header-content",children:[Object(f.jsx)("div",{className:"header-title-text",children:"Favourite videos"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"button",value:"A\xf1adir Video",className:"header-button-add"}),Object(f.jsx)(l.b,{to:"/about",children:Object(f.jsx)("div",{className:"header-button-about",children:"About"})})]})]})}),y=(n(40),function(){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsxs)("span",{className:"footer__span",children:["Design & code by ","",Object(f.jsxs)("a",{className:"footer__span--link",href:"https://github.com/2y2son4",target:"_blank",rel:"noreferrer",children:["2y2son4","  "]}),"\ud83d\udc7d"]})})}),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={isLoading:!1,videos:null,error:null},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.next=4,new Promise((function(e,t){setTimeout((function(){return e(v)}),p)}));case 4:t=e.sent,this.setState({videos:t,isLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({error:e.t0,isLoading:!1});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.videos,n=e.isLoading,r=e.error;return n?Object(f.jsx)(x,{}):r?Object(f.jsx)("p",{className:"error",children:r.message}):Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)(g,{onClickAdd:this.handleAdd}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"grid-container",children:t&&t.map((function(e,t){return Object(f.jsx)(w,{data:e},t)}))})}),Object(f.jsx)(y,{})]})}}]),n}(r.Component),C=function(e){var t=e.title,n=e.embed;return Object(f.jsx)("div",{className:"video-container",children:Object(f.jsx)("iframe",{title:t,className:"player",type:"text/html",width:"100%",height:"400px",src:n,frameBorder:"0"})})},k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={isLoading:!0},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;this.setState({isLoading:!0}),function(e){var t=e.idVideo;return new Promise((function(e,n){setTimeout((function(){var r=v.find((function(e){return parseInt(e.id)===parseInt(t)}));return r?r.description?e(r):O().then((function(t){return r.description=t.join(),e(r)})).catch(console.error):n({message:"No se ha encontrado el video \ud83d\ude44"})}),p)}))}({idVideo:t.params.id}).then((function(t){return e.setState({video:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.error,r=e.video,c=this.props.match;return n?Object(f.jsx)("p",{className:"error",children:n.message}):t?Object(f.jsx)(x,{message:"Cargando video #".concat(c.params.id),speed:15}):Object(f.jsx)(a.a.Fragment,{children:Object(f.jsxs)("div",{className:"detail-container",children:[Object(f.jsx)(C,{title:r.title,embed:r.embed}),Object(f.jsxs)("div",{className:"detail-summary",children:[Object(f.jsx)("h2",{className:"detail-title",children:r.title}),Object(f.jsx)("p",{children:r.description})]})]})})}}]),n}(r.Component),L=Object(m.f)(k),A=(n(41),function(){return Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)("div",{className:"about",children:Object(f.jsx)("h2",{className:"about-title",children:"About"})}),Object(f.jsx)(y,{})]})}),I=function(){return Object(f.jsx)(l.a,{children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{exact:!0,path:"/",component:N}),Object(f.jsx)(m.a,{exact:!0,path:"/about",component:A}),Object(f.jsx)(m.a,{exact:!0,path:"/:id",component:L})]})})},M=(n(42),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(I,{})}}]),n}(r.Component));i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f8e10170.chunk.js.map
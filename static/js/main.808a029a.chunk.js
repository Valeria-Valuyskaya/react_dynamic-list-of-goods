(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o),c=n(3),a=n(6),s=n(7),i=n(9),u=n(8),d=n(1),l=n.n(d),f=n(2),h=n.n(f),j=(n(15),n(0)),b=function(t){var e=t.goods;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){return p().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).splice(0,5)}))},m=function(){return p().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},O=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.loadAllGoods=Object(c.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.load5First=Object(c.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.loadRedGoods=Object(c.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsx)("button",{type:"button",onClick:this.loadAllGoods,children:"Load all goods"}),Object(j.jsx)("button",{type:"button",onClick:this.load5First,children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",onClick:this.loadRedGoods,children:"Load red goods"}),Object(j.jsx)(b,{goods:t})]})}}]),n}(h.a.Component),v=O;r.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.808a029a.chunk.js.map
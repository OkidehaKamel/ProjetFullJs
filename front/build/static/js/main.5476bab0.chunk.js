(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{229:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(47),r=c.n(s),l=(c(97),c(18)),i=c.n(l),j=c(28),o=c(5),u=c.p+"static/media/logo.6ce24c58.svg",d=(c(99),c(37)),b=c(26),m=c.n(b),x=c(23),f=c.n(x),h=c(0);var O=function(e){var t=e.elements,c=e.setElements,a=Object(n.useState)(""),s=Object(o.a)(a,2),r=s[0],l=s[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],b=j[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{id:"formList",className:"d-flex",children:[Object(h.jsxs)("div",{className:"mb-3 d-flex col-md-5 justify-content-around",children:[Object(h.jsx)("label",{for:"name",className:"form-label ",children:"Nom :"}),Object(h.jsx)("input",{type:"text",id:"name",onChange:function(e){return l(e.target.value)},value:r,className:"form-control"})]}),Object(h.jsxs)("div",{className:"mb-3 d-flex col-md-5 justify-content-around",children:[Object(h.jsx)("label",{for:"image",className:"form-label ",children:"Image :"}),Object(h.jsx)("input",{type:"text",id:"image",onChange:function(e){return b(e.target.value)},value:u,className:"form-control"})]}),Object(h.jsx)("div",{className:"mb-3 d-flex col-md-2",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),""===r)alert("Veuillez entrer un nom de cat\xe9gorie");else if(t.filter((function(e){return e.name==r})).length>0)alert("Cette cat\xe9gorie existe d\xe9j\xe0");else{c([].concat(Object(d.a)(t),[{name:r,image:u}]));var n={name:r,image:u,slug:f()(r)};m.a.post("/categories/new",n).then((function(e){return console.log(e.data)})),l(""),b("")}},children:"Ajouter"})})]})})};var v=function(e){var t=e.elements,c=e.setElements,a=Object(n.useState)(""),s=Object(o.a)(a,2);return s[0],s[1],Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"mb-5",children:"Liste des cat\xe9gories :"}),Object(h.jsx)("div",{className:"d-flex flex-wrap bg-light rounded p-5",children:t.length>0?t.map((function(e){return Object(h.jsx)("a",{href:"/category/"+e.slug,className:"linkCat",children:Object(h.jsxs)("figure",{className:"cat",children:[Object(h.jsx)("img",{src:e.image,alt:e.name}),Object(h.jsx)("figcaption",{children:e.name})]},e.id)})})):Object(h.jsx)("p",{children:"Il n'y a pas encore de cat\xe9gories"})}),Object(h.jsx)("h4",{className:"mb-5",children:"Ajouter une cat\xe9gorie"}),Object(h.jsx)(O,{elements:t,setElements:c})]})},g=c(27),p=c(3);var N=function(e){var t=e.category,c=e.articles,a=e.setArticles,s=Object(n.useState)(""),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(""),u=Object(o.a)(j,2),b=u[0],x=u[1],O=Object(n.useState)(""),v=Object(o.a)(O,2),g=v[0],p=v[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{id:"formListArticle",className:"",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"mb-3 d-flex col-md-8 justify-content-between",children:[Object(h.jsx)("label",{for:"title",className:"form-label ",children:"Titre :"}),Object(h.jsx)("input",{type:"text",id:"title",onChange:function(e){return i(e.target.value)},value:l,className:"form-control"})]}),Object(h.jsxs)("div",{className:"mb-3 d-flex col-md-4 justify-content-between",children:[Object(h.jsx)("label",{for:"author",className:"form-label ",children:"Auteur :"}),Object(h.jsx)("input",{type:"text",id:"author",onChange:function(e){return x(e.target.value)},value:b,className:"form-control"})]})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(h.jsx)("label",{for:"text",className:"form-label ",children:"Markdown :"}),Object(h.jsx)("textarea",{id:"text",onChange:function(e){return p(e.target.value)},value:g,className:"form-control"})]})}),Object(h.jsx)("div",{className:"mb-3 d-flex justify-content-center",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),""===l)alert("Veuillez entrer un titre");else{a([].concat(Object(d.a)(c),[{title:l,author:b,text:g,categoryid:t._id}]));var n={title:l,author:b,text:g,categoryid:t._id,slug:f()(l)};m.a.post("/articles/new",n).then((function(e){return console.log(e.data)})),i(""),x(""),p("")}},children:"Ajouter"})})]})})},y=c(91),w=c.n(y);var A=function(e){var t=e.article;return console.log(t.text),Object(h.jsxs)("div",{className:"border border-secondary rounded",children:[Object(h.jsx)("h2",{className:"text-start",children:t.title}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("div",{className:"markdown col-md-9 p-2",children:Object(h.jsx)(w.a,{children:t.text})}),Object(h.jsxs)("div",{className:"col-md-3 border-start",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(h.jsx)("a",{className:"btn btn-info",href:"/article/edit/"+t._id,children:"Editer"}),Object(h.jsx)("button",{className:"btn btn-secondary",children:"Supprimer"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("h6",{className:"mt-4",children:"Archives"})})]})]})]})};var C=function(e){e.elements;var t=e.category,c=Object(n.useState)([]),a=Object(o.a)(c,2),s=a[0],r=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(j.a)(i.a.mark((function e(){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/articles/"+t._id);case 2:return c=e.sent,e.next=5,c.json();case 5:n=(n=e.sent).reverse(),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("figure",{children:Object(h.jsx)("img",{className:"catImage",src:t.image,alt:t.name})},t.id),Object(h.jsxs)("div",{children:[s.length>0?s.map((function(e){return Object(h.jsx)(A,{article:e})})):Object(h.jsx)("p",{children:"Il n'y a pas encore d'article dans cette cat\xe9gorie"}),Object(h.jsx)("h4",{children:"Ajouter un article"}),Object(h.jsx)(N,{category:t,articles:s,setArticles:r})]})]})};var S=function(e){e.category,e.articles,e.setArticles;var t=e.article,c=Object(n.useState)(t.title),a=Object(o.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(t.author),i=Object(o.a)(l,2),j=i[0],u=i[1],d=Object(n.useState)(t.text),b=Object(o.a)(d,2),m=b[0],x=b[1],O=Object(n.useState)([]),v=Object(o.a)(O,2);return v[0],v[1],Object(h.jsx)("div",{children:Object(h.jsxs)("form",{id:"formListArticle",className:"",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"mb-3 d-flex col-md-8 justify-content-between",children:[Object(h.jsx)("label",{for:"title",className:"form-label ",children:"Titre :"}),Object(h.jsx)("input",{type:"text",id:"title",onChange:function(e){return r(e.target.value)},value:s,className:"form-control"})]}),Object(h.jsxs)("div",{className:"mb-3 d-flex col-md-4 justify-content-between",children:[Object(h.jsx)("label",{for:"author",className:"form-label ",children:"Auteur :"}),Object(h.jsx)("input",{type:"text",id:"author",onChange:function(e){return u(e.target.value)},value:j,className:"form-control"})]})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(h.jsx)("label",{for:"text",className:"form-label ",children:"Markdown :"}),Object(h.jsx)("textarea",{id:"text",onChange:function(e){return x(e.target.value)},value:m,className:"form-control"})]})}),Object(h.jsx)("div",{className:"mb-3 d-flex justify-content-center",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault();f()(s)},children:"Modifier"})})]})})};var k=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),l=r[0],d=r[1],b=window.location.href,m=b.includes("category"),x=b.includes("article/edit"),f=b.split("/");1==m?f.pop():1==x&&f.pop(),Object(n.useEffect)((function(){O()}),[]);var O=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/categories/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);var N=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/articles/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,d(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"App container",children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(h.jsxs)("ul",{className:"nav justify-content-center",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"/",className:"nav-link",children:"Accueil"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(g.b,{to:"/categories-list",className:"nav-link",children:"Liste"})})]})]}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/categories-list",exact:!0,children:Object(h.jsx)(v,{elements:c,setElements:a})}),c.map((function(e){return Object(h.jsx)(p.a,{path:"/category/"+e.slug,exact:!0,children:Object(h.jsx)(C,{elements:c,category:e})})})),l.map((function(e){return Object(h.jsxs)(p.a,{path:"/article/edit/"+e._id,exact:!0,children:[Object(h.jsx)("h2",{children:"Modifier Article"}),Object(h.jsx)(S,{article:e})]})}))]})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,230)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(228);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),E()},97:function(e,t,c){},99:function(e,t,c){}},[[229,1,2]]]);
//# sourceMappingURL=main.5476bab0.chunk.js.map
(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){},234:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(95),s=c.n(r),i=(c(102),c(20)),l=c.n(i),o=c(28),j=c(5),d=c.p+"static/media/logo.6ce24c58.svg",u=(c(104),c(39)),b=c(16),h=c.n(b),x=c(21),m=c.n(x),O=c(0);var f=function(e){var t=e.elements,c=e.setElements,a=Object(n.useState)(""),r=Object(j.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)(""),o=Object(j.a)(l,2),d=o[0],b=o[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{id:"formList",className:"d-flex",children:[Object(O.jsxs)("div",{className:"mb-3 d-flex col-md-5 justify-content-around",children:[Object(O.jsx)("label",{for:"name",className:"form-label ",children:"Nom :"}),Object(O.jsx)("input",{type:"text",id:"name",onChange:function(e){return i(e.target.value)},value:s,className:"form-control"})]}),Object(O.jsxs)("div",{className:"mb-3 d-flex col-md-5 justify-content-around",children:[Object(O.jsx)("label",{for:"image",className:"form-label ",children:"Image :"}),Object(O.jsx)("input",{type:"text",id:"image",onChange:function(e){return b(e.target.value)},value:d,className:"form-control"})]}),Object(O.jsx)("div",{className:"mb-3 d-flex col-md-2",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),""===s)alert("Veuillez entrer un nom de cat\xe9gorie");else if(t.filter((function(e){return e.name==s})).length>0)alert("Cette cat\xe9gorie existe d\xe9j\xe0");else{c([].concat(Object(u.a)(t),[{name:s,image:d}]));var n={name:s,image:d,slug:m()(s)};h.a.post("/categories/new",n).then((function(e){return console.log(e.data)})),i(""),b("")}},children:"Ajouter"})})]})})};var p=function(e){var t=e.elements,c=e.setElements;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"mb-5",children:"Liste des cat\xe9gories :"}),Object(O.jsx)("div",{className:"d-flex flex-wrap bg-light rounded p-5",children:t.length>0?t.map((function(e){return Object(O.jsx)("a",{href:"/category/"+e.slug,className:"linkCat",children:Object(O.jsxs)("figure",{className:"cat",children:[Object(O.jsx)("img",{src:e.image,alt:e.name}),Object(O.jsx)("figcaption",{children:e.name})]},e.id)})})):Object(O.jsx)("p",{children:"Il n'y a pas encore de cat\xe9gories"})}),Object(O.jsx)("h4",{className:"mb-5",children:"Ajouter une cat\xe9gorie"}),Object(O.jsx)(f,{elements:t,setElements:c})]})},g=c(50),v=c(4);var N=function(e){var t=e.category,c=e.articles,a=e.setArticles,r=Object(n.useState)(""),s=Object(j.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(""),d=Object(j.a)(o,2),b=d[0],x=d[1],f=Object(n.useState)(""),p=Object(j.a)(f,2),g=p[0],v=p[1],N=Object(n.useState)(""),y=Object(j.a)(N,2),w=y[0],A=y[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{id:"formListArticle",className:"",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"mb-3 d-flex col-md-8 justify-content-between",children:[Object(O.jsx)("label",{for:"title",className:"form-label ",children:"Titre :"}),Object(O.jsx)("input",{type:"text",id:"title",onChange:function(e){return l(e.target.value)},value:i,className:"form-control"})]}),Object(O.jsxs)("div",{className:"mb-3 d-flex col-md-4 justify-content-between",children:[Object(O.jsx)("label",{for:"author",className:"form-label ",children:"Auteur :"}),Object(O.jsx)("input",{type:"text",id:"author",onChange:function(e){return x(e.target.value)},value:b,className:"form-control"})]})]}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(O.jsx)("label",{for:"text",className:"form-label ",children:"Markdown :"}),Object(O.jsx)("textarea",{id:"text",onChange:function(e){return v(e.target.value)},value:g,className:"form-control"})]})}),Object(O.jsx)("div",{className:"mb-3 d-flex justify-content-center",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),""===i)alert("Veuillez entrer un titre");else{A({title:i,author:b,text:g}),a([].concat(Object(u.a)(c),[{title:i,author:b,text:g,categoryid:t._id,version:w}]));var n={title:i,author:b,text:g,categoryid:t._id,slug:m()(i),version:{title:i,author:b,text:g,slug:m()(i)}};h.a.post("/articles/new",n).then((function(e){return console.log(e.data)})),l(""),x(""),v(""),window.location.href="/category/"+t.name}},children:"Ajouter"})})]})})},y=c(96),w=c.n(y),A=c(49),S=c(27);var k=function(e){var t=e.article,c=t.version[t.version.length-1],a=Object(n.useState)(c),r=Object(j.a)(a,2),s=r[0],i=r[1],l=t.version;return console.log(l),Object(O.jsxs)("div",{className:"border border-secondary rounded",children:[Object(O.jsx)("h2",{className:"text-start title",children:s.title}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"markdown col-md-9 p-2",children:Object(O.jsx)(w.a,{children:s.text})}),Object(O.jsxs)("div",{className:"col-md-3 border-start",children:[Object(O.jsxs)("div",{className:"d-flex justify-content-around mb-2",children:[Object(O.jsx)("a",{className:"btn btn-info",href:"/article/edit/"+t._id,children:"Editer"}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){h.a.delete("/articles/"+t._id),document.location.reload()},children:"Supprimer"})]}),Object(O.jsxs)("div",{className:"border border-1 rounded-top",children:[Object(O.jsx)("h6",{className:"mt-2",children:"Archives"}),Object(O.jsx)("ul",{className:"list-group",children:l.length>0?l.map((function(e){return Object(O.jsxs)("li",{className:"d-flex list-group-item justify-content-between",children:[Object(O.jsxs)("span",{className:"text-left",children:["V.",l.indexOf(e)," - ",e.title]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("a",{href:"#",onClick:function(){return i(e),void document.location.reload()},className:"mx-2",title:"Voir",children:Object(O.jsx)(A.a,{icon:S.b})}),Object(O.jsx)("a",{href:"#",onClick:function(){return c=e,void h.a.put("/articles/edit/"+t._id,c).then((function(e){document.location.reload()}));var c},className:"mx-2",title:"Restaurer",children:Object(O.jsx)(A.a,{icon:S.a})})]})]})})):Object(O.jsx)("li",{children:"Pas de version ant\xe9rieure"})})]})]})]})]})};var C=function(e){e.elements;var t=e.category,c=Object(n.useState)([]),a=Object(j.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(o.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/articles/"+t._id);case 2:return c=e.sent,e.next=5,c.json();case 5:n=(n=e.sent).reverse(),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:t.name}),Object(O.jsx)("figure",{children:Object(O.jsx)("img",{className:"catImage",src:t.image,alt:t.name})},t.id),Object(O.jsxs)("div",{children:[r.length>0?r.map((function(e){return Object(O.jsx)(k,{article:e})})):Object(O.jsx)("p",{children:"Il n'y a pas encore d'article dans cette cat\xe9gorie"}),Object(O.jsx)("h4",{children:"Ajouter un article"}),Object(O.jsx)(N,{category:t,articles:r,setArticles:s})]})]})};var E=function(e){return e.slug,Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)("h2",{className:"text-center",children:"Accueil"}),Object(O.jsx)("h4",{children:"ProjetFullStackJS"}),Object(O.jsx)("p",{children:"Formation Chef de Projet Digital - Session 2020/2021"}),Object(O.jsx)("p",{children:"Sanita RATTANASAMAY"}),Object(O.jsx)("p",{children:"Kamel AHMED"}),Object(O.jsx)("h4",{children:"Proc\xe9dure de t\xe9l\xe9chargement et d'installation du Projet"}),Object(O.jsx)("p",{children:"T\xe9l\xe9charger et d\xe9zipper l'application \xe0 partir de gitHub ProjetFullJS"}),Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:"Executer la commande npm install mongoose afin d'installer le package de base de donn\xe9e"}),Object(O.jsx)("li",{children:"Executer la commande npm run build s'il n'y a pas de r\xe9pertoire build"}),Object(O.jsx)("li",{children:"Executer la commande npm start afin de lancer l'application"}),Object(O.jsx)("li",{children:"Se rendre sur localhost:5000"})]}),Object(O.jsx)("h4",{children:"Le Projet"}),Object(O.jsx)("p",{children:'Application web en Fullstack JS :  outil de travail collaboratif permettant la cr\xe9ation, la modification et l\u2019illustration de pages web dans une structure centralis\xe9e "Wiki".'}),Object(O.jsx)("p",{children:"Le back-office r\xe9alis\xe9 en Node.js."}),Object(O.jsx)("p",{children:"Base de donn\xe9es mongoDB."}),Object(O.jsx)("p",{children:'Par d\xe9faut la base est vide, il faut cr\xe9er une cat\xe9gorie pour initialiser la table "cat\xe9gories", puis \xe0 partir de la cat\xe9gorie cr\xe9\xe9e, cr\xe9er les articles correspondant.'}),Object(O.jsx)("p",{children:"Afin de pouvoir structurer individuellement les articles, les contenus de ces derniers sont rentr\xe9s par markdow (https://www.ionos.fr/digitalguide/sites-internet/developpement-web/markdown/ pour utilisation )."}),Object(O.jsx)("p",{children:"Front-office r\xe9alis\xe9 avec React. "}),Object(O.jsx)("p",{children:"Utilisation de Axios pour le requ\xeatage de l\u2019api."}),Object(O.jsx)("h4",{children:"Fonctionnalit\xe9s d\xe9velopp\xe9es"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Ajout, modification et suppression d\u2019articles"}),Object(O.jsxs)("li",{children:["La cat\xe9gorisation des articles :",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Page listant toutes les cat\xe9gories"}),Object(O.jsx)("li",{children:"Affichage de la liste des articles correspondants au clic de la cat\xe9gorie"})]})]}),Object(O.jsx)("li",{children:"Le versionning : Historisation des versions d\u2019un article, visualisation et restauration d'une version"})]}),Object(O.jsx)("h4",{children:"API"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Get all categories : Method GET '/categories'"}),Object(O.jsx)("li",{children:"Get category by slug : Method GET '/categories/:slug'"}),Object(O.jsx)("li",{children:"Get category by id : Method GET '/categories/:i"}),Object(O.jsx)("li",{children:"Create category : Method POST '/categories/new' "}),Object(O.jsx)("li",{children:"Get all articles : Method GET '/articles'"}),Object(O.jsx)("li",{children:"Get articles by category id : Method GET '/articles/:categoryid'"}),Object(O.jsx)("li",{children:"Create article : Method POST '/articles/new'"}),Object(O.jsx)("li",{children:"Edit article by id : Methode PUT '/articles/edit/:id' "}),Object(O.jsx)("li",{children:"Delete article by id : Methode DELETE '/articles/:id'"})]})]})};var M=function(e){e.category,e.articles,e.setArticles;var t=e.article,c=Object(n.useState)(t.version.pop()),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(r.title),l=Object(j.a)(i,2),o=l[0],d=l[1],u=Object(n.useState)(r.author),b=Object(j.a)(u,2),x=b[0],f=b[1],p=Object(n.useState)(r.text),g=Object(j.a)(p,2),v=g[0],N=g[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{id:"formListArticle",className:"",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"mb-3 d-flex col-md-8 justify-content-between",children:[Object(O.jsx)("label",{for:"title",className:"form-label ",children:"Titre :"}),Object(O.jsx)("input",{type:"text",id:"title",onChange:function(e){return d(e.target.value)},value:o,className:"form-control"})]}),Object(O.jsxs)("div",{className:"mb-3 d-flex col-md-4 justify-content-between",children:[Object(O.jsx)("label",{for:"author",className:"form-label ",children:"Auteur :"}),Object(O.jsx)("input",{type:"text",id:"author",onChange:function(e){return f(e.target.value)},value:x,className:"form-control"})]})]}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"mb-3 d-flex justify-content-between",children:[Object(O.jsx)("label",{for:"text",className:"form-label ",children:"Markdown :"}),Object(O.jsx)("textarea",{id:"text",onChange:function(e){return N(e.target.value)},value:v,className:"form-control"})]})}),Object(O.jsx)("div",{className:"mb-3 d-flex justify-content-center",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){e.preventDefault(),s({title:o,author:x,text:v});var c={title:o,author:x,text:v,slug:m()(o)};s(c),h.a.put("/articles/edit/"+t._id,c).then((function(e){window.history.back()}))},children:"Modifier"})})]})})};var T=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(j.a)(r,2),i=s[0],u=s[1],b=window.location.href,h=b.includes("category"),x=b.includes("article/edit"),m=b.split("/");1==h?m.pop():1==x&&m.pop(),Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/categories/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);var N=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/articles/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,u(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"App container",children:Object(O.jsxs)(g.a,{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(O.jsxs)("ul",{className:"nav justify-content-center",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"/home",className:"nav-link",children:"Accueil"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(g.b,{to:"/categories-list",className:"nav-link",children:"Liste"})})]})]}),Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{path:"/home",exact:!0,children:Object(O.jsx)(E,{})}),Object(O.jsx)(v.a,{path:"/",exact:!0,children:Object(O.jsx)(E,{})}),Object(O.jsx)(v.a,{path:"/categories-list",exact:!0,children:Object(O.jsx)(p,{elements:c,setElements:a})}),c.map((function(e){return Object(O.jsx)(v.a,{path:"/category/"+e.slug,exact:!0,children:Object(O.jsx)(C,{elements:c,category:e})})})),i.map((function(e){return Object(O.jsxs)(v.a,{path:"/article/edit/"+e._id,exact:!0,children:[Object(O.jsx)("h2",{children:"Modifier Article"}),Object(O.jsx)(M,{article:e})]})}))]})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,235)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(233);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),P()}},[[234,1,2]]]);
//# sourceMappingURL=main.531e2070.chunk.js.map
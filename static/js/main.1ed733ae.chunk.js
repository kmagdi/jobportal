(this.webpackJsonpjobs=this.webpackJsonpjobs||[]).push([[0],{47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var l=c(0),s=c(1),a=c.n(s),n=c(24),r=c.n(n),i=c(21),o=c(4),j=c(10);var d=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(o.a)(n,2),d=r[0],b=r[1],m=function(e,t,c){var l;return function(){var s=this,a=arguments,n=function(){l=null,c||e.apply(s,a)},r=c&&!l;clearTimeout(l),l=setTimeout(n,t),r&&e.apply(s,a)}}((function(){var e=window.pageYOffset;b(c>e&&c-e>70||e<10),a(e)}),100);Object(s.useEffect)((function(){return window.addEventListener("scroll",m),function(){return window.removeEventListener("scroll",m)}}),[c,d,m]);return Object(l.jsx)("div",{style:Object(i.a)(Object(i.a)({},{position:"fixed",height:"100px",width:"100%",backgroundColor:"#333D79FF",color:"#FAEBEFFF",textAlign:"center",transition:"top 0.6s"}),{},{top:d?"0":"-100px"}),children:Object(l.jsxs)(j.b,{to:"/",style:{color:"#FAEBEFFF",textDecoration:"underline #FAEBEFFF"},children:[Object(l.jsx)("h4",{children:"Kecskem\xe9ti Szakk\xe9pz\xe9si Centrum  "}),Object(l.jsxs)("h6",{children:["\xc1ll\xe1sport\xe1l ",Object(l.jsx)("small",{children:"(gyakorlati projektfeladat)"})]})]})})},b=function(e){var t=Object(s.useState)({data:null,loading:!0}),c=Object(o.a)(t,2),l=c[0],a=c[1];return console.log("url="+e),Object(s.useEffect)((function(){console.log("url use effect="+e),fetch(e).then((function(e){return e.text()})).then((function(e){console.log("text="+e),a({data:e,loading:!1})}))}),[e]),l};var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:";",c=e.slice(0,e.indexOf("\n")).split(t),l=e.slice(e.indexOf("\n")+1).split("\n");return l.map((function(e){var l=e.split(t);return c.reduce((function(e,t,c){return e[t]=l[c],e}),{})}))},u=function(){var e=b("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/elerhetosegek.csv"),t=e.data,c=(e.loading,m(String(t),";")[0]);return Object(l.jsxs)("div",{className:"card-group ",children:[Object(l.jsx)("div",{className:"card ",style:{backgroundColor:"#333D79FF",color:"#FAEBEFFF"},children:Object(l.jsx)("div",{className:"card-footer  foot",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("b",{children:"Sz\xe9khely:"}),c.location]})})}),Object(l.jsx)("div",{className:"card",style:{backgroundColor:"#333D79FF"},children:Object(l.jsx)("div",{className:"card-footer  lpc",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("b",{children:"Levelez\xe9si c\xedm:"}),c.adress]})})}),Object(l.jsx)("div",{className:"card",style:{backgroundColor:"#333D79FF"},children:Object(l.jsx)("div",{className:"card-footer  lpc",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("b",{children:"Telefon:"}),c.tel]})})}),Object(l.jsx)("div",{className:"card",style:{backgroundColor:"#333D79FF"},children:Object(l.jsx)("div",{className:"card-footer  lpc",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("b",{children:"E-mail:"}),c.email]})})}),Object(l.jsx)("div",{className:"card",style:{backgroundColor:"#333D79FF"},children:Object(l.jsx)("div",{className:"card-footer  lpc",children:Object(l.jsxs)("small",{children:[Object(l.jsx)("b",{children:"OM azonos\xedt\xf3:"}),c.omid]})})})]})},h=c(20),O=c(5),x=function(e){var t=e.job;return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsxs)(O.Tr,{className:"text-center",children:[Object(l.jsx)(O.Td,{className:"text-left",children:Object(l.jsxs)(j.b,{style:{color:"#333D79FF",textDecoration:"underline #333D79FF"},to:"/detail/".concat(t.id,",").concat(t.jobName),children:[t.jobName," "]})},t.id),Object(l.jsx)(O.Td,{children:t.jobLocation}),Object(l.jsx)(O.Td,{children:t.jobType}),Object(l.jsx)(O.Td,{children:t.posted})]})})},f=(c(44),function(e){var t=e.filteredData;return Object(l.jsx)("div",{children:Object(l.jsxs)(O.Table,{className:"table table-hover table-striped ",children:[Object(l.jsx)(O.Thead,{style:{backgroundColor:"#333D79FF",color:"#FAEBEFFF"},children:Object(l.jsxs)(O.Tr,{className:"text-center",children:[Object(l.jsx)(O.Th,{className:"text-left",children:"\xc1ll\xe1s megnevez\xe9se"}),Object(l.jsx)(O.Th,{children:"Munkav\xe9gz\xe9s helye"}),Object(l.jsx)(O.Th,{children:"\xc1ll\xe1s t\xedpusa"}),Object(l.jsx)(O.Th,{children:"K\xf6zz\xe9tev\u0151"})]})}),Object(l.jsx)(O.Tbody,{children:t.map((function(e){return Object(l.jsx)(x,{job:e},e.id)}))})]})})}),v=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],n=b("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/allasok.csv"),r=n.data,i=(n.loading,m(String(r),";").filter((function(e){return null!=e.jobName}))),j=function(e){console.log(e.target.id),"jobName"==e.target.id&&(document.getElementById("jobType").value="1"),"jobType"==e.target.id&&(document.getElementById("jobName").value="1",document.getElementById("word").value=""),"word"==e.target.id&&(document.getElementById("jobName").value="1",document.getElementById("jobType").value="1"),1==e.target.value?a(""):a(e.target.value)},d=Object(h.a)(new Set(i.map((function(e){return e.jobType})))).sort((function(e,t){return e>t?1:t>e?-1:0})),u=Object(h.a)(new Set(i.map((function(e){return e.jobName})))).sort((function(e,t){return e>t?1:t>e?-1:0})),O=i.filter((function(e){return JSON.stringify(e).toLocaleLowerCase().includes(c.toLocaleLowerCase())}));return Object(l.jsx)("div",{className:"container-fluid p-5 ",style:{backgroundColor:"#FAEBEFFF",color:"#333D79FF"},children:Object(l.jsxs)("div",{className:"row p-5 border justify-content-center",children:[Object(l.jsxs)("form",{className:"form-inline",children:[Object(l.jsx)("label",{children:"Kulcsszavas keres\xe9s:"}),Object(l.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",id:"word",value:c,onChange:j}),Object(l.jsxs)("select",{className:"form-control mr-sm-2 m-3",onChange:j,id:"jobName",children:[Object(l.jsx)("option",{value:"1",children:"\xe1ll\xe1s nevek"}),u.map((function(e){return Object(l.jsx)("option",{className:"text-dark",children:e})}))]}),Object(l.jsxs)("select",{className:"form-control mr-sm-2 m-3",onChange:j,id:"jobType",children:[Object(l.jsx)("option",{value:"1",children:"\xe1ll\xe1s t\xedpusok"}),d.map((function(e){return Object(l.jsx)("option",{className:"text-dark",children:e})}))]}),Object(l.jsxs)("label",{children:["A meghirdetett \xe1ll\xe1sok sz\xe1ma:",i.length]})]}),Object(l.jsx)(f,{filteredData:O})]})})},p=c(2),g=c(26),N=c.n(g),F=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),i=r[0],j=r[1],d=Object(s.useState)(""),b=Object(o.a)(d,2),m=b[0],u=b[1],h=Object(s.useState)(""),O=Object(o.a)(h,2),x=O[0],f=O[1],v=Object(s.useState)(!1),p=Object(o.a)(v,2),g=p[0],F=p[1],k=Object(s.useState)(!1),y=Object(o.a)(k,2),E=y[0],S=y[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:[Object(l.jsx)("h4",{className:"m-5",children:"Jelentkez\xe9s"}),g?Object(l.jsx)("h4",{className:"text-info",children:"A jeletkez\xe9se sikeresen bek\xfcldve"}):E?Object(l.jsx)("h4",{className:"text-danger",children:"ez DEMO-nem lehets\xe9ges email k\xfcld\xe9s!"}):"",Object(l.jsxs)("form",{onSubmit:function(e){if(S(!0),e.preventDefault(),"111"==m){var t={name:c,msg:x,tel:m,email:i};N.a.send("contact_form","contact_form",t,"user_ZE3xLw4P3Ea1rrGutuDM1").then((function(e){console.log("SUCCESS!",e.status,e.text),F(!0)}),(function(e){console.log("FAILED...",e),F(!1)}))}else F(!1)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"name",children:"*N\xe9v"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"n\xe9v",value:c,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"email",children:"*E-mail"}),Object(l.jsx)("input",{type:"email",id:"email",className:"form-control",required:!0,placeholder:"e-mail c\xedm",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"tel",children:"*Telefonsz\xe1m"}),Object(l.jsx)("input",{type:"text",id:"tel",className:"form-control",required:!0,placeholder:"telefonsz\xe1m",value:m,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"msg",children:"\xdczenet"}),Object(l.jsx)("textarea",{id:"msg",className:"form-control",placeholder:"\xfczenet",value:x,onChange:function(e){return f(e.target.value)}})]}),Object(l.jsx)("input",{className:"btn btn-outline-primary",type:"submit",value:"Jelentkez\xe9s bek\xfcld\xe9se"})]})]})})},k=(c(47),function(e){var t=e.match,c=Object(s.useState)({}),a=Object(o.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(""),j=Object(o.a)(i,2),d=j[0],b=j[1];return Object(s.useEffect)((function(){console.log("neve:"+t.params.jobName);fetch("https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletek.csv").then((function(e){return e.text()})).then((function(e){console.log("twxt="+e);var c=m(e,";"),l=[];c.forEach((function(e){e.id==t.params.id?l.push(e):console.log(e.id)})),console.log("job="+l[0]),l.length>0?r(l[0]):b("nincsenek adatok")}))}),[]),Object(l.jsxs)("div",{className:"container-fluid p-5 row justify-content-center",style:{backgroundColor:"#FAEBEFFF",color:"#333D79FF"},children:[Object(l.jsx)("p",{children:d||""}),Object(l.jsxs)("p",{children:[Object(l.jsxs)("h4",{className:"m-5",children:[t.params.jobName," "]}),Object(l.jsxs)("div",{className:"Rtable Rtable--2cols",children:[Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"Int\xe9zm\xe9ny neve"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.name}),Object(l.jsxs)("div",{className:"Rtable-cell",children:[" ",Object(l.jsx)("b",{children:"Int\xe9zm\xe9ny c\xedme"})]}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.adress}),Object(l.jsxs)("div",{className:"Rtable-cell",children:[" ",Object(l.jsx)("b",{children:"E-mail c\xedm"})]}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.email}),Object(l.jsxs)("div",{className:"Rtable-cell",children:[" ",Object(l.jsx)("b",{children:"Jogviszony id\u0151tartama"})]}),Object(l.jsx)("div",{className:"Rtable-cell",children:"..."}),Object(l.jsxs)("div",{className:"Rtable-cell",children:[" ",Object(l.jsx)("b",{children:"Foglalkoztat\xe1s jellege"})]}),Object(l.jsx)("div",{className:"Rtable-cell",children:"..."}),Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"Munkav\xe9gz\xe9s helye"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.location}),Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"Feladat t\xedpusa"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.type}),Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"Elv\xe1rt k\xe9pzes"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.qualification}),Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"El\u0151ny\xf6k"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.advantages}),Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"Bet\xf6lthet\u0151s\xe9g id\u0151pontja"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.starTdate}),Object(l.jsx)("div",{className:"Rtable-cell",children:Object(l.jsx)("b",{children:"Jelentkez\xe9si hat\xe1rid\u0151"})}),Object(l.jsx)("div",{className:"Rtable-cell",children:n.starTdate})]})]}),Object(l.jsx)("div",{className:"formInput",children:Object(l.jsx)(F,{})})]})}),y=function(){return Object(l.jsxs)(j.a,{basename:"/jobportal",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{path:"/",exact:!0,component:v}),Object(l.jsx)(p.b,{path:"/jobportal",component:v}),Object(l.jsx)(p.b,{path:"/detail/:id,:jobName",exact:!0,component:k}),Object(l.jsx)(p.b,{path:"/jobportal/detail/:id,:jobName",exact:!0,component:k}),Object(l.jsx)(p.a,{to:"/"})]}),Object(l.jsx)(u,{})]})};c(48);r.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1ed733ae.chunk.js.map
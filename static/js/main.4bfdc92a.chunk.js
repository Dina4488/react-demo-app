(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),r=a.n(s),i=(a(29),a(30),a(39)),o=a(11),l=a(17),m=a(43),j=(a(31),a(5));var u=function(e){var t=e.actor;return Object(j.jsx)(l.a,{xs:12,md:6,lg:3,children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(m.a.Img,{variant:"top",src:t.image}),Object(j.jsxs)(m.a.Body,{children:[Object(j.jsx)(m.a.Title,{className:"fixName",children:Object(j.jsx)("a",{href:t.link,target:"_blank",children:"".concat(t.firstName,"  ").concat(t.lastName)})}),Object(j.jsx)(m.a.Text,{children:t.getAge()})]})]})})},g=a(18),h=a(19),d=function(){function e(t,a,n,c,s){Object(g.a)(this,e),this.firstName=t,this.lastName=a,this.birthday=n,this.image=c,this.link=s}return Object(h.a)(e,[{key:"getAge",value:function(){var e=new Date,t=new Date(this.birthday),a=e.getFullYear()-t.getFullYear(),n=e.getMonth()-t.getMonth();return(n<0||0===n&&e.getDate()<t.getDate())&&a--,a}}]),e}(),b=a(42),f=a(23),w=a(40);a(20),a(41);a(36);var O=function(e){var t=Object(n.useState)([new d("Prad","Pitt","1963/12/18","https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000093/?ref_=nm_mv_close#actor"),new d("Angelina","Jolie","06-04-1975","https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0001401/?ref_=nv_sr_srsg_3"),new d("Larry","David","07-02-1947","https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0202970/?ref_=nv_sr_srsg_0"),new d("Julia","Louis-Dreyfus","01-13-1961","https://m.media-amazon.com/images/M/MV5BMTYzMDM2MTg2Nl5BMl5BanBnXkFtZTcwODQ0OTA1Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0000506/?ref_=tt_ov_st_sm")]),a=Object(o.a)(t,2),c=a[0],s=(a[1],Object(n.useState)("")),r=Object(o.a)(s,2),l=r[0],m=r[1],g=Object(n.useState)("firstName"),h=Object(o.a)(g,2),O=h[0],_=h[1],M=c.filter((function(e){return e.firstName.toLowerCase().includes(l)||e.lastName.toLowerCase().includes(l)})),N="",p="";function x(e,t){return e<t?-1:e>t?1:0}return"firstName"===O?(N=c.sort((function(e,t){return x(e.firstName.toLowerCase(),t.firstName.toLowerCase())})),console.log(N)):"lastName"===O?(N=c.sort((function(e,t){return x(e.lastName.toLowerCase(),t.lastName.toLowerCase())})),console.log(N)):"age"===O&&(N=c.sort((function(e,t){return e.getAge()-t.getAge()})),console.log(N)),p=""!==l?M.map((function(e){return Object(j.jsx)(u,{actor:e})})):N.map((function(e){return Object(j.jsx)(u,{actor:e})})),Object(j.jsxs)(i.a,{children:[Object(j.jsx)("h1",{children:" Actor Gallery"}),Object(j.jsxs)(b.a,{className:"row filter",children:[Object(j.jsx)("div",{className:"col-lg-8 col-md-8 col-12 ",children:Object(j.jsx)(f.a,{type:"text",value:l,onChange:function(e){return m(e.target.value)},placeholder:"Filter by a first or Last name"})}),Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-12",children:Object(j.jsxs)(f.a,{as:"select",value:O,onChange:function(e){return _(e.target.value)},children:[Object(j.jsx)("option",{value:"firstName",children:"First Name"}),Object(j.jsx)("option",{value:"lastName",children:"Last Name"}),Object(j.jsx)("option",{value:"age",children:"age"})]})})]}),Object(j.jsx)(w.a,{children:p})]})};var _=function(){return Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{className:"p-cars",children:Object(j.jsx)(O,{})})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),M()}},[[37,1,2]]]);
//# sourceMappingURL=main.4bfdc92a.chunk.js.map
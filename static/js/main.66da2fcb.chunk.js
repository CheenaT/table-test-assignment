(this["webpackJsonptable-test-assignments"]=this["webpackJsonptable-test-assignments"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/search-24px.db5d8122.svg"},function(e,t,a){e.exports=a.p+"static/media/clear-24px.7c81dcc3.svg"},function(e,t,a){e.exports=a.p+"static/media/first_page-24px.3e5f66b6.svg"},function(e,t,a){e.exports=a.p+"static/media/chevron_left-24px.28189801.svg"},function(e,t,a){e.exports=a.p+"static/media/chevron_right-24px.87b76382.svg"},function(e,t,a){e.exports=a.p+"static/media/last_page-24px.c5ad6e6d.svg"},function(e,t,a){e.exports=a.p+"static/media/arrow_downward-24px.28818c19.svg"},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),o=(a(16),a(2)),s=a(1),i=function(e){var t=e.searchRowByValue,n=e.searchValue,c=e.clearSearchField;return l.a.createElement("div",{className:"table__header"},l.a.createElement("div",{className:"table__header__title"},"Data table"),l.a.createElement("div",{className:"table__header__search-field__input-wrap"},l.a.createElement("img",{className:"icon",src:a(17),alt:""}),l.a.createElement("input",{className:"table__header__search-field__input",type:"text",placeholder:"Search",value:n,onChange:function(e){return t(e.target.value)}}),l.a.createElement("img",{className:"icon",src:a(18),onClick:c,alt:""})))},m=function(e){var t=e.dataLength,n=e.currentPage,c=e.setCurrentPage;return l.a.createElement("div",null,l.a.createElement("table",{className:"table__footer"},l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"table__footer__td"},l.a.createElement("div",{className:"table__footer__td__page-info"},l.a.createElement("div",{className:"page-info__table-pagination"},l.a.createElement("img",{className:"page-info__table-pagination__contol-buttons",onClick:function(){return c(1)},src:a(19),alt:""}),l.a.createElement("img",{className:"page-info__table-pagination__contol-buttons",onClick:function(){n>1&&c(n-1)},src:a(20),alt:""}),l.a.createElement("span",{className:"page-info__table-pagination__text"},t<50?"".concat(t?"1":"0","-").concat(t," of ").concat(t):"".concat(50*(n-1)+1,"-").concat(50*n," of ").concat(t)),l.a.createElement("img",{className:"page-info__table-pagination__contol-buttons",onClick:function(){n<t/50&&c(n+1)},src:a(21),alt:""}),l.a.createElement("img",{className:"page-info__table-pagination__contol-buttons",onClick:function(){return c(20)},src:a(22),alt:""}))))))))},u=function(e){var t=e.text;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,t||"no records to display"),l.a.createElement("td",null),l.a.createElement("td",null)),Object(s.a)(Array(5)).map((function(e,t){return l.a.createElement("tr",{key:t})})))},d=function(e){var t=e.selectedData;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement("tr",{className:"loader-tr"},l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("div",{className:"loader"}))):l.a.createElement(u,{text:"please select the amount data"}))},p=function(e){var t=e.columns,n=e.sortByColumn;return l.a.createElement("thead",null,l.a.createElement("tr",null,t.map((function(e,t){return l.a.createElement("th",{key:t},l.a.createElement("span",{className:"table__body__thead-column",onClick:function(e){return n(e)}},l.a.createElement("div",null,e),l.a.createElement("img",{className:"table__body__sort-icon",src:a(23),alt:""})))}))))},f=["id","firstName","lastName","email","phone"],b=function(e){var t=e.selectedData,a=e.setSelectedRow,c=e.newRow,r=Object(n.useState)(""),b=Object(o.a)(r,2),E=b[0],_=b[1],h=Object(n.useState)(1),g=Object(o.a)(h,2),v=g[0],w=g[1],N=Object(n.useState)([]),x=Object(o.a)(N,2),j=x[0],O=x[1],y=Object(n.useState)([]),S=Object(o.a)(y,2),C=S[0],D=S[1],k=Object(n.useState)(""),B=Object(o.a)(k,2),R=B[0],A=B[1],F=Object(n.useState)(!0),L=Object(o.a)(F,2),P=L[0],V=L[1],q=Object(n.useState)(null),z=Object(o.a)(q,2),J=z[0],T=z[1];Object(n.useEffect)((function(){null!==t&&(w(1),D([]),O([]),fetch("small"===t?"http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D":"http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D").then((function(e){return e.json()})).then((function(e){O(e),D(e)})))}),[t]),Object(n.useEffect)((function(){}),[j]),Object(n.useEffect)((function(){c&&(D([c].concat(Object(s.a)(C))),O([c].concat(Object(s.a)(j))))}),[c]);return l.a.createElement("div",{className:"table"},l.a.createElement(i,{searchRowByValue:function(e){_(e),O(""===e?C:Object(s.a)(C).filter((function(t){return["id","firstName","lastName","email","phone"].some((function(a){return t[a].toString().toLowerCase().includes(e.toLowerCase())}))})))},searchValue:E,clearSearchField:function(){O(C),_("")}}),l.a.createElement("table",{className:"table__body"},l.a.createElement(p,{columns:f,sortByColumn:function(e,t){var a=e.currentTarget.textContent,n=e.currentTarget.lastElementChild;a!==R?(t=!0,V(!0),A(a),null!==J&&J.classList.remove("icon-direction-asc"),T(n)):a===R&&(t=P),t?n.classList.add("icon-direction-asc"):n.classList.remove("icon-direction-asc"),O(Object(s.a)(j).sort((function(e,n){return e[a]<n[a]?t?-1:1:e[a]>n[a]?t?1:-1:0}))),V(!P)}}),l.a.createElement("tbody",null,C.length?j.length?j.slice(50*(v-1),50*v).map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(t){return function(e,t){var n=window.document.styleSheets[0];console.log(n.cssRules.length,"length"),43===n.cssRules.length&&n.deleteRule(42);n.insertRule(".ln".concat(t.lastName+t.id," { background: grey; }"),n.cssRules.length);a(t)}(0,e)},className:"table__body__row ln".concat(e.lastName+e.id)},l.a.createElement("td",null,l.a.createElement("div",null,e.id)),l.a.createElement("td",null,l.a.createElement("div",null,e.firstName)),l.a.createElement("td",null,l.a.createElement("div",null,e.lastName)),l.a.createElement("td",null,l.a.createElement("div",null,e.email)),l.a.createElement("td",null,l.a.createElement("div",null,e.phone)))})):l.a.createElement(u,null):l.a.createElement(d,{selectedData:t}),j.length<9&&Object(s.a)(Array((j.length?9:3)-j.length)).map((function(e,t){return l.a.createElement("tr",{key:t})})))),l.a.createElement(m,{dataLength:j.length,currentPage:v,setCurrentPage:w}))},E=a(10),_=function(e){var t=e.setNewRow,a=Object(E.a)(),c=a.register,r=a.handleSubmit,i=a.watch,m=a.reset,u=Object(n.useState)(!1),d=Object(o.a)(u,2),p=d[0],f=d[1],b=Object(n.useState)(!1),_=Object(o.a)(b,2),h=_[0],g=_[1];return Object(n.useEffect)((function(){var e=i(),t=Object.keys(e).some((function(t){return""===e[t]}));f(!t)})),l.a.createElement("div",null,l.a.createElement("div",{className:"add-row-button__wrapper"},l.a.createElement("button",{className:"add-row-button",onClick:function(){var e=document.querySelector(".add-row__dropdown");h?(e.style.display="none",g(!h),m()):(e.style.display="flex",g(!h))}},h?"Cancel":"Add row")),l.a.createElement("form",{className:"add-row__dropdown",onSubmit:r((function(e){f&&(t(e),document.querySelector(".add-row__dropdown").style.display="none",g(!1),m(),f(!1))}))},Object(s.a)(Array("id","firstName","lastName","email","phone")).map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("label",{htmlFor:e},e),l.a.createElement("input",{name:e,type:"id"===e?"number":"text",placeholder:e,required:!0,ref:c}))})),p&&l.a.createElement("input",{className:"add-row__dropdown__submit",type:"submit"})))},h=function(e){var t=e.setSelectedData;return l.a.createElement("div",{className:"select-data"},l.a.createElement("label",{htmlFor:"select-data"},"Select the amount of data:"),l.a.createElement("select",{name:"data",onChange:function(e){t(e.target.value)},className:"select-data__select"},l.a.createElement("option",{value:""},"choose data"),l.a.createElement("option",{value:"small"},"32 rows"),l.a.createElement("option",{value:"big"},"1000 rows")))},g=a(9),v=function(e){var t=e.selectedRow,a=e.setSelectedRow;return Object(n.useEffect)((function(){t.address||a(Object(g.a)({},t,{address:{streetAddress:"no info",city:"no info",state:"no info",zip:"no info"},description:"no info"}))})),l.a.createElement("div",{className:"selected-row"},l.a.createElement("span",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c "),l.a.createElement("b",null,t.firstName),l.a.createElement("label",{htmlFor:"description"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),l.a.createElement("textarea",{id:"description",value:t.description,readOnly:!0}),Object(s.a)(Array({description:"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",prop:"streetAddress"},{description:"\u0413\u043e\u0440\u043e\u0434: ",prop:"city"},{description:"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",prop:"state"},{description:"\u0418\u043d\u0434\u0435\u043a\u0441: ",prop:"zip"})).map((function(e,a){return l.a.createElement("div",{key:a,className:"selected_row__prop"},l.a.createElement("span",null,e.description),l.a.createElement("b",null,t.address&&t.address[e.prop]))})))};var w=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],m=s[1],u=Object(n.useState)(null),d=Object(o.a)(u,2),p=d[0],f=d[1];return l.a.createElement("div",{className:"App"},l.a.createElement(h,{setSelectedData:c}),l.a.createElement(_,{setNewRow:f}),l.a.createElement(b,{selectedData:a,setSelectedRow:m,newRow:p}),i&&l.a.createElement(v,{selectedRow:i,setSelectedRow:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.66da2fcb.chunk.js.map
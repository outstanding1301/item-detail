(this["webpackJsonpitem-detail"]=this["webpackJsonpitem-detail"]||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),c=t.n(o),l=(t(15),t(9)),i=t(2),s=t.n(i),m=t(5),u=t(1),p=t(8),d=t.n(p);t(17);var g=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("http://ai.esmplus.com/jin465/assets/header.png"),i=Object(u.a)(c,2),p=i[0],g=i[1],v=Object(n.useState)("http://ai.esmplus.com/jin465/assets/footer.png"),f=Object(u.a)(v,2),E=f[0],D=f[1],b=Object(n.useState)(null),h=Object(u.a)(b,2),N=h[0],O=h[1],w=Object(n.useState)([]),j=Object(u.a)(w,2),k=j[0],y=j[1],x=Object(n.useState)(""),C=Object(u.a)(x,2),L=C[0],R=C[1],S=Object(n.useState)(""),T=Object(u.a)(S,2),B=T[0],I=T[1],_=Object(n.useState)(""),A=Object(u.a)(_,2),F=A[0],U=A[1],P=Object(n.useState)("\uba74 \ud63c\ubc29"),z=Object(u.a)(P,2),J=z[0],W=z[1],Z=function(){o(!t)},M=function(){var e=Object(m.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),e.next=3,d()(document.getElementsByClassName("frame")[0],{allowTaint:!0,useCORS:!0,letterRendering:1,scrollX:0,scrollY:0,scale:1});case 3:a=e.sent,t=a.toDataURL("image/jpeg"),(n=document.createElement("a")).href=t,n.download="detail.jpg",document.body.appendChild(n),n.click();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){y((function(a){return[].concat(Object(l.a)(a),[e])}))},Y=function(e){e.preventDefault()},$=function(e){e.preventDefault()},q=function(e){e.preventDefault()},G=function(e){e.preventDefault()},H=function(e){if(t){var a=e.dataTransfer.files[0];if(["image/jpeg","image/png"].indexOf(a.type)>-1){var n=new FileReader;n.onload=function(e){return g(e.target.result)},n.readAsDataURL(a)}}else alert("\uc218\uc815 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");e.preventDefault()},K=function(e){if(t){var a=e.dataTransfer.files[0];if(["image/jpeg","image/png"].indexOf(a.type)>-1){var n=new FileReader;n.onload=function(e){return O(e.target.result)},n.readAsDataURL(a)}}else alert("\uc218\uc815 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");e.preventDefault()},Q=function(e){if(t){var a=e.dataTransfer.files[0];if(["image/jpeg","image/png"].indexOf(a.type)>-1){var n=new FileReader;n.onload=function(e){return D(e.target.result)},n.readAsDataURL(a)}}else alert("\uc218\uc815 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");e.preventDefault()};function V(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(m.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=new FileReader;t.onload=function(a){return e(t.result)},t.readAsDataURL(a)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(){var e=Object(m.a)(s.a.mark((function e(a){var n,r,o,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=17;break}n=["image/jpeg","image/png"],r=a.dataTransfer.files,o=[].slice.call(r).sort((function(e,a){return Number.isInteger(e)&&Number.isInteger(a)?e-a:e.name.localeCompare(a.name)})),c=0;case 5:if(!(c<o.length)){e.next=15;break}if(l=o[c],!(n.indexOf(l.type)>-1)){e.next=12;break}return e.next=10,V(l);case 10:i=e.sent,X(i);case 12:c++,e.next=5;break;case 15:e.next=18;break;case 17:alert("\uc218\uc815 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");case 18:a.preventDefault();case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return t?r.a.createElement("div",{className:"App",onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:G},r.a.createElement("div",{className:"topBar"},r.a.createElement("button",{className:"edit",onClick:Z},"\uc644\ub8cc"),r.a.createElement("button",{className:"remove",onClick:function(){y([]),g("http://ai.esmplus.com/jin465/assets/header.png")}},"\uc774\ubbf8\uc9c0 \uc0ad\uc81c"),r.a.createElement("button",{className:"download",disabled:!0,style:{backgroundColor:"#717c7d"}},"\ub2e4\uc6b4\ub85c\ub4dc")),r.a.createElement("div",{className:"frame"},r.a.createElement("img",{onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:H,style:{marginTop:30,marginBottom:70},width:"100%",src:p}),r.a.createElement("div",{style:{marginTop:60,marginBottom:100}},r.a.createElement("input",{className:"ItemName",placeholder:"\uc0c1\ud488\uba85",style:{width:"560px"},onChange:function(e){R(e.target.value)},value:L}),r.a.createElement("div",{className:"Title",onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:K},r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:"url(".concat(N,")")}})),r.a.createElement("div",{className:"Option"},r.a.createElement("div",{className:"opt"},r.a.createElement("div",{className:"option_nm"},"COLOR"),r.a.createElement("input",{className:"option_val",placeholder:"\uc0c9\uc0c1",style:{width:"400px"},onChange:function(e){I(e.target.value)},value:B})),r.a.createElement("div",{className:"opt"},r.a.createElement("div",{className:"option_nm"},"SIZE"),r.a.createElement("input",{className:"option_val",placeholder:"\uc0ac\uc774\uc988",style:{width:"400px"},onChange:function(e){U(e.target.value)},value:F})),r.a.createElement("div",{className:"opt"},r.a.createElement("div",{className:"option_nm"},"FABRIC"),r.a.createElement("input",{className:"option_val",placeholder:"\uc18c\uc7ac",style:{width:"400px"},onChange:function(e){W(e.target.value)},value:J})))),r.a.createElement("div",{className:"Images",onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:ae,style:{backgroundColor:"#ffd700de"}},k.map((function(e){return r.a.createElement("img",{width:"740px",className:"item",src:e})}))),r.a.createElement("img",{onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:Q,style:{marginTop:70,marginBottom:30},width:"100%",src:E}))):r.a.createElement("div",{className:"App",onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:G},r.a.createElement("div",{className:"topBar"},r.a.createElement("button",{className:"edit",onClick:Z},"\uc218\uc815"),r.a.createElement("button",{className:"remove",disabled:!0,style:{backgroundColor:"#717c7d"}},"\uc774\ubbf8\uc9c0 \uc0ad\uc81c"),r.a.createElement("button",{className:"download",onClick:M},"\ub2e4\uc6b4\ub85c\ub4dc")),r.a.createElement("div",{className:"frame"},r.a.createElement("img",{onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:H,style:{marginTop:30,marginBottom:70},width:"100%",src:p}),r.a.createElement("div",{style:{marginTop:60,marginBottom:100}},r.a.createElement("div",{className:"ItemName"},L),r.a.createElement("div",{className:"Title",onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:K},r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:"url(".concat(N,")")}})),r.a.createElement("div",{className:"Option"},r.a.createElement("div",{className:"opt"},r.a.createElement("div",{className:"option_nm"},"COLOR"),r.a.createElement("div",{className:"option_val"},B)),r.a.createElement("div",{className:"opt"},r.a.createElement("div",{className:"option_nm"},"SIZE"),r.a.createElement("div",{className:"option_val"},F)),r.a.createElement("div",{className:"opt"},r.a.createElement("div",{className:"option_nm"},"FABRIC"),r.a.createElement("div",{className:"option_val"},J)))),r.a.createElement("div",{className:"Images",onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:ae},k.map((function(e){return r.a.createElement("img",{width:"740px",className:"item",src:e})}))),r.a.createElement("img",{onDragEnter:Y,onDragLeave:$,onDragOver:q,onDrop:Q,style:{marginTop:70,marginBottom:30},width:"100%",src:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.1abb9718.chunk.js.map
(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{10:function(e,s,n){},11:function(e,s,n){},13:function(e,s,n){"use strict";n.r(s);var t=n(1),a=n.n(t),i=n(5),c=n.n(i),r=(n(10),n(2)),o=n(3),l=(n(11),n(0));var b=function(){var e=Object(t.useState)(5),s=Object(o.a)(e,2),n=s[0],a=s[1],i=Object(t.useState)(25),c=Object(o.a)(i,2),b=c[0],d=c[1],j=Object(t.useState)({session:15e5,break:3e5,pause:!0,interval:null,onSession:!0}),u=Object(o.a)(j,2),p=u[0],h=u[1],k=document.getElementById("beep");function O(e){e.preventDefault(),p.pause&&("break-length"==e.target.parentNode.classList[0]?n<60&&a(n+1):b<60&&d(b+1))}function v(e){e.preventDefault(),p.pause&&("break-length"==e.target.parentNode.classList[0]?n>1&&a(n-1):b>1&&d(b-1))}return Object(t.useEffect)((function(){h({session:p.session,break:60*n*1e3,pause:p.pause,interval:p.interval,onSession:p.onSession})}),[n]),Object(t.useEffect)((function(){h({session:60*b*1e3,break:p.break,pause:p.pause,interval:p.interval,onSession:p.onSession})}),[b]),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("div",{className:"clock-wrapper",children:[Object(l.jsxs)("div",{className:"length-selection-box",children:[Object(l.jsxs)("div",{className:"break-length",children:[Object(l.jsx)("p",{id:"break-label",children:"Break Length"}),Object(l.jsx)("a",{id:"break-increment",onClick:O,children:"\u2191"}),Object(l.jsx)("span",{id:"break-length",children:n}),Object(l.jsx)("a",{id:"break-decrement",onClick:v,children:"\u2193"})]},"break"),Object(l.jsxs)("div",{className:"session-length",children:[Object(l.jsx)("p",{id:"session-label",children:"Session Length"}),Object(l.jsx)("a",{id:"session-increment",onClick:O,children:"\u2191"}),Object(l.jsx)("span",{id:"session-length",children:b}),Object(l.jsx)("a",{id:"session-decrement",onClick:v,children:"\u2193"})]})]}),Object(l.jsxs)("div",{className:"session",children:[Object(l.jsx)("p",{id:"timer-label",children:p.onSession?"Session":"Break"}),Object(l.jsx)("p",{id:"session",children:Object(l.jsx)("span",{id:"time-left",children:function(){var e=p.onSession?p.session:p.break;if(e<1e3&&(!k.paused||k.play()),36e5==e)return"60:00";var s=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);return(s=0===(s=s/10<1?"0"+s:s)?"00":s)+":"+(n=0===(n=n/10<1?"0"+n:n)?"00":n)}()})})]}),Object(l.jsxs)("div",{className:"button-wrapper",children:[Object(l.jsx)("a",{id:"start_stop",onClick:function(){var e=Object(r.a)({},p);e.pause?(!function(){var e=Object(r.a)({},p),s=Date.now(),t=setInterval((function(){var a=Date.now()-s;e.onSession?e.session-a<0?(e={session:0,break:e.break,pause:!1,interval:t,onSession:!1},h(e)):(e={session:e.session-a,break:e.break,pause:!1,interval:t,onSession:!0},h(e),s=Date.now()):e.break-a<0?h(e={session:60*b*1e3,break:60*n*1e3,pause:!1,interval:t,onSession:!0}):(e={session:0,break:e.break-a,pause:!1,interval:t,onSession:!1},h(e),s=Date.now())}),1)}(),e.pause=!1):(!function(){var e=Object(r.a)({},p);clearInterval(p.interval),e.interval=null,h(Object(r.a)({},e))}(),e.pause=!0),h(e)},children:"Continue/Pause"}),Object(l.jsx)("a",{id:"reset",onClick:function(){clearInterval(p.interval),a(5),d(25),h({session:15e5,break:3e5,pause:!0,interval:null,onSession:!0}),!k.paused&&(k.currentTime=0,k.pause())},children:"Restart"})]})]}),Object(l.jsx)("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c04140c3.chunk.js.map
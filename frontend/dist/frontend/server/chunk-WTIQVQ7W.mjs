import './polyfills.server.mjs';
import{c as f}from"./chunk-PITQE6OI.mjs";import{c as d,d as p,g as u,k as b,m as h,n as w}from"./chunk-VPN7KGLU.mjs";import{i as m}from"./chunk-TMXSEXGA.mjs";var C=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",E=class{constructor(t){b(this,t),this.type="bounded"}addRipple(t,y){return m(this,null,function*(){return new Promise(g=>{h(()=>{let a=this.el.getBoundingClientRect(),i=a.width,e=a.height,k=Math.sqrt(i*i+e*e),l=Math.max(e,i),v=this.unbounded?l:k+T,o=Math.floor(l*L),A=v/o,r=t-a.left,c=y-a.top;this.unbounded&&(r=i*.5,c=e*.5);let I=r-o*.5,x=c-o*.5,R=i*.5-r,z=e*.5-c;w(()=>{let s=document.createElement("div");s.classList.add("ripple-effect");let n=s.style;n.top=x+"px",n.left=I+"px",n.width=n.height=o+"px",n.setProperty("--final-scale",`${A}`),n.setProperty("--translate-end",`${R}px, ${z}px`),(this.el.shadowRoot||this.el).appendChild(s),setTimeout(()=>{g(()=>{O(s)})},225+100)})})})})}get unbounded(){return this.type==="unbounded"}render(){let t=f(this);return d(p,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return u(this)}},O=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},T=10,L=.5;E.style=C;export{E as ion_ripple_effect};

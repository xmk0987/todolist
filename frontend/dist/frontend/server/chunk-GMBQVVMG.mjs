import './polyfills.server.mjs';
import{c as l}from"./chunk-7UI5HWV6.mjs";import{b as c}from"./chunk-LQYNYVGR.mjs";import{i as s}from"./chunk-TMXSEXGA.mjs";var C="ION-CONTENT",i="ion-content",a=".ion-content-scroll-host",T=`${i}, ${a}`,n=o=>o.tagName===C,m=o=>s(void 0,null,function*(){return n(o)?(yield new Promise(t=>c(o,t)),o.getScrollElement()):o}),E=o=>{let t=o.querySelector(a);return t||o.querySelector(T)},O=o=>o.closest(T),p=(o,t)=>n(o)?o.scrollToTop(t):Promise.resolve(o.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"})),S=(o,t,r,e)=>n(o)?o.scrollByPoint(t,r,e):Promise.resolve(o.scrollBy({top:r,left:t,behavior:e>0?"smooth":"auto"})),_=o=>l(o,i),y=o=>{if(n(o)){let t=o,r=t.scrollY;return t.scrollY=!1,r}else return o.style.setProperty("overflow","hidden"),!0},I=(o,t)=>{n(o)?o.scrollY=t:o.style.removeProperty("overflow")};export{i as a,a as b,n as c,m as d,E as e,O as f,p as g,S as h,_ as i,y as j,I as k};

import './polyfills.server.mjs';
import{a as n}from"./chunk-DWAJPSUF.mjs";import{i as l}from"./chunk-LQYNYVGR.mjs";var w=(r,i,o)=>{let e,s=()=>!(i()===void 0||r.label!==void 0||o()===null),u=()=>{s()&&l(()=>{c()})},c=()=>{let t=i();if(t===void 0)return;if(!s()){t.style.removeProperty("width");return}let d=o().scrollWidth;if(d===0&&t.offsetParent===null&&n!==void 0&&"IntersectionObserver"in n){if(e!==void 0)return;let f=e=new IntersectionObserver(h=>{h[0].intersectionRatio===1&&(c(),f.disconnect(),e=void 0)},{threshold:.01,root:r});f.observe(t);return}t.style.setProperty("width",`${d*.75}px`)};return{calculateNotchWidth:u,destroy:()=>{e&&(e.disconnect(),e=void 0)}}};export{w as a};

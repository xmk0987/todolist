import './polyfills.server.mjs';
import{a as ft}from"./chunk-HL6JMNBC.mjs";import{c as nt,e as Et,f as Bt,i as Ct,j as rt,k as Mt}from"./chunk-GMBQVVMG.mjs";import{a as st}from"./chunk-MVBNMXIW.mjs";import"./chunk-ZJ3XKPOB.mjs";import{a as tt}from"./chunk-Q3FRKMLN.mjs";import{f as Pt,g as Lt}from"./chunk-SFNBWJO7.mjs";import{a as it}from"./chunk-NUT7CYM5.mjs";import{a as kt,f as yt,g as wt,j as xt,k as St,l as ot,o as vt,p as G,r as Dt}from"./chunk-4DU4J2RZ.mjs";import{a as c}from"./chunk-LZQUQJXL.mjs";import{a as ut,b as bt,c as gt}from"./chunk-RHTRNMUT.mjs";import{c as At}from"./chunk-BZ7Q7BLU.mjs";import{a as et}from"./chunk-JXCG4FLD.mjs";import"./chunk-4Z6C6QKB.mjs";import"./chunk-ZFKOU5T2.mjs";import{a as H}from"./chunk-DWAJPSUF.mjs";import{a as X,c as F}from"./chunk-PITQE6OI.mjs";import{c as L,d as Tt,g as Yt,h as D,k as It,n as at}from"./chunk-VPN7KGLU.mjs";import{a as Z}from"./chunk-7UI5HWV6.mjs";import{c as ht,d as mt,h as P,i as $,o as q}from"./chunk-LQYNYVGR.mjs";import{i as v}from"./chunk-TMXSEXGA.mjs";var K=function(t){return t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT",t}(K||{}),z={getEngine(){let t=tt();if(t?.isPluginAvailable("StatusBar"))return t.Plugins.StatusBar},supportsDefaultStatusBarStyle(){let t=tt();return!!t?.PluginHeaders},setStyle(t){let e=this.getEngine();e&&e.setStyle(t)},getStyle:function(){return v(this,null,function*(){let t=this.getEngine();if(!t)return K.Default;let{style:e}=yield t.getInfo();return e})}},dt=(t,e)=>{if(e===1)return 0;let o=1/(1-e),n=-(e*o);return t*o+n},Nt=()=>{!H||H.innerWidth>=768||!z.supportsDefaultStatusBarStyle()||z.setStyle({style:K.Dark})},lt=(t=K.Default)=>{!H||H.innerWidth>=768||!z.supportsDefaultStatusBarStyle()||z.setStyle({style:t})},Wt=(t,e)=>v(void 0,null,function*(){typeof t.canDismiss!="function"||!(yield t.canDismiss(void 0,G))||(e.isRunning()?e.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))}),ct=t=>.00255275*2.71828**(-14.9619*t)-1.00255*2.71828**(-.0380968*t)+1,U={MIN_PRESENTING_SCALE:.93},qt=(t,e,o,n)=>{let r=t.offsetHeight,a=!1,s=!1,d=null,m=null,f=.2,w=!0,u=0,g=()=>d&&nt(d)?d.scrollY:!0,N=et({el:t,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:h=>{let p=h.event.target;return p===null||!p.closest?!0:(d=Bt(p),d?(nt(d)?m=P(d).querySelector(".inner-scroll"):m=d,!!!d.querySelector("ion-refresher")&&m.scrollTop===0):p.closest("ion-footer")===null)},onStart:h=>{let{deltaY:p}=h;w=g(),s=t.canDismiss!==void 0&&t.canDismiss!==!0,p>0&&d&&rt(d),e.progressStart(!0,a?1:0)},onMove:h=>{let{deltaY:p}=h;p>0&&d&&rt(d);let x=h.deltaY/r,A=x>=0&&s,E=A?f:.9999,O=A?ct(x/E):x,S=q(1e-4,O,E);e.progressStep(S),S>=.5&&u<.5?lt(o):S<.5&&u>=.5&&Nt(),u=S},onEnd:h=>{let p=h.velocityY,x=h.deltaY/r,A=x>=0&&s,E=A?f:.9999,O=A?ct(x/E):x,S=q(1e-4,O,E),J=(h.deltaY+p*1e3)/r,M=!A&&J>=.5,W=M?-.001:.001;M?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),W+=it([0,0],[.32,.72],[0,1],[1,1],S)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),W+=it([0,0],[1,0],[.68,.28],[1,1],S)[0]);let j=Rt(M?x*r:(1-S)*r,p);a=M,N.enable(!1),d&&Mt(d,w),e.onFinish(()=>{M||N.enable(!0)}).progressEnd(M?1:0,W,j),A&&S>E/4?Wt(t,e):M&&n()}});return N},Rt=(t,e)=>q(400,t/Math.abs(e*1.1),500),Ht=t=>{let{currentBreakpoint:e,backdropBreakpoint:o}=t,n=o===void 0||o<e,i=n?`calc(var(--backdrop-opacity) * ${e})`:"0",r=c("backdropAnimation").fromTo("opacity",0,i);return n&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-e*100}%)`}]),backdropAnimation:r}},$t=t=>{let{currentBreakpoint:e,backdropBreakpoint:o}=t,n=`calc(var(--backdrop-opacity) * ${dt(e,o)})`,i=[{offset:0,opacity:n},{offset:1,opacity:0}],r=[{offset:0,opacity:n},{offset:o,opacity:0},{offset:1,opacity:0}],a=c("backdropAnimation").keyframes(o!==0?r:i);return{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-e*100}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},Ft=()=>{let t=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e=c().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:t,wrapperAnimation:e}},Ot=(t,e)=>{let{presentingEl:o,currentBreakpoint:n}=e,i=P(t),{wrapperAnimation:r,backdropAnimation:a}=n!==void 0?Ht(e):Ft();a.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});let s=c("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(o){let d=window.innerWidth<768,m=o.tagName==="ION-MODAL"&&o.presentingElement!==void 0,f=P(o),w=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),u=document.body;if(d){let g=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b=m?"-10px":g,l=U.MIN_PRESENTING_SCALE,k=`translateY(${b}) scale(${l})`;w.afterStyles({transform:k}).beforeAddWrite(()=>u.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:k,borderRadius:"10px 10px 0 0"}]),s.addAnimation(w)}else if(s.addAnimation(a),!m)r.fromTo("opacity","0","1");else{let b=`translateY(-10px) scale(${m?U.MIN_PRESENTING_SCALE:1})`;w.afterStyles({transform:b}).addElement(f.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:b}]);let l=c().afterStyles({transform:b}).addElement(f.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:b}]);s.addAnimation([w,l])}}else s.addAnimation(a);return s},Gt=()=>{let t=c().fromTo("opacity","var(--backdrop-opacity)",0),e=c().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:t,wrapperAnimation:e}},_t=(t,e,o=500)=>{let{presentingEl:n,currentBreakpoint:i}=e,r=P(t),{wrapperAnimation:a,backdropAnimation:s}=i!==void 0?$t(e):Gt();s.addElement(r.querySelector("ion-backdrop")),a.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});let d=c("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(a);if(n){let m=window.innerWidth<768,f=n.tagName==="ION-MODAL"&&n.presentingElement!==void 0,w=P(n),u=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(b=>{if(b!==1)return;n.style.setProperty("overflow",""),Array.from(g.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(k=>k.presentingElement!==void 0).length<=1&&g.style.setProperty("background-color","")}),g=document.body;if(m){let b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=f?"-10px":b,k=U.MIN_PRESENTING_SCALE,R=`translateY(${l}) scale(${k})`;u.addElement(n).keyframes([{offset:0,filter:"contrast(0.85)",transform:R,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(u)}else if(d.addAnimation(s),!f)a.fromTo("opacity","1","0");else{let l=`translateY(-10px) scale(${f?U.MIN_PRESENTING_SCALE:1})`;u.addElement(w.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:l},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);let k=c().addElement(w.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:l},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([u,k])}}else d.addAnimation(s);return d},zt=()=>{let t=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e=c().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:t,wrapperAnimation:e}},Kt=(t,e)=>{let{currentBreakpoint:o}=e,n=P(t),{wrapperAnimation:i,backdropAnimation:r}=o!==void 0?Ht(e):zt();return r.addElement(n.querySelector("ion-backdrop")),i.addElement(n.querySelector(".modal-wrapper")),c().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},jt=()=>{let t=c().fromTo("opacity","var(--backdrop-opacity)",0),e=c().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:t,wrapperAnimation:e}},Vt=(t,e)=>{let{currentBreakpoint:o}=e,n=P(t),{wrapperAnimation:i,backdropAnimation:r}=o!==void 0?$t(e):jt();return r.addElement(n.querySelector("ion-backdrop")),i.addElement(n.querySelector(".modal-wrapper")),c().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},Zt=(t,e,o,n,i,r,a=[],s,d,m)=>{let f=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}],w=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}],u={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:i!==0?w:f},g=t.querySelector("ion-content"),b=o.clientHeight,l=n,k=0,R=!1,N=.95,h=r.childAnimations.find(y=>y.id==="wrapperAnimation"),p=r.childAnimations.find(y=>y.id==="backdropAnimation"),x=a[a.length-1],A=a[0],E=()=>{t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},O=()=>{t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};h&&p&&(h.keyframes([...u.WRAPPER_KEYFRAMES]),p.keyframes([...u.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-l),l>i?E():O()),g&&l!==x&&(g.scrollY=!1);let S=y=>{let Y=y.event.target.closest("ion-content");return l=s(),!(l===1&&Y)},J=()=>{R=t.canDismiss!==void 0&&t.canDismiss!==!0&&A===0,g&&(g.scrollY=!1),$(()=>{t.focus()}),r.progressStart(!0,1-l)},M=y=>{let Y=1-l,B=a.length>1?1-a[1]:void 0,T=Y+y.deltaY/b,_=B!==void 0&&T>=B&&R,I=_?N:.9999,C=_&&B!==void 0?B+ct((T-B)/(I-B)):T;k=q(1e-4,C,I),r.progressStep(k)},W=y=>{let Y=y.velocityY,B=(y.deltaY+Y*350)/b,T=l-B,_=a.reduce((I,C)=>Math.abs(C-T)<Math.abs(I-T)?C:I);j({breakpoint:_,breakpointOffset:k,canDismiss:R,animated:!0})},j=y=>{let{breakpoint:Y,canDismiss:B,breakpointOffset:T,animated:_}=y,I=B&&Y===0,C=I?l:Y,pt=C!==0;return l=0,h&&p&&(h.keyframes([{offset:0,transform:`translateY(${T*100}%)`},{offset:1,transform:`translateY(${(1-C)*100}%)`}]),p.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${dt(1-T,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${dt(C,i)})`}]),r.progressStep(0)),V.enable(!1),I?Wt(t,r):pt||d(),new Promise(Q=>{r.onFinish(()=>{pt?h&&p?$(()=>{h.keyframes([...u.WRAPPER_KEYFRAMES]),p.keyframes([...u.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-C),l=C,m(l),g&&l===a[a.length-1]&&(g.scrollY=!0),l>i?E():O(),V.enable(!0),Q()}):(V.enable(!0),Q()):Q()},{oneTimeCallback:!0}).progressEnd(1,0,_?500:0)})},V=et({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:S,onStart:J,onMove:M,onEnd:W});return{gesture:V,moveSheetToBreakpoint:j}},Ut=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',Jt=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',Qt=class{constructor(t){It(this,t),this.didPresent=D(this,"ionModalDidPresent",7),this.willPresent=D(this,"ionModalWillPresent",7),this.willDismiss=D(this,"ionModalWillDismiss",7),this.didDismiss=D(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=D(this,"ionBreakpointDidChange",7),this.didPresentShorthand=D(this,"didPresent",7),this.willPresentShorthand=D(this,"willPresent",7),this.willDismissShorthand=D(this,"willDismiss",7),this.didDismissShorthand=D(this,"didDismiss",7),this.ionMount=D(this,"ionMount",7),this.lockController=ft(),this.triggerController=Dt(),this.coreDelegate=gt(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{let{sheetTransition:e,handleBehavior:o}=this;o!=="cycle"||e!==void 0||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{let{sheetTransition:e}=this;e===void 0&&this.dismiss(void 0,vt)},this.onLifecycle=e=>{let o=this.usersElement,n=Xt[e.type];if(o&&n){let i=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(t,e){t===!0&&e===!1?this.present():t===!1&&e===!0&&this.dismiss()}triggerChanged(){let{trigger:t,el:e,triggerController:o}=this;t&&o.addClickListener(e,t)}breakpointsChanged(t){t!==void 0&&(this.sortedBreakpoints=t.sort((e,o)=>e-o))}connectedCallback(){let{el:t}=this;yt(t),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){let{breakpoints:t,initialBreakpoint:e,el:o}=this,n=this.isSheetModal=t!==void 0&&e!==void 0;this.inheritedAttributes=mt(o,["aria-label","role"]),n&&(this.currentBreakpoint=this.initialBreakpoint),t!==void 0&&e!==void 0&&!t.includes(e)&&Z("Your breakpoints array must include the initialBreakpoint value."),wt(o)}componentDidLoad(){this.isOpen===!0&&$(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};let e=this.el.parentNode,o=this.inline=e!==null&&!this.hasController,n=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:n}}checkCanDismiss(t,e){return v(this,null,function*(){let{canDismiss:o}=this;return typeof o=="function"?o(t,e):o})}present(){return v(this,null,function*(){let t=yield this.lockController.lock();if(this.presented){t();return}let{presentingElement:e,el:o}=this;this.currentBreakpoint=this.initialBreakpoint;let{inline:n,delegate:i}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=yield ut(i,o,this.component,["ion-page"],this.componentProps,n),ht(o)?yield Lt(this.usersElement):this.keepContentsMounted||(yield Pt()),at(()=>this.el.classList.add("show-modal"));let r=e!==void 0;r&&F(this)==="ios"&&(this.statusBarStyle=yield z.getStyle(),Nt()),yield xt(this,"modalEnter",Ot,Kt,{presentingEl:e,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),typeof window<"u"&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),$(()=>{this.gesture&&this.gesture.enable(!0)}))},window.addEventListener(st,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():r&&this.initSwipeToClose(),t()})}initSwipeToClose(){var t;if(F(this)!=="ios")return;let{el:e}=this,o=this.leaveAnimation||X.get("modalLeave",_t),n=this.animation=o(e,{presentingEl:this.presentingElement});if(!Et(e)){Ct(e);return}let r=(t=this.statusBarStyle)!==null&&t!==void 0?t:K.Default;this.gesture=qt(e,n,r,()=>{this.gestureAnimationDismissing=!0,lt(this.statusBarStyle),this.animation.onFinish(()=>v(this,null,function*(){yield this.dismiss(void 0,G),this.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){let{wrapperEl:t,initialBreakpoint:e,backdropBreakpoint:o}=this;if(!t||e===void 0)return;let n=this.enterAnimation||X.get("modalEnter",Ot),i=this.animation=n(this.el,{presentingEl:this.presentingElement,currentBreakpoint:e,backdropBreakpoint:o});i.progressStart(!0,1);let{gesture:r,moveSheetToBreakpoint:a}=Zt(this.el,this.backdropEl,t,e,o,i,this.sortedBreakpoints,()=>{var s;return(s=this.currentBreakpoint)!==null&&s!==void 0?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=r,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish(()=>v(this,null,function*(){this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),yield this.dismiss(void 0,G),this.gestureAnimationDismissing=!1}))}dismiss(t,e){return v(this,null,function*(){var o;if(this.gestureAnimationDismissing&&e!==G)return!1;let n=yield this.lockController.lock();if(e!=="handler"&&!(yield this.checkCanDismiss(t,e)))return n(),!1;let{presentingElement:i}=this;i!==void 0&&F(this)==="ios"&&lt(this.statusBarStyle),typeof window<"u"&&this.keyboardOpenCallback&&(window.removeEventListener(st,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0);let a=kt.get(this)||[],s=yield St(this,t,e,"modalLeave",_t,Vt,{presentingEl:i,currentBreakpoint:(o=this.currentBreakpoint)!==null&&o!==void 0?o:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});if(s){let{delegate:d}=this.getDelegate();yield bt(d,this.usersElement),at(()=>this.el.classList.remove("show-modal")),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),a.forEach(m=>m.destroy())}return this.currentBreakpoint=void 0,this.animation=void 0,n(),s})}onDidDismiss(){return ot(this.el,"ionModalDidDismiss")}onWillDismiss(){return ot(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(t){return v(this,null,function*(){if(!this.isSheetModal){Z("setCurrentBreakpoint is only supported on sheet modals.");return}if(!this.breakpoints.includes(t)){Z(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);return}let{currentBreakpoint:e,moveSheetToBreakpoint:o,canDismiss:n,breakpoints:i,animated:r}=this;e!==t&&o&&(this.sheetTransition=o({breakpoint:t,breakpointOffset:1-e,canDismiss:n!==void 0&&n!==!0&&i[0]===0,animated:r}),yield this.sheetTransition,this.sheetTransition=void 0)})}getCurrentBreakpoint(){return v(this,null,function*(){return this.currentBreakpoint})}moveToNextBreakpoint(){return v(this,null,function*(){let{breakpoints:t,currentBreakpoint:e}=this;if(!t||e==null)return!1;let o=t.filter(a=>a!==0),i=(o.indexOf(e)+1)%o.length,r=o[i];return yield this.setCurrentBreakpoint(r),!0})}render(){let{handle:t,isSheetModal:e,presentingElement:o,htmlAttributes:n,handleBehavior:i,inheritedAttributes:r}=this,a=t!==!1&&e,s=F(this),d=o!==void 0&&s==="ios",m=i==="cycle";return L(Tt,Object.assign({"no-router":!0,tabindex:"-1"},n,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[s]:!0,"modal-default":!d&&!e,"modal-card":d,"modal-sheet":e,"overlay-hidden":!0},At(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),L("ion-backdrop",{ref:f=>this.backdropEl=f,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),s==="ios"&&L("div",{class:"modal-shadow"}),L("div",Object.assign({role:"dialog"},r,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:f=>this.wrapperEl=f}),a&&L("button",{class:"modal-handle",tabIndex:m?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:m?this.onHandleClick:void 0,part:"handle"}),L("slot",null)))}get el(){return Yt(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Xt={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};Qt.style={ios:Ut,md:Jt};export{Qt as ion_modal};

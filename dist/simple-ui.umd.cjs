(function(W,V){typeof exports=="object"&&typeof module<"u"?V(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],V):(W=typeof globalThis<"u"?globalThis:W||self,V(W.SimpleUI={},W.React))})(this,function(W,V){"use strict";var pe={exports:{}},te={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me;function fr(){if(Me)return te;Me=1;var r=V,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(l,p,g){var b,x={},C=null,j=null;g!==void 0&&(C=""+g),p.key!==void 0&&(C=""+p.key),p.ref!==void 0&&(j=p.ref);for(b in p)a.call(p,b)&&!i.hasOwnProperty(b)&&(x[b]=p[b]);if(l&&l.defaultProps)for(b in p=l.defaultProps,p)x[b]===void 0&&(x[b]=p[b]);return{$$typeof:t,type:l,key:C,ref:j,props:x,_owner:c.current}}return te.Fragment=o,te.jsx=u,te.jsxs=u,te}var oe={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne;function pr(){return Ne||(Ne=1,process.env.NODE_ENV!=="production"&&function(){var r=V,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),O=Symbol.iterator,k="@@iterator";function w(e){if(e===null||typeof e!="object")return null;var n=O&&e[O]||e[k];return typeof n=="function"?n:null}var S=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function y(e){{for(var n=arguments.length,s=new Array(n>1?n-1:0),d=1;d<n;d++)s[d-1]=arguments[d];B("error",e,s)}}function B(e,n,s){{var d=S.ReactDebugCurrentFrame,h=d.getStackAddendum();h!==""&&(n+="%s",s=s.concat([h]));var E=s.map(function(v){return String(v)});E.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,E)}}var D=!1,H=!1,ge=!1,me=!1,ve=!1,Z;Z=Symbol.for("react.module.reference");function ie(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===i||ve||e===c||e===g||e===b||me||e===j||D||H||ge||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===x||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===Z||e.getModuleId!==void 0))}function le(e,n,s){var d=e.displayName;if(d)return d;var h=n.displayName||n.name||"";return h!==""?s+"("+h+")":s}function R(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case o:return"Portal";case i:return"Profiler";case c:return"StrictMode";case g:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var n=e;return R(n)+".Consumer";case u:var s=e;return R(s._context)+".Provider";case p:return le(e,e.render,"ForwardRef");case x:var d=e.displayName||null;return d!==null?d:I(e.type)||"Memo";case C:{var h=e,E=h._payload,v=h._init;try{return I(v(E))}catch{return null}}}return null}var M=Object.assign,Y=0,J,ce,Q,$,ue,N,Xe;function He(){}He.__reactDisabledLog=!0;function Qr(){{if(Y===0){J=console.log,ce=console.info,Q=console.warn,$=console.error,ue=console.group,N=console.groupCollapsed,Xe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:He,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function et(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:J}),info:M({},e,{value:ce}),warn:M({},e,{value:Q}),error:M({},e,{value:$}),group:M({},e,{value:ue}),groupCollapsed:M({},e,{value:N}),groupEnd:M({},e,{value:Xe})})}Y<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Se=S.ReactCurrentDispatcher,ke;function he(e,n,s){{if(ke===void 0)try{throw Error()}catch(h){var d=h.stack.trim().match(/\n( *(at )?)/);ke=d&&d[1]||""}return`
`+ke+e}}var Te=!1,ye;{var rt=typeof WeakMap=="function"?WeakMap:Map;ye=new rt}function Ze(e,n){if(!e||Te)return"";{var s=ye.get(e);if(s!==void 0)return s}var d;Te=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=Se.current,Se.current=null,Qr();try{if(n){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(z){d=z}Reflect.construct(e,[],v)}else{try{v.call()}catch(z){d=z}e.call(v.prototype)}}else{try{throw Error()}catch(z){d=z}e()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var m=z.stack.split(`
`),A=d.stack.split(`
`),T=m.length-1,P=A.length-1;T>=1&&P>=0&&m[T]!==A[P];)P--;for(;T>=1&&P>=0;T--,P--)if(m[T]!==A[P]){if(T!==1||P!==1)do if(T--,P--,P<0||m[T]!==A[P]){var F=`
`+m[T].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),typeof e=="function"&&ye.set(e,F),F}while(T>=1&&P>=0);break}}}finally{Te=!1,Se.current=E,et(),Error.prepareStackTrace=h}var re=e?e.displayName||e.name:"",K=re?he(re):"";return typeof e=="function"&&ye.set(e,K),K}function tt(e,n,s){return Ze(e,!1)}function ot(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function xe(e,n,s){if(e==null)return"";if(typeof e=="function")return Ze(e,ot(e));if(typeof e=="string")return he(e);switch(e){case g:return he("Suspense");case b:return he("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return tt(e.render);case x:return xe(e.type,n,s);case C:{var d=e,h=d._payload,E=d._init;try{return xe(E(h),n,s)}catch{}}}return""}var de=Object.prototype.hasOwnProperty,Qe={},er=S.ReactDebugCurrentFrame;function we(e){if(e){var n=e._owner,s=xe(e.type,e._source,n?n.type:null);er.setExtraStackFrame(s)}else er.setExtraStackFrame(null)}function nt(e,n,s,d,h){{var E=Function.call.bind(de);for(var v in e)if(E(e,v)){var m=void 0;try{if(typeof e[v]!="function"){var A=Error((d||"React class")+": "+s+" type `"+v+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[v]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw A.name="Invariant Violation",A}m=e[v](n,v,d,s,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){m=T}m&&!(m instanceof Error)&&(we(h),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",s,v,typeof m),we(null)),m instanceof Error&&!(m.message in Qe)&&(Qe[m.message]=!0,we(h),y("Failed %s type: %s",s,m.message),we(null))}}}var at=Array.isArray;function Pe(e){return at(e)}function st(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,s=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s}}function it(e){try{return rr(e),!1}catch{return!0}}function rr(e){return""+e}function tr(e){if(it(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",st(e)),rr(e)}var fe=S.ReactCurrentOwner,lt={key:!0,ref:!0,__self:!0,__source:!0},or,nr,je;je={};function ct(e){if(de.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function ut(e){if(de.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function dt(e,n){if(typeof e.ref=="string"&&fe.current&&n&&fe.current.stateNode!==n){var s=I(fe.current.type);je[s]||(y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(fe.current.type),e.ref),je[s]=!0)}}function ft(e,n){{var s=function(){or||(or=!0,y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}}function pt(e,n){{var s=function(){nr||(nr=!0,y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};s.isReactWarning=!0,Object.defineProperty(e,"ref",{get:s,configurable:!0})}}var bt=function(e,n,s,d,h,E,v){var m={$$typeof:t,type:e,key:n,ref:s,props:v,_owner:E};return m._store={},Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(m,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(m,"_source",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m};function gt(e,n,s,d,h){{var E,v={},m=null,A=null;s!==void 0&&(tr(s),m=""+s),ut(n)&&(tr(n.key),m=""+n.key),ct(n)&&(A=n.ref,dt(n,h));for(E in n)de.call(n,E)&&!lt.hasOwnProperty(E)&&(v[E]=n[E]);if(e&&e.defaultProps){var T=e.defaultProps;for(E in T)v[E]===void 0&&(v[E]=T[E])}if(m||A){var P=typeof e=="function"?e.displayName||e.name||"Unknown":e;m&&ft(v,P),A&&pt(v,P)}return bt(e,m,A,h,d,fe.current,v)}}var Oe=S.ReactCurrentOwner,ar=S.ReactDebugCurrentFrame;function ee(e){if(e){var n=e._owner,s=xe(e.type,e._source,n?n.type:null);ar.setExtraStackFrame(s)}else ar.setExtraStackFrame(null)}var Ae;Ae=!1;function ze(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function sr(){{if(Oe.current){var e=I(Oe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function mt(e){return""}var ir={};function vt(e){{var n=sr();if(!n){var s=typeof e=="string"?e:e.displayName||e.name;s&&(n=`

Check the top-level render call using <`+s+">.")}return n}}function lr(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var s=vt(n);if(ir[s])return;ir[s]=!0;var d="";e&&e._owner&&e._owner!==Oe.current&&(d=" It was passed a child from "+I(e._owner.type)+"."),ee(e),y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',s,d),ee(null)}}function cr(e,n){{if(typeof e!="object")return;if(Pe(e))for(var s=0;s<e.length;s++){var d=e[s];ze(d)&&lr(d,n)}else if(ze(e))e._store&&(e._store.validated=!0);else if(e){var h=w(e);if(typeof h=="function"&&h!==e.entries)for(var E=h.call(e),v;!(v=E.next()).done;)ze(v.value)&&lr(v.value,n)}}}function ht(e){{var n=e.type;if(n==null||typeof n=="string")return;var s;if(typeof n=="function")s=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===p||n.$$typeof===x))s=n.propTypes;else return;if(s){var d=I(n);nt(s,e.props,"prop",d,e)}else if(n.PropTypes!==void 0&&!Ae){Ae=!0;var h=I(n);y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",h||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function yt(e){{for(var n=Object.keys(e.props),s=0;s<n.length;s++){var d=n[s];if(d!=="children"&&d!=="key"){ee(e),y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),ee(null);break}}e.ref!==null&&(ee(e),y("Invalid attribute `ref` supplied to `React.Fragment`."),ee(null))}}var ur={};function dr(e,n,s,d,h,E){{var v=ie(e);if(!v){var m="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(m+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var A=mt();A?m+=A:m+=sr();var T;e===null?T="null":Pe(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(I(e.type)||"Unknown")+" />",m=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,m)}var P=gt(e,n,s,h,E);if(P==null)return P;if(v){var F=n.children;if(F!==void 0)if(d)if(Pe(F)){for(var re=0;re<F.length;re++)cr(F[re],e);Object.freeze&&Object.freeze(F)}else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else cr(F,e)}if(de.call(n,"key")){var K=I(e),z=Object.keys(n).filter(function(_t){return _t!=="key"}),Ie=z.length>0?"{key: someKey, "+z.join(": ..., ")+": ...}":"{key: someKey}";if(!ur[K+Ie]){var Ct=z.length>0?"{"+z.join(": ..., ")+": ...}":"{}";y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ie,K,Ct,K),ur[K+Ie]=!0}}return e===a?yt(P):ht(P),P}}function xt(e,n,s){return dr(e,n,s,!0)}function wt(e,n,s){return dr(e,n,s,!1)}var Rt=wt,Et=xt;oe.Fragment=a,oe.jsx=Rt,oe.jsxs=Et}()),oe}var Fe;function br(){return Fe||(Fe=1,process.env.NODE_ENV==="production"?pe.exports=fr():pe.exports=pr()),pe.exports}var ne=br();function We(r){var t,o,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var c=r.length;for(t=0;t<c;t++)r[t]&&(o=We(r[t]))&&(a&&(a+=" "),a+=o)}else for(o in r)r[o]&&(a&&(a+=" "),a+=o);return a}function Ve(){for(var r,t,o=0,a="",c=arguments.length;o<c;o++)(r=arguments[o])&&(t=We(r))&&(a&&(a+=" "),a+=t);return a}const Re="-",gr=r=>{const t=vr(r),{conflictingClassGroups:o,conflictingClassGroupModifiers:a}=r;return{getClassGroupId:u=>{const l=u.split(Re);return l[0]===""&&l.length!==1&&l.shift(),Ge(l,t)||mr(u)},getConflictingClassGroupIds:(u,l)=>{const p=o[u]||[];return l&&a[u]?[...p,...a[u]]:p}}},Ge=(r,t)=>{var u;if(r.length===0)return t.classGroupId;const o=r[0],a=t.nextPart.get(o),c=a?Ge(r.slice(1),a):void 0;if(c)return c;if(t.validators.length===0)return;const i=r.join(Re);return(u=t.validators.find(({validator:l})=>l(i)))==null?void 0:u.classGroupId},De=/^\[(.+)\]$/,mr=r=>{if(De.test(r)){const t=De.exec(r)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}},vr=r=>{const{theme:t,prefix:o}=r,a={nextPart:new Map,validators:[]};return yr(Object.entries(r.classGroups),o).forEach(([i,u])=>{Ee(u,a,i,t)}),a},Ee=(r,t,o,a)=>{r.forEach(c=>{if(typeof c=="string"){const i=c===""?t:Le(t,c);i.classGroupId=o;return}if(typeof c=="function"){if(hr(c)){Ee(c(a),t,o,a);return}t.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(([i,u])=>{Ee(u,Le(t,i),o,a)})})},Le=(r,t)=>{let o=r;return t.split(Re).forEach(a=>{o.nextPart.has(a)||o.nextPart.set(a,{nextPart:new Map,validators:[]}),o=o.nextPart.get(a)}),o},hr=r=>r.isThemeGetter,yr=(r,t)=>t?r.map(([o,a])=>{const c=a.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([u,l])=>[t+u,l])):i);return[o,c]}):r,xr=r=>{if(r<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,a=new Map;const c=(i,u)=>{o.set(i,u),t++,t>r&&(t=0,a=o,o=new Map)};return{get(i){let u=o.get(i);if(u!==void 0)return u;if((u=a.get(i))!==void 0)return c(i,u),u},set(i,u){o.has(i)?o.set(i,u):c(i,u)}}},Ue="!",wr=r=>{const{separator:t,experimentalParseClassName:o}=r,a=t.length===1,c=t[0],i=t.length,u=l=>{const p=[];let g=0,b=0,x;for(let w=0;w<l.length;w++){let S=l[w];if(g===0){if(S===c&&(a||l.slice(w,w+i)===t)){p.push(l.slice(b,w)),b=w+i;continue}if(S==="/"){x=w;continue}}S==="["?g++:S==="]"&&g--}const C=p.length===0?l:l.substring(b),j=C.startsWith(Ue),O=j?C.substring(1):C,k=x&&x>b?x-b:void 0;return{modifiers:p,hasImportantModifier:j,baseClassName:O,maybePostfixModifierPosition:k}};return o?l=>o({className:l,parseClassName:u}):u},Rr=r=>{if(r.length<=1)return r;const t=[];let o=[];return r.forEach(a=>{a[0]==="["?(t.push(...o.sort(),a),o=[]):o.push(a)}),t.push(...o.sort()),t},Er=r=>({cache:xr(r.cacheSize),parseClassName:wr(r),...gr(r)}),Cr=/\s+/,_r=(r,t)=>{const{parseClassName:o,getClassGroupId:a,getConflictingClassGroupIds:c}=t,i=[],u=r.trim().split(Cr);let l="";for(let p=u.length-1;p>=0;p-=1){const g=u[p],{modifiers:b,hasImportantModifier:x,baseClassName:C,maybePostfixModifierPosition:j}=o(g);let O=!!j,k=a(O?C.substring(0,j):C);if(!k){if(!O){l=g+(l.length>0?" "+l:l);continue}if(k=a(C),!k){l=g+(l.length>0?" "+l:l);continue}O=!1}const w=Rr(b).join(":"),S=x?w+Ue:w,y=S+k;if(i.includes(y))continue;i.push(y);const B=c(k,O);for(let D=0;D<B.length;++D){const H=B[D];i.push(S+H)}l=g+(l.length>0?" "+l:l)}return l};function Sr(){let r=0,t,o,a="";for(;r<arguments.length;)(t=arguments[r++])&&(o=Ye(t))&&(a&&(a+=" "),a+=o);return a}const Ye=r=>{if(typeof r=="string")return r;let t,o="";for(let a=0;a<r.length;a++)r[a]&&(t=Ye(r[a]))&&(o&&(o+=" "),o+=t);return o};function kr(r,...t){let o,a,c,i=u;function u(p){const g=t.reduce((b,x)=>x(b),r());return o=Er(g),a=o.cache.get,c=o.cache.set,i=l,l(p)}function l(p){const g=a(p);if(g)return g;const b=_r(p,o);return c(p,b),b}return function(){return i(Sr.apply(null,arguments))}}const _=r=>{const t=o=>o[r]||[];return t.isThemeGetter=!0,t},$e=/^\[(?:([a-z-]+):)?(.+)\]$/i,Tr=/^\d+\/\d+$/,Pr=new Set(["px","full","screen"]),jr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Or=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ar=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,zr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ir=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,G=r=>q(r)||Pr.has(r)||Tr.test(r),L=r=>X(r,"length",Lr),q=r=>!!r&&!Number.isNaN(Number(r)),Ce=r=>X(r,"number",q),ae=r=>!!r&&Number.isInteger(Number(r)),Mr=r=>r.endsWith("%")&&q(r.slice(0,-1)),f=r=>$e.test(r),U=r=>jr.test(r),Nr=new Set(["length","size","percentage"]),Fr=r=>X(r,Nr,Be),Wr=r=>X(r,"position",Be),Vr=new Set(["image","url"]),Gr=r=>X(r,Vr,Yr),Dr=r=>X(r,"",Ur),se=()=>!0,X=(r,t,o)=>{const a=$e.exec(r);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):o(a[2]):!1},Lr=r=>Or.test(r)&&!Ar.test(r),Be=()=>!1,Ur=r=>zr.test(r),Yr=r=>Ir.test(r),$r=kr(()=>{const r=_("colors"),t=_("spacing"),o=_("blur"),a=_("brightness"),c=_("borderColor"),i=_("borderRadius"),u=_("borderSpacing"),l=_("borderWidth"),p=_("contrast"),g=_("grayscale"),b=_("hueRotate"),x=_("invert"),C=_("gap"),j=_("gradientColorStops"),O=_("gradientColorStopPositions"),k=_("inset"),w=_("margin"),S=_("opacity"),y=_("padding"),B=_("saturate"),D=_("scale"),H=_("sepia"),ge=_("skew"),me=_("space"),ve=_("translate"),Z=()=>["auto","contain","none"],ie=()=>["auto","hidden","clip","visible","scroll"],le=()=>["auto",f,t],R=()=>[f,t],I=()=>["",G,L],M=()=>["auto",q,f],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],$=()=>["","0",f],ue=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[q,f];return{cacheSize:500,separator:":",theme:{colors:[se],spacing:[G,L],blur:["none","",U,f],brightness:N(),borderColor:[r],borderRadius:["none","","full",U,f],borderSpacing:R(),borderWidth:I(),contrast:N(),grayscale:$(),hueRotate:N(),invert:$(),gap:R(),gradientColorStops:[r],gradientColorStopPositions:[Mr,L],inset:le(),margin:le(),opacity:N(),padding:R(),saturate:N(),scale:N(),sepia:$(),skew:N(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[U]}],"break-after":[{"break-after":ue()}],"break-before":[{"break-before":ue()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),f]}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ae,f]}],basis:[{basis:le()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",ae,f]}],"grid-cols":[{"grid-cols":[se]}],"col-start-end":[{col:["auto",{span:["full",ae,f]},f]}],"col-start":[{"col-start":M()}],"col-end":[{"col-end":M()}],"grid-rows":[{"grid-rows":[se]}],"row-start-end":[{row:["auto",{span:[ae,f]},f]}],"row-start":[{"row-start":M()}],"row-end":[{"row-end":M()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[C]}],"gap-x":[{"gap-x":[C]}],"gap-y":[{"gap-y":[C]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[me]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[me]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",f,t]}],"min-w":[{"min-w":[f,t,"min","max","fit"]}],"max-w":[{"max-w":[f,t,"none","full","min","max","fit","prose",{screen:[U]},U]}],h:[{h:[f,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[f,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[f,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[f,t,"auto","min","max","fit"]}],"font-size":[{text:["base",U,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ce]}],"font-family":[{font:[se]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",q,Ce]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",G,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",G,L]}],"underline-offset":[{"underline-offset":["auto",G,f]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Wr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Fr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Gr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[O]}],"gradient-via-pos":[{via:[O]}],"gradient-to-pos":[{to:[O]}],"gradient-from":[{from:[j]}],"gradient-via":[{via:[j]}],"gradient-to":[{to:[j]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:J()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-s":[{"border-s":[c]}],"border-color-e":[{"border-e":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[G,f]}],"outline-w":[{outline:[G,L]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:I()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[G,L]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",U,Dr]}],"shadow-color":[{shadow:[se]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...ce(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ce()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[a]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",U,f]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[x]}],saturate:[{saturate:[B]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[ae,f]}],"translate-x":[{"translate-x":[ve]}],"translate-y":[{"translate-y":[ve]}],"skew-x":[{"skew-x":[ge]}],"skew-y":[{"skew-y":[ge]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[G,L,Ce]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}),be=(...r)=>$r(Ve(r)),Je=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,Ke=Ve,_e=(r,t)=>o=>{var a;if((t==null?void 0:t.variants)==null)return Ke(r,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:c,defaultVariants:i}=t,u=Object.keys(c).map(g=>{const b=o==null?void 0:o[g],x=i==null?void 0:i[g];if(b===null)return null;const C=Je(b)||Je(x);return c[g][C]}),l=o&&Object.entries(o).reduce((g,b)=>{let[x,C]=b;return C===void 0||(g[x]=C),g},{}),p=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((g,b)=>{let{class:x,className:C,...j}=b;return Object.entries(j).every(O=>{let[k,w]=O;return Array.isArray(w)?w.includes({...i,...l}[k]):{...i,...l}[k]===w})?[...g,x,C]:g},[]);return Ke(r,u,p,o==null?void 0:o.class,o==null?void 0:o.className)},Br=_e(["w-full","rounded-md","font-semibold","focus:outline-none","disabled:cursor-not-allowed"],{variants:{variant:{solid:"",outline:"border-2",ghost:"transition-colors duration-300"},size:{sm:"px-4 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},colorScheme:{primary:"text-white"}},compoundVariants:[{variant:"solid",colorScheme:"primary",className:"bg-primary-500 hover:bg-primary-600"},{variant:"outline",colorScheme:"primary",className:"text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"},{variant:"ghost",colorScheme:"primary",className:"text-primary-600 bg-transparent hover:bg-primary-100"}],defaultVariants:{variant:"solid",size:"md",colorScheme:"primary"}}),Jr=V.forwardRef(({className:r,variant:t,size:o,colorScheme:a,...c},i)=>ne.jsx("button",{ref:i,className:be(Br({variant:t,size:o,colorScheme:a,className:r})),...c})),Kr=_e(["w-full","border","border-gray-200","p-2","rounded-lg","transition-all","duration-100","outline-none","focus:outline-primary-500 ","focus:border-transparent","placeholder:text-gray-400","placeholder:text-sm"]),qr=V.forwardRef(({className:r,...t},o)=>ne.jsx("input",{ref:o,type:"text",autoComplete:"off",className:be(Kr({className:r})),...t})),qe=V.forwardRef(({...r},t)=>ne.jsx("div",{ref:t,...r})),Xr=({className:r,...t})=>ne.jsx(qe,{className:be("flex flex-col items-start gap-2",r),...t}),Hr=_e("w-full",{variants:{emphasis:{low:"text-gray-600 font-light"},size:{sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl"},weight:{thin:"font-thin",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",black:"font-black"},align:{left:"text-left",center:"text-center",right:"text-right"},italic:{true:"italic"},underline:{true:"underline underline-offset-2"}},defaultVariants:{size:"base",align:"left"}}),Zr=V.forwardRef(({as:r,align:t,size:o,emphasis:a,italic:c,underline:i,weight:u,className:l,...p},g)=>{const b=r||"span";return ne.jsx(b,{className:be(Hr({size:o,weight:u,emphasis:a,italic:c,underline:i,align:t,className:l})),...p,ref:g})});W.Box=qe,W.Button=Jr,W.Input=qr,W.Stack=Xr,W.Text=Zr,Object.defineProperty(W,Symbol.toStringTag,{value:"Module"})});
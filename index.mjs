// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";function o(o,d,p){var l,h,j,f,g,a,v,c;if(!s(o))throw new TypeError(i("1Pp3F,Ex",o));if(!r(d))throw new TypeError(i("1Pp3X,F1",d));if(arguments.length>2&&!s(p))throw new TypeError(i("1PpAO,M6",p));if(l=t(p=p||"..."),h=0,d>(j=t(o)))return o;if(d-l<0)return p.slice(0,d);for(f=n((d-l)/2),a=j-m((d-l)/2),g=0;g<f;)h=c=e(o,h),g+=1;for(v=c;v>0&&!((v=e(o,h))>=a+h-g);)h=v,g+=1;return o.substring(0,c)+p+o.substring(v)}export{o as default};
//# sourceMappingURL=index.mjs.map
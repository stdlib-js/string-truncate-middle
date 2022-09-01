// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function o(o,d,l){var h,p,j,f,g,a,c,b;if(!s(o))throw new TypeError(i("0hl3R",o));if(!r(d))throw new TypeError(i("0hl3k",d));if(arguments.length>2&&!s(l))throw new TypeError(i("0hlB6",l));if(h=t(l=l||"..."),p=0,d>(j=t(o)))return o;if(d-h<0)return l.slice(0,d);for(f=n((d-h)/2),a=j-m((d-h)/2),g=0;g<f;)p=b=e(o,p),g+=1;for(c=b;c>0&&!((c=e(o,p))>=a+p-g);)p=c,g+=1;return o.substring(0,b)+l+o.substring(c)}export{o as default};
//# sourceMappingURL=index.mjs.map

"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var w=p(function(V,l){
var d=require('@stdlib/assert-is-string/dist').isPrimitive,b=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/string-num-grapheme-clusters/dist'),h=require('@stdlib/string-next-grapheme-cluster-break/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/math-base-special-round/dist'),x=require('@stdlib/math-base-special-floor/dist');function q(e,r,i){var u,a,s,m,n,o,t,v;if(!d(e))throw new TypeError(g('1Pp3F',e));if(!b(r))throw new TypeError(g('1Pp3X',r));if(arguments.length>2&&!d(i))throw new TypeError(g('1PpAO',i));if(i=i||"...",u=f(i),s=f(e),a=0,r>s)return e;if(r-u<0)return i.slice(0,r);for(m=c((r-u)/2),o=s-x((r-u)/2),n=0;n<m;)v=h(e,a),a=v,n+=1;for(t=v;t>0&&(t=h(e,a),!(t>=o+a-n));)a=t,n+=1;return e.substring(0,v)+i+e.substring(t)}l.exports=q
});var E=w();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
var Le={getAllDepartments:"http://localhost:5000/api/departments/",updateEmployee:"http://localhost:5000/api/departments/employee/update",getDepartment:a=>`http://localhost:5000/api/departments/name/${a}`,deleteEmployee:a=>`http://localhost:5000/api/departments/employee/id/${a}`},L=Le;var Se=async a=>await(await fetch(a)).json(),Ce=async a=>await(await fetch(a,{method:"DELETE",redirect:"follow"})).json(),De=async(a,n)=>{let i=new Headers;i.append("Content-Type","application/json");let o=JSON.stringify(n),m=await(await fetch(a,{method:"PUT",headers:i,body:o,redirect:"follow"})).text()},Ae={getRequest:Se,deleteRequest:Ce,putRequest:De},S=Ae;var Fe=function(){let a=null;function n(){let i=document.createElement("img");document.body.appendChild(i);let o=async m=>{let u=await S.deleteRequest(L.deleteEmployee(m.detail.id));console.log(u),i.dispatchEvent(new CustomEvent("removeItem",{bubbles:!0,detail:u}))},c=async m=>{let u=await S.putRequest(L.updateEmployee,m.detail.payload)},h=async m=>{let u=await S.getRequest(L.getDepartment(m.detail.name));i.dispatchEvent(new CustomEvent("updateDisplay",{bubbles:!0,detail:u}))};return i.addEventListener("deleteEmployee",o),i.addEventListener("editEmployee",c),i.addEventListener("sideBarSelect",h),{handle:i}}return{getInstance:function(){return a||(a=n()),a}}}(),D=Fe;var G=`
    <ul class="departments"></ul>
`,Z=`
   <li class="department" data-name="<%-data.name%> "><%-data.name%></li>
`;function Oe(a){return document.createRange().createContextualFragment(a).firstElementChild}var T=Oe;var xe=function(){return T(G)},Q=xe;function K(a,n,i){return i={path:n,exports:{},require:function(o,c){return Ie(o,c??i.path)}},a(i,i.exports),i.exports}function Ie(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var P={};function Y(a,n){for(var i=0,o=a.length-1;o>=0;o--){var c=a[o];c==="."?a.splice(o,1):c===".."?(a.splice(o,1),i++):i&&(a.splice(o,1),i--)}if(n)for(;i--;i)a.unshift("..");return a}var Re=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,q=function(a){return Re.exec(a).slice(1)};function R(){for(var a="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var o=i>=0?arguments[i]:"/";if(typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)continue;a=o+"/"+a,n=o.charAt(0)==="/"}return a=Y(N(a.split("/"),function(c){return!!c}),!n).join("/"),(n?"/":"")+a||"."}function B(a){var n=k(a),i=Me(a,-1)==="/";return a=Y(N(a.split("/"),function(o){return!!o}),!n).join("/"),!a&&!n&&(a="."),a&&i&&(a+="/"),(n?"/":"")+a}function k(a){return a.charAt(0)==="/"}function ee(){var a=Array.prototype.slice.call(arguments,0);return B(N(a,function(n,i){if(typeof n!="string")throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))}function te(a,n){a=R(a).substr(1),n=R(n).substr(1);function i(g){for(var _=0;_<g.length&&g[_]==="";_++);for(var w=g.length-1;w>=0&&g[w]==="";w--);return _>w?[]:g.slice(_,w-_+1)}for(var o=i(a.split("/")),c=i(n.split("/")),h=Math.min(o.length,c.length),m=h,u=0;u<h;u++)if(o[u]!==c[u]){m=u;break}for(var p=[],u=m;u<o.length;u++)p.push("..");return p=p.concat(c.slice(m)),p.join("/")}var ne="/",ae=":";function re(a){var n=q(a),i=n[0],o=n[1];return!i&&!o?".":(o&&(o=o.substr(0,o.length-1)),i+o)}function se(a,n){var i=q(a)[2];return n&&i.substr(-1*n.length)===n&&(i=i.substr(0,i.length-n.length)),i}function ie(a){return q(a)[3]}var Pe={extname:ie,basename:se,dirname:re,sep:ne,delimiter:ae,relative:te,join:ee,isAbsolute:k,normalize:B,resolve:R};function N(a,n){if(a.filter)return a.filter(n);for(var i=[],o=0;o<a.length;o++)n(a[o],o,a)&&i.push(a[o]);return i}var Me="ab".substr(-1)==="b"?function(a,n,i){return a.substr(n,i)}:function(a,n,i){return n<0&&(n=a.length+n),a.substr(n,i)},qe=Object.freeze({__proto__:null,resolve:R,normalize:B,isAbsolute:k,join:ee,relative:te,sep:ne,delimiter:ae,dirname:re,basename:se,extname:ie,default:Pe}),E=K(function(a,n){var i=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(u){return u?String(u).replace(i,"\\$&"):""};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function h(u){return o[u]||u}var m=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;n.escapeXML=function(u){return u==null?"":String(u).replace(c,h)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+m},n.shallowCopy=function(u,p){p=p||{};for(var g in p)u[g]=p[g];return u},n.shallowCopyFromList=function(u,p,g){for(var _=0;_<g.length;_++){var w=g[_];typeof p[w]!="undefined"&&(u[w]=p[w])}return u},n.cache={_data:{},set:function(u,p){this._data[u]=p},get:function(u){return this._data[u]},remove:function(u){delete this._data[u]},reset:function(){this._data={}}},n.hyphenToCamel=function(u){return u.replace(/-[a-z]/g,function(p){return p[1].toUpperCase()})}}),Ne=[["ejs@3.1.6","/Users/sushmasharma/Desktop/react-app/employee-manager-assesment"]],ke="ejs@3.1.6",Be="ejs@3.1.6",He=!1,Ue="sha512-9lt9Zse4hPucPkoP7FHDF0LQAlGyF9JVpnClFLFH3aSSbxmyoqINRpp/9wePWJTUl4KOQwRL72Iw3InHPDkoGw==",We="/ejs",$e={},Je={type:"version",registry:!0,raw:"ejs@3.1.6",name:"ejs",escapedName:"ejs",rawSpec:"3.1.6",saveSpec:null,fetchSpec:"3.1.6"},Ve=["/"],ze="https://registry.npmjs.org/ejs/-/ejs-3.1.6.tgz",Xe="3.1.6",Ge="/Users/sushmasharma/Desktop/react-app/employee-manager-assesment",Ze={name:"Matthew Eernisse",email:"mde@fleegix.org",url:"http://fleegix.org"},Qe={ejs:"bin/cli.js"},Ke={url:"https://github.com/mde/ejs/issues"},Ye={jake:"^10.6.1"},et="Embedded JavaScript templates",tt={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},nt={node:">=0.10.0"},at="https://github.com/mde/ejs",rt="ejs.min.js",st=["template","engine","ejs"],it="Apache-2.0",ot="./lib/ejs.js",lt="ejs",ct={type:"git",url:"git://github.com/mde/ejs.git"},ut={test:"mocha"},mt="ejs.min.js",dt="3.1.6",pt={_args:Ne,_from:ke,_id:Be,_inBundle:He,_integrity:Ue,_location:We,_phantomChildren:$e,_requested:Je,_requiredBy:Ve,_resolved:ze,_spec:Xe,_where:Ge,author:Ze,bin:Qe,bugs:Ke,dependencies:Ye,description:et,devDependencies:tt,engines:nt,homepage:at,jsdelivr:rt,keywords:st,license:it,main:ot,name:lt,repository:ct,scripts:ut,unpkg:mt,version:dt},ft=K(function(a,n){var i=qe,o=!1,c=pt.version,h="<",m=">",u="%",p="locals",g="ejs",_="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",w=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],ye=w.concat("cache"),U=/^\uFEFF/;n.cache=E.cache,n.fileLoader=P.readFileSync,n.localsName=p,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,r,e){var s=i.dirname,l=i.extname,d=i.resolve,v=d(e?r:s(r),t),j=l(t);return j||(v+=".ejs"),v};function W(t,r){var e;if(r.some(function(s){return e=n.resolveInclude(t,s,!0),P.existsSync(e)}))return e}function Ee(t,r){var e,s,l=r.views,d=/^[A-Za-z]+:\\|^\//.exec(t);if(d&&d.length)t=t.replace(/^\/*/,""),Array.isArray(r.root)?e=W(t,r.root):e=n.resolveInclude(t,r.root||"/",!0);else if(r.filename&&(s=n.resolveInclude(t,r.filename),P.existsSync(s)&&(e=s)),!e&&Array.isArray(l)&&(e=W(t,l)),!e&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(t)+'"');return e}function F(t,r){var e,s=t.filename,l=arguments.length>1;if(t.cache){if(!s)throw new Error("cache option requires a filename");if(e=n.cache.get(s),e)return e;l||(r=$(s).toString().replace(U,""))}else if(!l){if(!s)throw new Error("Internal EJS error: no file name or template provided");r=$(s).toString().replace(U,"")}return e=n.compile(r,t),t.cache&&n.cache.set(s,e),e}function _e(t,r,e){var s;if(e){try{s=F(t)(r)}catch(l){return e(l)}e(null,s)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(l,d){try{s=F(t)(r),l(s)}catch(v){d(v)}});throw new Error("Please provide a callback function")}}function $(t){return n.fileLoader(t)}function we(t,r){var e=E.shallowCopy({},r);if(e.filename=Ee(t,e),typeof r.includer=="function"){var s=r.includer(t,e.filename);if(s&&(s.filename&&(e.filename=s.filename),s.template))return F(e,s.template)}return F(e)}function J(t,r,e,s,l){var d=r.split(`
`),v=Math.max(s-3,0),j=Math.min(d.length,s+3),b=l(e),C=d.slice(v,j).map(function(x,I){var O=I+v+1;return(O==s?" >> ":"    ")+O+"| "+x}).join(`
`);throw t.path=b,t.message=(b||"ejs")+":"+s+`
`+C+`

`+t.message,t}function V(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(r,e){var s;return e&&e.scope&&(o||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),o=!0),e.context||(e.context=e.scope),delete e.scope),s=new f(r,e),s.compile()},n.render=function(t,r,e){var s=r||{},l=e||{};return arguments.length==2&&E.shallowCopyFromList(l,s,w),F(l,t)(s)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),r=t.shift(),e,s={filename:r},l,d;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(l=t.shift(),t.length?E.shallowCopy(s,t.pop()):(l.settings&&(l.settings.views&&(s.views=l.settings.views),l.settings["view cache"]&&(s.cache=!0),d=l.settings["view options"],d&&E.shallowCopy(s,d)),E.shallowCopyFromList(s,l,ye)),s.filename=r):l={},_e(s,l,e)},n.Template=f,n.clearCache=function(){n.cache.reset()};function f(t,r){r=r||{};var e={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=r.client||!1,e.escapeFunction=r.escape||r.escapeFunction||E.escapeXML,e.compileDebug=r.compileDebug!==!1,e.debug=!!r.debug,e.filename=r.filename,e.openDelimiter=r.openDelimiter||n.openDelimiter||h,e.closeDelimiter=r.closeDelimiter||n.closeDelimiter||m,e.delimiter=r.delimiter||n.delimiter||u,e.strict=r.strict||!1,e.context=r.context,e.cache=r.cache||!1,e.rmWhitespace=r.rmWhitespace,e.root=r.root,e.includer=r.includer,e.outputFunctionName=r.outputFunctionName,e.localsName=r.localsName||n.localsName||p,e.views=r.views,e.async=r.async,e.destructuredLocals=r.destructuredLocals,e.legacyInclude=typeof r.legacyInclude!="undefined"?!!r.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof r._with!="undefined"?r._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=_,r=E.escapeRegExpChars(this.opts.delimiter),e=E.escapeRegExpChars(this.opts.openDelimiter),s=E.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,r).replace(/</g,e).replace(/>/g,s),new RegExp(t)},compile:function(){var t,r,e=this.opts,s="",l="",d=e.escapeFunction,v,j=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),s+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName&&(s+="  var "+e.outputFunctionName+` = __append;
`),e.destructuredLocals&&e.destructuredLocals.length){for(var b="  var __locals = ("+e.localsName+` || {}),
`,C=0;C<e.destructuredLocals.length;C++){var x=e.destructuredLocals[C];C>0&&(b+=`,
  `),b+=x+" = __locals."+x}s+=b+`;
`}e._with!==!1&&(s+="  with ("+e.localsName+` || {}) {
`,l+=`  }
`),l+=`  return __output;
`,this.source=s+this.source+l}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+j+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+d.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+J.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+j+`
`);try{if(e.async)try{v=new Function("return (async function(){}).constructor;")()}catch(y){throw y instanceof SyntaxError?new Error("This environment does not support async/await"):y}else v=Function;r=new v(e.localsName+", escapeFn, include, rethrow",t)}catch(y){throw y instanceof SyntaxError&&(e.filename&&(y.message+=" in "+e.filename),y.message+=` while compiling ejs

`,y.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,y.message+="https://github.com/RyanZim/EJS-Lint",e.async||(y.message+=`
`,y.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),y}var I=e.client?r:function(z){var Te=function(je,X){var M=E.shallowCopy({},z);return X&&(M=E.shallowCopy(M,X)),we(je,e)(M)};return r.apply(e.context,[z||{},d,Te,J])};if(e.filename&&typeof Object.defineProperty=="function"){var O=e.filename,be=i.basename(O,i.extname(O));try{Object.defineProperty(I,"name",{value:be,writable:!1,enumerable:!1,configurable:!0})}catch(y){}}return I},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,e=this.parseTemplateText(),s=this.opts.delimiter,l=this.opts.openDelimiter,d=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(v,j){var b;if(v.indexOf(l+s)===0&&v.indexOf(l+s+s)!==0&&(b=e[j+2],!(b==s+d||b=="-"+s+d||b=="_"+s+d)))throw new Error('Could not find matching close tag for "'+v+'".');r.scanLine(v)})},parseTemplateText:function(){for(var t=this.templateText,r=this.regex,e=r.exec(t),s=[],l;e;)l=e.index,l!==0&&(s.push(t.substring(0,l)),t=t.slice(l)),s.push(e[0]),t=t.slice(e[0].length),e=r.exec(t);return t&&s.push(t),s},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var r=this,e=this.opts.delimiter,s=this.opts.openDelimiter,l=this.opts.closeDelimiter,d=0;switch(d=t.split(`
`).length-1,t){case s+e:case s+e+"_":this.mode=f.modes.EVAL;break;case s+e+"=":this.mode=f.modes.ESCAPED;break;case s+e+"-":this.mode=f.modes.RAW;break;case s+e+"#":this.mode=f.modes.COMMENT;break;case s+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(s+e+e,s+e)+`")
`;break;case e+e+l:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+l,e+l)+`")
`;break;case e+l:case"-"+e+l:case"_"+e+l:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+V(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+V(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}r.opts.compileDebug&&d&&(this.currentLine+=d,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=E.escapeXML,n.__express=n.renderFile,n.VERSION=c,n.name=g,typeof window!="undefined"&&(window.ejs=n)}),oe=ft;function ht(a,n){return oe.render(a,{data:n})}var A=ht;var vt=D.getInstance(),le=new CustomEvent("sideBarSelect",{bubbles:!0,detail:{name:null}}),yt=function(a){let n=A(Z,a),i=T(n);return i.addEventListener("click",gt),i},gt=a=>{le.detail.name=a.currentTarget.dataset.name,vt.handle.dispatchEvent(le)},ce=yt;var Et=document.querySelector("#sidebar"),_t=function(){return{init:function(n){let i=Q();n.forEach(o=>{let c=ce(o);i.append(c)}),Et.append(i)}}},ue=_t;var wt=`
<aside class="manager" data-id="<%-data.id%> ">
<img src="<%-data.avatar%>" alt="" />
<ul>
  <li class="fullname"><%-data.firstname%> <%-data.lastname%></li>
  <li class="email">email: <%-data.email%></li>
  <li class="cell-number">cell:<%-data.cellNumber%></li>
</ul>
</aside>  
`,bt=`
<aside class="managers">
<header><h2>manager</h2></header>
</aside>  
`,Tt={parentTemplate:bt,childTemplate:wt},H=Tt;var jt=a=>{let n=document.querySelector("#managers"),i=a.filter(c=>c.role),o=T(H.parentTemplate);return i.forEach(c=>{let h=A(H.childTemplate,c),m=T(h);o.appendChild(m)}),o},me=jt;var de=`
<aside class="employees"></aside>
`,pe=`
 

<ul class="employee" data-id="<%-data.id%>">
<li>
  <img src="<%-data.avatar%>" width="90px" alt="" />
</li>

<li class="fullname">
    <label> firstname </label>
  <input id="firstname" type="text" value="<%-data.firstname%>" >
 
</li>

 
<li class="lastname"> 
<label> lastname </label>
<input id="lastname" type="text" value="<%-data.lastname%>">
</li>
 


<li>
<label> salary</label>
<input id="salary" type="text" value="<%-data.salary%>">
</li>
 


<li class="vacation"><label> vacation days</label>
  <input id="vacation" type="text" value="<%-data.vacation%>" >
</li>
 
<li class="controls" data-id="<%-data.id%>">
<img id="edit" class="icon" src="assets/svgs/edit.svg" width="24px" alt="">
  <img id="delete" class="icon" src="assets/svgs/delete.svg" width:="24px" alt="">
</li>

 
</ul>
 

`;var fe=D.getInstance(),Lt=function(a){let n=T(de),i=a.filter(c=>!c.role),o=c=>{switch(c.target.id){case"delete":fe.handle.dispatchEvent(new CustomEvent("deleteEmployee",{bubbles:!0,detail:{id:c.currentTarget.dataset.id}})),n.removeChild(c.currentTarget.parentElement);break;case"edit":let h={id:c.currentTarget.dataset.id,firstname:c.currentTarget.parentElement.querySelector("#firstname").value.trim(),lastname:c.currentTarget.parentElement.querySelector("#lastname").value.trim(),salary:c.currentTarget.parentElement.querySelector("#salary").value.trim(),vacation:c.currentTarget.parentElement.querySelector("#vacation").value.trim()};fe.handle.dispatchEvent(new CustomEvent("editEmployee",{bubbles:!0,detail:{payload:h}}));break}};return i.forEach(c=>{let h=A(pe,c),m=T(h);m.querySelector(".controls").addEventListener("click",o),n.appendChild(m)}),n},he=Lt;var St=()=>{let a=document.querySelector("#panel"),n=document.querySelector("#widget-heading"),i=null,o=null,c=m=>{n.textContent=`${m[0].department} department`,i=a.appendChild(me(m)),o=a.appendChild(he(m))};return{updateDisplay:m=>{a.removeChild(i),a.removeChild(o),c(m)},view:a,init:c}},ve=St;var ge=ve(),Ct=ue(),Dt=D.getInstance();Dt.handle.addEventListener("updateDisplay",a=>{ge.updateDisplay(a.detail)});var At=async function(){let a=await S.getRequest(L.getAllDepartments),n=await S.getRequest(L.getDepartment("training"));Ct.init(a),ge.init(n)};At();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function u(e){return c.p+"js/"+({history:"history"}[e]||e)+"."+{history:"c75371b7"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={history:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({history:"history"}[e]||e)+"."+{history:"5371b896"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/sticky-fingers/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0040":function(e,t,n){},"0b5f":function(e,t,n){"use strict";var r=n("913d"),a=n.n(r);a.a},"1b78":function(e,t,n){},"284d":function(e,t,n){},"2a7d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classes,attrs:{type:e.type}},[e._t("default")],2)},a=[],i=n("d4ec"),o=n("bee2"),u=n("262e"),c=n("2caf"),s=n("9ab4"),l=n("60a3"),f=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"classes",get:function(){return"button ".concat(this.primary?"button--primary":"")}}]),n}(l["d"]);Object(s["a"])([Object(l["c"])({type:String,default:"button"})],f.prototype,"type",void 0),Object(s["a"])([Object(l["c"])({type:Boolean,default:!1})],f.prototype,"primary",void 0),f=Object(s["a"])([l["a"]],f);var d=f,v=d,h=(n("8524"),n("2877")),p=Object(h["a"])(v,r,a,!1,null,"d6a4fe7a",null);t["a"]=p.exports},"337a":function(e,t,n){},"429e":function(e,t,n){},4368:function(e,t,n){"use strict";var r=n("284d"),a=n.n(r);a.a},"4e73":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("4de4"),n("a15b");function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!!e})).join(" ")}},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"60d5":function(e,t,n){"use strict";var r=n("429e"),a=n.n(r);a.a},"61bc":function(e,t,n){"use strict";var r=n("0040"),a=n.n(r);a.a},7639:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),function(e){e["q"]="KeyQ",e["backspace"]="Backspace",e["enter"]="Enter",e["escape"]="Escape",e["up"]="ArrowUp",e["down"]="ArrowDown",e["space"]="Space"}(r||(r={}));r.escape,r.enter;var a=[r.space,r.enter]},8191:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["easy"]="Easy",e["medium"]="Medium",e["hard"]="Hard"}(r||(r={}))},8524:function(e,t,n){"use strict";var r=n("d8e9"),a=n.n(r);a.a},"913d":function(e,t,n){},"9c0c":function(e,t,n){},b7c7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("89d3"),a=n.n(r),i=n("8191"),o=new a.a("skfOptions",{difficulty:i["a"].easy,history:[]})},c128:function(e,t,n){"use strict";var r=n("337a"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",[n("router-view")],1)],1)},i=[],o=n("d4ec"),u=n("262e"),c=n("2caf"),s=n("9ab4"),l=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"skf-header"},[n("h1",{staticClass:"skf-header__title"},[e._v("Sticky Fingers")]),n("div",{staticClass:"skf-header__links"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/history"}},[e._v("History")])],1)])},d=[],v=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(l["d"]);v=Object(s["a"])([l["a"]],v);var h=v,p=h,b=(n("60d5"),n("2877")),y=Object(b["a"])(p,f,d,!1,null,"560e1f4f",null),m=y.exports,g=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(l["d"]);g=Object(s["a"])([Object(l["a"])({components:{Header:m}})],g);var O,j=g,k=j,_=(n("5c0b"),Object(b["a"])(k,a,i,!1,null,null,null)),w=_.exports,C=(n("b0c0"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page home"},[n("div",{staticClass:"home__content"},[e.inGame?n("form",{attrs:{id:"gameForm",name:"sudoku",autocomplete:"off",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("div",{staticClass:"orientation"},[n("div",{staticClass:"orientation__inner"},[n("div",{staticClass:"controls"},[n("div",{staticClass:"controls__padded"},[e._v(e._s(e.timeElapsed))]),n("div",{staticClass:"controls__padded"},[e._v(e._s(e.difficulty))])]),n("Sudoku",{attrs:{"initial-grid":e.initialGrid,items:e.grid,highlightNumber:e.highlightNumber,errors:e.errors},on:{"on-change":e.handleBoardUpdate}})],1),n("Counters",{attrs:{items:e.grid},on:{highlight:e.setHighlightNumber,selected:e.onCounterSelect}})],1),n("div",{staticClass:"controls"},[n("Button",{attrs:{type:"submit",primary:""}},[e._v("Check")]),n("div",{staticClass:"controls__message"},[e._v(e._s(e.userFeedback))])],1)]):n("div",{staticClass:"game-summary"},[n("div",{staticClass:"game-summary__message"},[e._v(e._s(e.userFeedback))]),n("div",{staticClass:"controls"},[n("Button",{attrs:{primary:""},nativeOn:{click:function(t){return e.onNewGame(t)}}},[e._v("New game")]),n("div",{staticStyle:{margin:"0 15px"}},[n("SelectBox",{staticClass:"game-summary__difficulty",attrs:{id:"difficulty",text:"Difficulty",value:e.difficulty,options:e.difficultyOptions,required:""},on:{"on-select":e.onDifficultySelection}})],1)],1)])])])},q=[],E=(n("99af"),n("a623"),n("4de4"),n("d81d"),n("b64b"),n("07ac"),n("2909")),N=n("5530"),x=n("bee2"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sudoku"},e._l(e.board,(function(t){return n("Square",e._b({key:t.sq,on:{"on-user-input":e.onChange,"on-key-up":e.onKeyUp}},"Square",t,!1))})),1)},B=[],T=(n("c740"),n("caad"),n("45fc"),n("a9e3"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("3835")),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes},[n("input",{class:e.inputClasses,attrs:{type:"text",maxlength:"1",id:e.name,name:e.fieldName,"aria-label":e.name,readonly:e.disabled},domProps:{value:e.value},on:{input:e.onUserInput,keydown:e.onKeyDown,keyup:e.onKeyUp,focus:e.onFocus,blur:e.onBlur}})])},D=[],P=n("4e73");function G(e){var t=e.split(""),n=Object(T["a"])(t,2),r=n[0],a=n[1],i=[];return["A","D","G"].includes(r)&&i.push(O.left),["C","F","I"].includes(r)&&i.push(O.right),["1","4","7"].includes(a)&&i.push(O.top),["3","6","9"].includes(a)&&i.push(O.bottom),"1"===a?i.push(O.thickTop):"9"===a&&i.push(O.thickBottom),"A"===r?i.push(O.thickLeft):"I"===r&&i.push(O.thickRight),i}(function(e){e["top"]="square--border_top",e["right"]="square--border_right",e["bottom"]="square--border_bottom",e["left"]="square--border_left",e["thickTop"]="square--border-thick_top",e["thickRight"]="square--border-thick_right",e["thickBottom"]="square--border-thick_bottom",e["thickLeft"]="square--border-thick_left"})(O||(O={}));var I=function(){function e(){Object(o["a"])(this,e)}return Object(x["a"])(e,[{key:"setFocus",value:function(e){this.prevSquareNumber=this.squareNumber,this.squareNumber=e}},{key:"getFocus",value:function(){return this.squareNumber}},{key:"getPreviousFocus",value:function(){return this.prevSquareNumber}}]),e}(),U=new I,$=n("7639"),H=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(x["a"])(n,[{key:"onFocus",value:function(){U.setFocus(this.name)}},{key:"onBlur",value:function(){U.setFocus(void 0)}},{key:"onUserInput",value:function(e){var t=e.target.value,n=Number(t),r=isNaN(n)||n<1||n>9,a=r?"":t;return{square:this.name,value:a}}},{key:"onKeyUp",value:function(e){}},{key:"onKeyDown",value:function(e){var t=[$["a"].enter,$["a"].backspace];/[a-zA-Z0]/.test(e.key)&&!t.includes(e.code)&&(e.preventDefault(),e.stopImmediatePropagation())}},{key:"classes",get:function(){return P["a"].apply(void 0,["square"].concat(Object(E["a"])(G(this.name))))}},{key:"inputClasses",get:function(){var e=this.warning&&!this.error,t=this.error,n=this.highlight;return Object(P["a"])("square__input",n&&"square__input--highlight",e&&"square__input--warning",t&&"square__input--error")}},{key:"fieldName",get:function(){return"sq_".concat(this.name)}}]),n}(l["d"]);Object(s["a"])([Object(l["c"])({type:String})],H.prototype,"name",void 0),Object(s["a"])([Object(l["c"])({type:String})],H.prototype,"value",void 0),Object(s["a"])([Object(l["c"])({type:Boolean})],H.prototype,"disabled",void 0),Object(s["a"])([Object(l["c"])({type:Boolean})],H.prototype,"warning",void 0),Object(s["a"])([Object(l["c"])({type:Boolean})],H.prototype,"error",void 0),Object(s["a"])([Object(l["c"])({type:Boolean})],H.prototype,"highlight",void 0),Object(s["a"])([Object(l["b"])()],H.prototype,"onUserInput",null),Object(s["a"])([Object(l["b"])()],H.prototype,"onKeyUp",null),H=Object(s["a"])([l["a"]],H);var K=H,L=K,M=(n("4368"),Object(b["a"])(L,A,D,!1,null,"2046afc9",null)),R=M.exports,z=n("b85c");function W(e,t){var n,r=[],a=Object(z["a"])(e);try{for(a.s();!(n=a.n()).done;){var i,o=n.value,u=Object(z["a"])(t);try{for(u.s();!(i=u.n()).done;){var c=i.value;r.push(o+c)}}catch(s){u.e(s)}finally{u.f()}}}catch(s){a.e(s)}finally{a.f()}return r}var J=function(e){return e.split("")};function V(e,t){var n,r=[],a=Object(z["a"])(e);try{for(a.s();!(n=a.n()).done;){var i=n.value;r.push(W(t,[i]))}}catch(y){a.e(y)}finally{a.f()}var o,u=Object(z["a"])(t);try{for(u.s();!(o=u.n()).done;){var c=o.value;r.push(W([c],e))}}catch(y){u.e(y)}finally{u.f()}for(var s=["ABC","DEF","GHI"],l=["123","456","789"],f=0,d=s;f<d.length;f++){var v,h=d[f],p=Object(z["a"])(l);try{for(p.s();!(v=p.n()).done;){var b=v.value;r.push(W(J(h),J(b)))}}catch(y){p.e(y)}finally{p.f()}}return r}function Y(e,t){var n,r={},a={},i=Object(z["a"])(e);try{var o=function(){var e,i=n.value,o=[],u=[],c=Object(z["a"])(t);try{for(c.s();!(e=c.n()).done;){var s=e.value;if(s.some((function(e){return e===i}))){u.push(s);var l,f=Object(z["a"])(s);try{var d=function(){var e=l.value;o.some((function(t){return t===e}))||e===i||o.push(e)};for(f.s();!(l=f.n()).done;)d()}catch(v){f.e(v)}finally{f.f()}}}}catch(v){c.e(v)}finally{c.f()}r[i]=u,a[i]=o};for(i.s();!(n=i.n()).done;)o()}catch(u){i.e(u)}finally{i.f()}return{UNITS:r,PEERS:a}}var Q=["1","2","3","4","5","6","7","8","9"],Z=["A","B","C","D","E","F","G","H","I"],X="123456789",ee=W(Z,Q),te=V(Q,Z),ne=Y(ee,te),re=ne.UNITS,ae=ne.PEERS;n("13d5"),n("fb6a");function ie(){return Object.keys(re).slice(0,9).reduce((function(e,t){return[].concat(Object(E["a"])(e),Object(E["a"])(re[t][0]))}),[])}var oe=ie(),ue=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(x["a"])(n,[{key:"onChange",value:function(e){}},{key:"onKeyUp",value:function(e){var t=e.target.name,n=e.code||e.key,r=this.getAdjustment(n,t);if(r.direction){var a=this.adjustTarget(r);this.updateFocus(a)}}},{key:"getAdjustment",value:function(e,t){var n=t.split("_"),r=Object(T["a"])(n,2),a=(r[0],r[1]),i=a.split(""),o=Object(T["a"])(i,2),u=o[0],c=o[1];switch(e){case"ArrowUp":return{direction:-1,list:Q,value:c,idBase:"".concat(u,"{new}")};case"ArrowDown":return{direction:1,list:Q,value:c,idBase:"".concat(u,"{new}")};case"ArrowLeft":return{direction:-1,list:Z,value:u,idBase:"{new}".concat(c)};case"ArrowRight":return{direction:1,list:Z,value:u,idBase:"{new}".concat(c)};default:return{direction:0,list:[],value:"",idBase:""}}}},{key:"adjustTarget",value:function(e){var t=e.list,n=e.value,r=e.direction,a=e.idBase,i=t.length-1,o=t.findIndex((function(e){return e===n})),u=o+r;u=u<0?i:u,u=u>i?0:u;var c=t[u];return a.replace("{new}",c)}},{key:"updateFocus",value:function(e){var t=document.getElementById(e);t&&t.focus()}},{key:"isWarning",value:function(e){return this.errors.some((function(t){return t.unit.includes(e)}))}},{key:"isError",value:function(e){return this.errors.some((function(t){return t.errorFields.includes(e)}))}},{key:"board",get:function(){var e=this;return oe.map((function(t){return{sq:t,name:t,value:e.items[t],disabled:!!e.initialGrid[t],warning:e.isWarning(t),error:e.isError(t),highlight:Number(e.items[t])===e.highlightNumber}}))}}]),n}(l["d"]);Object(s["a"])([Object(l["c"])({type:Object,default:function(){return{}}})],ue.prototype,"initialGrid",void 0),Object(s["a"])([Object(l["c"])({type:Object,default:function(){return{}}})],ue.prototype,"items",void 0),Object(s["a"])([Object(l["c"])({type:Array})],ue.prototype,"errors",void 0),Object(s["a"])([Object(l["c"])({type:Number})],ue.prototype,"highlightNumber",void 0),Object(s["a"])([Object(l["b"])()],ue.prototype,"onChange",null),ue=Object(s["a"])([Object(l["a"])({components:{Square:R}})],ue);var ce=ue,se=ce,le=(n("61bc"),Object(b["a"])(se,F,B,!1,null,"bdd7a976",null)),fe=le.exports,de=n("2a7d"),ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.selectClasses},[e.options.length?n("select",{staticClass:"select-box__input",attrs:{id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.value},on:{change:e.onSelect}},[e.isRequiredWithNoValue?n("option",{staticClass:"select-box__option",domProps:{value:null}},[e._v("Please select a "+e._s(e.text))]):e._e(),e._l(e.options,(function(t){return n("option",{key:t.value,staticClass:"select-box__option",domProps:{value:t.value}},[e._v(e._s(t.text))])}))],2):e._e(),n("label",{attrs:{for:e.id}},[e._v(e._s(e.text))])])},he=[],pe=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(x["a"])(n,[{key:"onSelect",value:function(e){var t=e.target;return{value:t.value,name:this.name}}},{key:"selectClasses",get:function(){return Object(P["a"])("select-box","has-float-label")}},{key:"isRequiredWithNoValue",get:function(){return this.required&&!this.value}}]),n}(l["d"]);Object(s["a"])([Object(l["c"])({type:String})],pe.prototype,"id",void 0),Object(s["a"])([Object(l["c"])({type:String,default:void 0})],pe.prototype,"name",void 0),Object(s["a"])([Object(l["c"])({type:String,default:""})],pe.prototype,"text",void 0),Object(s["a"])([Object(l["c"])({type:[String,Number],default:void 0})],pe.prototype,"value",void 0),Object(s["a"])([Object(l["c"])({type:Array,default:function(){return[]}})],pe.prototype,"options",void 0),Object(s["a"])([Object(l["c"])({type:Boolean,default:!1})],pe.prototype,"required",void 0),Object(s["a"])([Object(l["c"])({type:Boolean,default:!1})],pe.prototype,"disabled",void 0),Object(s["a"])([Object(l["b"])()],pe.prototype,"onSelect",null),pe=Object(s["a"])([l["a"]],pe);var be=pe,ye=be,me=(n("f4d7"),Object(b["a"])(ye,ve,he,!1,null,"0a61469c",null)),ge=me.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"counters"},e._l(e.counters,(function(t){return n("button",{key:t.number,class:t.classes,attrs:{"aria-label":t.number+" has "+t.count+" placements",type:"button"},on:{mouseenter:function(){return e.highlight(t.number)},mouseleave:function(){return e.highlight(-1)},click:function(){return e.selected(t.number)}}},[n("div",{staticClass:"counter__number",attrs:{"aria-hidden":"true"}},[e._v(e._s(t.number))]),n("div",{staticClass:"counter__count",attrs:{"aria-hidden":"true"}},[e._v(e._s(t.count))])])})),0)},je=[],ke=(n("cb29"),function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(x["a"])(n,[{key:"highlight",value:function(e){}},{key:"selected",value:function(e){}},{key:"counters",get:function(){var e=Object.values(this.items);return Array(9).fill(null).map((function(t,n){var r=n+1,a=e.filter((function(e){return Number(e)===r})).length;return{number:r,count:a,classes:Object(P["a"])("counter",9===a&&"counter--complete",a>9&&"counter--overloaded")}}))}}]),n}(l["d"]));Object(s["a"])([Object(l["c"])({type:Object,default:function(){return{}}})],ke.prototype,"items",void 0),Object(s["a"])([Object(l["b"])()],ke.prototype,"highlight",null),Object(s["a"])([Object(l["b"])()],ke.prototype,"selected",null),ke=Object(s["a"])([l["a"]],ke);var _e=ke,we=_e,Ce=(n("0b5f"),Object(b["a"])(we,Oe,je,!1,null,"b0de51d8",null)),Se=Ce.exports,qe=n("d36b"),Ee=n("b7c7"),Ne=n("8191");function xe(e){0}n("c975");function Fe(e,t,n){if(-1===e[t].indexOf(n))return e;if(e[t]=e[t].replace(n,""),0===e[t].length)return!1;if(1===e[t].length){var r=e[t];if(!ae[t].every((function(t){return Fe(e,t,r)})))return!1}var a,i=Object(z["a"])(re[t]);try{for(i.s();!(a=i.n()).done;){var o=a.value,u=o.filter((function(t){return-1!==e[t].indexOf(n)}));if(0===u.length)return!1;if(1===u.length&&!Be(e,u[0],n))return!1}}catch(c){i.e(c)}finally{i.f()}return e}function Be(e,t,n){var r=e[t].replace(n,"");return r.split("").every((function(n){return Fe(e,t,n)}))?{values:e}:{hasFailure:!0}}function Te(e){var t=ee.reduce((function(e,t){return e[t]=X,e}),{}),n=e;for(var r in n)if(n.hasOwnProperty(r)){var a=n[r],i=Be(t,r,a);if(i.hasFailure)return{hasFailure:!0}}return{values:t}}function Ae(e){for(var t=Object(E["a"])(e),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),a=[t[r],t[n]];t[n]=a[0],t[r]=a[1]}return t}function De(e,t){if(t=t||{},t.chooseDigit=t.chooseDigit||"random",!e.values)return{hasFailure:!0};var n=e.values;if(ee.every((function(e){return 1===n[e].length})))return{values:n};var r=ee.filter((function(e){return n[e].length>1})).sort((function(e,t){return n[e].length!==n[t].length?n[e].length-n[t].length:e<t?-1:1})),a=r[0],i=n[a].split("");"max"===t.chooseDigit?i.reverse():"random"===t.chooseDigit&&(i=Ae(i));for(var o=i.length,u=0;u<o;u++){var c=i[u],s=De(Be(n,a,c),t);if(s.values)return{values:s.values}}return{hasFailure:!0}}function Pe(e,t){var n=De(Te(e),t);if(!n.values)throw new Error("Unable to solve grid.");return n.values}function Ge(e){switch(e){case Ne["a"].easy:return 35;case Ne["a"].medium:return 28;case Ne["a"].hard:default:return 20}}function Ie(e){for(var t in e)if(e[t].length>1)return!1;return!0}function Ue(e){var t=Te(e);return!!t.values&&Ie(t.values)}function $e(e){var t=e,n=Pe(t,{chooseDigit:"min"}),r=Pe(t,{chooseDigit:"max"});for(var a in n)if(r[a]!==n[a])return!1;return!0}function He(e){var t,n=(new Date).getTime(),r=Ge(e||Ne["a"].easy),a=Pe({}),i=Object(N["a"])({},a),o=Ae(ee),u=o.length,c=Object(z["a"])(o);try{for(c.s();!(t=c.n()).done;){var s=t.value;if(delete i[s],u--,Ue(i)&&$e(i)||(i[s]=a[s],u++),u===r)break}}catch(f){c.e(f)}finally{c.f()}var l=(new Date).getTime()-n;return xe("Generated puzzle with "+Object.keys(i).length+" squares in "+l+"ms"),i}function Ke(e,t){return Object.keys(e).map((function(n){return e[n]!==t[n]&&t[n]?n:""})).filter((function(e){return!!e}))}function Le(e,t){var n=[];for(var r in t)if(t.hasOwnProperty(r)){var a=t[r]+"";if(a&&!(a.length>1)){var i,o=Object(z["a"])(re[r]);try{for(o.s();!(i=o.n()).done;){var u,c=i.value,s=Object(z["a"])(c);try{for(s.s();!(u=s.n()).done;){var l=u.value,f=t[l]+"";l!==r&&a===f&&n.push({unit:c,errorFields:[r,l]})}}catch(v){s.e(v)}finally{s.f()}}}catch(v){o.e(v)}finally{o.f()}}}var d=Ke(e,t);return{errors:n,mistakes:d}}var Me=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.initialGrid={},e.grid={},e.solution={},e.difficulty=Ne["a"].easy,e.inGame=!1,e.timer=0,e.timeElapsed="00m 00s",e.userFeedback="Let's play sudoku!",e.errors=[],e.highlightNumber=-1,e.unsubTimer=function(){return 0},e}return Object(x["a"])(n,[{key:"mounted",value:function(){var e=Ee["a"].get();this.difficulty=e.difficulty}},{key:"onDifficultySelection",value:function(e){var t=e.value,n=t;this.difficulty=n,Ee["a"].set({difficulty:n})}},{key:"handleBoardUpdate",value:function(e){this.$set(this.grid,e.square,e.value)}},{key:"onNewGame",value:function(){var e=this,t=He(this.difficulty);this.timeElapsed="00m 00s",this.userFeedback="",this.initialGrid=Object(N["a"])({},t),this.grid=Object(N["a"])({},t),this.solution=Pe(Object(N["a"])({},t)),this.inGame=!0,this.unsubTimer=qe["a"].subscribe((function(t){return e.timeElapsed=t}))}},{key:"setHighlightNumber",value:function(e){this.highlightNumber=e}},{key:"onCounterSelect",value:function(e){var t=U.getPreviousFocus();if(void 0!==t){var n=this.initialGrid[t];n||this.handleBoardUpdate({square:t,value:"".concat(e)}),this.$nextTick((function(){var e;return null===(e=document.getElementById(t))||void 0===e?void 0:e.focus()}))}}},{key:"onSubmit",value:function(){var e=Object(N["a"])({},this.solution),t=Object(N["a"])({},this.grid),n=Le(e,t),r=n.errors,a=n.mistakes,i=a.length;if(r.length)return this.errors=Object(E["a"])(r),void(this.userFeedback="You've broken the rules!");if(this.errors=[],i){var o=1!==i?"s":"";this.userFeedback="There appear to be ".concat(i," mistake").concat(o,".")}else{var u=Object.keys(e).every((function(n){return e[n]===t[n]}));if(u)this.completedGame();else{var c=ee.filter((function(e){return!t[e]})).length;this.userFeedback="No conflicts found. ".concat(c," squares left.")}}}},{key:"completedGame",value:function(){var e=this.unsubTimer();this.userFeedback="You've completed the puzzle!\n      Completed in ".concat(qe["a"].formatTime(e)),this.inGame=!1;var t=Ee["a"].get();Ee["a"].set({history:[].concat(Object(E["a"])(t.history),[{datetime:(new Date).getTime(),timeElapsed:e,difficulty:this.difficulty}])})}},{key:"difficultyOptions",get:function(){return Object.values(Ne["a"]).map((function(e){return{value:e,text:e}}))}}]),n}(l["d"]);Me=Object(s["a"])([Object(l["a"])({components:{Sudoku:fe,Button:de["a"],SelectBox:ge,Counters:Se}})],Me);var Re=Me,ze=Re,We=(n("c128"),Object(b["a"])(ze,S,q,!1,null,"138e1662",null)),Je=We.exports;r["a"].use(C["a"]);var Ve=new C["a"]({mode:"history",base:"/sticky-fingers/",routes:[{path:"/",name:"home",component:Je},{path:"/history",name:"history",component:function(){return n.e("history").then(n.bind(null,"e4bb"))}}]}),Ye=new Map([["default","Sticky Fingers"],["home","Sudoku"],["history","Game history"]]);Ve.afterEach((function(e){var t=Ye.get(e.name||"");window.document.title=t?"".concat(t," | Sticky Fingers"):Ye.get("default")}));var Qe=Ve,Ze=n("9483");Object(Ze["a"])("".concat("/sticky-fingers/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:Qe,render:function(e){return e(w)}}).$mount("#app")},d36b:function(e,t,n){"use strict";n("99af");var r=n("d4ec"),a=n("bee2"),i=n("f21b"),o=n.n(i),u=function(){function e(){Object(r["a"])(this,e),this.interval=0,this.paused=!0,this.gameTime=0,this.callback=function(){return null}}return Object(a["a"])(e,[{key:"formatTime",value:function(e){var t=Math.floor(e/60),n=e%60;return"".concat(o()(t,2),"m ").concat(o()(n,2),"s")}},{key:"subscribe",value:function(e){var t=this;return this.callback=e,this.reset(),this.start(),function(){var e=t.gameTime;return t.callback=function(){return null},t.reset(),e}}},{key:"start",value:function(){var e=this;this.paused=!1,clearInterval(this.interval),this.interval=window.setInterval((function(){e.gameTime+=1,e.callback(e.time)}),1e3)}},{key:"stop",value:function(){this.paused=!0,clearInterval(this.interval)}},{key:"reset",value:function(){this.stop(),this.gameTime=0}},{key:"time",get:function(){return this.formatTime(this.gameTime)}},{key:"isPaused",get:function(){return this.paused}}]),e}();t["a"]=new u},d8e9:function(e,t,n){},f4d7:function(e,t,n){"use strict";var r=n("1b78"),a=n.n(r);a.a}});
//# sourceMappingURL=app.acd3002f.js.map
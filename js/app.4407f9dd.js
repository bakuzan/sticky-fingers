(function(){"use strict";var e={653:function(e,t,n){n.d(t,{Z:function(){return f}});var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("button",{class:e.classes,attrs:{type:e.type}},[e._t("default")],2)},i=[],s=n(655),o=n(1929);let a=class extends o.w3{get classes(){return"button "+(this.primary?"button--primary":"")}};(0,s.gn)([(0,o.fI)({type:String,default:"button"})],a.prototype,"type",void 0),(0,s.gn)([(0,o.fI)({type:Boolean,default:!1})],a.prototype,"primary",void 0),a=(0,s.gn)([o.wA],a);var u=a,l=u,c=n(1001),d=(0,c.Z)(l,r,i,!1,null,"0adf0e0c",null),f=d.exports},1544:function(e,t,n){var r=n(144),i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("Header"),t("main",[t("router-view")],1)],1)},s=[],o=n(655),a=n(1929),u=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("nav",{staticClass:"skf-header"},[t("h1",{staticClass:"skf-header__title"},[e._v("Sticky Fingers")]),t("div",{staticClass:"skf-header__links"},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/history"}},[e._v("History")])],1)])},l=[];let c=class extends a.w3{};c=(0,o.gn)([a.wA],c);var d=c,f=d,h=n(1001),p=(0,h.Z)(f,u,l,!1,null,"116aeb3a",null),m=p.exports;let g=class extends a.w3{};g=(0,o.gn)([(0,a.wA)({components:{Header:m}})],g);var v,y=g,b=y,_=(0,h.Z)(b,i,s,!1,null,null,null),k=_.exports,w=n(8345),x=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"page home"},[t("div",{staticClass:"home__content"},[e.inGame?t("form",{attrs:{id:"gameForm",name:"sudoku",autocomplete:"off",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("div",{staticClass:"orientation"},[t("div",{staticClass:"orientation__inner"},[t("div",{staticClass:"controls"},[t("div",{staticClass:"controls__padded"},[e._v(e._s(e.timeElapsed))]),t("div",{staticClass:"controls__padded"},[e._v(e._s(e.difficulty))])]),t("Sudoku",{attrs:{"initial-grid":e.initialGrid,items:e.grid,highlightNumber:e.highlightNumber,errors:e.errors},on:{"on-change":e.handleBoardUpdate}})],1),t("Counters",{attrs:{items:e.grid},on:{highlight:e.setHighlightNumber,selected:e.onCounterSelect}})],1),t("div",{staticClass:"controls"},[t("Button",{attrs:{type:"submit",primary:""}},[e._v("Check")]),t("div",{class:{controls__message:!0,"controls__message--error":e.errors.length>0,"controls__message--warning":e.mistakes.length>0}},[e._v(" "+e._s(e.userFeedback)+" ")])],1)]):t("div",{staticClass:"game-summary"},[t("div",{staticClass:"game-summary__message"},[e._v(e._s(e.userFeedback))]),t("div",{staticClass:"controls"},[t("Button",{attrs:{primary:""},nativeOn:{click:function(t){return e.onNewGame.apply(null,arguments)}}},[e._v("New game")]),t("div",{staticStyle:{margin:"0 15px"}},[t("SelectBox",{staticClass:"game-summary__difficulty",attrs:{id:"difficulty",text:"Difficulty",value:e.difficulty,options:e.difficultyOptions,required:""},on:{"on-select":e.onDifficultySelection}})],1)],1)])])])},C=[],S=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"sudoku"},e._l(e.board,(function(n){return t("Square",e._b({key:n.sq,on:{"on-user-input":e.onChange,"on-key-up":e.onKeyUp}},"Square",n,!1))})),1)},q=[],N=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{class:e.classes},[t("input",{class:e.inputClasses,attrs:{type:e.fieldType,maxlength:"1",tabIndex:"A1"===e.name?0:-1,id:e.name,name:e.fieldName,"aria-label":e.name,readonly:e.disabled},domProps:{value:e.value},on:{input:e.onUserInput,keyup:e.onKeyUp,focus:e.onFocus,blur:e.onBlur}})])},F=[],I=n(5147);function A(e){const[t,n]=e.split(""),r=[];return["A","D","G"].includes(t)&&r.push(v.left),["C","F","I"].includes(t)&&r.push(v.right),["1","4","7"].includes(n)&&r.push(v.top),["3","6","9"].includes(n)&&r.push(v.bottom),"1"===n?r.push(v.thickTop):"9"===n&&r.push(v.thickBottom),"A"===t?r.push(v.thickLeft):"I"===t&&r.push(v.thickRight),r}(function(e){e["top"]="square--border_top",e["right"]="square--border_right",e["bottom"]="square--border_bottom",e["left"]="square--border_left",e["thickTop"]="square--border-thick_top",e["thickRight"]="square--border-thick_right",e["thickBottom"]="square--border-thick_bottom",e["thickLeft"]="square--border-thick_left"})(v||(v={}));class T{setFocus(e){this.prevSquareNumber=this.squareNumber,this.squareNumber=e}getFocus(){return this.squareNumber}getPreviousFocus(){return this.prevSquareNumber}}var B=new T;function j(){let e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor),e}let O=class extends a.w3{get classes(){return(0,I.Z)("square",...A(this.name))}get inputClasses(){const e=this.warning&&!this.error,t=this.error,n=this.highlight;return(0,I.Z)("square__input",n&&"square__input--highlight",e&&"square__input--warning",t&&"square__input--error")}get fieldName(){return`sq_${this.name}`}get fieldType(){return j()?"number":"text"}onFocus(){B.setFocus(this.name)}onBlur(){B.setFocus(void 0)}onUserInput(e){const{value:t}=e.target,n=Number(t),r=isNaN(n)||n<1||n>9,i=r?"":t;return this.$forceUpdate(),{square:this.name,value:i}}onKeyUp(e){}};(0,o.gn)([(0,a.fI)({type:String})],O.prototype,"name",void 0),(0,o.gn)([(0,a.fI)({type:String})],O.prototype,"value",void 0),(0,o.gn)([(0,a.fI)({type:Boolean})],O.prototype,"disabled",void 0),(0,o.gn)([(0,a.fI)({type:Boolean})],O.prototype,"warning",void 0),(0,o.gn)([(0,a.fI)({type:Boolean})],O.prototype,"error",void 0),(0,o.gn)([(0,a.fI)({type:Boolean})],O.prototype,"highlight",void 0),(0,o.gn)([(0,a.y1)()],O.prototype,"onUserInput",null),(0,o.gn)([(0,a.y1)()],O.prototype,"onKeyUp",null),O=(0,o.gn)([a.wA],O);var P=O,E=P,Z=(0,h.Z)(E,N,F,!1,null,"22316afd",null),D=Z.exports;function G(e,t){const n=[];for(const r of e)for(const e of t)n.push(r+e);return n}const $=e=>e.split("");function U(e,t){const n=[];for(const s of e)n.push(G(t,[s]));for(const s of t)n.push(G([s],e));const r=["ABC","DEF","GHI"],i=["123","456","789"];for(const s of r)for(const e of i)n.push(G($(s),$(e)));return n}function z(e,t){const n={},r={};for(const i of e){const e=[],s=[];for(const n of t)if(n.some((e=>e===i))){s.push(n);for(const t of n)e.some((e=>e===t))||t===i||e.push(t)}n[i]=s,r[i]=e}return{UNITS:n,PEERS:r}}const H=["1","2","3","4","5","6","7","8","9"],L=["A","B","C","D","E","F","G","H","I"],M="123456789",R=G(L,H),K=U(H,L),{UNITS:W,PEERS:V}=z(R,K);function Y(){return Object.keys(W).slice(0,9).reduce(((e,t)=>[...e,...W[t][0]]),[])}const J=Y();let Q=class extends a.w3{get board(){return J.map((e=>({sq:e,name:e,value:this.items[e],disabled:!!this.initialGrid[e],warning:this.isWarning(e),error:this.isError(e),highlight:Number(this.items[e])===this.highlightNumber})))}onChange(e){}onKeyUp(e){const{name:t}=e.target,n=e.code||e.key,r=this.getAdjustment(n,t);if(!r.direction)return;const i=this.adjustTarget(r);this.updateFocus(i)}getAdjustment(e,t){const[n,r]=t.split("_"),[i,s]=r.split("");switch(e){case"ArrowUp":return{direction:-1,list:H,value:s,idBase:`${i}{new}`};case"ArrowDown":return{direction:1,list:H,value:s,idBase:`${i}{new}`};case"ArrowLeft":return{direction:-1,list:L,value:i,idBase:`{new}${s}`};case"ArrowRight":return{direction:1,list:L,value:i,idBase:`{new}${s}`};default:return{direction:0,list:[],value:"",idBase:""}}}adjustTarget(e){const{list:t,value:n,direction:r,idBase:i}=e,s=t.length-1,o=t.findIndex((e=>e===n));let a=o+r;a=a<0?s:a,a=a>s?0:a;const u=t[a];return i.replace("{new}",u)}updateFocus(e){const t=document.getElementById(e);t&&t.focus()}isWarning(e){return this.errors.some((t=>t.unit.includes(e)))}isError(e){return this.errors.some((t=>t.errorFields.includes(e)))}};(0,o.gn)([(0,a.fI)({type:Object,default:()=>({})})],Q.prototype,"initialGrid",void 0),(0,o.gn)([(0,a.fI)({type:Object,default:()=>({})})],Q.prototype,"items",void 0),(0,o.gn)([(0,a.fI)({type:Array})],Q.prototype,"errors",void 0),(0,o.gn)([(0,a.fI)({type:Number})],Q.prototype,"highlightNumber",void 0),(0,o.gn)([(0,a.y1)()],Q.prototype,"onChange",null),Q=(0,o.gn)([(0,a.wA)({components:{Square:D}})],Q);var X=Q,ee=X,te=(0,h.Z)(ee,S,q,!1,null,"4aaca06b",null),ne=te.exports,re=n(653),ie=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{class:e.selectClasses},[e.options.length?t("select",{staticClass:"select-box__input",attrs:{id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.value},on:{change:e.onSelect}},[e.isRequiredWithNoValue?t("option",{staticClass:"select-box__option",domProps:{value:null}},[e._v("Please select a "+e._s(e.text))]):e._e(),e._l(e.options,(function(n){return t("option",{key:n.value,staticClass:"select-box__option",domProps:{value:n.value}},[e._v(e._s(n.text))])}))],2):e._e(),t("label",{attrs:{for:e.id}},[e._v(e._s(e.text))])])},se=[];let oe=class extends a.w3{get selectClasses(){return(0,I.Z)("select-box","has-float-label")}get isRequiredWithNoValue(){return this.required&&!this.value}onSelect(e){const t=e.target;return{value:t.value,name:this.name}}};(0,o.gn)([(0,a.fI)({type:String})],oe.prototype,"id",void 0),(0,o.gn)([(0,a.fI)({type:String,default:void 0})],oe.prototype,"name",void 0),(0,o.gn)([(0,a.fI)({type:String,default:""})],oe.prototype,"text",void 0),(0,o.gn)([(0,a.fI)({type:[String,Number],default:void 0})],oe.prototype,"value",void 0),(0,o.gn)([(0,a.fI)({type:Array,default:()=>[]})],oe.prototype,"options",void 0),(0,o.gn)([(0,a.fI)({type:Boolean,default:!1})],oe.prototype,"required",void 0),(0,o.gn)([(0,a.fI)({type:Boolean,default:!1})],oe.prototype,"disabled",void 0),(0,o.gn)([(0,a.y1)()],oe.prototype,"onSelect",null),oe=(0,o.gn)([a.wA],oe);var ae=oe,ue=ae,le=(0,h.Z)(ue,ie,se,!1,null,"c3654e36",null),ce=le.exports,de=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"counters"},e._l(e.counters,(function(n){return t("button",{key:n.number,class:n.classes,attrs:{"aria-label":`${n.number} has ${n.count} placements`,type:"button"},on:{mouseenter:()=>e.highlight(n.number),mouseleave:()=>e.highlight(-1),click:()=>e.selected(n.number)}},[t("div",{staticClass:"counter__number",attrs:{"aria-hidden":"true"}},[e._v(e._s(n.number))]),t("div",{staticClass:"counter__count",attrs:{"aria-hidden":"true"}},[e._v(e._s(n.count))])])})),0)},fe=[];let he=class extends a.w3{get counters(){const e=Object.values(this.items);return Array(9).fill(null).map(((t,n)=>{const r=n+1,i=e.filter((e=>Number(e)===r)).length;return{number:r,count:i,classes:(0,I.Z)("counter",9===i&&"counter--complete",i>9&&"counter--overloaded")}}))}highlight(e){}selected(e){}};(0,o.gn)([(0,a.fI)({type:Object,default:()=>({})})],he.prototype,"items",void 0),(0,o.gn)([(0,a.y1)()],he.prototype,"highlight",null),(0,o.gn)([(0,a.y1)()],he.prototype,"selected",null),he=(0,o.gn)([a.wA],he);var pe=he,me=pe,ge=(0,h.Z)(me,de,fe,!1,null,"75366167",null),ve=ge.exports,ye=n(927),be=n(4277),_e=n(1018);function ke(e){0}n(1703);function we(e,t,n){if(-1===e[t].indexOf(n))return e;if(e[t]=e[t].replace(n,""),0===e[t].length)return!1;if(1===e[t].length){const n=e[t];if(!V[t].every((t=>we(e,t,n))))return!1}for(const r of W[t]){const t=r.filter((t=>-1!==e[t].indexOf(n)));if(0===t.length)return!1;if(1===t.length&&!xe(e,t[0],n))return!1}return e}function xe(e,t,n){const r=e[t].replace(n,"");return r.split("").every((n=>we(e,t,n)))?{values:e}:{hasFailure:!0}}function Ce(e){const t=R.reduce(((e,t)=>(e[t]=M,e)),{}),n=e;for(const r in n){if(!n.hasOwnProperty(r))continue;const e=n[r],i=xe(t,r,e);if(i.hasFailure)return{hasFailure:!0}}return{values:t}}function Se(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}function qe(e,t){if(t=t||{},t.chooseDigit=t.chooseDigit||"random",!e.values)return{hasFailure:!0};const n=e.values;if(R.every((e=>1===n[e].length)))return{values:n};const r=R.filter((e=>n[e].length>1)).sort(((e,t)=>n[e].length!==n[t].length?n[e].length-n[t].length:e<t?-1:1)),i=r[0];let s=n[i].split("");"max"===t.chooseDigit?s.reverse():"random"===t.chooseDigit&&(s=Se(s));const o=s.length;for(let a=0;a<o;a++){const e=s[a],r=qe(xe(n,i,e),t);if(r.values)return{values:r.values}}return{hasFailure:!0}}function Ne(e,t){const n=qe(Ce(e),t);if(!n.values)throw new Error("Unable to solve grid.");return n.values}function Fe(e){switch(e){case _e.a.easy:return 35;case _e.a.medium:return 28;case _e.a.hard:default:return 20}}function Ie(e){for(const t in e)if(e[t].length>1)return!1;return!0}function Ae(e){const t=Ce(e);return!!t.values&&Ie(t.values)}function Te(e){const t=e,n=Ne(t,{chooseDigit:"min"}),r=Ne(t,{chooseDigit:"max"});for(const i in n)if(r[i]!==n[i])return!1;return!0}function Be(e){const t=(new Date).getTime(),n=Fe(e||_e.a.easy),r=Ne({}),i={...r},s=Se(R);let o=s.length;for(const u of s)if(delete i[u],o--,Ae(i)&&Te(i)||(i[u]=r[u],o++),o===n)break;const a=(new Date).getTime()-t;return ke("Generated puzzle with "+Object.keys(i).length+" squares in "+a+"ms"),i}function je(e,t){return Object.keys(e).map((n=>e[n]!==t[n]&&t[n]?n:"")).filter((e=>!!e))}function Oe(e,t){const n=[];for(const i in t){if(!t.hasOwnProperty(i))continue;const e=t[i]+"";if(e&&!(e.length>1))for(const r of W[i])for(const s of r){const o=t[s]+"";s!==i&&e===o&&n.push({unit:r,errorFields:[i,s]})}}const r=je(e,t);return{errors:n,mistakes:r}}let Pe=class extends a.w3{constructor(){super(...arguments),this.initialGrid={},this.grid={},this.solution={},this.difficulty=_e.a.easy,this.inGame=!1,this.timeElapsed="00m 00s",this.userFeedback="Let's play sudoku!",this.errors=[],this.mistakes=[],this.highlightNumber=-1,this.unsubTimer=()=>0}get difficultyOptions(){return Object.values(_e.a).map((e=>({value:e,text:e})))}mounted(){const e=be.Z.get();this.difficulty=e.difficulty}onDifficultySelection(e){const{value:t}=e,n=t;this.difficulty=n,be.Z.set({difficulty:n})}handleBoardUpdate(e){this.$set(this.grid,e.square,e.value)}onNewGame(){const e=Be(this.difficulty);this.timeElapsed="00m 00s",this.userFeedback="",this.initialGrid={...e},this.grid={...e},this.solution=Ne({...e}),this.inGame=!0,this.unsubTimer=ye.Z.subscribe((e=>this.timeElapsed=e))}setHighlightNumber(e){this.highlightNumber=e}onCounterSelect(e){const t=B.getPreviousFocus();if(void 0===t)return;const n=this.initialGrid[t];n||this.handleBoardUpdate({square:t,value:`${e}`}),this.$nextTick((()=>{var e;return null===(e=document.getElementById(t))||void 0===e?void 0:e.focus()}))}onSubmit(){const e={...this.solution},t={...this.grid},{errors:n,mistakes:r}=Oe(e,t),i=r.length;if(n.length)return this.errors=[...n],void(this.userFeedback="You've broken the rules!");if(this.errors=[],i){const e=1!==i?"s":"";return this.mistakes=[...r],void(this.userFeedback=`There appear to be ${i} mistake${e}.`)}this.mistakes=[];const s=Object.keys(e).every((n=>e[n]===t[n]));if(s)this.completedGame();else{const e=R.filter((e=>!t[e])).length;this.userFeedback=`No conflicts found. ${e} squares left.`}}completedGame(){const e=this.unsubTimer();this.userFeedback=`You've completed the puzzle!\n      Completed in ${ye.Z.formatTime(e)}`,this.inGame=!1;const t=be.Z.get();be.Z.set({history:[...t.history,{datetime:(new Date).getTime(),timeElapsed:e,difficulty:this.difficulty}]})}};Pe=(0,o.gn)([(0,a.wA)({components:{Sudoku:ne,Button:re.Z,SelectBox:ce,Counters:ve}})],Pe);var Ee=Pe,Ze=Ee,De=(0,h.Z)(Ze,x,C,!1,null,"f8e60d7a",null),Ge=De.exports;r.ZP.use(w.ZP);const $e=new w.ZP({mode:"history",base:"/sticky-fingers/",routes:[{path:"/",name:"home",component:Ge},{path:"/history",name:"history",component:()=>n.e(908).then(n.bind(n,6422))}]}),Ue=new Map([["default","Sticky Fingers"],["home","Sudoku"],["history","Game history"]]);$e.afterEach((e=>{const t=Ue.get(e.name||"");window.document.title=t?`${t} | Sticky Fingers`:Ue.get("default")}));var ze=$e,He=n(5205);(0,He.z)("/sticky-fingers/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r.ZP.config.productionTip=!1,new r.ZP({router:ze,render:e=>e(k)}).$mount("#app")},1018:function(e,t,n){var r;n.d(t,{a:function(){return r}}),function(e){e["easy"]="Easy",e["medium"]="Medium",e["hard"]="Hard"}(r||(r={}))},927:function(e,t,n){var r=n(4739);class i{constructor(){this.interval=0,this.paused=!0,this.gameTime=0,this.callback=()=>null}get time(){return this.formatTime(this.gameTime)}get isPaused(){return this.paused}formatTime(e){const t=Math.floor(e/60),n=e%60;return`${(0,r["default"])(t,2)}m ${(0,r["default"])(n,2)}s`}subscribe(e){return this.callback=e,this.reset(),this.start(),()=>{const e=this.gameTime;return this.callback=()=>null,this.reset(),e}}start(){this.paused=!1,clearInterval(this.interval),this.interval=window.setInterval((()=>{this.gameTime+=1,this.callback(this.time)}),1e3)}stop(){this.paused=!0,clearInterval(this.interval)}reset(){this.stop(),this.gameTime=0}}t["Z"]=new i},5147:function(e,t,n){function r(...e){return e.filter((e=>!!e)).join(" ")}n.d(t,{Z:function(){return r}})},4277:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(5518),i=n(1018);const s=new r.Z("skfOptions",{difficulty:i.a.easy,history:[]})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],s=e[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,i,s]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/history.a5d82a17.js"}}(),function(){n.miniCssF=function(e){return"css/history.a04d6a0a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sticky-fingers:";n.l=function(r,i,s,o){if(e[r])e[r].push(i);else{var a,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+s),a.src=r),e[r]=[i];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/sticky-fingers/"}(),function(){var e=function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(s){if(i.onerror=i.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=a,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=s,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],s=i.getAttribute("data-href");if(s===e||s===t)return i}},r=function(r){return new Promise((function(i,s){var o=n.miniCssF(r),a=n.p+o;if(t(o,a))return i();e(r,a,i,s)}))},i={143:0};n.f.miniCss=function(e,t){var n={908:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var s=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=s);var o=n.p+n.u(t),a=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,i[1](a)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,o=r[0],a=r[1],u=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(t&&t(r);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},r=self["webpackChunksticky_fingers"]=self["webpackChunksticky_fingers"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1544)}));r=n.O(r)})();
//# sourceMappingURL=app.4407f9dd.js.map
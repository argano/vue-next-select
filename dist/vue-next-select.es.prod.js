import{ref as e,onMounted as l,openBlock as a,createBlock as n,renderSlot as t,createVNode as o,withKeys as u,withModifiers as i,Fragment as s,renderList as d,toDisplayString as c,watch as p,computed as r,resolveComponent as v,createCommentVNode as y,withCtx as m}from"vue";var g={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(a,n){const t=e(null);return l(()=>{a.autofocus&&t.value.focus()}),{handleInput:e=>{n.emit("input",e),n.emit("update:modelValue",e.target.value)},handleChange:e=>{n.emit("change",e),n.emit("update:modelValue",e.target.value)},handleFocus:e=>{n.emit("focus",e)},handleBlur:e=>{n.emit("blur",e)},input:t,handleEscape:e=>{t.value.blur(),n.emit("escape",e)}}}};const h={class:"vue-input"};g.render=function(e,l,s,d,c,p){return a(),n("div",h,[t(e.$slots,"prepend"),o("input",{ref:"input",modelValue:s.modelValue,placeholder:s.placeholder,disabled:s.disabled,onInput:l[1]||(l[1]=(...e)=>d.handleInput(...e)),onChange:l[2]||(l[2]=(...e)=>d.handleChange(...e)),onFocus:l[3]||(l[3]=(...e)=>d.handleFocus(...e)),onBlur:l[4]||(l[4]=(...e)=>d.handleBlur(...e)),onKeyup:l[5]||(l[5]=u(i((...e)=>d.handleEscape(...e),["exact"]),["esc"])),tabindex:s.tabindex,autofocus:s.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),t(e.$slots,"append")])},g.__file="src/components/input.vue";var b={name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected)}},emits:["click"],setup:(e,l)=>({handleClick:(e,a)=>{l.emit("click",e,a)}})};b.render=function(e,l,u,p,r,v){return a(),n("ul",{class:"vue-tags",onMousedown:l[1]||(l[1]=i(()=>{},["prevent"]))},[(a(!0),n(s,null,d(u.modelValue,l=>(a(),n("li",{key:l.key,onClick:e=>p.handleClick(e,l),class:["vue-tag",{selected:l.selected}]},[t(e.$slots,"default",{option:l},()=>[o("span",null,c(l.label),1)])],10,["onClick"]))),128))],32)},b.__file="src/components/tag.vue";var f={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected)}},emits:["click"],setup:(e,l)=>({handleClick:(e,a)=>{l.emit("click",e,a)}})};f.render=function(e,l,u,p,r,v){return a(),n("ul",{class:"vue-dropdown",onMousedown:l[1]||(l[1]=i(()=>{},["prevent"]))},[(a(!0),n(s,null,d(u.modelValue,l=>(a(),n("li",{key:l.key,onClick:e=>p.handleClick(e,l),class:["vue-dropdown-item",{selected:l.selected}]},[t(e.$slots,"default",{option:l},()=>[o("span",null,c(l.label),1)])],10,["onClick"]))),128))],32)},f.__file="src/components/dropdown.vue";const I=(e,l,{valueBy:a})=>a(e)===a(l),B=(e,l,{valueBy:a})=>void 0!==e.find(e=>I(e,l,{valueBy:a})),M=(e,l,{valueBy:a})=>e.find(e=>a(e)===l),w=(e,l,{max:a,valueBy:n})=>B(e,l,{valueBy:n})||e.length+1>a?e:e.concat(l),k=(e,l,{min:a,valueBy:n})=>!1===B(e,l,{valueBy:n})||e.length-1<a?e:e.filter(e=>!1===I(e,l,{valueBy:n}));var V={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:Array},allowEmpty:{default:!1,type:Boolean},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean}},emits:["update:modelValue","select","remove","open","close","search-input","search-change","focus","blur"],setup(l,a){const{trackBy:n,labelBy:t,valueBy:o,min:u,max:i}=(e=>({trackBy:"function"==typeof e.trackBy?e.trackBy:"string"==typeof e.trackBy?l=>e.trackBy.split(".").reduce((e,l)=>e[l],l):e=>e,labelBy:"function"==typeof e.labelBy?e.labelBy:"string"==typeof e.labelBy?l=>e.labelBy.split(".").reduce((e,l)=>e[l],l):e=>e,valueBy:"function"==typeof e.valueBy?e.valueBy:"string"==typeof e.valueBy?l=>e.valueBy.split(".").reduce((e,l)=>e[l],l):e=>e,min:e.multiple?e.min:e.allowEmpty?0:1,max:e.multiple?e.max:1}))(l),s=e(null),d=e(null),c=e(!1);p(()=>c.value,()=>{c.value?(a.emit("open"),l.searchable&&a.emit("focus"),d.value&&d.value._.refs.input!==document.activeElement&&d.value._.refs.input.focus()):(d.value&&d.value._.refs.input===document.activeElement&&d.value._.refs.input.blur(),l.searchable&&a.emit("blur"),a.emit("close"))});const v=()=>{l.disabled||(c.value=!0)},y=e=>{c.value=!1},m=e(""),g=e([]);if(l.multiple)l.modelValue.forEach(e=>{const a=M(l.options,e,{valueBy:o});g.value=w(g.value,a,{max:1/0,valueBy:o})});else if(null!==l.modelValue){const e=M(l.options,l.modelValue,{valueBy:o});g.value=w(g.value,e,{max:1/0,valueBy:o})}const h=(e,n)=>{if(!l.disabled){if(n=n.originalOption,B(g.value,n,{valueBy:o}))g.value=k(g.value,n,{min:u,valueBy:o}),a.emit("remove",n);else{if(!l.multiple){const e=g.value[0];g.value=k(g.value,g.value[0],{min:0,valueBy:o}),a.emit("remove",e)}g.value=w(g.value,n,{max:i,valueBy:o}),a.emit("select",n)}!0===l.closeOnSelect&&(c.value=!1)}};p(()=>g,()=>{const e=g.value.map(e=>o(e));l.multiple?a.emit("update:modelValue",e):e.length?a.emit("update:modelValue",e[0]):a.emit("update:modelValue",null)},{deep:!0});const b=r(()=>{const e=new Set(g.value.map(e=>o(e)));return(l.visibleOptions||l.options).filter(a=>!l.hideSelected||!1===e.has(o(a))).map(l=>({key:n(l),label:t(l),selected:e.has(o(l)),originalOption:l}))}),f=r(()=>{const e=new Set(g.value.map(e=>o(e)));return l.options.map(l=>({key:n(l),label:t(l),selected:e.has(o(l)),originalOption:l}))});return p(()=>l.options,()=>{const e=new Set(g.value.map(e=>e.value));g.value=l.options.filter(l=>e.has(o(l)))},{deep:!0}),{isFocusing:c,wrapper:s,input:d,focus:v,blur:y,toggle:e=>{c.value=!c.value},searchingInputValue:m,handleInputForInput:e=>{a.emit("search-input",e)},handleChangeForInput:e=>{a.emit("search-change",e)},handleFocusForInput:e=>{v()},handleBlurForInput:e=>{y()},handleClickForDropdown:(e,l)=>h(0,l),handleClickForTag:(e,l)=>h(0,l),dropdownSelectedOptions:b,tagSelectedOptions:f,addOrRemoveOption:h}},components:{VInput:g,VTag:b,VDropdown:f}};const x={class:"vue-select-header"},D={key:0,class:"vue-input"},F={key:1,class:"icon loading"},N=o("div",null,null,-1),O=o("div",null,null,-1),C=o("div",null,null,-1),S={key:0,class:"icon loading"},T=o("div",null,null,-1),A=o("div",null,null,-1),E=o("div",null,null,-1);V.render=function(e,l,u,d,p,r){const g=v("v-tag"),h=v("v-input"),b=v("v-dropdown");return a(),n("div",{ref:"wrapper",class:["vue-select",{disabled:u.disabled}],tabindex:d.isFocusing?-1:u.tabindex,onFocus:l[8]||(l[8]=(...e)=>d.focus(...e)),onBlur:l[9]||(l[9]=()=>!u.searchable&&d.blur())},[o("div",x,[u.multiple&&u.taggable&&0===u.modelValue.length||!1===u.searchable&&!1===u.taggable?(a(),n("div",D,[o("input",{placeholder:u.placeholder,disabled:""},null,8,["placeholder"])])):y("v-if",!0),u.multiple&&u.taggable?(a(),n(s,{key:1},[o(g,{modelValue:d.tagSelectedOptions,class:["vue-select-tag",{collapsed:u.collapseTags}]},{default:m(({option:l})=>[t(e.$slots,"tag",{option:l.originalOption},()=>[o("span",null,c(l.label),1),o("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:()=>d.addOrRemoveOption(e.$event,l)},null,8,["onClick"])])]),_:1},8,["modelValue","class"]),o("span",{class:["icon arrow-downward",{active:d.isFocusing}],onClick:l[1]||(l[1]=(...e)=>d.toggle(...e)),onMousedown:l[2]||(l[2]=i(()=>{},["prevent","stop"]))},null,34)],64)):(a(),n(s,{key:2},[u.searchable?(a(),n(h,{key:0,ref:"input",modelValue:d.searchingInputValue,"onUpdate:modelValue":l[3]||(l[3]=e=>d.searchingInputValue=e),disabled:u.disabled,placeholder:u.searchPlaceholder,onInput:d.handleInputForInput,onChange:d.handleChangeForInput,onFocus:d.handleFocusForInput,onBlur:d.handleBlurForInput,onEscape:d.blur,autofocus:u.autofocus||u.taggable&&d.isFocusing,tabindex:u.tabindex,class:"vue-select-input"},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):y("v-if",!0),u.loading?(a(),n("span",F,[N,O,C])):(a(),n("span",{key:2,class:["icon arrow-downward",{active:d.isFocusing}],onClick:l[4]||(l[4]=(...e)=>d.toggle(...e)),onMousedown:l[5]||(l[5]=i(()=>{},["prevent","stop"]))},null,34))],64))]),d.isFocusing?(a(),n(s,{key:0},[u.multiple&&u.taggable&&u.searchable?(a(),n(h,{key:0,ref:"input",modelValue:d.searchingInputValue,"onUpdate:modelValue":l[6]||(l[6]=e=>d.searchingInputValue=e),disabled:u.disabled,placeholder:u.searchPlaceholder,onInput:d.handleInputForInput,onChange:d.handleChangeForInput,onFocus:d.handleFocusForInput,onBlur:d.handleBlurForInput,onEscape:d.blur,tabindex:u.tabindex,autofocus:u.autofocus||u.taggable&&d.isFocusing,class:"vue-select-input"},{append:m(()=>[u.loading?(a(),n("span",S,[T,A,E])):y("v-if",!0)]),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])):y("v-if",!0),o(b,{modelValue:d.dropdownSelectedOptions,"onUpdate:modelValue":l[7]||(l[7]=e=>d.dropdownSelectedOptions=e),onClick:d.handleClickForDropdown,class:"vue-select-dropdown"},{default:m(({option:l})=>[t(e.$slots,"dropdown-item",{option:l.originalOption},()=>[o("span",null,c(l.label),1)])]),_:1},8,["modelValue","onClick"])],64)):y("v-if",!0)],42,["tabindex"])},V.__file="src/index.vue";export default V;

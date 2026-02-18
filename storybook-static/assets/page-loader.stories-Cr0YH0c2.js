import{d as _,o as d,c as f,e as v,u as L,a as h,f as r,g as x,T as S}from"./vue.esm-bundler-BGEEW7yc.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={key:0,class:"page-loader","aria-hidden":"true"},B=_({__name:"page-loader",setup(P){const t=ref(!0),o=()=>{setTimeout(()=>{t.value=!1},150)};return onMounted(()=>{document.readyState==="complete"?o():window.addEventListener("load",o);const s=setTimeout(()=>{t.value=!1},5e3);onBeforeUnmount(()=>{window.removeEventListener("load",o),clearTimeout(s)})}),(s,n)=>(d(),f(S,{name:"page-loader-fade"},{default:v(()=>[L(t)?(d(),h("div",y,[...n[0]||(n[0]=[r("div",{class:"page-loader__content"},[r("div",{class:"page-loader__spinner"}),r("span",{class:"page-loader__text"},"Загрузка")],-1)])])):x("",!0)]),_:1}))}}),g=w(B,[["__scopeId","data-v-6c33ba2e"]]),E={title:"Shared/UI/PageLoader",component:g,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{}},a={render:()=>({components:{PageLoader:g},template:`
      <div style="position: relative; height: 400px; border: 1px dashed #ccc;">
        <PageLoader />
      </div>
    `})};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PageLoader
    },
    template: \`
      <div style="position: relative; height: 400px; border: 1px dashed #ccc;">
        <PageLoader />
      </div>
    \`
  })
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const b=["Default","LoadingState"];export{e as Default,a as LoadingState,b as __namedExportsOrder,E as default};

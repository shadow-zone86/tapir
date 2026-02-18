import{d as E,c as I,n as u,a as p,r as c,b as N,o as l,e as V}from"./vue.esm-bundler-BGEEW7yc.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z=["href"],T=["type"],U=E({__name:"button",props:{variant:{default:"primary"},type:{default:"button"},to:{},href:{}},emits:["click"],setup(t){return(n,m)=>{const L=N("NuxtLink");return t.to?(l(),I(L,{key:0,to:t.to,class:u(["button",`button--${t.variant}`])},{default:V(()=>[c(n.$slots,"default",{},void 0,!0)]),_:3},8,["to","class"])):t.href?(l(),p("a",{key:1,href:t.href,class:u(["button",`button--${t.variant}`])},[c(n.$slots,"default",{},void 0,!0)],10,z)):(l(),p("button",{key:2,type:t.type,class:u(["button",`button--${t.variant}`]),onClick:m[0]||(m[0]=P=>n.$emit("click",P))},[c(n.$slots,"default",{},void 0,!0)],10,T))}}}),e=w(U,[["__scopeId","data-v-5b2f6cb4"]]),D={title:"Shared/UI/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","outline"]},type:{control:"select",options:["button","submit","reset"]},to:{control:"text"},href:{control:"text"}}},r={args:{variant:"primary"},render:t=>({components:{Button:e},setup:()=>({args:t}),template:'<Button v-bind="args">Кнопка</Button>'})},a={args:{variant:"outline"},render:t=>({components:{Button:e},setup:()=>({args:t}),template:'<Button v-bind="args">Кнопка</Button>'})},o={args:{variant:"primary",to:"/catalog"},render:t=>({components:{Button:e},setup:()=>({args:t}),template:'<Button v-bind="args">В каталог</Button>'})},s={args:{variant:"outline",href:"https://example.com"},render:t=>({components:{Button:e},setup:()=>({args:t}),template:'<Button v-bind="args">Ссылка</Button>'})},i={render:()=>({components:{Button:e},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <div>
          <Button variant="primary" to="/catalog">В каталог</Button>
        </div>
        <div>
          <Button variant="outline">С обработчиком</Button>
        </div>
      </div>
    `})};var d,v,B;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Кнопка</Button>'
  })
}`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Кнопка</Button>'
  })
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    to: '/catalog'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">В каталог</Button>'
  })
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,A,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    href: 'https://example.com'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Ссылка</Button>'
  })
}`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var $,C,O;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <div>
          <Button variant="primary" to="/catalog">В каталог</Button>
        </div>
        <div>
          <Button variant="outline">С обработчиком</Button>
        </div>
      </div>
    \`
  })
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const F=["Primary","Outline","AsLink","AsAnchor","AllVariants"];export{i as AllVariants,s as AsAnchor,o as AsLink,a as Outline,r as Primary,F as __namedExportsOrder,D as default};

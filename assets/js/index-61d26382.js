import{a as e,j as a,D as s,F as o,S as u,G as t,am as h,B as l,an as p}from"./index-a62f48fe.js";const g=()=>e("div",{className:"card content-box",children:a(s,{name:"dynamic_form_nest_item",onFinish:n=>{},autoComplete:"off",children:[e(s.List,{name:"users",children:(n,{add:m,remove:d})=>a(o,{children:[n.map(({key:c,name:i,...r})=>a(u,{style:{display:"flex",marginBottom:8},align:"baseline",children:[e(s.Item,{...r,name:[i,"first"],rules:[{required:!0,message:"Missing first name"}],children:e(t,{placeholder:"First Name"})}),e(s.Item,{...r,name:[i,"last"],rules:[{required:!0,message:"Missing last name"}],children:e(t,{placeholder:"Last Name"})}),e(h,{onClick:()=>d(i)})]},c)),e(s.Item,{children:e(l,{type:"dashed",onClick:()=>m(),block:!0,icon:e(p,{}),children:"Add field"})})]})}),e(s.Item,{children:e(l,{type:"primary",htmlType:"submit",children:"Submit"})})]})});export{g as default};

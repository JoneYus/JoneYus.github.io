import{u as t}from"./useEcharts-6a3d2048.js";import{a as n}from"./index-a62f48fe.js";const m=()=>{let e={title:{text:"Basic Radar Chart",textStyle:{color:"#a1a1a1"}},legend:{data:["Allocated Budget","Actual Spending"],textStyle:{color:"#a1a1a1"}},radar:{indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Technology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}]},series:[{name:"Budget vs spending",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"Actual Spending"}]}]};const[a]=t(e);return n("div",{ref:a,className:"card content-box"})};export{m as default};

import{d as g,r as T,B as h,o,c as m,k as v,f as _,b as d,z as y,F as S,ag as b,i as C,l as p,g as D,h as B,m as P,q as I,s as N,e}from"../modules/vue-Cf4XnK-O.js";import{a as F,aa as $}from"../index-rdwDz_Gq.js";import{_ as M}from"./title-renderer.md_vue_type_script_setup_true_lang-CXeEkJ7V.js";import{u as A,f as z}from"./context-BzNN74_T.js";import{_ as E}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C3i0MhIa.js";import{I as H}from"./default-BThVA8IS.js";import"../modules/shiki-DBXA-YK4.js";import"../modules/unplugin-icons-nQZdasAd.js";const V=["href","innerHTML"],O=["href"],R=g({__name:"Link",props:{to:{},title:{}},setup(u){const{isPrintMode:n}=F();return(i,r)=>{const l=T("RouterLink");return!h(n)&&i.title?(o(),m(l,{key:0,to:String(i.to),onClick:r[0]||(r[0]=c=>c.target.blur()),innerHTML:i.title},null,8,["to","innerHTML"])):!h(n)&&!i.title?(o(),m(l,{key:1,to:String(i.to),onClick:r[1]||(r[1]=c=>c.target.blur())},{default:v(()=>[_(i.$slots,"default")]),_:3},8,["to"])):h(n)&&i.title?(o(),d("a",{key:2,href:`#${i.to}`,innerHTML:i.title},null,8,V)):(o(),d("a",{key:3,href:`#${i.to}`},[_(i.$slots,"default")],8,O))}}}),j=["start"],q=g({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(u){const n=u,i=y(()=>[...$(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),r=y(()=>[...$(n.listStyle||[])]);return(l,c)=>{const k=R,s=T("TocList",!0);return l.list&&l.list.length>0?(o(),d("ol",{key:0,class:C(i.value),start:l.level===1?l.start:void 0,style:B(r.value.length>=l.level?`list-style:${r.value[l.level-1]}`:void 0)},[(o(!0),d(S,null,b(l.list,t=>(o(),d("li",{key:t.path,class:C(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[p(k,{to:t.path},{default:v(()=>[p(h(M),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(o(),m(s,{key:0,level:l.level+1,"list-style":l.listStyle,list:t.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):D("",!0)],2))),128))],14,j)):D("",!0)}}}),w=g({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(u){const n=u,{$slidev:i}=A();function r(s,t=1){if(t>Number(n.maxDepth))return[];if(t<Number(n.minDepth)){const a=s.find(f=>f.active||f.activeParent);return a?r(a.children,t+1):[]}return s.map(a=>({...a,children:r(a.children,t+1)}))}function l(s){return s.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:l(t.children)}))}function c(s){const t=s.some(a=>a.active||a.activeParent||a.hasActiveParent);return s.filter(()=>t).map(a=>({...a,children:c(a.children)}))}const k=y(()=>{const s=i==null?void 0:i.nav.tocTree;if(!s)return[];let t=r(s);return n.mode==="onlyCurrentTree"?t=l(t):n.mode==="onlySiblings"&&(t=c(t)),t});return(s,t)=>{const a=q;return o(),d("div",{class:"slidev-toc",style:B(`column-count:${s.columns}`)},[p(a,{level:1,start:s.start,"list-style":s.listStyle,list:k.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),W=e("h1",null,"Table of contents",-1),Y=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," minDepth"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," maxDepth"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"></"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),G={__name:"slides.md__slidev_3",setup(u){const{$slidev:n,$nav:i,$clicksContext:r,$clicks:l,$page:c,$renderContext:k,$frontmatter:s}=A();return r.setup(),(t,a)=>{const f=E,L=w;return o(),m(H,I(N(h(z)(h(s),2))),{default:v(()=>[W,p(f,P({},{ranges:[]}),{default:v(()=>[Y]),_:1},16),p(L,{maxDepth:"1"})]),_:1},16)}}},st=G;export{st as default};
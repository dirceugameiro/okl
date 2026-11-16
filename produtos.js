/* Catálogo e configurações da loja.
   Para exibir preço e habilitar pagamento Pix de uma roupa, troque p:null pelo preço (ex.: p:89.9). */
const WHATSAPP = "5567999999999"; // DDI + DDD + número, só dígitos
const LOJA = "Outlet 150BPM";
const FRETE_POR_REGIAO = { Norte: 50, Nordeste: 70, "Centro-Oeste": 30, Sudeste: 50, Sul: 70 };
const REGIAO_POR_UF = {
  AC:"Norte", AP:"Norte", AM:"Norte", PA:"Norte", RO:"Norte", RR:"Norte", TO:"Norte",
  AL:"Nordeste", BA:"Nordeste", CE:"Nordeste", MA:"Nordeste", PB:"Nordeste", PE:"Nordeste", PI:"Nordeste", RN:"Nordeste", SE:"Nordeste",
  DF:"Centro-Oeste", GO:"Centro-Oeste", MT:"Centro-Oeste", MS:"Centro-Oeste",
  ES:"Sudeste", MG:"Sudeste", RJ:"Sudeste", SP:"Sudeste",
  PR:"Sul", RS:"Sul", SC:"Sul"
};
const PRODUTOS = [
  {id:1,n:"Holbrook",c:"Rua",p:389,o:799,t:"Padrão pra quem gosta de ser classico e discreto!",img:"oakley_holbrook_oo9102l_0255_2671_1_22f2bf24c8e704dd2300e256921dca6d-removebg-preview.png",l:[["Prizm Ruby","#ff2d9b","#6a2cff"],["Preta Iridium","#2a1f45","#1ff2e0"],["Prizm Jade","#1ff2e0","#2b8a6e"]]},
  {id:2,n:"Frogskins",c:"Rua",p:349,o:690,t:"Anos 80 pra pista",img:"images-removebg-preview.png",l:[["Prizm Road","#ffd23f","#ff2d9b"],["Cinza","#444","#9b8fc0"]]},
  {id:3,n:"Radar EV Path",c:"Esporte",p:499,o:990,t:"Que é pra ver até o futuro, ou desver o que não existe",img:"images-removebg-preview (1).png",l:[["Prizm Trail","#ffd23f","#ff7a2d"],["Prizm Road","#1ff2e0","#6a2cff"],["Preta","#222","#6a2cff"]]},
  {id:4,n:"Flak 2.0 XL",c:"Esporte",p:459,o:899,t:"Flak é flak, dispensa apresentações",img:"279285-removebg-preview.png",l:[["Prizm Sapphire","#1ff2e0","#2d4bff"],["Prizm Ruby","#ff2d9b","#ff7a2d"]]},
  {id:5,n:"Gascan",c:"Rua",p:329,o:650,t:"E no pulso blade 2",img:"oculos-oakley-gascan-9014-8160-5241154539_otimized-removebg-preview.png",l:[["Preta Iridium","#2a1f45","#ff2d9b"],["Prizm Jade","#1ff2e0","#2b8a6e"]]},
  {id:6,n:"Jawbreaker",c:"Esporte",p:699,o:1390,t:"Pra quem tem personalidade e não se oprime!",img:"oculos_oakley_jawbreaker_prizm_trail_torch_pto_fos_993_1_5e2f02beb2624d628ce19fce604bde36-removebg-preview.png",l:[["Prizm Road","#ffd23f","#ff2d9b"],["Prizm Sapphire","#1ff2e0","#6a2cff"]]},
  {id:7,n:"Camiseta Oversized 150BPM",kind:"shirt",img:"20260513191658-4daaf387-ef1d-45d2-a470-1e4c076f3706-removebg-preview.png",color:"#6a2cff",t:"Modelagem ampla para curtir até o amanhecer.",p:null,l:["P","M","G","GG"].map(s=>[s])},
  {id:8,n:"Camiseta Essential",kind:"shirt",img:"347594-removebg-preview.png",color:"#1f1b2b",t:"Visual versátil para a pista e para o dia a dia.",p:null,l:["P","M","G","GG"].map(s=>[s])},
  {id:9,n:"Bermuda Tactel 150BPM",kind:"shorts",img:"photoroom_20240601_145757-249fb2b6d93d6f782817202962031787-480-0-removebg-preview.png",color:"#ff2d9b",t:"Leve e pronta para acompanhar o grave.",p:null,l:["P","M","G","GG"].map(s=>[s])},
  {id:10,n:"Bermuda Essential",kind:"shorts",img:"images-removebg-preview (2).png",color:"#24202e",t:"Conforto no corre, sem complicação.",p:null,l:["P","M","G","GG"].map(s=>[s])}
];

if(typeof module!=='undefined')module.exports={PRODUTOS,LOJA,WHATSAPP,FRETE_POR_REGIAO,REGIAO_POR_UF};

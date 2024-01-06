(function(){"use strict";var e={4016:function(e,t,a){var n=a(3396);const o={class:"app-header"};function r(e,t,a,r,i,s){const l=(0,n.up)("TwoMinuteHeroes"),c=(0,n.up)("GKHome");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[(0,n._)("div",{onClick:t[0]||(t[0]=e=>s.changePage("home"))},"Home"),(0,n._)("div",{onClick:t[1]||(t[1]=e=>s.changePage("two-minute-heroes"))},"Two Minute Heroes")]),s.tmh?((0,n.wg)(),(0,n.j4)(l,{key:0})):s.home?((0,n.wg)(),(0,n.j4)(c,{key:1})):(0,n.kq)("",!0)],64)}a(8858),a(1318),a(3228);var i=a(7139);const s=e=>((0,n.dD)("data-v-437a0b78"),e=e(),(0,n.Cn)(),e),l={class:"tmh"},c=s((()=>(0,n._)("div",null,"Welcome to 2 Minute Heroes",-1))),u={key:0},h={key:1},d={key:2},m={key:3,class:"tmh-char"},g={key:0,class:"tmh-error"},f={key:1,class:"tmh-error"},p={key:2,class:"tmh-error"},v={key:3},y=s((()=>(0,n._)("div",{class:"tmh-future"},[(0,n._)("div",{class:"tmh-future-title"},"Future Enhancements"),(0,n._)("div",null,"Quirks/Traits/Bonds/Flaws"),(0,n._)("div",null,"Sizes/Heights/Weights/Traits/Color")],-1)));function b(e,t,a,o,r,s){const b=(0,n.up)("StdButton"),S=(0,n.up)("TMHSources"),w=(0,n.up)("TMHGenMethod"),C=(0,n.up)("CharacterViewer");return(0,n.wg)(),(0,n.iD)("div",l,[c,(0,n._)("div",null,[r.pageNum>0?((0,n.wg)(),(0,n.j4)(b,{key:0,text:"Back",onClick:s.prevPage},null,8,["onClick"])):(0,n.kq)("",!0)]),0===r.pageNum?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(S,{"user-sources":r.cSources,onSaved:s.filterSources},null,8,["user-sources","onSaved"])])):1===r.pageNum?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(w,{choice:r.method,max:r.maxRoll,min:r.minRoll,onChanged:s.changedMethod,onSaved:s.savedMethod},null,8,["choice","max","min","onChanged","onSaved"])])):2===r.pageNum?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(C,{char:r.character},null,8,["char"])])):((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(b,{buttonStyle:"primary",text:"Create",onClick:s.randomCharacter},null,8,["onClick"]),r.errMsg?((0,n.wg)(),(0,n.iD)("div",g,(0,i.zw)(r.errMsg),1)):(0,n.kq)("",!0),r.raceErrMsg?((0,n.wg)(),(0,n.iD)("div",f,(0,i.zw)(r.raceErrMsg),1)):(0,n.kq)("",!0),r.classErrMsg?((0,n.wg)(),(0,n.iD)("div",p,(0,i.zw)(r.classErrMsg),1)):(0,n.kq)("",!0),r.loading?((0,n.wg)(),(0,n.iD)("div",v,"Loading")):(0,n.kq)("",!0),y]))])}a(560);function S(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(s.classes)},(0,i.zw)(a.text),3)}var w={name:"StdButton",data(){return{}},props:{buttonStyle:String,text:{type:String,required:!0}},created(){},methods:{},computed:{classes(){let e={button:!0};return this.buttonStyle?e["button-"+this.buttonStyle]=!0:e["button-primary"]=!0,e}}},C=a(89);const M=(0,C.Z)(w,[["render",S],["__scopeId","data-v-5a8059ac"]]);var x=M;const k="Basic Rules",R="Monsters of the Multiverse",D="Spelljammer",_="Dragonlance",T="Strixhaven",A="Guide to Ravenloft",W="Mythic Odysseys of Theros",P="Eberron: Rising",B="Acquisitions Incorporated",O="Guide to Ravnica",H="Sword Coast",G="Locathah Rising",E="One Grung Above",I="Tasha's Cauldron of Everything",F=function(){return[{name:"Dragonborn",source:k},{name:"Dwarf",source:k},{name:"Elf",source:k},{name:"Gnome",source:k},{name:"Half-Elf",source:k},{name:"Halfling",source:k},{name:"Half-Orc",source:k},{name:"Human",source:k},{name:"Tiefling",source:k},{name:"Aarakocra",source:R},{name:"Aasimar",source:R},{name:"Air Genasi",source:R},{name:"Centaur",source:R},{name:"Changeling",source:R},{name:"Deep Gnome",source:R},{name:"Duergar",source:R},{name:"Earth Genasi",source:R},{name:"Eladrin",source:R},{name:"Fairy",source:R},{name:"Firbolg",source:R},{name:"Fire Genasi",source:R},{name:"Githyanki",source:R},{name:"Githzerai",source:R},{name:"Goblin",source:R},{name:"Goliath",source:R},{name:"Harengon",source:R},{name:"Hobgoblin",source:R},{name:"Kenku",source:R},{name:"Kobold",source:R},{name:"Lizardfolk",source:R},{name:"Minotaur",source:R},{name:"Orc",source:R},{name:"Satyr",source:R},{name:"Sea Elf",source:R},{name:"Shadar-kai",source:R},{name:"Shifter",source:R},{name:"Tabaxi",source:R},{name:"Tortle",source:R},{name:"Triton",source:R},{name:"Water Genasi",source:R},{name:"Yuan-ti",source:R},{name:"Kender",source:_},{name:"Astral Elf",source:D},{name:"Autognome",source:D},{name:"Giff",source:D},{name:"Hadozee",source:D},{name:"Plasmoid",source:D},{name:"Thri-kreen",source:D},{name:"Owlin",source:T},{name:"Lineages",source:A},{name:"Leonin",source:W},{name:"Kalashtar",source:P},{name:"Warforged",source:P},{name:"Verdan",source:B},{name:"Loxodon",source:O},{name:"Simic Hybrid",source:O},{name:"Vedalken",source:O},{name:"Feral Tiefling",source:H},{name:"Locathah",source:G},{name:"Grung",source:E}]},N=function(){return[{name:"Barbarian",source:k,ability1:"str",ability2:"con",subclasses:["Path of the Ancestral Guardian","Path of the Battlerager","Path of the Beast","Path of the Berserker","Path of the Giant","Path of the Storm Herald","Path of the Totem Warrior","Path of the Zealot","Path of Wild Magic","Path of the Juggernaut"]},{name:"Bard",source:k,ability1:"cha",ability2:"dex",subclasses:["College of Creation","College of Eloquence","College of Lore","College of Spirits","College of Swords","College of Valor","College of Whispers","College of Tragedy"]},{name:"Cleric",source:k,ability1:"wis",ability2:"str",ability3:"con",subclasses:["Arcana Domain","Death Domain","Forge Domain","Knowledge Domain","Life Domain","Light Domain","Nature Domain","Order Domain","Peace Domain","Tempest Domain","Trickery Domain","Twilight Domain","War Domain","Blood Domain","Moon Domain"]},{name:"Druid",source:k,ability1:"wis",ability2:"con",subclasses:["Circle of Dreams","Circle of Spores","Circle of Stars","Circle of the Land","Circle of the Moon","Circle of the Shepherd","Circle of Wildfire","Circle of the Blighted"]},{name:"Fighter",source:k,ability1:"str",ability2:"con",ability3:"dex",subclasses:["Arcane Archer","Battle Master","Cavalier","Champion","Eldritch Knight","Psi Warrior","Purple Dragon Knight","Rune Knight","Samurai","Echo Knight","Gunslinger"]},{name:"Monk",source:k,ability1:"dex",ability2:"wis",subclasses:["Way of Mercy","Way of Shadow","Way of the Ascendant Dragon","Way of the Astral Self","Way of the Drunken Master","Way of the Four Elements","Way of the Kensei","Way of the Long Death","Way of the Open Hand","Way of the Sun Soul","Way of the Cobalt Soul"]},{name:"Paladin",source:k,ability1:"str",ability2:"cha",subclasses:["Oath of Conquest","Oath of Devotion","Oath of Glory","Oath of Redemption","Oath of the Ancients","Oath of the Crown","Oath of the Watchers","Oath of Vengeance","Oath of Conquest","Oathbreaker","Oath of the Open Sea"]},{name:"Ranger",source:k,ability1:"dex",ability2:"wis",subclasses:["Beast Master","Drakewarden","Fey Wanderer","Gloom Stalker","Horizon Walker","Hunter","Monster Slayer","Swarmkeeper"]},{name:"Rogue",source:k,ability1:"dex",ability2:"con",subclasses:["Arcane Trickster","Assassin","Inquisitive","Mastermind","Phantom","Scout","Soulknife","Swashbuckler","Thief"]},{name:"Sorcerer",source:k,ability1:"cha",ability2:"con",subclasses:["Aberrant Mind","Clockwork Soul","Divine Soul","Draconic Bloodline","Lunar Sorcery","Shadow Magic","Storm Sorcery","Wild Magic","Runechild"]},{name:"Warlock",source:k,ability1:"cha",ability2:"con",subclasses:["The Archfey","The Celestial","The Fathomless","The Fiend","The Genie","The Great Old One","The Hexblade","The Undead","The Undying"]},{name:"Wizard",source:k,ability1:"int",ability2:"con",ability3:"dex",subclasses:["Bladesinging","Order of Scribes","School of Abjuration","School of Conjuration","School of Divination","School of Enchantment","School of Evocation","School of Illusion","School of Necromancy","School of Transmutation","War Magic","Blood Magic","Chronurgy Magic","Graviturgy Magic"]},{name:"Artificer",source:I,ability1:"int",ability2:"con",ability3:"dex",subclasses:["Alchemist","Armorer","Artillerist","Battle Smith"]}]},z=function(){return[k,R,D,_,T,A,W,P,B,O,H,G,E,I]};var L={allClasses:N,allSources:z,allRaces:F};function j(e,t){let a;return function(...n){a&&clearTimeout(a);const o=this;a=setTimeout((()=>{e.apply(o,n)}),t)}}function K(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function V(e,t){const a=e.indexOf(t);return a>-1&&e.splice(a,1),e}function q(e,t){let a={str:-1,dex:-1,con:-1,int:-1,wis:-1,cha:-1};if(e.ability1){let n=Math.max(...t);a[e.ability1]=n,t=V(t,n)}if(e.ability2){let n=Math.max(...t);a[e.ability2]=n,t=V(t,n)}if(e.ability3){let n=Math.max(...t);a[e.ability3]=n,t=V(t,n)}for(const[n,o]of Object.entries(a))if(-1===o){let e=Math.max(...t);a[n]=e,t=V(t,e)}return a}var U={debounce:j,randomIntFromInterval:K,asiFromNumbers:q};const Z=e=>((0,n.dD)("data-v-4984e11d"),e=e(),(0,n.Cn)(),e),$={class:"sources"},Y=Z((()=>(0,n._)("div",null,"Pick your Sources",-1))),X=Z((()=>(0,n._)("div",null,"Leave blank for all",-1)));function J(e,t,a,o,r,i){const s=(0,n.up)("StdButton"),l=(0,n.up)("CheckBox");return(0,n.wg)(),(0,n.iD)("div",$,[(0,n.Wm)(s,{text:"Next",onClick:i.saveSources},null,8,["onClick"]),Y,X,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.sources,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"sources-source"},[(0,n.Wm)(l,{text:e,value:r.cSources[e],onChanged:t=>i.toggleSource(e)},null,8,["text","value","onChanged"])])))),128))])}var Q=a(9242);const ee={class:"checkbox-text"};function te(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(s.classes),onClick:t[1]||(t[1]=(...e)=>s.toggle&&s.toggle(...e))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.content=e),type:"checkbox"},null,512),[[Q.e8,r.content]]),(0,n._)("div",ee,(0,i.zw)(a.text),1)],2)}var ae={name:"CheckBox",props:{value:{},showLoading:{},inputStyle:{type:String,description:"UX defined styling of a button",default:"primary",options:["primary","narrow","outline","hidden"]},text:{}},emits:["changed"],created(){this.debouncedFetch=U.debounce((e=>{this.loading=!1,this.$emit("changed",e)}),10)},data(){return{content:this.value,loading:!1}},watch:{content(e,t){this.loading=!0,this.debouncedFetch(e,t)},value(e){this.content=e}},methods:{toggle(){this.content=!this.content}},computed:{classes(){return{checkbox:!0,"checkbox--primary":!this.inputStyle,[`checkbox-${this.inputStyle}`]:this.inputStyle,[`checkbox-${this.inputStyle}`]:this.inputStyle}}}};const ne=(0,C.Z)(ae,[["render",te],["__scopeId","data-v-70d147eb"]]);var oe=ne,re={name:"TMHSources",components:{StdButton:x,CheckBox:oe},props:{userSources:{}},emits:["saved"],data(){return{loading:!1,name:null,cName:null,cRace:null,cClass:null,subClass:null,cAbilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},sources:L.allSources(),cSources:{},showSources:!1,errMsg:null,raceErrMsg:null,classErrMsg:null,pointBuy:"Point Buy",rolled:"Rolled",stdArray:"Standard Array",method:"Standard Array",minRoll:8,maxRoll:18}},created(){this.cSources=this.userSources},methods:{saveSources(){this.$emit("saved",this.cSources)},toggleSource(e){this.sources[e]=!this.sources[e],this.cSources[e]=!this.cSources[e]}}};const ie=(0,C.Z)(re,[["render",J],["__scopeId","data-v-4984e11d"]]);var se=ie;const le=e=>((0,n.dD)("data-v-c8712cbe"),e=e(),(0,n.Cn)(),e),ce={class:"tmh-generation"},ue=le((()=>(0,n._)("div",null,"Pick the Generation Method",-1))),he={class:"tmh-generation-options"},de={key:0,class:"tmh-generation-limits"},me=le((()=>(0,n._)("div",null,"Min:",-1))),ge=le((()=>(0,n._)("div",null,"Max:",-1)));function fe(e,t,a,o,r,i){const s=(0,n.up)("StdButton"),l=(0,n.up)("CheckBox"),c=(0,n.up)("StdInput");return(0,n.wg)(),(0,n.iD)("div",ce,[ue,(0,n.Wm)(s,{text:"Next",onClick:i.saveMethod},null,8,["onClick"]),(0,n._)("div",he,[(0,n.Wm)(l,{value:r.method===r.stdArray,text:"Standard Array",onClick:t[0]||(t[0]=e=>i.changedMethod(r.stdArray))},null,8,["value"]),(0,n.Wm)(l,{value:r.method===r.pointBuy,text:"Point Buy",onClick:t[1]||(t[1]=e=>i.changedMethod(r.pointBuy))},null,8,["value"]),(0,n.Wm)(l,{value:r.method===r.rolled,text:"Rolled",onClick:t[2]||(t[2]=e=>i.changedMethod(r.rolled))},null,8,["value"])]),r.method===r.rolled?((0,n.wg)(),(0,n.iD)("div",de,[me,(0,n.Wm)(c,{modelValue:r.minRoll,"onUpdate:modelValue":t[3]||(t[3]=e=>r.minRoll=e),value:r.minRoll,label:"Min",type:"number"},null,8,["modelValue","value"]),ge,(0,n.Wm)(c,{modelValue:r.maxRoll,"onUpdate:modelValue":t[4]||(t[4]=e=>r.maxRoll=e),value:r.maxRoll,label:"Max",type:"number"},null,8,["modelValue","value"])])):(0,n.kq)("",!0)])}const pe=["placeholder","type"];function ve(e,t,a,o,r,s){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.content=e),class:(0,i.C_)(s.classes),placeholder:a.hint,type:r.inputType,min:"0",max:"20"},null,10,pe)),[[Q.YZ,r.content]])}var ye={name:"StdInput",props:{value:{},showLoading:{},inputStyle:{type:String,description:"UX defined styling of a button",default:"primary",options:["primary","narrow","outline","hidden"]},hint:{},label:{},type:{}},emits:["changed"],created(){void 0!==this.type&&(this.inputType=this.type),this.debouncedFetch=U.debounce((e=>{this.loading=!1,this.$emit("changed",e)}),400)},data(){return{inputType:"text",content:this.value,loading:!1}},watch:{content(e,t){this.loading=!0,this.debouncedFetch(e,t)},value(e){this.content=e}},computed:{classes(){return{input:!0,"input--primary":!this.inputStyle,[`input-${this.inputStyle}`]:this.inputStyle,[`input-${this.inputStyle}`]:this.inputStyle}}}};const be=(0,C.Z)(ye,[["render",ve],["__scopeId","data-v-d1961f6a"]]);var Se=be,we={name:"TMHGenMethod",components:{StdButton:x,StdInput:Se,CheckBox:oe},props:{choice:{},min:{},max:{}},emits:["saved","changed"],data(){return{pointBuy:"Point Buy",rolled:"Rolled",stdArray:"Standard Array",method:"Standard Array",minRoll:8,maxRoll:18}},created(){""!==this.choice&&(this.method=this.choice),this.min&&(this.minRoll=this.min),this.max&&(this.maxRoll=this.max)},methods:{saveMethod(){console.log("saved method to ",this.method),this.$emit("saved",this.method,this.minRoll,this.maxRoll)},changedMethod(e){console.log("changed method to ",e),this.method=e,this.emitChange()},emitChange(){console.log("changed generation method"),this.$emit("changed",this.method,this.minRoll,this.maxRoll)}},watch:{minRoll(){this.emitChange()},maxRoll(){this.emitChange()}}};const Ce=(0,C.Z)(we,[["render",fe],["__scopeId","data-v-c8712cbe"]]);var Me=Ce;const xe=e=>((0,n.dD)("data-v-42e8ef98"),e=e(),(0,n.Cn)(),e),ke={class:"char"},Re={class:"char-name"},De=xe((()=>(0,n._)("div",null,"Name:",-1))),_e={class:"char-race"},Te=xe((()=>(0,n._)("div",null,"Race:",-1))),Ae={class:"char-race-name"},We={class:"char-race-source"},Pe={class:"char-class"},Be=xe((()=>(0,n._)("div",null,"Class",-1))),Oe={class:"char-class-name"},He={class:"char-class-source"},Ge={class:"char-abilities"},Ee=xe((()=>(0,n._)("div",{class:"char-abilities-title"},"Character Abilities",-1))),Ie={class:"char-abilities-group"},Fe={class:"char-abilities-group-ability-title"},Ne={class:"char-abilities-group-ability-score"};function ze(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",ke,[(0,n._)("div",Re,[De,(0,n._)("div",null,(0,i.zw)(a.char.name),1)]),(0,n._)("div",_e,[Te,(0,n._)("div",null,[(0,n._)("div",Ae,(0,i.zw)(a.char.race.name),1),(0,n._)("div",We,(0,i.zw)(a.char.race.source),1)])]),(0,n._)("div",Pe,[Be,(0,n._)("div",null,[(0,n._)("div",Oe,(0,i.zw)(a.char.subclass)+" "+(0,i.zw)(a.char.class.name),1),(0,n._)("div",He,(0,i.zw)(a.char.class.source),1)])]),(0,n._)("div",Ge,[Ee,(0,n._)("div",Ie,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.char.abilities,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"char-abilities-group-ability"},[(0,n._)("div",Fe,(0,i.zw)(t),1),(0,n._)("div",Ne,(0,i.zw)(e),1)])))),128))])])])}var Le={name:"CharacterViewer",props:{char:{}}};const je=(0,C.Z)(Le,[["render",ze],["__scopeId","data-v-42e8ef98"]]);var Ke=je,Ve={name:"TwoMinuteHeroes",components:{CharacterViewer:Ke,TMHGenMethod:Me,TMHSources:se,StdButton:x},data(){return{loading:!1,character:{name:"",race:{name:"",source:""},class:{name:"",source:""},subclass:"",abilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10}},name:"",cName:"",cRace:null,cClass:null,subClass:null,cAbilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},errMsg:null,raceErrMsg:null,classErrMsg:null,pageNum:0,cSources:{},showSources:!1,method:"Standard Array",minRoll:8,maxRoll:18}},created(){},methods:{prevPage(){this.pageNum>0&&this.pageNum--},nextPage(){this.pageNum++},filterSources(e){this.cSources=e,this.nextPage()},changedMethod(e,t,a){console.log("recording changed",e,t,a),this.method=e,this.minRoll=t,this.maxRoll=a},savedMethod(e,t,a){this.method=e,this.minRoll=t,this.maxRoll=a,this.randomCharacter()},randomName(){const e=e=>e[Math.floor(Math.random()*e.length)],t="aeiou",a="bcdfghjklmnpqrstvwxyz",n=()=>{const n=e(a)+e(t);return Math.random()<.5?n:e(a)+n},o=()=>{const e=Math.floor(3*Math.random())+1;return Array.from({length:e},(()=>n())).join("")},r=()=>{const e=Math.floor(5*Math.random())+1;return Array.from({length:e},(()=>n())).join("")},i=e=>e.charAt(0).toUpperCase()+e.slice(1),s=i(o()),l=i(r());return`${s} ${l}`},async randomCharacter(){this.errMsg=null,this.raceErrMsg=null,this.classErrMsg=null,this.hasChar||(this.loading=!0),this.name=this.randomName(),this.character.name=this.name,this.character.race=this.randomRace();let e=this.randomClass(),t=e.subclasses;console.log("class",e),console.log("subclasses",t),this.character.subclass=t[Math.floor(Math.random()*t.length)],this.character.abilities=this.genAbilities(),await new Promise((e=>setTimeout(e,200))),this.loading=!1,this.nextPage()},randomRace(){let e=L.allRaces();const t=this.enabledSources();if(t.length>0){let a=e.filter((function(e){return t.includes(e.source)}));a.length>0?e=a:this.raceErrMsg="No races given the selection, using all sources."}return e[Math.floor(Math.random()*e.length)]},randomClass(){let e=L.allClasses();const t=this.enabledSources();if(t.length>0){let a=e.filter((function(e){return t.includes(e.source)}));a.length>0?e=a:this.classErrMsg="No classes given the selection, using all sources."}return e[Math.floor(Math.random()*e.length)]},genAbilities(){let e=[15,14,13,12,10,8];switch(this.method){case"Rolled":e=[U.randomIntFromInterval(this.minRoll,this.maxRoll),U.randomIntFromInterval(this.minRoll,this.maxRoll),U.randomIntFromInterval(this.minRoll,this.maxRoll),U.randomIntFromInterval(this.minRoll,this.maxRoll),U.randomIntFromInterval(this.minRoll,this.maxRoll),U.randomIntFromInterval(this.minRoll,this.maxRoll)];break;case"Point Buy":return[]}return U.asiFromNumbers(this.character.class,e)},enabledSources(){let e=[];for(const[t,a]of Object.entries(this.cSources))!0===a&&e.push(t);return e}},computed:{hasChar(){return null!==this.cRace&&!this.loading}}};const qe=(0,C.Z)(Ve,[["render",b],["__scopeId","data-v-437a0b78"]]);var Ue=qe;function Ze(e,t,a,o,r,i){return(0,n.wg)(),(0,n.iD)("div",null,"Welcome to Ginger King's Home page")}var $e={name:"GKHome"};const Ye=(0,C.Z)($e,[["render",Ze]]);var Xe=Ye,Je={name:"App",components:{GKHome:Xe,TwoMinuteHeroes:Ue},data(){return{url:"bsherb53.github.io?page="}},created(){},methods:{changePage(e){const t=new URLSearchParams(window.location.search);t.set("page",e),window.location.search=t}},computed:{tmh(){const e=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});let t=e.page;return"two-minute-heroes"===t},home(){const e=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});let t=e.page;return"home"===t}}};const Qe=(0,C.Z)(Je,[["render",r]]);var et=Qe;const tt=(0,Q.ri)(et);tt.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunktwo_minute_heroes"]=self["webpackChunktwo_minute_heroes"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4016)}));n=a.O(n)})();
//# sourceMappingURL=app.09485352.js.map
(function(){"use strict";var e={2373:function(e,a,t){var n=t(3396);const o={class:"app-header"};function i(e,a,t,i,r,s){const l=(0,n.up)("TwoMinuteHeroes"),c=(0,n.up)("GKHome");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[(0,n._)("div",{class:"app-header-page",onClick:a[0]||(a[0]=e=>s.changePage("home"))},"Home"),(0,n._)("div",{class:"app-header-page",onClick:a[1]||(a[1]=e=>s.changePage("two-minute-heroes"))},"Two Minute Heroes")]),s.tmh?((0,n.wg)(),(0,n.j4)(l,{key:0})):s.home?((0,n.wg)(),(0,n.j4)(c,{key:1})):(0,n.kq)("",!0)],64)}t(8858),t(1318),t(3228);var r=t(7139);const s=e=>((0,n.dD)("data-v-5f4b3db9"),e=e(),(0,n.Cn)(),e),l={class:"tmh"},c=s((()=>(0,n._)("div",null,"Let's make a quick character",-1))),h={key:0,class:"tmh-section"},u={key:1,class:"tmh-section"},m={key:2,class:"tmh-section tmh-name"},d=s((()=>(0,n._)("div",null,"OR",-1))),g={class:"tmh-name-buttons"},y={key:3,class:"tmh-section"};function p(e,a,t,o,i,s){const p=(0,n.up)("TMHSources"),v=(0,n.up)("TMHGenMethod"),b=(0,n.up)("StdInput"),f=(0,n.up)("StdButton"),S=(0,n.up)("CharacterViewer");return(0,n.wg)(),(0,n.iD)("div",l,[c,0===i.pageNum?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(p,{"user-sources":i.cSources,onSaved:s.filterSources},null,8,["user-sources","onSaved"])])):1===i.pageNum?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(v,{choice:i.method,max:i.maxRoll,min:i.minRoll,onChanged:s.changedMethod,onSaved:s.savedMethod},null,8,["choice","max","min","onChanged","onSaved"])])):2===i.pageNum?((0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",null,(0,r.zw)(s.nameHint),1),(0,n.Wm)(b,{modelValue:i.name,"onUpdate:modelValue":a[0]||(a[0]=e=>i.name=e),value:i.name,class:"tmh-char-name",hint:"eg. Boblin",onChange:s.changedName},null,8,["modelValue","value","onChange"]),d,(0,n._)("div",g,[(0,n.Wm)(f,{"button-style":"secondary",text:"Random",onClick:s.getRandomNameWithProbabilities},null,8,["onClick"]),(0,n.Wm)(f,{text:"Create",onClick:s.saveName},null,8,["onClick"])])])):3===i.pageNum?((0,n.wg)(),(0,n.iD)("div",y,[(0,n.Wm)(S,{char:i.character},null,8,["char"])])):(0,n.kq)("",!0),(0,n.Wm)(f,{text:"New Character",onClick:s.newChar},null,8,["onClick"])])}t(560);function v(e,a,t,o,i,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,r.C_)(s.classes)},(0,r.zw)(t.text),3)}var b={name:"StdButton",data(){return{}},props:{buttonStyle:String,text:{type:String,required:!0}},created(){},methods:{},computed:{classes(){let e={button:!0};return this.buttonStyle?e["button-"+this.buttonStyle]=!0:e["button-primary"]=!0,e}}},f=t(89);const S=(0,f.Z)(b,[["render",v],["__scopeId","data-v-09628188"]]);var w=S;const C="Basic Rules",M="Monsters of the Multiverse",x="Spelljammer",k="Dragonlance",A="Strixhaven",R="Guide to Ravenloft",D="Mythic Odysseys of Theros",E="Eberron: Rising",_="Acquisitions Incorporated",O="Guide to Ravnica",L="Sword Coast",T="Locathah Rising",W="One Grung Above",P="Tasha's Cauldron of Everything",H=function(){return[{name:"Dragonborn",source:C},{name:"Dwarf",source:C},{name:"Elf",source:C},{name:"Gnome",source:C},{name:"Half-Elf",source:C},{name:"Halfling",source:C},{name:"Half-Orc",source:C},{name:"Human",source:C},{name:"Tiefling",source:C},{name:"Aarakocra",source:M},{name:"Aasimar",source:M},{name:"Air Genasi",source:M},{name:"Centaur",source:M},{name:"Changeling",source:M},{name:"Deep Gnome",source:M},{name:"Duergar",source:M},{name:"Earth Genasi",source:M},{name:"Eladrin",source:M},{name:"Fairy",source:M},{name:"Firbolg",source:M},{name:"Fire Genasi",source:M},{name:"Githyanki",source:M},{name:"Githzerai",source:M},{name:"Goblin",source:M},{name:"Goliath",source:M},{name:"Harengon",source:M},{name:"Hobgoblin",source:M},{name:"Kenku",source:M},{name:"Kobold",source:M},{name:"Lizardfolk",source:M},{name:"Minotaur",source:M},{name:"Orc",source:M},{name:"Satyr",source:M},{name:"Sea Elf",source:M},{name:"Shadar-kai",source:M},{name:"Shifter",source:M},{name:"Tabaxi",source:M},{name:"Tortle",source:M},{name:"Triton",source:M},{name:"Water Genasi",source:M},{name:"Yuan-ti",source:M},{name:"Kender",source:k},{name:"Astral Elf",source:x},{name:"Autognome",source:x},{name:"Giff",source:x},{name:"Hadozee",source:x},{name:"Plasmoid",source:x},{name:"Thri-kreen",source:x},{name:"Owlin",source:A},{name:"Lineages",source:R},{name:"Leonin",source:D},{name:"Kalashtar",source:E},{name:"Warforged",source:E},{name:"Verdan",source:_},{name:"Loxodon",source:O},{name:"Simic Hybrid",source:O},{name:"Vedalken",source:O},{name:"Feral Tiefling",source:L},{name:"Locathah",source:T},{name:"Grung",source:W}].sort()},I=function(){return[{name:"Barbarian",source:C,ability1:"str",ability2:"con",subclasses:["Path of the Ancestral Guardian","Path of the Battlerager","Path of the Beast","Path of the Berserker","Path of the Giant","Path of the Storm Herald","Path of the Totem Warrior","Path of the Zealot","Path of Wild Magic","Path of the Juggernaut"]},{name:"Bard",source:C,ability1:"cha",ability2:"dex",subclasses:["College of Creation","College of Eloquence","College of Lore","College of Spirits","College of Swords","College of Valor","College of Whispers","College of Tragedy"]},{name:"Cleric",source:C,ability1:"wis",ability2:"str",ability3:"con",subclasses:["Arcana Domain","Death Domain","Forge Domain","Knowledge Domain","Life Domain","Light Domain","Nature Domain","Order Domain","Peace Domain","Tempest Domain","Trickery Domain","Twilight Domain","War Domain","Blood Domain","Moon Domain"]},{name:"Druid",source:C,ability1:"wis",ability2:"con",subclasses:["Circle of Dreams","Circle of Spores","Circle of Stars","Circle of the Land","Circle of the Moon","Circle of the Shepherd","Circle of Wildfire","Circle of the Blighted"]},{name:"Fighter",source:C,ability1:"str",ability2:"con",ability3:"dex",subclasses:["Arcane Archer","Battle Master","Cavalier","Champion","Eldritch Knight","Psi Warrior","Purple Dragon Knight","Rune Knight","Samurai","Echo Knight","Gunslinger"]},{name:"Monk",source:C,ability1:"dex",ability2:"wis",subclasses:["Way of Mercy","Way of Shadow","Way of the Ascendant Dragon","Way of the Astral Self","Way of the Drunken Master","Way of the Four Elements","Way of the Kensei","Way of the Long Death","Way of the Open Hand","Way of the Sun Soul","Way of the Cobalt Soul"]},{name:"Paladin",source:C,ability1:"str",ability2:"cha",subclasses:["Oath of Conquest","Oath of Devotion","Oath of Glory","Oath of Redemption","Oath of the Ancients","Oath of the Crown","Oath of the Watchers","Oath of Vengeance","Oath of Conquest","Oathbreaker","Oath of the Open Sea"]},{name:"Ranger",source:C,ability1:"dex",ability2:"wis",subclasses:["Beast Master","Drakewarden","Fey Wanderer","Gloom Stalker","Horizon Walker","Hunter","Monster Slayer","Swarmkeeper"]},{name:"Rogue",source:C,ability1:"dex",ability2:"con",subclasses:["Arcane Trickster","Assassin","Inquisitive","Mastermind","Phantom","Scout","Soulknife","Swashbuckler","Thief"]},{name:"Sorcerer",source:C,ability1:"cha",ability2:"con",subclasses:["Aberrant Mind","Clockwork Soul","Divine Soul","Draconic Bloodline","Lunar Sorcery","Shadow Magic","Storm Sorcery","Wild Magic","Runechild"]},{name:"Warlock",source:C,ability1:"cha",ability2:"con",subclasses:["The Archfey","The Celestial","The Fathomless","The Fiend","The Genie","The Great Old One","The Hexblade","The Undead","The Undying"]},{name:"Wizard",source:C,ability1:"int",ability2:"con",ability3:"dex",subclasses:["Bladesinging","Order of Scribes","School of Abjuration","School of Conjuration","School of Divination","School of Enchantment","School of Evocation","School of Illusion","School of Necromancy","School of Transmutation","War Magic","Blood Magic","Chronurgy Magic","Graviturgy Magic"]},{name:"Artificer",source:P,ability1:"int",ability2:"con",ability3:"dex",subclasses:["Alchemist","Armorer","Artillerist","Battle Smith"]}].sort()},G=function(){let e=[M,x,k,A,R,D,E,_,O,L,T,W,P].sort();return e.unshift(C),e};var B={allClasses:I,allSources:G,allRaces:H};function N(e,a){let t;return function(...n){t&&clearTimeout(t);const o=this;t=setTimeout((()=>{e.apply(o,n)}),a)}}function F(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function Z(e,a){const t=e.indexOf(a);return t>-1&&e.splice(t,1),e}function j(e,a){let t={str:-1,dex:-1,con:-1,int:-1,wis:-1,cha:-1};if(e.ability1){let n=Math.max(...a);t[e.ability1]=n,a=Z(a,n)}if(e.ability2){let n=Math.max(...a);t[e.ability2]=n,a=Z(a,n)}if(e.ability3){let n=Math.max(...a);t[e.ability3]=n,a=Z(a,n)}for(const[n,o]of Object.entries(t))if(-1===o){let e=Math.max(...a);t[n]=e,a=Z(a,e)}return t}var V={debounce:N,randomIntFromInterval:F,asiFromNumbers:j};const z=e=>((0,n.dD)("data-v-734ad9f0"),e=e(),(0,n.Cn)(),e),K={class:"sources"},J=z((()=>(0,n._)("div",{class:"sources-buttons"},[(0,n._)("div",null,"First, pick your source(s)")],-1))),U={class:"sources-data"};function q(e,a,t,o,i,r){const s=(0,n.up)("CheckBox"),l=(0,n.up)("StdButton");return(0,n.wg)(),(0,n.iD)("div",K,[J,(0,n._)("div",U,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.sources,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a,class:"sources-source"},[(0,n.Wm)(s,{text:e,value:i.cSources[e],onChanged:a=>r.toggleSource(e)},null,8,["text","value","onChanged"])])))),128))]),(0,n.Wm)(l,{text:"Next",onClick:r.saveSources},null,8,["onClick"])])}var $=t(9242);const Y={class:"checkbox-text"};function X(e,a,t,o,i,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,r.C_)(s.classes),onClick:a[1]||(a[1]=(...e)=>s.toggle&&s.toggle(...e))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.content=e),type:"checkbox"},null,512),[[$.e8,i.content]]),(0,n._)("div",Y,(0,r.zw)(t.text),1)],2)}var Q={name:"CheckBox",props:{value:{},showLoading:{},inputStyle:{type:String,description:"UX defined styling of a button",default:"primary",options:["primary","narrow","outline","hidden"]},text:{}},emits:["changed"],created(){this.debouncedFetch=V.debounce((e=>{this.loading=!1,this.$emit("changed",e)}),10)},data(){return{content:this.value,loading:!1}},watch:{content(e,a){this.loading=!0,this.debouncedFetch(e,a)},value(e){this.content=e}},methods:{toggle(){this.content=!this.content}},computed:{classes(){return{checkbox:!0,"checkbox--primary":!this.inputStyle,[`checkbox-${this.inputStyle}`]:this.inputStyle,[`checkbox-${this.inputStyle}`]:this.inputStyle}}}};const ee=(0,f.Z)(Q,[["render",X],["__scopeId","data-v-6d2f0040"]]);var ae=ee,te={name:"TMHSources",components:{StdButton:w,CheckBox:ae},props:{userSources:{}},emits:["saved"],data(){return{loading:!1,name:null,cName:null,cRace:null,cClass:null,subClass:null,cAbilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},sources:B.allSources(),cSources:{},showSources:!1,errMsg:null,raceErrMsg:null,classErrMsg:null,pointBuy:"Point Buy",rolled:"Rolled",stdArray:"Standard Array",method:"Standard Array",minRoll:8,maxRoll:18}},created(){this.cSources=this.userSources,0===Object.keys(this.userSources).length&&this.toggleSource("Basic Rules")},methods:{saveSources(){this.hasEnabled&&this.$emit("saved",this.cSources)},toggleSource(e){this.sources[e]=!this.sources[e],this.cSources[e]=!this.cSources[e]}},computed:{hasEnabled(){let e=[];for(const[a,t]of Object.entries(this.cSources))!0===t&&e.push(a);return e.length>0}}};const ne=(0,f.Z)(te,[["render",q],["__scopeId","data-v-734ad9f0"]]);var oe=ne;const ie=e=>((0,n.dD)("data-v-7ba28394"),e=e(),(0,n.Cn)(),e),re={class:"tmh-generation"},se=ie((()=>(0,n._)("div",null,"Now pick the Generation Method",-1))),le=ie((()=>(0,n._)("div",{class:"subtitle"},"Note: Point Buy you must do on your own",-1))),ce={class:"tmh-generation-options"},he={key:0,class:"tmh-generation-limits"},ue=ie((()=>(0,n._)("div",null,"Min:",-1))),me=ie((()=>(0,n._)("div",null,"Max:",-1)));function de(e,a,t,o,i,r){const s=(0,n.up)("CheckBox"),l=(0,n.up)("StdInput"),c=(0,n.up)("StdButton");return(0,n.wg)(),(0,n.iD)("div",re,[se,le,(0,n._)("div",ce,[(0,n.Wm)(s,{value:i.method===i.stdArray,class:"tmh-generation-options-b",text:"Standard Array",onClick:a[0]||(a[0]=e=>r.changedMethod(i.stdArray))},null,8,["value"]),(0,n.Wm)(s,{value:i.method===i.rolled,class:"tmh-generation-options-b",text:"Rolled",onClick:a[1]||(a[1]=e=>r.changedMethod(i.rolled))},null,8,["value"])]),i.method===i.rolled?((0,n.wg)(),(0,n.iD)("div",he,[ue,(0,n.Wm)(l,{modelValue:i.minRoll,"onUpdate:modelValue":a[2]||(a[2]=e=>i.minRoll=e),value:i.minRoll,label:"Min",type:"number"},null,8,["modelValue","value"]),me,(0,n.Wm)(l,{modelValue:i.maxRoll,"onUpdate:modelValue":a[3]||(a[3]=e=>i.maxRoll=e),value:i.maxRoll,label:"Max",type:"number"},null,8,["modelValue","value"])])):(0,n.kq)("",!0),(0,n.Wm)(c,{text:"Next",onClick:r.saveMethod},null,8,["onClick"])])}const ge=["placeholder","type"];function ye(e,a,t,o,i,s){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.content=e),class:(0,r.C_)(s.classes),placeholder:t.hint,type:i.inputType,min:"0",max:"20"},null,10,ge)),[[$.YZ,i.content]])}var pe={name:"StdInput",props:{value:{},showLoading:{},inputStyle:{type:String,description:"UX defined styling of a button",default:"primary",options:["primary","narrow","outline","hidden"]},hint:{},label:{},type:{}},emits:["changed"],created(){void 0!==this.type&&(this.inputType=this.type),this.debouncedFetch=V.debounce((e=>{this.loading=!1,this.$emit("changed",e)}),400)},data(){return{inputType:"text",content:this.value,loading:!1}},watch:{content(e,a){this.loading=!0,this.debouncedFetch(e,a)},value(e){this.content=e}},computed:{classes(){return{input:!0,"input--primary":!this.inputStyle,[`input-${this.inputStyle}`]:this.inputStyle,[`input-${this.inputStyle}`]:this.inputStyle}}}};const ve=(0,f.Z)(pe,[["render",ye],["__scopeId","data-v-6c04001d"]]);var be=ve,fe={name:"TMHGenMethod",components:{StdButton:w,StdInput:be,CheckBox:ae},props:{choice:{},min:{},max:{}},emits:["saved","changed"],data(){return{pointBuy:"Point Buy",rolled:"Rolled",stdArray:"Standard Array",method:"Standard Array",minRoll:8,maxRoll:18}},created(){""!==this.choice&&(this.method=this.choice),this.min&&(this.minRoll=this.min),this.max&&(this.maxRoll=this.max)},methods:{saveMethod(){console.log("saved method to ",this.method),this.$emit("saved",this.method,this.minRoll,this.maxRoll)},changedMethod(e){console.log("changed method to ",e),this.method=e,this.emitChange()},emitChange(){console.log("changed generation method"),this.$emit("changed",this.method,this.minRoll,this.maxRoll)}},watch:{minRoll(){this.emitChange()},maxRoll(){this.emitChange()}}};const Se=(0,f.Z)(fe,[["render",de],["__scopeId","data-v-7ba28394"]]);var we=Se;const Ce=e=>((0,n.dD)("data-v-6777c914"),e=e(),(0,n.Cn)(),e),Me={class:"char"},xe={class:"char-details"},ke={class:"char-name char-section"},Ae=Ce((()=>(0,n._)("div",{class:"char-section-title"},"Name",-1))),Re={class:"char-section-contents"},De={class:"char-race char-section"},Ee=Ce((()=>(0,n._)("div",{class:"char-section-title"},"Race",-1))),_e={class:"char-section-contents"},Oe={class:"char-race-name"},Le={class:"char-race-source subtitle"},Te={class:"char-class char-section"},We=Ce((()=>(0,n._)("div",{class:"char-section-title"},"Class",-1))),Pe={class:"char-section-contents"},He={class:"char-class-name"},Ie={class:"char-class-source subtitle"},Ge={class:"char-abilities"},Be=Ce((()=>(0,n._)("div",{class:"char-abilities-title"},"Character Abilities",-1))),Ne={class:"char-abilities-group"},Fe={class:"char-abilities-group-ability-title"},Ze={class:"char-abilities-group-ability-score"};function je(e,a,t,o,i,s){return(0,n.wg)(),(0,n.iD)("div",Me,[(0,n._)("div",xe,[(0,n._)("div",ke,[Ae,(0,n._)("div",Re,(0,r.zw)(t.char.name),1)]),(0,n._)("div",De,[Ee,(0,n._)("div",_e,[(0,n._)("div",Oe,(0,r.zw)(t.char.race.name),1),(0,n._)("div",Le,(0,r.zw)(t.char.race.source),1)])]),(0,n._)("div",Te,[We,(0,n._)("div",Pe,[(0,n._)("div",He,(0,r.zw)(t.char.subclass)+" "+(0,r.zw)(t.char.class.name),1),(0,n._)("div",Ie,(0,r.zw)(t.char.class.source),1)])])]),(0,n._)("div",Ge,[Be,(0,n._)("div",Ne,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.char.abilities,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a,class:"char-abilities-group-ability"},[(0,n._)("div",Fe,(0,r.zw)(a),1),(0,n._)("div",Ze,(0,r.zw)(e),1)])))),128))])])])}var Ve={name:"CharacterViewer",props:{char:{}},created(){console.log(this.char)}};const ze=(0,f.Z)(Ve,[["render",je],["__scopeId","data-v-6777c914"]]);var Ke=ze;const Je=function(){const e=["Emily","Liam","Olivia","Noah","Emma","Ava","Sophia","Isabella","Mia","Aiden","Jackson","Lucas","Sophia","Olivia","Emma","Ava","Isabella","Mia","Amelia","Harper","Evelyn","Abigail","Ella","Scarlett","Grace","Chloe","Liam","Noah","Oliver","Ethan","Aiden","Lucas","Mason","Logan","Elijah","James","Alexander","Benjamin","William","Henry","Jackson","Owen","Samuel","Sebastian","David","Carter","Wyatt","Joseph","Daniel","Matthew","Michael","Emily","Ava","Sophia","Olivia","Emma","Amelia","Harper","Mia","Evelyn","Abigail","Ella","Scarlett","Grace","Chloe","Lily","Aria","Isla","Zoe","Aurora","Savannah","Penelope","Victoria","Aaliyah","Scarlett","Lily","Riley","Zoe","Nora","Lily","Hannah","Grace","Lillian","Ellie","Leah","Aurora","Maya","Audrey","Bella","Chloe","Lucy","Stella","Nova","Zoe","Aurora","Riley","Bella","Skylar","Paisley","Savannah","Ethan","Olivia","Mason","Ava","Elijah","Mia","Logan","Isabella","Aiden","Sophia","Lucas","Amelia","Jackson","Harper","Grayson","Evelyn","Sebastian","Abigail","Carter","Aria","Noah","Emily","Liam","Scarlett","Owen","Grace","Wyatt","Chloe","Henry","Lily","Leo","Addison","Daniel","Zoey","Benjamin","Ella","Caleb","Aubrey","Matthew","Aurora","Samuel","Hannah","Jackson","Layla","Julian","Mila","Jack","Penelope","Oliver","Scarlett","Michael","Lucy","Ethan","Aaliyah","Daniel","Zoe","James","Riley","David","Lily","Joseph","Sophia","Gabriel","Avery","Isaac","Mia","Anthony","Zoey","Andrew","Grace","William","Ava","Samuel","Sofia","Christopher","Madison","John","Harper","Ryan","Ellie","Luke","Stella","Adam","Leah","Dylan","Penelope","Brandon","Lillian","Isaiah","Chloe","Owen","Zoey","Nathan","Layla","Caleb","Avery","Hunter","Eleanor","Jeremiah","Skylar","Xavier","Naomi","Lincoln","Eliza","Zane","Genevieve","Sawyer","Cecilia","Atlas","Cora","Jaxon","Seraphina","Felix","Isla","Silas","Delilah","Orion","Matilda","Kieran","Esme","Gideon","Aurelia","Magnus","Adelaide","Beckett","Ophelia","Sullivan","Celeste","Maximus","Juniper","Desmond","Elodie","Evander","Mabel","Augustus","Anouk","Remy","Saoirse","Leandro","Celia","Atticus","Maeve","Caspian","Odette","Lachlan","Seren","Rhys","Lyra","Dashiell","Isolde","Cassius","Thalia","Callum","Saskia","Ellis","Aislinn","Cassian","Eira","Caius","Linnea","Alaric","Imogen","Octavian","Aveline","Lucian","Seraphine","Peregrine","Ione","Thaddeus","Elowen","Soren","Amara","Emrys","Isabeau","Evadne","Arlo","Freesia","Leif","Mireille","Theron","Isolde","Octavia","Ansel","Eulalia","Peregrine","Elestren","Osiris","Solene","Niko","Zephyrine","Thalia","Lysander","Eulalia","Finian","Solene","Elowen","Eamon","Thessaly","Tadhg","Isabeau"];return e[Math.floor(Math.random()*e.length)]};var Ue={randomName:Je},qe={name:"TwoMinuteHeroes",components:{StdInput:be,CharacterViewer:Ke,TMHGenMethod:we,TMHSources:oe,StdButton:w},data(){return{loading:!1,character:{name:"",race:{name:"",source:""},class:{name:"",source:""},subclass:"",abilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10}},name:"",cName:"",cRace:null,cClass:null,subClass:null,cAbilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},errMsg:null,raceErrMsg:null,classErrMsg:null,pageNum:0,cSources:{},showSources:!1,method:"Standard Array",minRoll:8,maxRoll:18}},created(){},methods:{prevPage(){this.pageNum>0&&this.pageNum--},nextPage(){this.pageNum++,3===this.pageNum&&this.randomCharacter()},filterSources(e){this.cSources=e,this.nextPage()},changedMethod(e,a,t){console.log("recording changed",e,a,t),this.method=e,this.minRoll=a,this.maxRoll=t},savedMethod(e,a,t){this.method=e,this.minRoll=a,this.maxRoll=t,this.randomCharacter(),this.nextPage()},changedName(e){console.log(e)},saveName(){""!==this.name&&(this.character.name=this.name,this.nextPage())},newChar(){this.pageNum=0,this.character={},this.name=""},getRandomNameWithProbabilities(){this.name=Ue.randomName(),this.character.name=this.name},async randomCharacter(){this.errMsg=null,this.raceErrMsg=null,this.classErrMsg=null,this.hasChar||(this.loading=!0),this.character.name=this.name,this.character.race=this.randomRace();let e=this.randomClass(),a=e.subclasses;console.log("class",e),console.log("subclasses",a),this.character.class=e,this.character.subclass=a[Math.floor(Math.random()*a.length)],this.character.abilities=this.genAbilities(),await new Promise((e=>setTimeout(e,200))),this.loading=!1},randomRace(){let e=B.allRaces();const a=this.enabledSources();if(a.length>0){let t=e.filter((function(e){return a.includes(e.source)}));t.length>0?e=t:this.raceErrMsg="No races given the selection, using all sources."}return e[Math.floor(Math.random()*e.length)]},randomClass(){let e=B.allClasses();const a=this.enabledSources();if(a.length>0){let t=e.filter((function(e){return a.includes(e.source)}));t.length>0?e=t:this.classErrMsg="No classes given the selection, using all sources."}return e[Math.floor(Math.random()*e.length)]},genAbilities(){let e=[15,14,13,12,10,8];switch(this.method){case"Rolled":e=[V.randomIntFromInterval(this.minRoll,this.maxRoll),V.randomIntFromInterval(this.minRoll,this.maxRoll),V.randomIntFromInterval(this.minRoll,this.maxRoll),V.randomIntFromInterval(this.minRoll,this.maxRoll),V.randomIntFromInterval(this.minRoll,this.maxRoll),V.randomIntFromInterval(this.minRoll,this.maxRoll)];break;case"Point Buy":return[]}return V.asiFromNumbers(this.character.class,e)},enabledSources(){let e=[];for(const[a,t]of Object.entries(this.cSources))!0===t&&e.push(a);return e}},computed:{nameHint(){return"Give your "+this.character.race.name+" a name"},hasChar(){return null!==this.cRace&&!this.loading}}};const $e=(0,f.Z)(qe,[["render",p],["__scopeId","data-v-5f4b3db9"]]);var Ye=$e;function Xe(e,a,t,o,i,r){return(0,n.wg)(),(0,n.iD)("div",null,"Welcome to Ginger King's Home page")}var Qe={name:"GKHome"};const ea=(0,f.Z)(Qe,[["render",Xe]]);var aa=ea,ta={name:"App",components:{GKHome:aa,TwoMinuteHeroes:Ye},data(){return{url:"bsherb53.github.io?page="}},created(){},methods:{changePage(e){const a=new URLSearchParams(window.location.search);a.set("page",e),window.location.search=a}},computed:{tmh(){const e=new Proxy(new URLSearchParams(window.location.search),{get:(e,a)=>e.get(a)});let a=e.page;return"two-minute-heroes"===a},home(){const e=new Proxy(new URLSearchParams(window.location.search),{get:(e,a)=>e.get(a)});let a=e.page;return"home"===a}}};const na=(0,f.Z)(ta,[["render",i]]);var oa=na;const ia=(0,$.ri)(oa);ia.mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,i){if(!n){var r=1/0;for(h=0;h<e.length;h++){n=e[h][0],o=e[h][1],i=e[h][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(h--,1);var c=o();void 0!==c&&(a=c)}}return a}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[n,o,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,i,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var h=l(t)}for(a&&a(n);c<r.length;c++)i=r[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(h)},n=self["webpackChunktwo_minute_heroes"]=self["webpackChunktwo_minute_heroes"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2373)}));n=t.O(n)})();
//# sourceMappingURL=app.89fadf0a.js.map
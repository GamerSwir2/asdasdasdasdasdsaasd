(()=>{"use strict";var e,t={716:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(a(294)),o=n(a(14)),r=n(a(739)),i=n(a(575)),l=(e="Unknown System")=>`Chrome Terminal [Ver 1.0] on [${e}].\nAll rights reserved.`;class c extends s.default.Component{constructor(e){var t;super(e),this.state={caretTxt:"",devConsole:"-".repeat(16)+"non-production ENV, showing console:",commandHistory:[],commandHistoryMaxLength:100,currentURL:"",stdout:null!==(t=this.props.stdoutText)&&void 0!==t?t:l(),commandHistoryIndex:-1,isDev:Boolean(!1),commandInputFocused:!1,OSName:"Unknown System"},this.commandInput=s.default.createRef(),this.cmdExecutor=new i.default({setState:e=>{this.setState(e)},currentURL:this.state.currentURL}),this.echo=this.cmdExecutor.echo}componentDidMount(){chrome.runtime.getPlatformInfo((e=>{var t;t="win"==e.os?"Windows":e.os,this.setState({OSName:t})})),chrome.tabs.query({active:!0,currentWindow:!0},(e=>{var t;this.setState({currentURL:null!==(t=e[0].url)&&void 0!==t?t:"URL unavailable"})})),chrome.storage.sync.get(["commandHistory","commandHistoryMaxLength"],(({commandHistory:e=[],commandHistoryMaxLength:t=100})=>{this.setState((a=>({commandHistory:a.commandHistory.concat(e),commandHistoryMaxLength:t})))}))}componentDidUpdate(e,t){this.state.OSName!=t.OSName&&(this.props.stdoutText||this.setState({stdout:l(this.state.OSName)}))}consPush(e){this.setState((({devConsole:t})=>({devConsole:`${t}\n${t.split("\n").length+1}\t: ${e}`})))}focusCommandInput(){this.commandInput.current.focus()}handleCmdClick(e){e.target.focus(),e.preventDefault()}handleCmdChange(e){const t=this.commandInput.current;this.setState({caretTxt:t.value.slice(0,t.selectionStart)})}handleCmdExe(e){e.preventDefault();const t=this.commandInput.current,a=t.value;this.echo.f(`> ${a}`),t.value="",t.focus(),this.setState({caretTxt:t.value.slice(0,t.selectionStart)}),this.cmdExecutor.run(a)}handleCmdKeydown(e){const t=this.commandInput.current;let a=t.selectionStart;const n=t.value;if(a&&("ArrowLeft"==e.code&&this.setState({caretTxt:n.slice(0,a-1)}),"ArrowRight"==e.code&&this.setState({caretTxt:n.slice(0,a+1)}),e.shiftKey&&(t.selectionStart=a+1,t.selectionEnd=a+1)),["ArrowUp","ArrowDown"].includes(e.code)){e.preventDefault();const a=this.state.commandHistoryIndex,n=this.state.commandHistory.length-1;var s;s="ArrowUp"==e.code?-1==a?n:0==a?0:a-1:-1==a||a==n?n:a+1,t.value=this.state.commandHistory[s],this.setState({commandHistoryIndex:s,caretTxt:t.value.slice(0,t.selectionStart)})}}handleCmdSelect(e){}render(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(r.default,{keyName:"alt+c",onKeyDown:this.focusCommandInput.bind(this)}),s.default.createElement("div",{className:"noscrollbar",style:{whiteSpace:"pre-wrap",overflowWrap:"anywhere",width:"100%",height:"100%",overflowY:"scroll"}},s.default.createElement("div",{className:"noscrollbar",style:{display:"flex",width:"100%",height:"100%",flexDirection:"column"}},s.default.createElement(o.default,{text:this.state.stdout,onClick:e=>{var t;(null===(t=document.getSelection())||void 0===t?void 0:t.toString())||this.focusCommandInput()}}),s.default.createElement("form",{autoComplete:"off",onSubmit:this.handleCmdExe.bind(this),style:{display:"flex",justifyContent:"space-between",alignContent:"center"}},s.default.createElement("div",{id:"commandInput-total-container",style:{flexGrow:1,backgroundColor:"#000000",position:"relative"}},s.default.createElement("div",{id:"caret-layer",style:{position:"absolute",display:"flex",whiteSpace:"pre"}},"> "+this.state.caretTxt,s.default.createElement("div",{id:"caret-mover",style:{position:"relative"}},this.state.commandInputFocused&&s.default.createElement("div",{className:"caret",style:{position:"absolute",left:"3px",zIndex:1,whiteSpace:"pre"}}," "))),s.default.createElement("div",{style:{width:"100%",position:"absolute",display:"flex"}},">"," ",s.default.createElement("input",{type:"text",autoFocus:!0,ref:this.commandInput,onFocus:e=>this.setState({commandInputFocused:!0}),onBlur:e=>this.setState({commandInputFocused:!1}),onChange:e=>this.handleCmdChange(e),onKeyDown:this.handleCmdKeydown.bind(this),onMouseDown:e=>this.handleCmdClick(e),placeholder:"Command line: Use [ALT]+[C] to set focus here.",style:{width:"99%",backgroundColor:"#000000",caretColor:"transparent",flexGrow:1}}))),s.default.createElement("input",{type:"submit",value:"⏎",style:{padding:0,flexBasis:0,backgroundColor:"#eee",color:"#000"}})),s.default.createElement("div",{style:{display:"flex",alignItems:"baseline"}},s.default.createElement("div",{style:{width:"33%",flexShrink:0}},(new Date).toLocaleTimeString()),s.default.createElement("div",{style:{flexShrink:0,cursor:"pointer"},onClick:()=>{this.state.currentURL?(navigator.clipboard.writeText(this.state.currentURL),this.echo.f("Current URL copied.")):this.echo.f("[Error]: No current URL found.")}},"COPY URL:"),s.default.createElement("div",{style:{font:"12px sans-serif",overflow:"hidden",height:"32px",overflowWrap:"anywhere",alignSelf:"flex-start"}},this.state.currentURL))),s.default.createElement("div",{style:{font:"12px sans-serif"}},this.state.isDev&&s.default.createElement(s.default.Fragment,null,s.default.createElement("button",null,"test"),s.default.createElement("div",{style:{whiteSpace:"pre-wrap"}},this.state.devConsole)))))}}t.default=c},14:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const r=o(a(294));t.default=e=>{const t=r.useRef(null);return r.useEffect((()=>{t.current.scrollIntoView({behavior:"auto",block:"end"})}),[e.text]),r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{overflowY:"scroll",height:"100%",overflowWrap:"anywhere"},className:"noscrollbar",onClick:e.onClick},r.default.createElement("div",null,e.text),r.default.createElement("div",{ref:t})))}},264:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(a(294)),o=n(a(935)),r=n(a(716));o.default.render(s.default.createElement(s.default.StrictMode,null,s.default.createElement((()=>s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{style:{minHeight:"100%",height:"100%",boxSizing:"border-box",border:"8px transparent solid"}},s.default.createElement(r.default,{stdoutText:"\n==============================\nChrome Terminal - Instrusction\n==============================\n** Not a Chrome/Google Official extension **\n\nWelcome to Chrome Terminal extension.\nSince You've installed, I assume you have read the description in chrome web store.\n\nHere's a quick start: \nHotkeys: \n  In chrome: \n    [ALT] +[T] : Show Terminal style pop up.\n    [Ctrl]+[T] : Open a newtab, should be overridden to Terminal style.\n  In newtab: \n    [Tab] : Set focus on webpage, then you can use these:\n    [ALT]+[C]: Set focus to command line\n    [ALT]+[1234567890]: Redirect to accrording fixed sites/top sites on the left pannel. \nCommands: \n  `man'  : Show manual\n  `help' : Show this page.\n  `edit' : Edit current visited page, can only run via pop-up.\nSettings: \n  You can export JSON file and edit, then import it back. That's what I do\nUsage Exapmle:\n  I used to search `Alternating group:A5' a lot. Now I add alias by\n  `alias a5=open https://groupprops.subwiki.org/wiki/Alternating_group:A5'.\n  Now I don't need to search and click, just type a5 in omnibox/popup, with keyboard.\n\nFAQ: \nQ: How to change hot key: \nA: Via `chrome://extensions/shortcuts'\n\nContact : pablion.pro@gmail.com\n"})))),null)),document.getElementById("root"))},898:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.aliasObj=void 0,t.aliasObj=class{constructor(e){this.name=e.name,this.s=e.s,this.aliasType=e.aliasType,this.comment=e.comment}}},575:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(593),s=a(898);class o{constructor(e){this.name=e.name,this.f=e.f,this.prebuilt=e.prebuilt,this.manShort=e.manShort,this.manFull=e.manFull}}const r=e=>{console.log("fake setState",e)};t.default=class{constructor({setState:e=r,currentURL:t="URL unavailable"}={setState:r,currentURL:"URL unavailable"}){this.aliasNameMaxLength=12,this.hasSetState=!1,this.userAliases={$URL:new s.aliasObj({name:"$URL",s:["URL unavailable"],aliasType:"prebuilt",comment:"Prebuilt environment variable. URL of current page."})},this.echo=new o({name:"echo",f:e=>{this.setState((({stdout:t})=>({stdout:`${t}\n${e}`})))},prebuilt:!0,manShort:"Show thing on screen",manFull:"ECHO [string text]"}),this.basicCmds={alias:new o({name:"alias",f:e=>{if(e){const[t,...a]=e.trim().split("="),n=a.join("=");if(n){if(this.checkAlias(n.split(" "))){const e={name:t,s:n.split(" "),aliasType:"user-defined",comment:`added on ${Date()}`};Object.assign(this.userAliases,{[t]:e});const a=Object.assign({},this.userAliases);Reflect.deleteProperty(a,"$URL"),chrome.storage.sync.set({userAliases:a}),this.echo.f(`alias ${t} for ${n} added. \nYou can edit it in option page [EXPORT]`)}}else this.echo.f(`[${t}] is an alias: ${this.userAliases[t].comment}\nalias for [${this.userAliases[t].s.join(" ")}] `)}else{const e=(e,t)=>`${e}${(t.name+" ".repeat(this.aliasNameMaxLength+4)).slice(0,this.aliasNameMaxLength+4)}${t.comment}\n`,t=Object.values(this.userAliases).reduce(e,"");this.echo.f(`All Alias:\n${t}`)}},prebuilt:!0,manShort:"Make new alias or check exsisted alias",manFull:"ALIAS [value(=value)]"}),copy:new o({name:"copy",f:e=>{this.echo.f(`copied ${e.slice(0,20)}${e.length>20?" (... omitted)":""}`),navigator.clipboard.writeText(e)},prebuilt:!0,manShort:"Make new alias or check exsisted alias",manFull:"ALIAS [name(=value)]"}),echo:this.echo,edit:new o({name:"edit",f:e=>{e||chrome.tabs.query({active:!0,currentWindow:!0},(e=>{const t=e[0];chrome.tabs.executeScript(t.id,{code:"document.designMode='on'"},(e=>{if(chrome.runtime.lastError){var t=chrome.runtime.lastError.message;console.log("errorMsg : ",t),this.echo.f(null!=t?t:""),chrome.permissions.request({permissions:["tabs"],origins:[this.userAliases.$URL.s[0]]},(e=>{e?(this.echo.f("Permission granted."),this.basicCmds.edit.f()):console.log("Permission denied. You cannot use this command.")}))}else"on"==e[0]&&this.echo.f("You can edit current page now.")}))}))},prebuilt:!0,manShort:"Show manual",manFull:"MAN [command name]\n        \n        Has alias: help\n        For more help, use OPTION HELP"}),man:new o({name:"man",f:e=>{var t,a,n;if(e){const s=null!==(n=null===(a=null!==(t=this.basicCmds[e])&&void 0!==t?t:this.userAliases[e])||void 0===a?void 0:a.manFull)&&void 0!==n?n:"no such function";this.echo.f(`${" ".repeat(15)}MANUAL - ${e}:\n${s}`)}else{const e=Object.keys(this.basicCmds).join("\t"),t=Object.keys(this.userAliases).join("\t");this.echo.f(`Commands:\necho\t${e}\nAliases:\n${t}`)}},prebuilt:!0,manShort:"Show manual",manFull:"MAN [command name]\n        \n        Has alias: help\n        For more help, use OPTION HELP"}),open:new o({name:"open",f:e=>{e?chrome.tabs.query({active:!1,url:e,windowId:-2},(t=>{t.length?(chrome.tabs.highlight({tabs:t.map((e=>e.index))}),chrome.tabs.getCurrent((e=>{chrome.tabs.remove(e.id,(function(){}))}))):chrome.tabs.create({url:e})})):this.echo.f("ERROR: needs an URL.")},prebuilt:!0,manShort:"OPEN [URL] : Open an URL",manFull:"OPEN [URL]"})},e!=r&&(this.hasSetState=!0),this.commandHistoryMaxLength=100,chrome.storage.sync.get(["aliasNameMaxLength","userAliases","commandHistoryMaxLength"],(({aliasNameMaxLength:e=12,userAliases:t={},commandHistoryMaxLength:a=100})=>{this.aliasNameMaxLength=e,Object.assign(this.userAliases,t),this.commandHistoryMaxLength=a})),this.setState=e,chrome.tabs.query({active:!0,currentWindow:!0},(e=>{var a;this.userAliases.$URL.s[0]=null!==(a=e[0].url)&&void 0!==a?a:t}))}checkAlias(e){const t="Error in parseAlias: Max alias depth exceeded",a=this.parseAlias(e,256);if(("string"==typeof a||a instanceof String)&&a.startsWith(t))return this.echo.f("WARNING: Alias has more than 256 levels of referece, please check for circular reference."),!1;const n=this.parseAlias(e,64);return!("string"==typeof n||n instanceof String)||!n.startsWith(t)||(this.echo.f("WARNING: Alias has more than 64 levels of referece, please consider flatten the alias."),!1)}parseAlias(e,t=256){let a=0;for(;a<t;){let t=e.flatMap((e=>{var t,a;return null!==(a=null===(t=this.userAliases[e])||void 0===t?void 0:t.s)&&void 0!==a?a:e}));if(n.arrayEqual(e,t))return{parsed:t,status:0==a?"UNCHANGED":"PARSED"};e=t,a+=1}return{parsed:[`Error in parseAlias: Max alias depth exceeded :(${t}) times`],status:"ERROR"}}formatCmdTxt(e){if(""==e.trim())return;const t=e.split(" "),[a,...n]="alias"==t[0]?[t[0],t.slice(1).join(" ")]:this.parseAlias(t).parsed;return{command:a,params:n,status:this.parseAlias(t).status}}updateHistory(e){chrome.storage.sync.get("commandHistory",(({commandHistory:t})=>{const a=t.concat([e]).slice(-this.commandHistoryMaxLength);chrome.storage.sync.set({commandHistory:a}),this.setState({commandHistory:a,commandHistoryIndex:-1}),console.log("newHist : ",a)}))}run(e){if(null==this.formatCmdTxt(e))return;this.updateHistory(e);const{command:t,params:a}=this.formatCmdTxt(e);t in this.basicCmds?this.basicCmds[t].f(...a):this.echo.f(`${e} is not a command`)}}},593:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.arrayUnique=t.arrayEqual=void 0,t.arrayEqual=function(e,t){return e.length==t.length&&!e.find(((e,a)=>e!=t[a]))},t.arrayUnique=function(e){return[...new Set(e)]}}},a={};function n(e){var s=a[e];if(void 0!==s)return s.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,a,s,o)=>{if(!a){var r=1/0;for(u=0;u<e.length;u++){for(var[a,s,o]=e[u],i=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,s,o]},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=331,(()=>{var e={331:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var s,o,[r,i,l]=a,c=0;for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var u=l(n);for(t&&t(a);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[r[c]]=0;return n.O(u)},a=self.webpackChunkchrome_terminal=self.webpackChunkchrome_terminal||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=n.O(void 0,[736],(()=>n(264)));s=n.O(s)})();
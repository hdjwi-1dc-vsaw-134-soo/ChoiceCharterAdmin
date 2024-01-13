class w{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const I="https://unpkg.com/@workadventure/scripting-api-extra@1.4.8/dist";class oe{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new w(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(I+"/configuration.html"+e)}async function se(t,e){const r=await WA.room.getTiledMap(),n=new Map;return F(r.layers,n,t,e),n}function F(t,e,r,n){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(r&&o.name!==r||n&&!n.includes(s.name))continue;e.set(s.name,new oe(s))}}else o.type==="group"&&F(o.layers,e,r,n)}let j;async function T(){return j===void 0&&(j=ae()),j}async function ae(){return ie(await WA.room.getTiledMap())}function ie(t){const e=new Map;return J(t.layers,"",e),e}function J(t,e,r){for(const n of t)n.type==="group"?J(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}async function Q(){const t=await T(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const n of r.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function ue(t){let e=1/0,r=1/0,n=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),r=Math.min(r,a),n=Math.max(n,a));return{top:r,left:e,right:o+1,bottom:n+1}}function Z(t){let e=1/0,r=1/0,n=0,o=0;for(const s of t){const a=ue(s);a.left<e&&(e=a.left),a.top<r&&(r=a.top),a.right>o&&(o=a.right),a.bottom>n&&(n=a.bottom)}return{top:r,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,S=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function _(t){return typeof t=="function"}function le(t){return S(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(t,e){return t!=null&&typeof t=="object"&&e in t}function pe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var fe=RegExp.prototype.test;function ge(t,e){return fe.call(t,e)}var ye=/\S/;function de(t){return!ge(ye,t)}var he={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function me(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return he[r]})}var be=/\s*/,Ae=/\s+/,H=/\s*=/,We=/\s*\}/,ve=/#|\^|\/|>|\{|&|=|!/;function Le(t,e){if(!t)return[];var r=!1,n=[],o=[],s=[],a=!1,i=!1,u="",p=0;function y(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var m,A,k;function E(v){if(typeof v=="string"&&(v=v.split(Ae,2)),!S(v)||v.length!==2)throw new Error("Invalid tags: "+v);m=new RegExp(V(v[0])+"\\s*"),A=new RegExp("\\s*"+V(v[1])),k=new RegExp("\\s*"+V("}"+v[1]))}E(e||h.tags);for(var f=new x(t),W,c,b,C,B,L;!f.eos();){if(W=f.pos,b=f.scanUntil(m),b)for(var R=0,ne=b.length;R<ne;++R)C=b.charAt(R),de(C)?(s.push(o.length),u+=C):(i=!0,r=!0,u+=" "),o.push(["text",C,W,W+1]),W+=1,C===`
`&&(y(),u="",p=0,r=!1);if(!f.scan(m))break;if(a=!0,c=f.scan(ve)||"name",f.scan(be),c==="="?(b=f.scanUntil(H),f.scan(H),f.scanUntil(A)):c==="{"?(b=f.scanUntil(k),f.scan(We),f.scanUntil(A),c="&"):b=f.scanUntil(A),!f.scan(A))throw new Error("Unclosed tag at "+f.pos);if(c==">"?B=[c,b,W,f.pos,u,p,r]:B=[c,b,W,f.pos],p++,o.push(B),c==="#"||c==="^")n.push(B);else if(c==="/"){if(L=n.pop(),!L)throw new Error('Unopened section "'+b+'" at '+W);if(L[1]!==b)throw new Error('Unclosed section "'+L[1]+'" at '+W)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&E(b)}if(y(),L=n.pop(),L)throw new Error('Unclosed section "'+L[1]+'" at '+f.pos);return Pe(we(o))}function we(t){for(var e=[],r,n,o=0,s=t.length;o<s;++o)r=t[o],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function Pe(t){for(var e=[],r=e,n=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":r.push(o),n.push(o),r=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(o)}return e}function x(t){this.string=t,this.tail=t,this.pos=0}x.prototype.eos=function(){return this.tail===""};x.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};x.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function P(t,e){this.view=t,this.cache={".":this.view},this.parent=e}P.prototype.push=function(e){return new P(e,this)};P.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=N(s,a[i])||pe(s,a[i])),s=s[a[i++]];else s=o.view[e],u=N(o.view,e);if(u){n=s;break}o=o.parent}r[e]=n}return _(n)&&(n=n.call(this.view)),n};function d(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};d.prototype.parse=function(e,r){var n=this.templateCache,o=e+":"+(r||h.tags).join(":"),s=typeof n<"u",a=s?n.get(o):void 0;return a==null&&(a=Le(e,r),s&&n.set(o,a)),a};d.prototype.render=function(e,r,n,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=r instanceof P?r:new P(r,void 0);return this.renderTokens(a,i,n,e,o)};d.prototype.renderTokens=function(e,r,n,o,s){for(var a="",i,u,p,y=0,m=e.length;y<m;++y)p=void 0,i=e[y],u=i[0],u==="#"?p=this.renderSection(i,r,n,o,s):u==="^"?p=this.renderInverted(i,r,n,o,s):u===">"?p=this.renderPartial(i,r,n,s):u==="&"?p=this.unescapedValue(i,r):u==="name"?p=this.escapedValue(i,r,s):u==="text"&&(p=this.rawValue(i)),p!==void 0&&(a+=p);return a};d.prototype.renderSection=function(e,r,n,o,s){var a=this,i="",u=r.lookup(e[1]);function p(A){return a.render(A,r,n,s)}if(u){if(S(u))for(var y=0,m=u.length;y<m;++y)i+=this.renderTokens(e[4],r.push(u[y]),n,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],r.push(u),n,o,s);else if(_(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,o.slice(e[3],e[5]),p),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],r,n,o,s);return i}};d.prototype.renderInverted=function(e,r,n,o,s){var a=r.lookup(e[1]);if(!a||S(a)&&a.length===0)return this.renderTokens(e[4],r,n,o,s)};d.prototype.indentPartial=function(e,r,n){for(var o=r.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!n)&&(s[a]=o+s[a]);return s.join(`
`)};d.prototype.renderPartial=function(e,r,n,o){if(n){var s=this.getConfigTags(o),a=_(n)?n(e[1]):n[e[1]];if(a!=null){var i=e[6],u=e[5],p=e[4],y=a;u==0&&p&&(y=this.indentPartial(a,p,i));var m=this.parse(y,s);return this.renderTokens(m,r,n,y,o)}}};d.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};d.prototype.escapedValue=function(e,r,n){var o=this.getConfigEscape(n)||h.escape,s=r.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};d.prototype.rawValue=function(e){return e[1]};d.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};d.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new d;h.clearCache=function(){return M.clearCache()};h.parse=function(e,r){return M.parse(e,r)};h.render=function(e,r,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,r,n,o)};h.escape=me;h.Scanner=x;h.Context=P;h.Writer=d;class ee{constructor(e,r){this.template=e,this.state=r,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const o=n[0],s=n[1],a=n[4];["name","&","#","^"].includes(o)&&r.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,r)}}}async function Se(){var t;const e=await Q();for(const r of e){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new ee(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await q(r.name,o.name,a),s.onChange(async i=>{await q(r.name,o.name,i)})}}}async function Ee(){var t;const e=await T();for(const[r,n]of e.entries())if(n.type!=="objectgroup"){const o=(t=n.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new ee(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();K(r,s.name,i),a.onChange(u=>{K(r,s.name,u)})}}}async function q(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function K(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}let G,D=0,O=0;function $(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Ce(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=re(t.properties.mustGetString("openLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function Me(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=re(t.properties.mustGetString("closeLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function te(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(t){const e=te(t),r=Z(e),n=((r.right-r.left)/2+r.left)*32,o=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(D-n,2)+Math.pow(O-o,2))}function Te(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ce(t):Me(t),$(t)}),$(t)}function z(t,e,r,n){const o=t.name;let s,a,i=!1;const u=r.getString("tag");let p=!0;u&&!WA.player.tags.includes(u)&&(p=!1);const y=!!u;function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,A()}})}function A(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,m()}})}function k(){let c;if(t.type==="tilelayer")c=Z(te(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}a=WA.room.website.create({name:"doorKeypad"+o,url:n+"/keypad.html#"+encodeURIComponent(o),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function E(){a&&(WA.room.website.delete(a.name),a=void 0)}function f(){if(i=!0,r.getBoolean("autoOpen")&&p){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(y&&!p||!y)&&(r.getString("code")||r.getString("codeVariable"))){k();return}p&&(WA.state[e.name]?m():A())}function W(){i=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),E()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(W)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(W)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&m(),a&&WA.state[e.name]===!0&&E(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&A())})}function xe(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=Math.sqrt(Math.pow(t.x-D,2)+Math.pow(t.y-O,2));if(o>r)return;n=1-o/r}WA.sound.loadSound(e).play({volume:n})}function ke(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&xe(t)})}function X(t,e,r){let n;const o=e.getString("bellPopup");if(r.type==="tilelayer"){const s=r.name;WA.room.onEnterLayer(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{n&&(n.close(),n=void 0)})}else{const s=r.name;WA.room.area.onEnter(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{n&&(n.close(),n=void 0)})}}async function Be(t){t=t??I;const e=await se();G=await T();for(const r of e.values())r.properties.get("door")&&Te(r),r.properties.get("bell")&&ke(r);for(const r of G.values()){const n=new w(r.properties),o=n.getString("doorVariable");if(o&&r.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+r.name+'"');z(r,a,n,t)}const s=n.getString("bellVariable");s&&r.type==="tilelayer"&&X(s,n,r)}for(const r of await Q()){const n=new w(r.properties),o=n.getString("doorVariable");if(o){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+r.name+'"');z(r,a,n,t)}const s=n.getString("bellVariable");s&&X(s,n,r)}WA.player.onPlayerMove(r=>{D=r.x,O=r.y})}function Re(t,e){const r=t.getString("bindVariable");if(r){const n=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");je(r,e,n,o,s,a)}}function je(t,e,r,n,o,s){s&&!WA.player.tags.includes(s)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=n}))}async function Ve(){const t=await T();for(const e of t.values()){const r=new w(e.properties);Re(r,e.name)}}let Y;async function Ge(t){const e=await WA.room.getTiledMap();t=t??I,Y=await T();const r=e.layers.find(n=>n.name==="configuration");if(r){const o=new w(r.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of Y.values()){const a=new w(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ie(i.split(","),s.name,a)}}}function Ie(t,e,r){let n;const o=r.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=r.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=r.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),i()})}function _e(){return WA.onInit().then(()=>{Be().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Ee().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let l;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("clockZone").subscribe(()=>{const t=new Date,e=t.getHours()+":"+t.getMinutes();l=WA.ui.openPopup("clockPopup","It's "+e,[])}),WA.room.onEnterLayer("floor").subscribe(()=>{WA.room.hideLayer("roof"),WA.room.hideLayer("walls-bg-front"),WA.room.hideLayer("sign")}),WA.room.onLeaveLayer("floor").subscribe(()=>{WA.room.showLayer("roof"),WA.room.showLayer("walls-bg-front"),WA.room.showLayer("facade-furniture-bg"),WA.room.showLayer("sign")}),WA.room.onEnterLayer("rooms_floor").subscribe(()=>{WA.room.hideLayer("facade-furniture-fg"),WA.room.hideLayer("facade"),WA.room.hideLayer("facade-furniture-bg")}),WA.room.onLeaveLayer("rooms_floor").subscribe(()=>{WA.room.showLayer("facade-furniture-fg"),WA.room.showLayer("facade"),WA.room.showLayer("facade-furniture-bg")}),WA.room.onEnterLayer("snow_zone").subscribe(()=>{WA.room.showLayer("snow-on")}),WA.room.onLeaveLayer("snow_zone").subscribe(()=>{WA.room.hideLayer("snow-on")}),WA.room.onEnterLayer("message-1").subscribe(()=>{l=WA.ui.openPopup("Addon1Pop","Agriculture",[])}),WA.room.onLeaveLayer("message-1").subscribe(g),WA.room.onEnterLayer("message1").subscribe(()=>{l=WA.ui.openPopup("Addon1xPop","Agriculture",[])}),WA.room.onLeaveLayer("message1").subscribe(g),WA.room.onEnterLayer("message-2").subscribe(()=>{l=WA.ui.openPopup("Addon2Pop","Engineering",[])}),WA.room.onLeaveLayer("message-2").subscribe(g),WA.room.onEnterLayer("message2").subscribe(()=>{l=WA.ui.openPopup("Addon2xPop","Engineering",[])}),WA.room.onLeaveLayer("message2").subscribe(g),WA.room.onEnterLayer("message-3").subscribe(()=>{l=WA.ui.openPopup("Addon3Pop","Human Services",[])}),WA.room.onLeaveLayer("message-3").subscribe(g),WA.room.onEnterLayer("message3").subscribe(()=>{l=WA.ui.openPopup("Addon3xPop","Human Services",[])}),WA.room.onLeaveLayer("message3").subscribe(g),WA.room.onEnterLayer("message-4").subscribe(()=>{l=WA.ui.openPopup("Addon4Pop","Business",[])}),WA.room.onLeaveLayer("message-4").subscribe(g),WA.room.onEnterLayer("message4").subscribe(()=>{l=WA.ui.openPopup("Addon4xPop","Business",[])}),WA.room.onLeaveLayer("message4").subscribe(g),WA.room.onEnterLayer("message-5").subscribe(()=>{l=WA.ui.openPopup("Addon5Pop","Health Sciences",[])}),WA.room.onLeaveLayer("message-5").subscribe(g),WA.room.onEnterLayer("message5").subscribe(()=>{l=WA.ui.openPopup("Addon5xPop","Health Sciences",[])}),WA.room.onLeaveLayer("message5").subscribe(g),WA.room.onEnterLayer("message-6").subscribe(()=>{l=WA.ui.openPopup("Addon6Pop","Information Systems",[])}),WA.room.onLeaveLayer("message-6").subscribe(g),WA.room.onEnterLayer("message6").subscribe(()=>{l=WA.ui.openPopup("Addon6xPop","Information Systems",[])}),WA.room.onLeaveLayer("message6").subscribe(g),WA.room.onEnterLayer("message-7").subscribe(()=>{l=WA.ui.openPopup("Addon7Pop","Cobra Connections Rooms 11-20",[])}),WA.room.onLeaveLayer("message-7").subscribe(g),WA.room.onEnterLayer("message-8").subscribe(()=>{l=WA.ui.openPopup("Addon8Pop","Cobra Connections Rooms 1-10",[])}),WA.room.onLeaveLayer("message-8").subscribe(g),WA.room.onEnterLayer("message-9").subscribe(()=>{l=WA.ui.openPopup("Addon9Pop","Project Labs",[])}),WA.room.onLeaveLayer("message-9").subscribe(g),WA.room.onEnterLayer("message9").subscribe(()=>{l=WA.ui.openPopup("Addon9xPop","Project Labs",[])}),WA.room.onLeaveLayer("message9").subscribe(g),WA.room.onEnterLayer("message-10").subscribe(()=>{l=WA.ui.openPopup("Addon10xPop","Fitness Center",[])}),WA.room.onLeaveLayer("message-10").subscribe(g),WA.room.onEnterLayer("message10").subscribe(()=>{l=WA.ui.openPopup("Addon10Pop","Fitness Center",[])}),WA.room.onLeaveLayer("message10").subscribe(g),WA.room.onEnterLayer("message-11").subscribe(()=>{l=WA.ui.openPopup("Addon11Pop","Amphitheater",[])}),WA.room.onLeaveLayer("message-11").subscribe(g),WA.room.onEnterLayer("memorial_tree_sign").subscribe(()=>{l=WA.ui.openPopup("memorial-tree-popup","Honoring Gary Morris",[])}),WA.room.onLeaveLayer("memorial_tree_sign").subscribe(g),WA.room.onLeaveLayer("clockZone").subscribe(g),_e().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function g(){l!==void 0&&(l.close(),l=void 0)}

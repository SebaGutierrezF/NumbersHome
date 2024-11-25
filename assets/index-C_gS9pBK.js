(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const y of c)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&h(E)}).observe(document,{childList:!0,subtree:!0});function s(c){const y={};return c.integrity&&(y.integrity=c.integrity),c.referrerPolicy&&(y.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?y.credentials="include":c.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function h(c){if(c.ep)return;c.ep=!0;const y=s(c);fetch(c.href,y)}})();var ei={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=function(r){const n=[];let s=0;for(let h=0;h<r.length;h++){let c=r.charCodeAt(h);c<128?n[s++]=c:c<2048?(n[s++]=c>>6|192,n[s++]=c&63|128):(c&64512)===55296&&h+1<r.length&&(r.charCodeAt(h+1)&64512)===56320?(c=65536+((c&1023)<<10)+(r.charCodeAt(++h)&1023),n[s++]=c>>18|240,n[s++]=c>>12&63|128,n[s++]=c>>6&63|128,n[s++]=c&63|128):(n[s++]=c>>12|224,n[s++]=c>>6&63|128,n[s++]=c&63|128)}return n},wr=function(r){const n=[];let s=0,h=0;for(;s<r.length;){const c=r[s++];if(c<128)n[h++]=String.fromCharCode(c);else if(c>191&&c<224){const y=r[s++];n[h++]=String.fromCharCode((c&31)<<6|y&63)}else if(c>239&&c<365){const y=r[s++],E=r[s++],_=r[s++],T=((c&7)<<18|(y&63)<<12|(E&63)<<6|_&63)-65536;n[h++]=String.fromCharCode(55296+(T>>10)),n[h++]=String.fromCharCode(56320+(T&1023))}else{const y=r[s++],E=r[s++];n[h++]=String.fromCharCode((c&15)<<12|(y&63)<<6|E&63)}}return n.join("")},Ai={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,h=[];for(let c=0;c<r.length;c+=3){const y=r[c],E=c+1<r.length,_=E?r[c+1]:0,T=c+2<r.length,I=T?r[c+2]:0,G=y>>2,H=(y&3)<<4|_>>4;let P=(_&15)<<2|I>>6,X=I&63;T||(X=64,E||(P=64)),h.push(s[G],s[H],s[P],s[X])}return h.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(Ii(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):wr(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const s=n?this.charToByteMapWebSafe_:this.charToByteMap_,h=[];for(let c=0;c<r.length;){const y=s[r.charAt(c++)],_=c<r.length?s[r.charAt(c)]:0;++c;const I=c<r.length?s[r.charAt(c)]:64;++c;const H=c<r.length?s[r.charAt(c)]:64;if(++c,y==null||_==null||I==null||H==null)throw new Tr;const P=y<<2|_>>4;if(h.push(P),I!==64){const X=_<<4&240|I>>2;if(h.push(X),H!==64){const S=I<<6&192|H;h.push(S)}}}return h},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Tr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(r){const n=Ii(r);return Ai.encodeByteArray(n,!0)},ce=function(r){return Ir(r).replace(/\./g,"")},Ar=function(r){try{return Ai.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=()=>br().__FIREBASE_DEFAULTS__,Dr=()=>{if(typeof process>"u"||typeof ei>"u")return;const r=ei.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Cr=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&Ar(r[1]);return n&&JSON.parse(n)},bi=()=>{try{return Sr()||Dr()||Cr()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Rr=r=>{var n,s;return(s=(n=bi())===null||n===void 0?void 0:n.emulatorHosts)===null||s===void 0?void 0:s[r]},Pr=r=>{const n=Rr(r);if(!n)return;const s=n.lastIndexOf(":");if(s<=0||s+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const h=parseInt(n.substring(s+1),10);return n[0]==="["?[n.substring(1,s-1),h]:[n.substring(0,s),h]},Si=()=>{var r;return(r=bi())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}wrapCallback(n){return(s,h)=>{s?this.reject(s):this.resolve(h),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(s):n(s,h))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(r,n){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},h=n||"demo-project",c=r.iat||0,y=r.sub||r.user_id;if(!y)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const E=Object.assign({iss:`https://securetoken.google.com/${h}`,aud:h,iat:c,exp:c+3600,auth_time:c,sub:y,user_id:y,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ce(JSON.stringify(s)),ce(JSON.stringify(E)),""].join(".")}function Lr(){try{return typeof indexedDB=="object"}catch{return!1}}function kr(){return new Promise((r,n)=>{try{let s=!0;const h="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(h);c.onsuccess=()=>{c.result.close(),s||self.indexedDB.deleteDatabase(h),r(!0)},c.onupgradeneeded=()=>{s=!1},c.onerror=()=>{var y;n(((y=c.error)===null||y===void 0?void 0:y.message)||"")}}catch(s){n(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirebaseError";class It extends Error{constructor(n,s,h){super(s),this.code=n,this.customData=h,this.name=Mr,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(n,s,h){this.service=n,this.serviceName=s,this.errors=h}create(n,...s){const h=s[0]||{},c=`${this.service}/${n}`,y=this.errors[n],E=y?Br(y,h):"Error",_=`${this.serviceName}: ${E} (${c}).`;return new It(c,_,h)}}function Br(r,n){return r.replace(xr,(s,h)=>{const c=n[h];return c!=null?String(c):`<${h}?>`})}const xr=/\{\$([^}]+)}/g;function Xe(r,n){if(r===n)return!0;const s=Object.keys(r),h=Object.keys(n);for(const c of s){if(!h.includes(c))return!1;const y=r[c],E=n[c];if(ni(y)&&ni(E)){if(!Xe(y,E))return!1}else if(y!==E)return!1}for(const c of h)if(!s.includes(c))return!1;return!0}function ni(r){return r!==null&&typeof r=="object"}class Vt{constructor(n,s,h){this.name=n,this.instanceFactory=s,this.type=h,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(n,s){this.name=n,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const s=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(s)){const h=new Or;if(this.instancesDeferred.set(s,h),this.isInitialized(s)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:s});c&&h.resolve(c)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(n){var s;const h=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),c=(s=n==null?void 0:n.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(h)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:h})}catch(y){if(c)return null;throw y}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(Ur(n))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[s,h]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);try{const y=this.getOrInitializeService({instanceIdentifier:c});h.resolve(y)}catch{}}}}clearInstance(n=dt){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...n.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=dt){return this.instances.has(n)}getOptions(n=dt){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:s={}}=n,h=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(h))throw Error(`${this.name}(${h}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:h,options:s});for(const[y,E]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(y);h===_&&E.resolve(c)}return c}onInit(n,s){var h;const c=this.normalizeInstanceIdentifier(s),y=(h=this.onInitCallbacks.get(c))!==null&&h!==void 0?h:new Set;y.add(n),this.onInitCallbacks.set(c,y);const E=this.instances.get(c);return E&&n(E,c),()=>{y.delete(n)}}invokeOnInitCallbacks(n,s){const h=this.onInitCallbacks.get(s);if(h)for(const c of h)try{c(n,s)}catch{}}getOrInitializeService({instanceIdentifier:n,options:s={}}){let h=this.instances.get(n);if(!h&&this.component&&(h=this.component.instanceFactory(this.container,{instanceIdentifier:Fr(n),options:s}),this.instances.set(n,h),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(h,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,h)}catch{}return h||null}normalizeInstanceIdentifier(n=dt){return this.component?this.component.multipleInstances?n:dt:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fr(r){return r===dt?void 0:r}function Ur(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const s=this.getProvider(n.name);if(s.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);s.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const s=new jr(n,this);return this.providers.set(n,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(D||(D={}));const Hr={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Vr=D.INFO,zr={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Gr=(r,n,...s)=>{if(n<r.logLevel)return;const h=new Date().toISOString(),c=zr[n];if(c)console[c](`[${h}]  ${r.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Ci{constructor(n){this.name=n,this._logLevel=Vr,this._logHandler=Gr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in D))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Hr[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...n),this._logHandler(this,D.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...n),this._logHandler(this,D.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,D.INFO,...n),this._logHandler(this,D.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,D.WARN,...n),this._logHandler(this,D.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...n),this._logHandler(this,D.ERROR,...n)}}const Xr=(r,n)=>n.some(s=>r instanceof s);let ii,ri;function Wr(){return ii||(ii=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kr(){return ri||(ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ri=new WeakMap,We=new WeakMap,Pi=new WeakMap,$e=new WeakMap,Qe=new WeakMap;function qr(r){const n=new Promise((s,h)=>{const c=()=>{r.removeEventListener("success",y),r.removeEventListener("error",E)},y=()=>{s(lt(r.result)),c()},E=()=>{h(r.error),c()};r.addEventListener("success",y),r.addEventListener("error",E)});return n.then(s=>{s instanceof IDBCursor&&Ri.set(s,r)}).catch(()=>{}),Qe.set(n,r),n}function Jr(r){if(We.has(r))return;const n=new Promise((s,h)=>{const c=()=>{r.removeEventListener("complete",y),r.removeEventListener("error",E),r.removeEventListener("abort",E)},y=()=>{s(),c()},E=()=>{h(r.error||new DOMException("AbortError","AbortError")),c()};r.addEventListener("complete",y),r.addEventListener("error",E),r.addEventListener("abort",E)});We.set(r,n)}let Ke={get(r,n,s){if(r instanceof IDBTransaction){if(n==="done")return We.get(r);if(n==="objectStoreNames")return r.objectStoreNames||Pi.get(r);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return lt(r[n])},set(r,n,s){return r[n]=s,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function Yr(r){Ke=r(Ke)}function Qr(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...s){const h=r.call(He(this),n,...s);return Pi.set(h,n.sort?n.sort():[n]),lt(h)}:Kr().includes(r)?function(...n){return r.apply(He(this),n),lt(Ri.get(this))}:function(...n){return lt(r.apply(He(this),n))}}function Zr(r){return typeof r=="function"?Qr(r):(r instanceof IDBTransaction&&Jr(r),Xr(r,Wr())?new Proxy(r,Ke):r)}function lt(r){if(r instanceof IDBRequest)return qr(r);if($e.has(r))return $e.get(r);const n=Zr(r);return n!==r&&($e.set(r,n),Qe.set(n,r)),n}const He=r=>Qe.get(r);function ts(r,n,{blocked:s,upgrade:h,blocking:c,terminated:y}={}){const E=indexedDB.open(r,n),_=lt(E);return h&&E.addEventListener("upgradeneeded",T=>{h(lt(E.result),T.oldVersion,T.newVersion,lt(E.transaction),T)}),s&&E.addEventListener("blocked",T=>s(T.oldVersion,T.newVersion,T)),_.then(T=>{y&&T.addEventListener("close",()=>y()),c&&T.addEventListener("versionchange",I=>c(I.oldVersion,I.newVersion,I))}).catch(()=>{}),_}const es=["get","getKey","getAll","getAllKeys","count"],ns=["put","add","delete","clear"],Ve=new Map;function si(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(Ve.get(n))return Ve.get(n);const s=n.replace(/FromIndex$/,""),h=n!==s,c=ns.includes(s);if(!(s in(h?IDBIndex:IDBObjectStore).prototype)||!(c||es.includes(s)))return;const y=async function(E,..._){const T=this.transaction(E,c?"readwrite":"readonly");let I=T.store;return h&&(I=I.index(_.shift())),(await Promise.all([I[s](..._),c&&T.done]))[0]};return Ve.set(n,y),y}Yr(r=>({...r,get:(n,s,h)=>si(n,s)||r.get(n,s,h),has:(n,s)=>!!si(n,s)||r.has(n,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(rs(s)){const h=s.getImmediate();return`${h.library}/${h.version}`}else return null}).filter(s=>s).join(" ")}}function rs(r){const n=r.getComponent();return(n==null?void 0:n.type)==="VERSION"}const qe="@firebase/app",oi="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new Ci("@firebase/app"),ss="@firebase/app-compat",os="@firebase/analytics-compat",hs="@firebase/analytics",as="@firebase/app-check-compat",ls="@firebase/app-check",cs="@firebase/auth",us="@firebase/auth-compat",fs="@firebase/database",ps="@firebase/data-connect",ds="@firebase/database-compat",gs="@firebase/functions",ms="@firebase/functions-compat",ys="@firebase/installations",vs="@firebase/installations-compat",Es="@firebase/messaging",_s="@firebase/messaging-compat",ws="@firebase/performance",Ts="@firebase/performance-compat",Is="@firebase/remote-config",As="@firebase/remote-config-compat",bs="@firebase/storage",Ss="@firebase/storage-compat",Ds="@firebase/firestore",Cs="@firebase/vertexai",Rs="@firebase/firestore-compat",Ps="firebase",Os="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="[DEFAULT]",Ns={[qe]:"fire-core",[ss]:"fire-core-compat",[hs]:"fire-analytics",[os]:"fire-analytics-compat",[ls]:"fire-app-check",[as]:"fire-app-check-compat",[cs]:"fire-auth",[us]:"fire-auth-compat",[fs]:"fire-rtdb",[ps]:"fire-data-connect",[ds]:"fire-rtdb-compat",[gs]:"fire-fn",[ms]:"fire-fn-compat",[ys]:"fire-iid",[vs]:"fire-iid-compat",[Es]:"fire-fcm",[_s]:"fire-fcm-compat",[ws]:"fire-perf",[Ts]:"fire-perf-compat",[Is]:"fire-rc",[As]:"fire-rc-compat",[bs]:"fire-gcs",[Ss]:"fire-gcs-compat",[Ds]:"fire-fst",[Rs]:"fire-fst-compat",[Cs]:"fire-vertex","fire-js":"fire-js",[Ps]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map,Ls=new Map,Ye=new Map;function hi(r,n){try{r.container.addComponent(n)}catch(s){nt.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,s)}}function fe(r){const n=r.name;if(Ye.has(n))return nt.debug(`There were multiple attempts to register component ${n}.`),!1;Ye.set(n,r);for(const s of ue.values())hi(s,r);for(const s of Ls.values())hi(s,r);return!0}function ks(r,n){const s=r.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),r.container.getProvider(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ct=new Di("app","Firebase",Ms);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(n,s,h){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=h,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=Os;function Oi(r,n={}){let s=r;typeof n!="object"&&(n={name:n});const h=Object.assign({name:Je,automaticDataCollectionEnabled:!1},n),c=h.name;if(typeof c!="string"||!c)throw ct.create("bad-app-name",{appName:String(c)});if(s||(s=Si()),!s)throw ct.create("no-options");const y=ue.get(c);if(y){if(Xe(s,y.options)&&Xe(h,y.config))return y;throw ct.create("duplicate-app",{appName:c})}const E=new $r(c);for(const T of Ye.values())E.addComponent(T);const _=new Bs(s,h,E);return ue.set(c,_),_}function js(r=Je){const n=ue.get(r);if(!n&&r===Je&&Si())return Oi();if(!n)throw ct.create("no-app",{appName:r});return n}function wt(r,n,s){var h;let c=(h=Ns[r])!==null&&h!==void 0?h:r;s&&(c+=`-${s}`);const y=c.match(/\s|\//),E=n.match(/\s|\//);if(y||E){const _=[`Unable to register library "${c}" with version "${n}":`];y&&_.push(`library name "${c}" contains illegal characters (whitespace or "/")`),y&&E&&_.push("and"),E&&_.push(`version name "${n}" contains illegal characters (whitespace or "/")`),nt.warn(_.join(" "));return}fe(new Vt(`${c}-version`,()=>({library:c,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="firebase-heartbeat-database",Us=1,zt="firebase-heartbeat-store";let ze=null;function Ni(){return ze||(ze=ts(Fs,Us,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(zt)}catch(s){console.warn(s)}}}}).catch(r=>{throw ct.create("idb-open",{originalErrorMessage:r.message})})),ze}async function $s(r){try{const s=(await Ni()).transaction(zt),h=await s.objectStore(zt).get(Li(r));return await s.done,h}catch(n){if(n instanceof It)nt.warn(n.message);else{const s=ct.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});nt.warn(s.message)}}}async function ai(r,n){try{const h=(await Ni()).transaction(zt,"readwrite");await h.objectStore(zt).put(n,Li(r)),await h.done}catch(s){if(s instanceof It)nt.warn(s.message);else{const h=ct.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});nt.warn(h.message)}}}function Li(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=1024,Vs=30*24*60*60*1e3;class zs{constructor(n){this.container=n,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Xs(s),this._heartbeatsCachePromise=this._storage.read().then(h=>(this._heartbeatsCache=h,h))}async triggerHeartbeat(){var n,s;try{const c=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),y=li();return((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===y||this._heartbeatsCache.heartbeats.some(E=>E.date===y)?void 0:(this._heartbeatsCache.heartbeats.push({date:y,agent:c}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(E=>{const _=new Date(E.date).valueOf();return Date.now()-_<=Vs}),this._storage.overwrite(this._heartbeatsCache))}catch(h){nt.warn(h)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=li(),{heartbeatsToSend:h,unsentEntries:c}=Gs(this._heartbeatsCache.heartbeats),y=ce(JSON.stringify({version:2,heartbeats:h}));return this._heartbeatsCache.lastSentHeartbeatDate=s,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),y}catch(s){return nt.warn(s),""}}}function li(){return new Date().toISOString().substring(0,10)}function Gs(r,n=Hs){const s=[];let h=r.slice();for(const c of r){const y=s.find(E=>E.agent===c.agent);if(y){if(y.dates.push(c.date),ci(s)>n){y.dates.pop();break}}else if(s.push({agent:c.agent,dates:[c.date]}),ci(s)>n){s.pop();break}h=h.slice(1)}return{heartbeatsToSend:s,unsentEntries:h}}class Xs{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lr()?kr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await $s(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var s;if(await this._canUseIndexedDBPromise){const c=await this.read();return ai(this.app,{lastSentHeartbeatDate:(s=n.lastSentHeartbeatDate)!==null&&s!==void 0?s:c.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var s;if(await this._canUseIndexedDBPromise){const c=await this.read();return ai(this.app,{lastSentHeartbeatDate:(s=n.lastSentHeartbeatDate)!==null&&s!==void 0?s:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...n.heartbeats]})}else return}}function ci(r){return ce(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(r){fe(new Vt("platform-logger",n=>new is(n),"PRIVATE")),fe(new Vt("heartbeat",n=>new zs(n),"PRIVATE")),wt(qe,oi,r),wt(qe,oi,"esm2017"),wt("fire-js","")}Ws("");var Ks="firebase",qs="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(Ks,qs,"app");var ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function n(d,a){function u(){}u.prototype=a.prototype,d.D=a.prototype,d.prototype=new u,d.prototype.constructor=d,d.C=function(f,p,m){for(var l=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)l[Z-2]=arguments[Z];return a.prototype[p].apply(f,l)}}function s(){this.blockSize=-1}function h(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}n(h,s),h.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function c(d,a,u){u||(u=0);var f=Array(16);if(typeof a=="string")for(var p=0;16>p;++p)f[p]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;else for(p=0;16>p;++p)f[p]=a[u++]|a[u++]<<8|a[u++]<<16|a[u++]<<24;a=d.g[0],u=d.g[1],p=d.g[2];var m=d.g[3],l=a+(m^u&(p^m))+f[0]+3614090360&4294967295;a=u+(l<<7&4294967295|l>>>25),l=m+(p^a&(u^p))+f[1]+3905402710&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(u^m&(a^u))+f[2]+606105819&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(a^p&(m^a))+f[3]+3250441966&4294967295,u=p+(l<<22&4294967295|l>>>10),l=a+(m^u&(p^m))+f[4]+4118548399&4294967295,a=u+(l<<7&4294967295|l>>>25),l=m+(p^a&(u^p))+f[5]+1200080426&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(u^m&(a^u))+f[6]+2821735955&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(a^p&(m^a))+f[7]+4249261313&4294967295,u=p+(l<<22&4294967295|l>>>10),l=a+(m^u&(p^m))+f[8]+1770035416&4294967295,a=u+(l<<7&4294967295|l>>>25),l=m+(p^a&(u^p))+f[9]+2336552879&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(u^m&(a^u))+f[10]+4294925233&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(a^p&(m^a))+f[11]+2304563134&4294967295,u=p+(l<<22&4294967295|l>>>10),l=a+(m^u&(p^m))+f[12]+1804603682&4294967295,a=u+(l<<7&4294967295|l>>>25),l=m+(p^a&(u^p))+f[13]+4254626195&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(u^m&(a^u))+f[14]+2792965006&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(a^p&(m^a))+f[15]+1236535329&4294967295,u=p+(l<<22&4294967295|l>>>10),l=a+(p^m&(u^p))+f[1]+4129170786&4294967295,a=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(a^u))+f[6]+3225465664&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^u&(m^a))+f[11]+643717713&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^a&(p^m))+f[0]+3921069994&4294967295,u=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(u^p))+f[5]+3593408605&4294967295,a=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(a^u))+f[10]+38016083&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^u&(m^a))+f[15]+3634488961&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^a&(p^m))+f[4]+3889429448&4294967295,u=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(u^p))+f[9]+568446438&4294967295,a=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(a^u))+f[14]+3275163606&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^u&(m^a))+f[3]+4107603335&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^a&(p^m))+f[8]+1163531501&4294967295,u=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(u^p))+f[13]+2850285829&4294967295,a=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(a^u))+f[2]+4243563512&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^u&(m^a))+f[7]+1735328473&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^a&(p^m))+f[12]+2368359562&4294967295,u=p+(l<<20&4294967295|l>>>12),l=a+(u^p^m)+f[5]+4294588738&4294967295,a=u+(l<<4&4294967295|l>>>28),l=m+(a^u^p)+f[8]+2272392833&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^u)+f[11]+1839030562&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^a)+f[14]+4259657740&4294967295,u=p+(l<<23&4294967295|l>>>9),l=a+(u^p^m)+f[1]+2763975236&4294967295,a=u+(l<<4&4294967295|l>>>28),l=m+(a^u^p)+f[4]+1272893353&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^u)+f[7]+4139469664&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^a)+f[10]+3200236656&4294967295,u=p+(l<<23&4294967295|l>>>9),l=a+(u^p^m)+f[13]+681279174&4294967295,a=u+(l<<4&4294967295|l>>>28),l=m+(a^u^p)+f[0]+3936430074&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^u)+f[3]+3572445317&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^a)+f[6]+76029189&4294967295,u=p+(l<<23&4294967295|l>>>9),l=a+(u^p^m)+f[9]+3654602809&4294967295,a=u+(l<<4&4294967295|l>>>28),l=m+(a^u^p)+f[12]+3873151461&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^u)+f[15]+530742520&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^a)+f[2]+3299628645&4294967295,u=p+(l<<23&4294967295|l>>>9),l=a+(p^(u|~m))+f[0]+4096336452&4294967295,a=u+(l<<6&4294967295|l>>>26),l=m+(u^(a|~p))+f[7]+1126891415&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~u))+f[14]+2878612391&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~a))+f[5]+4237533241&4294967295,u=p+(l<<21&4294967295|l>>>11),l=a+(p^(u|~m))+f[12]+1700485571&4294967295,a=u+(l<<6&4294967295|l>>>26),l=m+(u^(a|~p))+f[3]+2399980690&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~u))+f[10]+4293915773&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~a))+f[1]+2240044497&4294967295,u=p+(l<<21&4294967295|l>>>11),l=a+(p^(u|~m))+f[8]+1873313359&4294967295,a=u+(l<<6&4294967295|l>>>26),l=m+(u^(a|~p))+f[15]+4264355552&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~u))+f[6]+2734768916&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~a))+f[13]+1309151649&4294967295,u=p+(l<<21&4294967295|l>>>11),l=a+(p^(u|~m))+f[4]+4149444226&4294967295,a=u+(l<<6&4294967295|l>>>26),l=m+(u^(a|~p))+f[11]+3174756917&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~u))+f[2]+718787259&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~a))+f[9]+3951481745&4294967295,d.g[0]=d.g[0]+a&4294967295,d.g[1]=d.g[1]+(p+(l<<21&4294967295|l>>>11))&4294967295,d.g[2]=d.g[2]+p&4294967295,d.g[3]=d.g[3]+m&4294967295}h.prototype.u=function(d,a){a===void 0&&(a=d.length);for(var u=a-this.blockSize,f=this.B,p=this.h,m=0;m<a;){if(p==0)for(;m<=u;)c(this,d,m),m+=this.blockSize;if(typeof d=="string"){for(;m<a;)if(f[p++]=d.charCodeAt(m++),p==this.blockSize){c(this,f),p=0;break}}else for(;m<a;)if(f[p++]=d[m++],p==this.blockSize){c(this,f),p=0;break}}this.h=p,this.o+=a},h.prototype.v=function(){var d=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);d[0]=128;for(var a=1;a<d.length-8;++a)d[a]=0;var u=8*this.o;for(a=d.length-8;a<d.length;++a)d[a]=u&255,u/=256;for(this.u(d),d=Array(16),a=u=0;4>a;++a)for(var f=0;32>f;f+=8)d[u++]=this.g[a]>>>f&255;return d};function y(d,a){var u=_;return Object.prototype.hasOwnProperty.call(u,d)?u[d]:u[d]=a(d)}function E(d,a){this.h=a;for(var u=[],f=!0,p=d.length-1;0<=p;p--){var m=d[p]|0;f&&m==a||(u[p]=m,f=!1)}this.g=u}var _={};function T(d){return-128<=d&&128>d?y(d,function(a){return new E([a|0],0>a?-1:0)}):new E([d|0],0>d?-1:0)}function I(d){if(isNaN(d)||!isFinite(d))return H;if(0>d)return N(I(-d));for(var a=[],u=1,f=0;d>=u;f++)a[f]=d/u|0,u*=4294967296;return new E(a,0)}function G(d,a){if(d.length==0)throw Error("number format error: empty string");if(a=a||10,2>a||36<a)throw Error("radix out of range: "+a);if(d.charAt(0)=="-")return N(G(d.substring(1),a));if(0<=d.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=I(Math.pow(a,8)),f=H,p=0;p<d.length;p+=8){var m=Math.min(8,d.length-p),l=parseInt(d.substring(p,p+m),a);8>m?(m=I(Math.pow(a,m)),f=f.j(m).add(I(l))):(f=f.j(u),f=f.add(I(l)))}return f}var H=T(0),P=T(1),X=T(16777216);r=E.prototype,r.m=function(){if(k(this))return-N(this).m();for(var d=0,a=1,u=0;u<this.g.length;u++){var f=this.i(u);d+=(0<=f?f:4294967296+f)*a,a*=4294967296}return d},r.toString=function(d){if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(S(this))return"0";if(k(this))return"-"+N(this).toString(d);for(var a=I(Math.pow(d,6)),u=this,f="";;){var p=it(u,a).g;u=gt(u,p.j(a));var m=((0<u.g.length?u.g[0]:u.h)>>>0).toString(d);if(u=p,S(u))return m+f;for(;6>m.length;)m="0"+m;f=m+f}},r.i=function(d){return 0>d?0:d<this.g.length?this.g[d]:this.h};function S(d){if(d.h!=0)return!1;for(var a=0;a<d.g.length;a++)if(d.g[a]!=0)return!1;return!0}function k(d){return d.h==-1}r.l=function(d){return d=gt(this,d),k(d)?-1:S(d)?0:1};function N(d){for(var a=d.g.length,u=[],f=0;f<a;f++)u[f]=~d.g[f];return new E(u,~d.h).add(P)}r.abs=function(){return k(this)?N(this):this},r.add=function(d){for(var a=Math.max(this.g.length,d.g.length),u=[],f=0,p=0;p<=a;p++){var m=f+(this.i(p)&65535)+(d.i(p)&65535),l=(m>>>16)+(this.i(p)>>>16)+(d.i(p)>>>16);f=l>>>16,m&=65535,l&=65535,u[p]=l<<16|m}return new E(u,u[u.length-1]&-2147483648?-1:0)};function gt(d,a){return d.add(N(a))}r.j=function(d){if(S(this)||S(d))return H;if(k(this))return k(d)?N(this).j(N(d)):N(N(this).j(d));if(k(d))return N(this.j(N(d)));if(0>this.l(X)&&0>d.l(X))return I(this.m()*d.m());for(var a=this.g.length+d.g.length,u=[],f=0;f<2*a;f++)u[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<d.g.length;p++){var m=this.i(f)>>>16,l=this.i(f)&65535,Z=d.i(p)>>>16,At=d.i(p)&65535;u[2*f+2*p]+=l*At,Y(u,2*f+2*p),u[2*f+2*p+1]+=m*At,Y(u,2*f+2*p+1),u[2*f+2*p+1]+=l*Z,Y(u,2*f+2*p+1),u[2*f+2*p+2]+=m*Z,Y(u,2*f+2*p+2)}for(f=0;f<a;f++)u[f]=u[2*f+1]<<16|u[2*f];for(f=a;f<2*a;f++)u[f]=0;return new E(u,0)};function Y(d,a){for(;(d[a]&65535)!=d[a];)d[a+1]+=d[a]>>>16,d[a]&=65535,a++}function W(d,a){this.g=d,this.h=a}function it(d,a){if(S(a))throw Error("division by zero");if(S(d))return new W(H,H);if(k(d))return a=it(N(d),a),new W(N(a.g),N(a.h));if(k(a))return a=it(d,N(a)),new W(N(a.g),a.h);if(30<d.g.length){if(k(d)||k(a))throw Error("slowDivide_ only works with positive integers.");for(var u=P,f=a;0>=f.l(d);)u=Xt(u),f=Xt(f);var p=Q(u,1),m=Q(f,1);for(f=Q(f,2),u=Q(u,2);!S(f);){var l=m.add(f);0>=l.l(d)&&(p=p.add(u),m=l),f=Q(f,1),u=Q(u,1)}return a=gt(d,p.j(a)),new W(p,a)}for(p=H;0<=d.l(a);){for(u=Math.max(1,Math.floor(d.m()/a.m())),f=Math.ceil(Math.log(u)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),m=I(u),l=m.j(a);k(l)||0<l.l(d);)u-=f,m=I(u),l=m.j(a);S(m)&&(m=P),p=p.add(m),d=gt(d,l)}return new W(p,d)}r.A=function(d){return it(this,d).h},r.and=function(d){for(var a=Math.max(this.g.length,d.g.length),u=[],f=0;f<a;f++)u[f]=this.i(f)&d.i(f);return new E(u,this.h&d.h)},r.or=function(d){for(var a=Math.max(this.g.length,d.g.length),u=[],f=0;f<a;f++)u[f]=this.i(f)|d.i(f);return new E(u,this.h|d.h)},r.xor=function(d){for(var a=Math.max(this.g.length,d.g.length),u=[],f=0;f<a;f++)u[f]=this.i(f)^d.i(f);return new E(u,this.h^d.h)};function Xt(d){for(var a=d.g.length+1,u=[],f=0;f<a;f++)u[f]=d.i(f)<<1|d.i(f-1)>>>31;return new E(u,d.h)}function Q(d,a){var u=a>>5;a%=32;for(var f=d.g.length-u,p=[],m=0;m<f;m++)p[m]=0<a?d.i(m+u)>>>a|d.i(m+u+1)<<32-a:d.i(m+u);return new E(p,d.h)}h.prototype.digest=h.prototype.v,h.prototype.reset=h.prototype.s,h.prototype.update=h.prototype.u,E.prototype.add=E.prototype.add,E.prototype.multiply=E.prototype.j,E.prototype.modulo=E.prototype.A,E.prototype.compare=E.prototype.l,E.prototype.toNumber=E.prototype.m,E.prototype.toString=E.prototype.toString,E.prototype.getBits=E.prototype.i,E.fromNumber=I,E.fromString=G,ki=E}).apply(typeof ui<"u"?ui:typeof self<"u"?self:typeof window<"u"?window:{});var le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,n=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,i){return t==Array.prototype||t==Object.prototype||(t[e]=i.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof le=="object"&&le];for(var e=0;e<t.length;++e){var i=t[e];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var h=s(this);function c(t,e){if(e)t:{var i=h;t=t.split(".");for(var o=0;o<t.length-1;o++){var g=t[o];if(!(g in i))break t;i=i[g]}t=t[t.length-1],o=i[t],e=e(o),e!=o&&e!=null&&n(i,t,{configurable:!0,writable:!0,value:e})}}function y(t,e){t instanceof String&&(t+="");var i=0,o=!1,g={next:function(){if(!o&&i<t.length){var v=i++;return{value:e(v,t[v]),done:!1}}return o=!0,{done:!0,value:void 0}}};return g[Symbol.iterator]=function(){return g},g}c("Array.prototype.values",function(t){return t||function(){return y(this,function(e,i){return i})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var E=E||{},_=this||self;function T(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function I(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function G(t,e,i){return t.call.apply(t.bind,arguments)}function H(t,e,i){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var g=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(g,o),t.apply(e,g)}}return function(){return t.apply(e,arguments)}}function P(t,e,i){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G:H,P.apply(null,arguments)}function X(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var o=i.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function S(t,e){function i(){}i.prototype=e.prototype,t.aa=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Qb=function(o,g,v){for(var w=Array(arguments.length-2),C=2;C<arguments.length;C++)w[C-2]=arguments[C];return e.prototype[g].apply(o,w)}}function k(t){const e=t.length;if(0<e){const i=Array(e);for(let o=0;o<e;o++)i[o]=t[o];return i}return[]}function N(t,e){for(let i=1;i<arguments.length;i++){const o=arguments[i];if(T(o)){const g=t.length||0,v=o.length||0;t.length=g+v;for(let w=0;w<v;w++)t[g+w]=o[w]}else t.push(o)}}class gt{constructor(e,i){this.i=e,this.j=i,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Y(t){return/^[\s\xa0]*$/.test(t)}function W(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function it(t){return it[" "](t),t}it[" "]=function(){};var Xt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function Q(t,e,i){for(const o in t)e.call(i,t[o],o,t)}function d(t,e){for(const i in t)e.call(void 0,t[i],i,t)}function a(t){const e={};for(const i in t)e[i]=t[i];return e}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,e){let i,o;for(let g=1;g<arguments.length;g++){o=arguments[g];for(i in o)t[i]=o[i];for(let v=0;v<u.length;v++)i=u[v],Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}}function p(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function m(t){_.setTimeout(()=>{throw t},0)}function l(){var t=ge;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Z{constructor(){this.h=this.g=null}add(e,i){const o=At.get();o.set(e,i),this.h?this.h.next=o:this.g=o,this.h=o}}var At=new gt(()=>new ji,t=>t.reset());class ji{constructor(){this.next=this.g=this.h=null}set(e,i){this.h=e,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,St=!1,ge=new Z,nn=()=>{const t=_.Promise.resolve(void 0);bt=()=>{t.then(Fi)}};var Fi=()=>{for(var t;t=l();){try{t.h.call(t.g)}catch(i){m(i)}var e=At;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}St=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var Ui=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};_.addEventListener("test",i,e),_.removeEventListener("test",i,e)}catch{}return t}();function Dt(t,e){if(M.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xt){t:{try{it(e.nodeName);var g=!0;break t}catch{}g=!1}g||(e=null)}}else i=="mouseover"?e=t.fromElement:i=="mouseout"&&(e=t.toElement);this.relatedTarget=e,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$i[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Dt.aa.h.call(this)}}S(Dt,M);var $i={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),Hi=0;function Vi(t,e,i,o,g){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!o,this.ha=g,this.key=++Hi,this.da=this.fa=!1}function Kt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qt(t){this.src=t,this.g={},this.h=0}qt.prototype.add=function(t,e,i,o,g){var v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);var w=ye(t,e,o,g);return-1<w?(e=t[w],i||(e.fa=!1)):(e=new Vi(e,this.src,v,!!o,g),e.fa=i,t.push(e)),e};function me(t,e){var i=e.type;if(i in t.g){var o=t.g[i],g=Array.prototype.indexOf.call(o,e,void 0),v;(v=0<=g)&&Array.prototype.splice.call(o,g,1),v&&(Kt(e),t.g[i].length==0&&(delete t.g[i],t.h--))}}function ye(t,e,i,o){for(var g=0;g<t.length;++g){var v=t[g];if(!v.da&&v.listener==e&&v.capture==!!i&&v.ha==o)return g}return-1}var ve="closure_lm_"+(1e6*Math.random()|0),Ee={};function rn(t,e,i,o,g){if(Array.isArray(e)){for(var v=0;v<e.length;v++)rn(t,e[v],i,o,g);return null}return i=hn(i),t&&t[Wt]?t.K(e,i,I(o)?!!o.capture:!!o,g):zi(t,e,i,!1,o,g)}function zi(t,e,i,o,g,v){if(!e)throw Error("Invalid event type");var w=I(g)?!!g.capture:!!g,C=we(t);if(C||(t[ve]=C=new qt(t)),i=C.add(e,i,o,w,v),i.proxy)return i;if(o=Gi(),i.proxy=o,o.src=t,o.listener=i,t.addEventListener)Ui||(g=w),g===void 0&&(g=!1),t.addEventListener(e.toString(),o,g);else if(t.attachEvent)t.attachEvent(on(e.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return i}function Gi(){function t(i){return e.call(t.src,t.listener,i)}const e=Xi;return t}function sn(t,e,i,o,g){if(Array.isArray(e))for(var v=0;v<e.length;v++)sn(t,e[v],i,o,g);else o=I(o)?!!o.capture:!!o,i=hn(i),t&&t[Wt]?(t=t.i,e=String(e).toString(),e in t.g&&(v=t.g[e],i=ye(v,i,o,g),-1<i&&(Kt(v[i]),Array.prototype.splice.call(v,i,1),v.length==0&&(delete t.g[e],t.h--)))):t&&(t=we(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ye(e,i,o,g)),(i=-1<t?e[t]:null)&&_e(i))}function _e(t){if(typeof t!="number"&&t&&!t.da){var e=t.src;if(e&&e[Wt])me(e.i,t);else{var i=t.type,o=t.proxy;e.removeEventListener?e.removeEventListener(i,o,t.capture):e.detachEvent?e.detachEvent(on(i),o):e.addListener&&e.removeListener&&e.removeListener(o),(i=we(e))?(me(i,t),i.h==0&&(i.src=null,e[ve]=null)):Kt(t)}}}function on(t){return t in Ee?Ee[t]:Ee[t]="on"+t}function Xi(t,e){if(t.da)t=!0;else{e=new Dt(e,this);var i=t.listener,o=t.ha||t.src;t.fa&&_e(t),t=i.call(o,e)}return t}function we(t){return t=t[ve],t instanceof qt?t:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function hn(t){return typeof t=="function"?t:(t[Te]||(t[Te]=function(e){return t.handleEvent(e)}),t[Te])}function B(){rt.call(this),this.i=new qt(this),this.M=this,this.F=null}S(B,rt),B.prototype[Wt]=!0,B.prototype.removeEventListener=function(t,e,i,o){sn(this,t,e,i,o)};function F(t,e){var i,o=t.F;if(o)for(i=[];o;o=o.F)i.push(o);if(t=t.M,o=e.type||e,typeof e=="string")e=new M(e,t);else if(e instanceof M)e.target=e.target||t;else{var g=e;e=new M(o,t),f(e,g)}if(g=!0,i)for(var v=i.length-1;0<=v;v--){var w=e.g=i[v];g=Jt(w,o,!0,e)&&g}if(w=e.g=t,g=Jt(w,o,!0,e)&&g,g=Jt(w,o,!1,e)&&g,i)for(v=0;v<i.length;v++)w=e.g=i[v],g=Jt(w,o,!1,e)&&g}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var i=t.g[e],o=0;o<i.length;o++)Kt(i[o]);delete t.g[e],t.h--}}this.F=null},B.prototype.K=function(t,e,i,o){return this.i.add(String(t),e,!1,i,o)},B.prototype.L=function(t,e,i,o){return this.i.add(String(t),e,!0,i,o)};function Jt(t,e,i,o){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var g=!0,v=0;v<e.length;++v){var w=e[v];if(w&&!w.da&&w.capture==i){var C=w.listener,L=w.ha||w.src;w.fa&&me(t.i,w),g=C.call(L,o)!==!1&&g}}return g&&!o.defaultPrevented}function an(t,e,i){if(typeof t=="function")i&&(t=P(t,i));else if(t&&typeof t.handleEvent=="function")t=P(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(t,e||0)}function ln(t){t.g=an(()=>{t.g=null,t.i&&(t.i=!1,ln(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}class Wi extends rt{constructor(e,i){super(),this.m=e,this.l=i,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ln(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(t){rt.call(this),this.h=t,this.g={}}S(Ct,rt);var cn=[];function un(t){Q(t.g,function(e,i){this.g.hasOwnProperty(i)&&_e(e)},t),t.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),un(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ie=_.JSON.stringify,Ki=_.JSON.parse,qi=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function Ae(){}Ae.prototype.h=null;function fn(t){return t.h||(t.h=t.i())}function Ji(){}var Rt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function be(){M.call(this,"d")}S(be,M);function Se(){M.call(this,"c")}S(Se,M);var mt={},pn=null;function De(){return pn=pn||new B}mt.La="serverreachability";function dn(t){M.call(this,mt.La,t)}S(dn,M);function Pt(t){const e=De();F(e,new dn(e))}mt.STAT_EVENT="statevent";function gn(t,e){M.call(this,mt.STAT_EVENT,t),this.stat=e}S(gn,M);function U(t){const e=De();F(e,new gn(e,t))}mt.Ma="timingevent";function mn(t,e){M.call(this,mt.Ma,t),this.size=e}S(mn,M);function Ot(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},e)}function Nt(){this.g=!0}Nt.prototype.xa=function(){this.g=!1};function Yi(t,e,i,o,g,v){t.info(function(){if(t.g)if(v)for(var w="",C=v.split("&"),L=0;L<C.length;L++){var b=C[L].split("=");if(1<b.length){var x=b[0];b=b[1];var j=x.split("_");w=2<=j.length&&j[1]=="type"?w+(x+"="+b+"&"):w+(x+"=redacted&")}}else w=null;else w=v;return"XMLHTTP REQ ("+o+") [attempt "+g+"]: "+e+`
`+i+`
`+w})}function Qi(t,e,i,o,g,v,w){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+g+"]: "+e+`
`+i+`
`+v+" "+w})}function yt(t,e,i,o){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tr(t,i)+(o?" "+o:"")})}function Zi(t,e){t.info(function(){return"TIMEOUT: "+e})}Nt.prototype.info=function(){};function tr(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i){for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var o=i[t];if(!(2>o.length)){var g=o[1];if(Array.isArray(g)&&!(1>g.length)){var v=g[0];if(v!="noop"&&v!="stop"&&v!="close")for(var w=1;w<g.length;w++)g[w]=""}}}}return Ie(i)}catch{return e}}var Ce={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},er={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Re;function Yt(){}S(Yt,Ae),Yt.prototype.g=function(){return new XMLHttpRequest},Yt.prototype.i=function(){return{}},Re=new Yt;function st(t,e,i,o){this.j=t,this.i=e,this.l=i,this.R=o||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yn}function yn(){this.i=null,this.g="",this.h=!1}var vn={},Pe={};function Oe(t,e,i){t.L=1,t.v=ee(tt(e)),t.m=i,t.P=!0,En(t,null)}function En(t,e){t.F=Date.now(),Qt(t),t.A=tt(t.v);var i=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),Ln(i.i,"t",o),t.C=0,i=t.j.J,t.h=new yn,t.g=Yn(t.j,i?e:null,!t.m),0<t.O&&(t.M=new Wi(P(t.Y,t,t.g),t.O)),e=t.U,i=t.g,o=t.ca;var g="readystatechange";Array.isArray(g)||(g&&(cn[0]=g.toString()),g=cn);for(var v=0;v<g.length;v++){var w=rn(i,g[v],o||e.handleEvent,!1,e.h||e);if(!w)break;e.g[w.key]=w}e=t.H?a(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Pt(),Yi(t.i,t.u,t.A,t.l,t.R,t.m)}st.prototype.ca=function(t){t=t.target;const e=this.M;e&&et(t)==3?e.j():this.Y(t)},st.prototype.Y=function(t){try{if(t==this.g)t:{const j=et(this.g);var e=this.g.Ba();const _t=this.g.Z();if(!(3>j)&&(j!=3||this.g&&(this.h.h||this.g.oa()||Un(this.g)))){this.J||j!=4||e==7||(e==8||0>=_t?Pt(3):Pt(2)),Ne(this);var i=this.g.Z();this.X=i;e:if(_n(this)){var o=Un(this.g);t="";var g=o.length,v=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ut(this),Lt(this);var w="";break e}this.h.i=new _.TextDecoder}for(e=0;e<g;e++)this.h.h=!0,t+=this.h.i.decode(o[e],{stream:!(v&&e==g-1)});o.length=0,this.h.g+=t,this.C=0,w=this.h.g}else w=this.g.oa();if(this.o=i==200,Qi(this.i,this.u,this.A,this.l,this.R,j,i),this.o){if(this.T&&!this.K){e:{if(this.g){var C,L=this.g;if((C=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(C)){var b=C;break e}}b=null}if(i=b)yt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Le(this,i);else{this.o=!1,this.s=3,U(12),ut(this),Lt(this);break t}}if(this.P){i=!0;let q;for(;!this.J&&this.C<w.length;)if(q=nr(this,w),q==Pe){j==4&&(this.s=4,U(14),i=!1),yt(this.i,this.l,null,"[Incomplete Response]");break}else if(q==vn){this.s=4,U(15),yt(this.i,this.l,w,"[Invalid Chunk]"),i=!1;break}else yt(this.i,this.l,q,null),Le(this,q);if(_n(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||w.length!=0||this.h.h||(this.s=1,U(16),i=!1),this.o=this.o&&i,!i)yt(this.i,this.l,w,"[Invalid Chunked Response]"),ut(this),Lt(this);else if(0<w.length&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.ba&&!x.M&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),Fe(x),x.M=!0,U(11))}}else yt(this.i,this.l,w,null),Le(this,w);j==4&&ut(this),this.o&&!this.J&&(j==4?Wn(this.j,this):(this.o=!1,Qt(this)))}else Er(this.g),i==400&&0<w.indexOf("Unknown SID")?(this.s=3,U(12)):(this.s=0,U(13)),ut(this),Lt(this)}}}catch{}finally{}};function _n(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function nr(t,e){var i=t.C,o=e.indexOf(`
`,i);return o==-1?Pe:(i=Number(e.substring(i,o)),isNaN(i)?vn:(o+=1,o+i>e.length?Pe:(e=e.slice(o,o+i),t.C=o+i,e)))}st.prototype.cancel=function(){this.J=!0,ut(this)};function Qt(t){t.S=Date.now()+t.I,wn(t,t.I)}function wn(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ot(P(t.ba,t),e)}function Ne(t){t.B&&(_.clearTimeout(t.B),t.B=null)}st.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Zi(this.i,this.A),this.L!=2&&(Pt(),U(17)),ut(this),this.s=2,Lt(this)):wn(this,this.S-t)};function Lt(t){t.j.G==0||t.J||Wn(t.j,t)}function ut(t){Ne(t);var e=t.M;e&&typeof e.ma=="function"&&e.ma(),t.M=null,un(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Le(t,e){try{var i=t.j;if(i.G!=0&&(i.g==t||ke(i.h,t))){if(!t.K&&ke(i.h,t)&&i.G==3){try{var o=i.Da.g.parse(e)}catch{o=null}if(Array.isArray(o)&&o.length==3){var g=o;if(g[0]==0){t:if(!i.u){if(i.g)if(i.g.F+3e3<t.F)he(i),se(i);else break t;je(i),U(18)}}else i.za=g[1],0<i.za-i.T&&37500>g[2]&&i.F&&i.v==0&&!i.C&&(i.C=Ot(P(i.Za,i),6e3));if(1>=An(i.h)&&i.ca){try{i.ca()}catch{}i.ca=void 0}}else pt(i,11)}else if((t.K||i.g==t)&&he(i),!Y(e))for(g=i.Da.g.parse(e),e=0;e<g.length;e++){let b=g[e];if(i.T=b[0],b=b[1],i.G==2)if(b[0]=="c"){i.K=b[1],i.ia=b[2];const x=b[3];x!=null&&(i.la=x,i.j.info("VER="+i.la));const j=b[4];j!=null&&(i.Aa=j,i.j.info("SVER="+i.Aa));const _t=b[5];_t!=null&&typeof _t=="number"&&0<_t&&(o=1.5*_t,i.L=o,i.j.info("backChannelRequestTimeoutMs_="+o)),o=i;const q=t.g;if(q){const ae=q.g?q.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ae){var v=o.h;v.g||ae.indexOf("spdy")==-1&&ae.indexOf("quic")==-1&&ae.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Me(v,v.h),v.h=null))}if(o.D){const Ue=q.g?q.g.getResponseHeader("X-HTTP-Session-Id"):null;Ue&&(o.ya=Ue,R(o.I,o.D,Ue))}}i.G=3,i.l&&i.l.ua(),i.ba&&(i.R=Date.now()-t.F,i.j.info("Handshake RTT: "+i.R+"ms")),o=i;var w=t;if(o.qa=Jn(o,o.J?o.ia:null,o.W),w.K){bn(o.h,w);var C=w,L=o.L;L&&(C.I=L),C.B&&(Ne(C),Qt(C)),o.g=w}else Gn(o);0<i.i.length&&oe(i)}else b[0]!="stop"&&b[0]!="close"||pt(i,7);else i.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?pt(i,7):xe(i):b[0]!="noop"&&i.l&&i.l.ta(b),i.v=0)}}Pt(4)}catch{}}var ir=class{constructor(t,e){this.g=t,this.map=e}};function Tn(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function In(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function An(t){return t.h?1:t.g?t.g.size:0}function ke(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Me(t,e){t.g?t.g.add(e):t.h=e}function bn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return k(t.i)}function rr(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(T(t)){for(var e=[],i=t.length,o=0;o<i;o++)e.push(t[o]);return e}e=[],i=0;for(o in t)e[i++]=t[o];return e}function sr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(T(t)||typeof t=="string"){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const o in t)e[i++]=o;return e}}}function Dn(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(T(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var i=sr(t),o=rr(t),g=o.length,v=0;v<g;v++)e.call(void 0,o[v],i&&i[v],t)}var Cn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function or(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var o=t[i].indexOf("="),g=null;if(0<=o){var v=t[i].substring(0,o);g=t[i].substring(o+1)}else v=t[i];e(v,g?decodeURIComponent(g.replace(/\+/g," ")):"")}}}function ft(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof ft){this.h=t.h,Zt(this,t.j),this.o=t.o,this.g=t.g,te(this,t.s),this.l=t.l;var e=t.i,i=new Bt;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),Rn(this,i),this.m=t.m}else t&&(e=String(t).match(Cn))?(this.h=!1,Zt(this,e[1]||"",!0),this.o=kt(e[2]||""),this.g=kt(e[3]||"",!0),te(this,e[4]),this.l=kt(e[5]||"",!0),Rn(this,e[6]||"",!0),this.m=kt(e[7]||"")):(this.h=!1,this.i=new Bt(null,this.h))}ft.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Mt(e,Pn,!0),":");var i=this.g;return(i||e=="file")&&(t.push("//"),(e=this.o)&&t.push(Mt(e,Pn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.s,i!=null&&t.push(":",String(i))),(i=this.l)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(Mt(i,i.charAt(0)=="/"?lr:ar,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",Mt(i,ur)),t.join("")};function tt(t){return new ft(t)}function Zt(t,e,i){t.j=i?kt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function te(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Rn(t,e,i){e instanceof Bt?(t.i=e,fr(t.i,t.h)):(i||(e=Mt(e,cr)),t.i=new Bt(e,t.h))}function R(t,e,i){t.i.set(e,i)}function ee(t){return R(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Mt(t,e,i){return typeof t=="string"?(t=encodeURI(t).replace(e,hr),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pn=/[#\/\?@]/g,ar=/[#\?:]/g,lr=/[#\?]/g,cr=/[#\?@]/g,ur=/#/g;function Bt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ot(t){t.g||(t.g=new Map,t.h=0,t.i&&or(t.i,function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)}))}r=Bt.prototype,r.add=function(t,e){ot(this),this.i=null,t=vt(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this};function On(t,e){ot(t),e=vt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Nn(t,e){return ot(t),e=vt(t,e),t.g.has(e)}r.forEach=function(t,e){ot(this),this.g.forEach(function(i,o){i.forEach(function(g){t.call(e,g,o,this)},this)},this)},r.na=function(){ot(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let o=0;o<e.length;o++){const g=t[o];for(let v=0;v<g.length;v++)i.push(e[o])}return i},r.V=function(t){ot(this);let e=[];if(typeof t=="string")Nn(this,t)&&(e=e.concat(this.g.get(vt(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},r.set=function(t,e){return ot(this),this.i=null,t=vt(this,t),Nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e};function Ln(t,e,i){On(t,e),0<i.length&&(t.i=null,t.g.set(vt(t,e),k(i)),t.h+=i.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var o=e[i];const v=encodeURIComponent(String(o)),w=this.V(o);for(o=0;o<w.length;o++){var g=v;w[o]!==""&&(g+="="+encodeURIComponent(String(w[o]))),t.push(g)}}return this.i=t.join("&")};function vt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fr(t,e){e&&!t.j&&(ot(t),t.i=null,t.g.forEach(function(i,o){var g=o.toLowerCase();o!=g&&(On(this,o),Ln(this,g,i))},t)),t.j=e}function pr(t,e){const i=new Nt;if(_.Image){const o=new Image;o.onload=X(ht,i,"TestLoadImage: loaded",!0,e,o),o.onerror=X(ht,i,"TestLoadImage: error",!1,e,o),o.onabort=X(ht,i,"TestLoadImage: abort",!1,e,o),o.ontimeout=X(ht,i,"TestLoadImage: timeout",!1,e,o),_.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else e(!1)}function dr(t,e){const i=new Nt,o=new AbortController,g=setTimeout(()=>{o.abort(),ht(i,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:o.signal}).then(v=>{clearTimeout(g),v.ok?ht(i,"TestPingServer: ok",!0,e):ht(i,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(g),ht(i,"TestPingServer: error",!1,e)})}function ht(t,e,i,o,g){try{g&&(g.onload=null,g.onerror=null,g.onabort=null,g.ontimeout=null),o(i)}catch{}}function gr(){this.g=new qi}function mr(t,e,i){const o=i||"";try{Dn(t,function(g,v){let w=g;I(g)&&(w=Ie(g)),e.push(o+v+"="+encodeURIComponent(w))})}catch(g){throw e.push(o+"type="+encodeURIComponent("_badmap")),g}}function ne(t){this.l=t.Ub||null,this.j=t.eb||!1}S(ne,Ae),ne.prototype.g=function(){return new ie(this.l,this.j)},ne.prototype.i=function(t){return function(){return t}}({});function ie(t,e){B.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ie,B),r=ie.prototype,r.open=function(t,e){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,jt(this)},r.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xt(this)),this.readyState=0},r.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jt(this)),this.g&&(this.readyState=3,jt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function kn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}r.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xt(this):jt(this),this.readyState==3&&kn(this)}},r.Ra=function(t){this.g&&(this.response=this.responseText=t,xt(this))},r.Qa=function(t){this.g&&(this.response=t,xt(this))},r.ga=function(){this.g&&xt(this)};function xt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,jt(t)}r.setRequestHeader=function(t,e){this.u.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join(`\r
`)};function jt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ie.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Mn(t){let e="";return Q(t,function(i,o){e+=o,e+=":",e+=i,e+=`\r
`}),e}function Be(t,e,i){t:{for(o in i){var o=!1;break t}o=!0}o||(i=Mn(i),typeof t=="string"?i!=null&&encodeURIComponent(String(i)):R(t,e,i))}function O(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(O,B);var yr=/^https?$/i,vr=["POST","PUT"];r=O.prototype,r.Ha=function(t){this.J=t},r.ea=function(t,e,i,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Re.g(),this.v=this.o?fn(this.o):fn(Re),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(v){Bn(this,v);return}if(t=i||"",i=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var g in o)i.set(g,o[g]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const v of o.keys())i.set(v,o.get(v));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(i.keys()).find(v=>v.toLowerCase()=="content-type"),g=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(vr,e,void 0))||o||g||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,w]of i)this.g.setRequestHeader(v,w);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fn(this),this.u=!0,this.g.send(t),this.u=!1}catch(v){Bn(this,v)}};function Bn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,xn(t),re(t)}function xn(t){t.A||(t.A=!0,F(t,"complete"),F(t,"error"))}r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,F(this,"complete"),F(this,"abort"),re(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),re(this,!0)),O.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?jn(this):this.bb())},r.bb=function(){jn(this)};function jn(t){if(t.h&&typeof E<"u"&&(!t.v[1]||et(t)!=4||t.Z()!=2)){if(t.u&&et(t)==4)an(t.Ea,0,t);else if(F(t,"readystatechange"),et(t)==4){t.h=!1;try{const w=t.Z();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var o;if(o=w===0){var g=String(t.D).match(Cn)[1]||null;!g&&_.self&&_.self.location&&(g=_.self.location.protocol.slice(0,-1)),o=!yr.test(g?g.toLowerCase():"")}i=o}if(i)F(t,"complete"),F(t,"success");else{t.m=6;try{var v=2<et(t)?t.g.statusText:""}catch{v=""}t.l=v+" ["+t.Z()+"]",xn(t)}}finally{re(t)}}}}function re(t,e){if(t.g){Fn(t);const i=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||F(t,"ready");try{i.onreadystatechange=o}catch{}}}function Fn(t){t.I&&(_.clearTimeout(t.I),t.I=null)}r.isActive=function(){return!!this.g};function et(t){return t.g?t.g.readyState:0}r.Z=function(){try{return 2<et(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ki(e)}};function Un(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Er(t){const e={};t=(t.g&&2<=et(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(Y(t[o]))continue;var i=p(t[o]);const g=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const v=e[g]||[];e[g]=v,v.push(i)}d(e,function(o){return o.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ft(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function $n(t){this.Aa=0,this.i=[],this.j=new Nt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ft("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ft("baseRetryDelayMs",5e3,t),this.cb=Ft("retryDelaySeedMs",1e4,t),this.Wa=Ft("forwardChannelMaxRetries",2,t),this.wa=Ft("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Tn(t&&t.concurrentRequestLimit),this.Da=new gr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=$n.prototype,r.la=8,r.G=1,r.connect=function(t,e,i,o){U(0),this.W=t,this.H=e||{},i&&o!==void 0&&(this.H.OSID=i,this.H.OAID=o),this.F=this.X,this.I=Jn(this,null,this.W),oe(this)};function xe(t){if(Hn(t),t.G==3){var e=t.U++,i=tt(t.I);if(R(i,"SID",t.K),R(i,"RID",e),R(i,"TYPE","terminate"),Ut(t,i),e=new st(t,t.j,e),e.L=2,e.v=ee(tt(i)),i=!1,_.navigator&&_.navigator.sendBeacon)try{i=_.navigator.sendBeacon(e.v.toString(),"")}catch{}!i&&_.Image&&(new Image().src=e.v,i=!0),i||(e.g=Yn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Qt(e)}qn(t)}function se(t){t.g&&(Fe(t),t.g.cancel(),t.g=null)}function Hn(t){se(t),t.u&&(_.clearTimeout(t.u),t.u=null),he(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function oe(t){if(!In(t.h)&&!t.s){t.s=!0;var e=t.Ga;bt||nn(),St||(bt(),St=!0),ge.add(e,t),t.B=0}}function _r(t,e){return An(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Ot(P(t.Ga,t,e),Kn(t,t.B)),t.B++,!0)}r.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const g=new st(this,this.j,t);let v=this.o;if(this.S&&(v?(v=a(v),f(v,this.S)):v=this.S),this.m!==null||this.O||(g.H=v,v=null),this.P)t:{for(var e=0,i=0;i<this.i.length;i++){e:{var o=this.i[i];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(e+=o,4096<e){e=i;break t}if(e===4096||i===this.i.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=zn(this,g,e),i=tt(this.I),R(i,"RID",t),R(i,"CVER",22),this.D&&R(i,"X-HTTP-Session-Id",this.D),Ut(this,i),v&&(this.O?e="headers="+encodeURIComponent(String(Mn(v)))+"&"+e:this.m&&Be(i,this.m,v)),Me(this.h,g),this.Ua&&R(i,"TYPE","init"),this.P?(R(i,"$req",e),R(i,"SID","null"),g.T=!0,Oe(g,i,null)):Oe(g,i,e),this.G=2}}else this.G==3&&(t?Vn(this,t):this.i.length==0||In(this.h)||Vn(this))};function Vn(t,e){var i;e?i=e.l:i=t.U++;const o=tt(t.I);R(o,"SID",t.K),R(o,"RID",i),R(o,"AID",t.T),Ut(t,o),t.m&&t.o&&Be(o,t.m,t.o),i=new st(t,t.j,i,t.B+1),t.m===null&&(i.H=t.o),e&&(t.i=e.D.concat(t.i)),e=zn(t,i,1e3),i.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Me(t.h,i),Oe(i,o,e)}function Ut(t,e){t.H&&Q(t.H,function(i,o){R(e,o,i)}),t.l&&Dn({},function(i,o){R(e,o,i)})}function zn(t,e,i){i=Math.min(t.i.length,i);var o=t.l?P(t.l.Na,t.l,t):null;t:{var g=t.i;let v=-1;for(;;){const w=["count="+i];v==-1?0<i?(v=g[0].g,w.push("ofs="+v)):v=0:w.push("ofs="+v);let C=!0;for(let L=0;L<i;L++){let b=g[L].g;const x=g[L].map;if(b-=v,0>b)v=Math.max(0,g[L].g-100),C=!1;else try{mr(x,w,"req"+b+"_")}catch{o&&o(x)}}if(C){o=w.join("&");break t}}}return t=t.i.splice(0,i),e.D=t,o}function Gn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;bt||nn(),St||(bt(),St=!0),ge.add(e,t),t.v=0}}function je(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Ot(P(t.Fa,t),Kn(t,t.v)),t.v++,!0)}r.Fa=function(){if(this.u=null,Xn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ot(P(this.ab,this),t)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,U(10),se(this),Xn(this))};function Fe(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function Xn(t){t.g=new st(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var e=tt(t.qa);R(e,"RID","rpc"),R(e,"SID",t.K),R(e,"AID",t.T),R(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&R(e,"TO",t.ja),R(e,"TYPE","xmlhttp"),Ut(t,e),t.m&&t.o&&Be(e,t.m,t.o),t.L&&(t.g.I=t.L);var i=t.g;t=t.ia,i.L=1,i.v=ee(tt(e)),i.m=null,i.P=!0,En(i,t)}r.Za=function(){this.C!=null&&(this.C=null,se(this),je(this),U(19))};function he(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function Wn(t,e){var i=null;if(t.g==e){he(t),Fe(t),t.g=null;var o=2}else if(ke(t.h,e))i=e.D,bn(t.h,e),o=1;else return;if(t.G!=0){if(e.o)if(o==1){i=e.m?e.m.length:0,e=Date.now()-e.F;var g=t.B;o=De(),F(o,new mn(o,i)),oe(t)}else Gn(t);else if(g=e.s,g==3||g==0&&0<e.X||!(o==1&&_r(t,e)||o==2&&je(t)))switch(i&&0<i.length&&(e=t.h,e.i=e.i.concat(i)),g){case 1:pt(t,5);break;case 4:pt(t,10);break;case 3:pt(t,6);break;default:pt(t,2)}}}function Kn(t,e){let i=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(i*=2),i*e}function pt(t,e){if(t.j.info("Error code "+e),e==2){var i=P(t.fb,t),o=t.Xa;const g=!o;o=new ft(o||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Zt(o,"https"),ee(o),g?pr(o.toString(),i):dr(o.toString(),i)}else U(2);t.G=0,t.l&&t.l.sa(e),qn(t),Hn(t)}r.fb=function(t){t?(this.j.info("Successfully pinged google.com"),U(2)):(this.j.info("Failed to ping google.com"),U(1))};function qn(t){if(t.G=0,t.ka=[],t.l){const e=Sn(t.h);(e.length!=0||t.i.length!=0)&&(N(t.ka,e),N(t.ka,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.ra()}}function Jn(t,e,i){var o=i instanceof ft?tt(i):new ft(i);if(o.g!="")e&&(o.g=e+"."+o.g),te(o,o.s);else{var g=_.location;o=g.protocol,e=e?e+"."+g.hostname:g.hostname,g=+g.port;var v=new ft(null);o&&Zt(v,o),e&&(v.g=e),g&&te(v,g),i&&(v.l=i),o=v}return i=t.D,e=t.ya,i&&e&&R(o,i,e),R(o,"VER",t.la),Ut(t,o),o}function Yn(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new O(new ne({eb:i})):new O(t.pa),e.Ha(t.J),e}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qn(){}r=Qn.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function K(t,e){B.call(this),this.g=new $n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!Y(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Y(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Et(this)}S(K,B),K.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},K.prototype.close=function(){xe(this.g)},K.prototype.o=function(t){var e=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.u&&(i={},i.__data__=Ie(t),t=i);e.i.push(new ir(e.Ya++,t)),e.G==3&&oe(e)},K.prototype.N=function(){this.g.l=null,delete this.j,xe(this.g),delete this.g,K.aa.N.call(this)};function Zn(t){be.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}S(Zn,be);function ti(){Se.call(this),this.status=1}S(ti,Se);function Et(t){this.g=t}S(Et,Qn),Et.prototype.ua=function(){F(this.g,"a")},Et.prototype.ta=function(t){F(this.g,new Zn(t))},Et.prototype.sa=function(t){F(this.g,new ti)},Et.prototype.ra=function(){F(this.g,"b")},K.prototype.send=K.prototype.o,K.prototype.open=K.prototype.m,K.prototype.close=K.prototype.close,Ce.NO_ERROR=0,Ce.TIMEOUT=8,Ce.HTTP_ERROR=6,er.COMPLETE="complete",Ji.EventType=Rt,Rt.OPEN="a",Rt.CLOSE="b",Rt.ERROR="c",Rt.MESSAGE="d",B.prototype.listen=B.prototype.K,O.prototype.listenOnce=O.prototype.L,O.prototype.getLastError=O.prototype.Ka,O.prototype.getLastErrorCode=O.prototype.Ba,O.prototype.getStatus=O.prototype.Z,O.prototype.getResponseJson=O.prototype.Oa,O.prototype.getResponseText=O.prototype.oa,O.prototype.send=O.prototype.ea,O.prototype.setWithCredentials=O.prototype.Ha}).apply(typeof le<"u"?le:typeof self<"u"?self:typeof window<"u"?window:{});const fi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(n){this.uid=n}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(n){return n.uid===this.uid}}$.UNAUTHENTICATED=new $(null),$.GOOGLE_CREDENTIALS=new $("google-credentials-uid"),$.FIRST_PARTY=new $("first-party-uid"),$.MOCK_USER=new $("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Ci("@firebase/firestore");function J(r,...n){if(Tt.logLevel<=D.DEBUG){const s=n.map(Ze);Tt.debug(`Firestore (${Gt}): ${r}`,...s)}}function Mi(r,...n){if(Tt.logLevel<=D.ERROR){const s=n.map(Ze);Tt.error(`Firestore (${Gt}): ${r}`,...s)}}function Js(r,...n){if(Tt.logLevel<=D.WARN){const s=n.map(Ze);Tt.warn(`Firestore (${Gt}): ${r}`,...s)}}function Ze(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(r="Unexpected state"){const n=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: `+r;throw Mi(n),new Error(n)}function $t(r,n){r||tn()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends It{constructor(n,s){super(n,s),this.code=n,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(n,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${n}`)}}class Ys{getToken(){return Promise.resolve(null)}invalidateToken(){}start(n,s){n.enqueueRetryable(()=>s($.UNAUTHENTICATED))}shutdown(){}}class Qs{constructor(n){this.token=n,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(n,s){this.changeListener=s,n.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class Zs{constructor(n){this.t=n,this.currentUser=$.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(n,s){$t(this.o===void 0);let h=this.i;const c=T=>this.i!==h?(h=this.i,s(T)):Promise.resolve();let y=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),y.resolve(),y=new Ht,n.enqueueRetryable(()=>c(this.currentUser))};const E=()=>{const T=y;n.enqueueRetryable(async()=>{await T.promise,await c(this.currentUser)})},_=T=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=T,this.o&&(this.auth.addAuthTokenListener(this.o),E())};this.t.onInit(T=>_(T)),setTimeout(()=>{if(!this.auth){const T=this.t.getImmediate({optional:!0});T?_(T):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),y.resolve(),y=new Ht)}},0),E()}getToken(){const n=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(h=>this.i!==n?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):h?($t(typeof h.accessToken=="string"),new Bi(h.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const n=this.auth&&this.auth.getUid();return $t(n===null||typeof n=="string"),new $(n)}}class to{constructor(n,s,h){this.l=n,this.h=s,this.P=h,this.type="FirstParty",this.user=$.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const n=this.I();return n&&this.T.set("Authorization",n),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class eo{constructor(n,s,h){this.l=n,this.h=s,this.P=h}getToken(){return Promise.resolve(new to(this.l,this.h,this.P))}start(n,s){n.enqueueRetryable(()=>s($.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class no{constructor(n){this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class io{constructor(n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(n,s){$t(this.o===void 0);const h=y=>{y.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${y.error.message}`);const E=y.token!==this.R;return this.R=y.token,J("FirebaseAppCheckTokenProvider",`Received ${E?"new":"existing"} token.`),E?s(y.token):Promise.resolve()};this.o=y=>{n.enqueueRetryable(()=>h(y))};const c=y=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=y,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(y=>c(y)),setTimeout(()=>{if(!this.appCheck){const y=this.A.getImmediate({optional:!0});y?c(y):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const n=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(n).then(s=>s?($t(typeof s.token=="string"),this.R=s.token,new no(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function ro(r){return r.name==="IndexedDbTransactionError"}class pe{constructor(n,s){this.projectId=n,this.database=s||"(default)"}static empty(){return new pe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(n){return n instanceof pe&&n.projectId===this.projectId&&n.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi,A;(A=pi||(pi={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ki([4294967295,4294967295],0);function Ge(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(n,s,h=1e3,c=1.5,y=6e4){this.li=n,this.timerId=s,this.Qo=h,this.Ko=c,this.$o=y,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(n){this.cancel();const s=Math.floor(this.Uo+this.Ho()),h=Math.max(0,Date.now()-this.Go),c=Math.max(0,s-h);c>0&&J("ExponentialBackoff",`Backing off for ${c} ms (base delay: ${this.Uo} ms, delay with jitter: ${s} ms, last attempt: ${h} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,c,()=>(this.Go=Date.now(),n())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(n,s,h,c,y){this.asyncQueue=n,this.timerId=s,this.targetTimeMs=h,this.op=c,this.removalCallback=y,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(E=>{})}get promise(){return this.deferred.promise}static createAndSchedule(n,s,h,c,y){const E=Date.now()+h,_=new en(n,s,E,c,y);return _.start(h),_}start(n){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),n)}skipDelay(){return this.handleDelayElapsed()}cancel(n){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(n?": "+n:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(n=>this.deferred.resolve(n))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var di,gi;(gi=di||(di={})).na="default",gi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(r){const n={};return r.timeoutSeconds!==void 0&&(n.timeoutSeconds=r.timeoutSeconds),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Map;function ho(r,n,s,h){if(n===!0&&h===!0)throw new z(V.INVALID_ARGUMENT,`${r} and ${s} cannot be used together.`)}function ao(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const n=function(h){return h.constructor?h.constructor.name:null}(r);return n?`a custom ${n} object`:"an object"}}return typeof r=="function"?"a function":tn()}function lo(r,n){if("_delegate"in r&&(r=r._delegate),!(r instanceof n)){if(n.name===r.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=ao(r);throw new z(V.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${s}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(n){var s,h;if(n.host===void 0){if(n.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=(s=n.ssl)===null||s===void 0||s;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,n.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(n.cacheSizeBytes!==-1&&n.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}ho("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:n.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oo((h=n.experimentalLongPollingOptions)!==null&&h!==void 0?h:{}),function(y){if(y.timeoutSeconds!==void 0){if(isNaN(y.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (must not be NaN)`);if(y.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (minimum allowed value is 5)`);if(y.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}isEqual(n){return this.host===n.host&&this.ssl===n.ssl&&this.credentials===n.credentials&&this.cacheSizeBytes===n.cacheSizeBytes&&this.experimentalForceLongPolling===n.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===n.experimentalAutoDetectLongPolling&&function(h,c){return h.timeoutSeconds===c.timeoutSeconds}(this.experimentalLongPollingOptions,n.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===n.ignoreUndefinedProperties&&this.useFetchStreams===n.useFetchStreams}}class xi{constructor(n,s,h,c){this._authCredentials=n,this._appCheckCredentials=s,this._databaseId=h,this._app=c,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yi({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(n){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yi(n),n.credentials!==void 0&&(this._authCredentials=function(h){if(!h)return new Ys;switch(h.type){case"firstParty":return new eo(h.sessionIndex||"0",h.iamToken||null,h.authTokenFactory||null);case"provider":return h.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(n.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const h=mi.get(s);h&&(J("ComponentProvider","Removing Datastore"),mi.delete(s),h.terminate())}(this),Promise.resolve()}}function co(r,n,s,h={}){var c;const y=(r=lo(r,xi))._getSettings(),E=`${n}:${s}`;if(y.host!=="firestore.googleapis.com"&&y.host!==E&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},y),{host:E,ssl:!1})),h.mockUserToken){let _,T;if(typeof h.mockUserToken=="string")_=h.mockUserToken,T=$.MOCK_USER;else{_=Nr(h.mockUserToken,(c=r._app)===null||c===void 0?void 0:c.options.projectId);const I=h.mockUserToken.sub||h.mockUserToken.user_id;if(!I)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new $(I)}r._authCredentials=new Qs(new Bi(_,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(n=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new so(this,"async_queue_retry"),this.fu=()=>{const h=Ge();h&&J("AsyncQueue","Visibility state changed to "+h.visibilityState),this.r_.Jo()},this.gu=n;const s=Ge();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(n){this.enqueue(n)}enqueueAndForgetEvenWhileRestricted(n){this.pu(),this.yu(n)}enterRestrictedMode(n){if(!this.Eu){this.Eu=!0,this.Vu=n||!1;const s=Ge();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.fu)}}enqueue(n){if(this.pu(),this.Eu)return new Promise(()=>{});const s=new Ht;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(n().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(n){this.enqueueAndForget(()=>(this.Iu.push(n),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(n){if(!ro(n))throw n;J("AsyncQueue","Operation failed with retryable error: "+n)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(n){const s=this.gu.then(()=>(this.Ru=!0,n().catch(h=>{this.Au=h,this.Ru=!1;const c=function(E){let _=E.message||"";return E.stack&&(_=E.stack.includes(E.message)?E.stack:E.message+`
`+E.stack),_}(h);throw Mi("INTERNAL UNHANDLED ERROR: ",c),h}).then(h=>(this.Ru=!1,h))));return this.gu=s,s}enqueueAfterDelay(n,s,h){this.pu(),this.mu.indexOf(n)>-1&&(s=0);const c=en.createAndSchedule(this,n,s,h,y=>this.Su(y));return this.du.push(c),c}pu(){this.Au&&tn()}verifyOperationInProgress(){}async bu(){let n;do n=this.gu,await n;while(n!==this.gu)}Du(n){for(const s of this.du)if(s.timerId===n)return!0;return!1}vu(n){return this.bu().then(()=>{this.du.sort((s,h)=>s.targetTimeMs-h.targetTimeMs);for(const s of this.du)if(s.skipDelay(),n!=="all"&&s.timerId===n)break;return this.bu()})}Cu(n){this.mu.push(n)}Su(n){const s=this.du.indexOf(n);this.du.splice(s,1)}}class uo extends xi{constructor(n,s,h,c){super(n,s,h,c),this.type="firestore",this._queue=new vi,this._persistenceKey=(c==null?void 0:c.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const n=this._firestoreClient.terminate();this._queue=new vi(n),this._firestoreClient=void 0,await n}}}function fo(r,n){const s=typeof r=="object"?r:js(),h=typeof r=="string"?r:"(default)",c=ks(s,"firestore").getImmediate({identifier:h});if(!c._initialized){const y=Pr("firestore");y&&co(c,...y)}return c}(function(n,s=!0){(function(c){Gt=c})(xs),fe(new Vt("firestore",(h,{instanceIdentifier:c,options:y})=>{const E=h.getProvider("app").getImmediate(),_=new uo(new Zs(h.getProvider("auth-internal")),new io(h.getProvider("app-check-internal")),function(I,G){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pe(I.options.projectId,G)}(E,c),E);return y=Object.assign({useFetchStreams:s},y),_._setSettings(y),_},"PUBLIC").setMultipleInstances(!0)),wt(fi,"4.7.5",n),wt(fi,"4.7.5","esm2017")})();const po={apiKey:"AIzaSyDFDboBtIOwhX6QYker19RlTPhDmEAakMY",authDomain:"numberhome-5ad7c.firebaseapp.com",databaseURL:void 0,projectId:"numberhome-5ad7c",storageBucket:"numberhome-5ad7c.firebasestorage.app",messagingSenderId:"155611891211",appId:"1:155611891211:web:7bad7e2de46af2abb4290e",measurementId:"G-MXXVWCLLBD"},go=Oi(po),Ei=fo(go),de={es:{title:"Consulta el origen del número telefónico",inputPlaceholder:"Ingresa el número telefónico con código de país (ej: +34612345678)",searchButton:"Consultar",loading:"Consultando...",invalidFormat:"Formato de número inválido. Use el formato +[código país][número]",numberInfo:"Información del número",country:"País",countryCode:"Código de país",location:"Ubicación",localFormat:"Formato local",carrier:"Operador",notAvailable:"No disponible",error:"Error al consultar el número. Por favor, intenta más tarde.",processingError:"Error al procesar la solicitud. Por favor, intenta más tarde.",invalidNumber:"Número no válido"},en:{title:"Check phone number origin",inputPlaceholder:"Enter phone number with country code (e.g: +34612345678)",searchButton:"Search",loading:"Searching...",invalidFormat:"Invalid number format. Use format: +[country code][number]",numberInfo:"Number Information",country:"Country",countryCode:"Country Code",location:"Location",localFormat:"Local Format",carrier:"Carrier",notAvailable:"Not available",error:"Error querying the number. Please try again later.",processingError:"Error processing request. Please try again later.",invalidNumber:"Invalid number"}},mo="https://numbers-home-api.onrender.com";let at=localStorage.getItem("lang")||"es";function yo(){const r=document.getElementById("themeToggle"),n=window.matchMedia("(prefers-color-scheme: dark)"),h=localStorage.getItem("theme")||(n.matches?"dark":"light");document.documentElement.setAttribute("data-theme",h),_i(h),r.addEventListener("click",()=>{const y=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",y),localStorage.setItem("theme",y),_i(y)})}function _i(r){const s=document.getElementById("themeToggle").querySelector("i");r==="dark"?s.className="fas fa-moon":s.className="fas fa-sun"}function vo(){const r=document.getElementById("langToggle");wi(at),r.addEventListener("click",()=>{at=at==="es"?"en":"es",localStorage.setItem("lang",at),wi(at)})}function wi(r){const n=de[r];document.getElementById("title").textContent=n.title,document.getElementById("telefono").placeholder=n.inputPlaceholder,document.querySelector("#telefonoForm button").innerHTML=`
        <i class="fas fa-search"></i> ${n.searchButton}
    `,document.querySelector("#langToggle span").textContent=r.toUpperCase();const s=document.getElementById("resultado");s.innerHTML&&!s.innerHTML.includes(n.loading)&&Eo(s)}function Eo(r){const n=de[at],s=document.getElementById("telefono").value;if(r.querySelector(".error")){r.innerHTML=`
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${n.invalidFormat}
            </h3>
        `;return}const h={country:r.querySelector("p:nth-child(2) strong").textContent,countryCode:r.querySelector("p:nth-child(3) strong").textContent,location:r.querySelector("p:nth-child(4) strong").textContent,localFormat:r.querySelector("p:nth-child(5) strong").textContent,carrier:r.querySelector("p:nth-child(6) strong").textContent};r.innerHTML=`
        <h3><i class="fas fa-info-circle"></i> ${n.numberInfo} ${s}</h3>
        <p>
            <span><i class="fas fa-globe"></i> ${n.country}</span>
            <strong>${h.country}</strong>
        </p>
        <p>
            <span><i class="fas fa-flag"></i> ${n.countryCode}</span>
            <strong>${h.countryCode}</strong>
        </p>
        <p>
            <span><i class="fas fa-map-marker-alt"></i> ${n.location}</span>
            <strong>${h.location}</strong>
        </p>
        <p>
            <span><i class="fas fa-phone"></i> ${n.localFormat}</span>
            <strong>${h.localFormat}</strong>
        </p>
        <p>
            <span><i class="fas fa-building"></i> ${n.carrier}</span>
            <strong>${h.carrier}</strong>
        </p>
    `}document.addEventListener("DOMContentLoaded",()=>{yo(),vo()});function _o(r){return/^\+[0-9]{1,3}[0-9]{4,14}$/.test(r)?{valido:!0}:{valido:!1,mensaje:"El formato del número no es válido. Use: +[código país][número]"}}function wo(r,n){const s=new Date().toISOString();return{telefono:n.trim(),country_name:(r.country_name||"").trim(),country_code:(r.country_code||"").trim(),location:(r.location||"No disponible").trim(),local_format:(r.local_format||"").trim(),carrier:(r.carrier||"No disponible").trim(),timestamp:s,created_at:s,valid:!0}}function To(r){return r.location&&r.location!=="No disponible"?`${r.location}, ${r.country_name}`:r.country_name&&r.country_name!=="No disponible"?r.country_name:null}function Io(r){const n=JSON.parse(localStorage.getItem("historial")||"[]");n.includes(r)||(n.unshift(r),n.length>5&&n.pop(),localStorage.setItem("historial",JSON.stringify(n)))}function Ao(){const r=JSON.parse(localStorage.getItem("historial")||"[]");if(r.length>0){const n=`
            <div class="historial">
                <h3><i class="fas fa-history"></i> Búsquedas recientes</h3>
                <ul>
                    ${r.map(s=>`
                        <li>
                            <span>${s}</span>
                            <button onclick="consultarNumero('${s}')">
                                <i class="fas fa-search"></i>
                            </button>
                        </li>
                    `).join("")}
                </ul>
            </div>
        `;document.querySelector(".historial-container").innerHTML=n}}function Ti(r,n="success"){const s=document.createElement("div");s.className=`notificacion ${n}`,s.innerHTML=`
        <i class="fas ${n==="success"?"fa-check-circle":"fa-exclamation-circle"}"></i>
        ${r}
    `,document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}document.getElementById("telefonoForm").addEventListener("submit",async function(r){r.preventDefault();const n=document.getElementById("telefono").value.trim(),s=document.getElementById("resultado"),h=document.querySelector(".map-container"),c=de[at],y=_o(n);if(!y.valido){s.innerHTML=`
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${y.mensaje}
            </h3>
        `;return}try{s.style.display="block",s.innerHTML=c.loading,h.style.display="none";const E=await Ei.collection("numbers").where("telefono","==",n).get();let _;if(!E.empty)_=E.docs[0].data(),console.log("Datos recuperados de Firebase:",_);else{const T=await fetch(`${mo}/validate/${n}`);if(!T.ok)throw new Error(`API_ERROR_${T.status}`);const I=await T.json();if(I.valid){_=I;const G=wo(_,n);await Ei.collection("numbers").add(G),_=G}else throw new Error("INVALID_PHONE")}_&&(Io(n),Ao(),bo(_,s),To(_)&&h&&(h.style.display="block"),Ti(c.searchSuccess,"success"))}catch(E){console.error("Error:",E);let _=c.processingError;switch(E.message){case"INVALID_FORMAT":_=c.invalidFormat;break;case"API_FETCH_ERROR":_=c.apiError;break;case"FIREBASE_QUERY_ERROR":_=c.databaseError;break;case"INVALID_PHONE":_=c.invalidPhone;break;case"API_ERROR_429":_=c.apiLimitExceeded;break;default:_=`${c.processingError} (${E.message})`}s.innerHTML=`
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${_}
            </h3>
        `,Ti(_,"error")}});function bo(r,n){const s=de[at];n.innerHTML=`
        <h3><i class="fas fa-info-circle"></i> ${s.numberInfo} ${r.telefono}</h3>
        <p>
            <span><i class="fas fa-globe"></i> ${s.country}</span>
            <strong>${r.country_name}</strong>
        </p>
        <p>
            <span><i class="fas fa-flag"></i> ${s.countryCode}</span>
            <strong>${r.country_code}</strong>
        </p>
        <p>
            <span><i class="fas fa-map-marker-alt"></i> ${s.location}</span>
            <strong>${r.location}</strong>
        </p>
        <p>
            <span><i class="fas fa-phone"></i> ${s.localFormat}</span>
            <strong>${r.local_format}</strong>
        </p>
        <p>
            <span><i class="fas fa-building"></i> ${s.carrier}</span>
            <strong>${r.carrier}</strong>
        </p>
    `}

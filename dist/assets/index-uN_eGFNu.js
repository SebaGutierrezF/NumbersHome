(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var vr={};/**
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
 */const as=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},$o=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],h=i[n++],p=i[n++],y=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(y>>10)),e[r++]=String.fromCharCode(56320+(y&1023))}else{const c=i[n++],h=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},cs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,p=h?i[o+1]:0,y=o+2<i.length,w=y?i[o+2]:0,b=c>>2,k=(c&3)<<4|p>>4;let S=(p&15)<<2|w>>6,U=w&63;y||(U=64,h||(S=64)),r.push(n[b],n[k],n[S],n[U])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(as(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):$o(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],p=o<i.length?n[i.charAt(o)]:0;++o;const w=o<i.length?n[i.charAt(o)]:64;++o;const k=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||p==null||w==null||k==null)throw new zo;const S=c<<2|p>>4;if(r.push(S),w!==64){const U=p<<4&240|w>>2;if(r.push(U),k!==64){const R=w<<6&192|k;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class zo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wo=function(i){const e=as(i);return cs.encodeByteArray(e,!0)},Yt=function(i){return Wo(i).replace(/\./g,"")},ls=function(i){try{return cs.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Go(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ko=()=>Go().__FIREBASE_DEFAULTS__,qo=()=>{if(typeof process>"u"||typeof vr>"u")return;const i=vr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Jo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ls(i[1]);return e&&JSON.parse(e)},ni=()=>{try{return Ko()||qo()||Jo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},hs=i=>{var e,n;return(n=(e=ni())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},us=i=>{const e=hs(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ds=()=>{var i;return(i=ni())===null||i===void 0?void 0:i.config},fs=i=>{var e;return(e=ni())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ps(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Yt(JSON.stringify(n)),Yt(JSON.stringify(h)),""].join(".")}/**
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
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Qo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ea(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ta(){const i=X();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function na(){try{return typeof indexedDB=="object"}catch{return!1}}function ia(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const ra="FirebaseError";class le extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ra,Object.setPrototypeOf(this,le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wt.prototype.create)}}class wt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?sa(c,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new le(o,p,r)}}function sa(i,e){return i.replace(oa,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const oa=/\{\$([^}]+)}/g;function aa(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Qt(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=i[o],h=e[o];if(yr(c)&&yr(h)){if(!Qt(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function yr(i){return i!==null&&typeof i=="object"}/**
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
 */function Tt(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ca(i,e){const n=new la(i,e);return n.subscribe.bind(n)}class la{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ha(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=jn),o.error===void 0&&(o.error=jn),o.complete===void 0&&(o.complete=jn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ha(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function jn(){}/**
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
 */function Be(i){return i&&i._delegate?i._delegate:i}class Ne{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class ua{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fa(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&h.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&e(h,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:da(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function da(i){return i===Ue?void 0:i}function fa(i){return i.instantiationMode==="EAGER"}/**
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
 */class pa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ua(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(N||(N={}));const ga={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ma=N.INFO,_a={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},va=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=_a[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ii{constructor(e){this.name=e,this._logLevel=ma,this._logHandler=va,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ga[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const ya=(i,e)=>e.some(n=>i instanceof n);let Ir,Er;function Ia(){return Ir||(Ir=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ea(){return Er||(Er=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gs=new WeakMap,qn=new WeakMap,ms=new WeakMap,Bn=new WeakMap,ri=new WeakMap;function wa(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{n(Ce(i.result)),o()},h=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&gs.set(n,i)}).catch(()=>{}),ri.set(e,i),e}function Ta(i){if(qn.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});qn.set(i,e)}let Jn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return qn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ms.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ce(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Aa(i){Jn=i(Jn)}function ba(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Vn(this),e,...n);return ms.set(r,e.sort?e.sort():[e]),Ce(r)}:Ea().includes(i)?function(...e){return i.apply(Vn(this),e),Ce(gs.get(this))}:function(...e){return Ce(i.apply(Vn(this),e))}}function Sa(i){return typeof i=="function"?ba(i):(i instanceof IDBTransaction&&Ta(i),ya(i,Ia())?new Proxy(i,Jn):i)}function Ce(i){if(i instanceof IDBRequest)return wa(i);if(Bn.has(i))return Bn.get(i);const e=Sa(i);return e!==i&&(Bn.set(i,e),ri.set(e,i)),e}const Vn=i=>ri.get(i);function Ra(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(i,e),p=Ce(h);return r&&h.addEventListener("upgradeneeded",y=>{r(Ce(h.result),y.oldVersion,y.newVersion,Ce(h.transaction),y)}),n&&h.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),p.then(y=>{c&&y.addEventListener("close",()=>c()),o&&y.addEventListener("versionchange",w=>o(w.oldVersion,w.newVersion,w))}).catch(()=>{}),p}const ka=["get","getKey","getAll","getAllKeys","count"],Pa=["put","add","delete","clear"],Hn=new Map;function wr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Hn.get(e))return Hn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Pa.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||ka.includes(n)))return;const c=async function(h,...p){const y=this.transaction(h,o?"readwrite":"readonly");let w=y.store;return r&&(w=w.index(p.shift())),(await Promise.all([w[n](...p),o&&y.done]))[0]};return Hn.set(e,c),c}Aa(i=>({...i,get:(e,n,r)=>wr(e,n)||i.get(e,n,r),has:(e,n)=>!!wr(e,n)||i.has(e,n)}));/**
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
 */class Ca{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Oa(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xn="@firebase/app",Tr="0.10.13";/**
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
 */const _e=new ii("@firebase/app"),Na="@firebase/app-compat",Da="@firebase/analytics-compat",La="@firebase/analytics",Ma="@firebase/app-check-compat",Ua="@firebase/app-check",xa="@firebase/auth",Fa="@firebase/auth-compat",ja="@firebase/database",Ba="@firebase/data-connect",Va="@firebase/database-compat",Ha="@firebase/functions",$a="@firebase/functions-compat",za="@firebase/installations",Wa="@firebase/installations-compat",Ga="@firebase/messaging",Ka="@firebase/messaging-compat",qa="@firebase/performance",Ja="@firebase/performance-compat",Xa="@firebase/remote-config",Ya="@firebase/remote-config-compat",Qa="@firebase/storage",Za="@firebase/storage-compat",ec="@firebase/firestore",tc="@firebase/vertexai-preview",nc="@firebase/firestore-compat",ic="firebase",rc="10.14.1";/**
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
 */const Yn="[DEFAULT]",sc={[Xn]:"fire-core",[Na]:"fire-core-compat",[La]:"fire-analytics",[Da]:"fire-analytics-compat",[Ua]:"fire-app-check",[Ma]:"fire-app-check-compat",[xa]:"fire-auth",[Fa]:"fire-auth-compat",[ja]:"fire-rtdb",[Ba]:"fire-data-connect",[Va]:"fire-rtdb-compat",[Ha]:"fire-fn",[$a]:"fire-fn-compat",[za]:"fire-iid",[Wa]:"fire-iid-compat",[Ga]:"fire-fcm",[Ka]:"fire-fcm-compat",[qa]:"fire-perf",[Ja]:"fire-perf-compat",[Xa]:"fire-rc",[Ya]:"fire-rc-compat",[Qa]:"fire-gcs",[Za]:"fire-gcs-compat",[ec]:"fire-fst",[nc]:"fire-fst-compat",[tc]:"fire-vertex","fire-js":"fire-js",[ic]:"fire-js-all"};/**
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
 */const Zt=new Map,oc=new Map,Qn=new Map;function Ar(i,e){try{i.container.addComponent(e)}catch(n){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Fe(i){const e=i.name;if(Qn.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,i);for(const n of Zt.values())Ar(n,i);for(const n of oc.values())Ar(n,i);return!0}function hn(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Pe(i){return i.settings!==void 0}/**
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
 */const ac={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oe=new wt("app","Firebase",ac);/**
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
 */class cc{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ve=rc;function _s(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yn,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Oe.create("bad-app-name",{appName:String(o)});if(n||(n=ds()),!n)throw Oe.create("no-options");const c=Zt.get(o);if(c){if(Qt(n,c.options)&&Qt(r,c.config))return c;throw Oe.create("duplicate-app",{appName:o})}const h=new pa(o);for(const y of Qn.values())h.addComponent(y);const p=new cc(n,r,h);return Zt.set(o,p),p}function si(i=Yn){const e=Zt.get(i);if(!e&&i===Yn&&ds())return _s();if(!e)throw Oe.create("no-app",{appName:i});return e}function se(i,e,n){var r;let o=(r=sc[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const c=o.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const p=[`Unable to register library "${o}" with version "${e}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(p.join(" "));return}Fe(new Ne(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const lc="firebase-heartbeat-database",hc=1,It="firebase-heartbeat-store";let $n=null;function vs(){return $n||($n=Ra(lc,hc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(It)}catch(n){console.warn(n)}}}}).catch(i=>{throw Oe.create("idb-open",{originalErrorMessage:i.message})})),$n}async function uc(i){try{const n=(await vs()).transaction(It),r=await n.objectStore(It).get(ys(i));return await n.done,r}catch(e){if(e instanceof le)_e.warn(e.message);else{const n=Oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_e.warn(n.message)}}}async function br(i,e){try{const r=(await vs()).transaction(It,"readwrite");await r.objectStore(It).put(e,ys(i)),await r.done}catch(n){if(n instanceof le)_e.warn(n.message);else{const r=Oe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_e.warn(r.message)}}}function ys(i){return`${i.name}!${i.options.appId}`}/**
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
 */const dc=1024,fc=30*24*60*60*1e3;class pc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Sr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=fc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_e.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sr(),{heartbeatsToSend:r,unsentEntries:o}=gc(this._heartbeatsCache.heartbeats),c=Yt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return _e.warn(n),""}}}function Sr(){return new Date().toISOString().substring(0,10)}function gc(i,e=dc){const n=[];let r=i.slice();for(const o of i){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Rr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return na()?ia().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Rr(i){return Yt(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function _c(i){Fe(new Ne("platform-logger",e=>new Ca(e),"PRIVATE")),Fe(new Ne("heartbeat",e=>new pc(e),"PRIVATE")),se(Xn,Tr,i),se(Xn,Tr,"esm2017"),se("fire-js","")}_c("");var vc="firebase",yc="10.14.1";/**
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
 */se(vc,yc,"app");function oi(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(n[r[o]]=i[r[o]]);return n}function Is(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ic=Is,Es=new wt("auth","Firebase",Is());/**
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
 */const en=new ii("@firebase/auth");function Ec(i,...e){en.logLevel<=N.WARN&&en.warn(`Auth (${Ve}): ${i}`,...e)}function Kt(i,...e){en.logLevel<=N.ERROR&&en.error(`Auth (${Ve}): ${i}`,...e)}/**
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
 */function ve(i,...e){throw ai(i,...e)}function oe(i,...e){return ai(i,...e)}function ws(i,e,n){const r=Object.assign(Object.assign({},Ic()),{[e]:n});return new wt("auth","Firebase",r).create(e,{appName:i.name})}function xe(i){return ws(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ai(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Es.create(i,...e)}function A(i,e,...n){if(!i)throw ai(e,...n)}function pe(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Kt(e),new Error(e)}function ye(i,e){i||pe(e)}/**
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
 */function Zn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function wc(){return kr()==="http:"||kr()==="https:"}function kr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Tc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wc()||Zo()||"connection"in navigator)?navigator.onLine:!0}function Ac(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class At{constructor(e,n){this.shortDelay=e,this.longDelay=n,ye(n>e,"Short delay should be less than long delay!"),this.isMobile=Yo()||ea()}get(){return Tc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ci(i,e){ye(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ts{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sc=new At(3e4,6e4);function li(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ze(i,e,n,r,o={}){return As(i,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const p=Tt(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const w=Object.assign({method:e,headers:y},c);return Qo()||(w.referrerPolicy="no-referrer"),Ts.fetch()(bs(i,i.config.apiHost,n,p),w)})}async function As(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},bc),e);try{const o=new kc(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw zt(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[y,w]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw zt(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw zt(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw zt(i,"user-disabled",h);const b=r[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw ws(i,b,w);ve(i,b)}}catch(o){if(o instanceof le)throw o;ve(i,"network-request-failed",{message:String(o)})}}async function Rc(i,e,n,r,o={}){const c=await Ze(i,e,n,r,o);return"mfaPendingCredential"in c&&ve(i,"multi-factor-auth-required",{_serverResponse:c}),c}function bs(i,e,n,r){const o=`${e}${n}?${r}`;return i.config.emulator?ci(i.config,o):`${i.config.apiScheme}://${o}`}class kc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(oe(this.auth,"network-request-failed")),Sc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=oe(i,e,r);return o.customData._tokenResponse=n,o}/**
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
 */async function Pc(i,e){return Ze(i,"POST","/v1/accounts:delete",e)}async function Ss(i,e){return Ze(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function _t(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cc(i,e=!1){const n=Be(i),r=await n.getIdToken(e),o=hi(r);A(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:_t(zn(o.auth_time)),issuedAtTime:_t(zn(o.iat)),expirationTime:_t(zn(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function zn(i){return Number(i)*1e3}function hi(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const o=ls(n);return o?JSON.parse(o):(Kt("Failed to decode base64 JWT payload"),null)}catch(o){return Kt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Pr(i){const e=hi(i);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Et(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof le&&Oc(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Oc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Nc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ei{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_t(this.lastLoginAt),this.creationTime=_t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tn(i){var e;const n=i.auth,r=await i.getIdToken(),o=await Et(i,Ss(n,{idToken:r}));A(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Rs(c.providerUserInfo):[],p=Lc(i.providerData,h),y=i.isAnonymous,w=!(i.email&&c.passwordHash)&&!(p!=null&&p.length),b=y?w:!1,k={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new ei(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,k)}async function Dc(i){const e=Be(i);await tn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lc(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Rs(i){return i.map(e=>{var{providerId:n}=e,r=oi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Mc(i,e){const n=await As(i,{},async()=>{const r=Tt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=bs(i,o,"/v1/token",`key=${c}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Ts.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uc(i,e){return Ze(i,"POST","/v2/accounts:revokeToken",li(i,e))}/**
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
 */class qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Pr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await Mc(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,h=new qe;return r&&(A(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(A(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(A(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qe,this.toJSON())}_performRefresh(){return pe("not implemented")}}/**
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
 */function Ae(i,e){A(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ge{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,c=oi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new ei(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Et(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cc(this,e)}reload(){return Dc(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(xe(this.auth));const e=await this.getIdToken();return await Et(this,Pc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,c,h,p,y,w,b;const k=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(o=n.email)!==null&&o!==void 0?o:void 0,U=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,R=(h=n.photoURL)!==null&&h!==void 0?h:void 0,M=(p=n.tenantId)!==null&&p!==void 0?p:void 0,P=(y=n._redirectEventId)!==null&&y!==void 0?y:void 0,Y=(w=n.createdAt)!==null&&w!==void 0?w:void 0,G=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:x,emailVerified:F,isAnonymous:ee,providerData:B,stsTokenManager:_}=n;A(x&&_,e,"internal-error");const u=qe.fromJSON(this.name,_);A(typeof x=="string",e,"internal-error"),Ae(k,e.name),Ae(S,e.name),A(typeof F=="boolean",e,"internal-error"),A(typeof ee=="boolean",e,"internal-error"),Ae(U,e.name),Ae(R,e.name),Ae(M,e.name),Ae(P,e.name),Ae(Y,e.name),Ae(G,e.name);const f=new ge({uid:x,auth:e,email:S,emailVerified:F,displayName:k,isAnonymous:ee,photoURL:R,phoneNumber:U,tenantId:M,stsTokenManager:u,createdAt:Y,lastLoginAt:G});return B&&Array.isArray(B)&&(f.providerData=B.map(g=>Object.assign({},g))),P&&(f._redirectEventId=P),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new qe;o.updateFromServerResponse(n);const c=new ge({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await tn(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];A(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Rs(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),p=new qe;p.updateFromIdToken(r);const y=new ge({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ei(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,w),y}}/**
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
 */const Cr=new Map;function me(i){ye(i instanceof Function,"Expected a class definition");let e=Cr.get(i);return e?(ye(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Cr.set(i,e),e)}/**
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
 */class ks{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ks.type="NONE";const Or=ks;/**
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
 */function qt(i,e,n){return`firebase:${i}:${e}:${n}`}class Je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=qt(this.userKey,o.apiKey,c),this.fullPersistenceKey=qt("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Je(me(Or),e,r);const o=(await Promise.all(n.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let c=o[0]||me(Or);const h=qt(r,e.config.apiKey,e.name);let p=null;for(const w of n)try{const b=await w._get(h);if(b){const k=ge._fromJSON(e,b);w!==c&&(p=k),c=w;break}}catch{}const y=o.filter(w=>w._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new Je(c,e,r):(c=y[0],p&&await c._set(h,p.toJSON()),await Promise.all(n.map(async w=>{if(w!==c)try{await w._remove(h)}catch{}})),new Je(c,e,r))}}/**
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
 */function Nr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ns(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ps(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ls(e))return"Blackberry";if(Ms(e))return"Webos";if(Cs(e))return"Safari";if((e.includes("chrome/")||Os(e))&&!e.includes("edge/"))return"Chrome";if(Ds(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ps(i=X()){return/firefox\//i.test(i)}function Cs(i=X()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Os(i=X()){return/crios\//i.test(i)}function Ns(i=X()){return/iemobile/i.test(i)}function Ds(i=X()){return/android/i.test(i)}function Ls(i=X()){return/blackberry/i.test(i)}function Ms(i=X()){return/webos/i.test(i)}function ui(i=X()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function xc(i=X()){var e;return ui(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fc(){return ta()&&document.documentMode===10}function Us(i=X()){return ui(i)||Ds(i)||Ms(i)||Ls(i)||/windows phone/i.test(i)||Ns(i)}/**
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
 */function xs(i,e=[]){let n;switch(i){case"Browser":n=Nr(X());break;case"Worker":n=`${Nr(X())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ve}/${r}`}/**
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
 */class jc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((h,p)=>{try{const y=e(c);h(y)}catch(y){p(y)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Bc(i,e={}){return Ze(i,"GET","/v2/passwordPolicy",li(i,e))}/**
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
 */const Vc=6;class Hc{constructor(e){var n,r,o,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:Vc,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,c,h,p;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(n=y.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),y.isValid&&(y.isValid=(r=y.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(p=y.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),y}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class $c{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dr(this),this.idTokenSubscription=new Dr(this),this.beforeStateQueue=new jc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Es,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=me(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ss(this,{idToken:e}),r=await ge._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pe(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===p)&&(y!=null&&y.user)&&(o=y.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ac()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(xe(this));const n=e?Be(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bc(this),n=new Hc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Uc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&me(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,r,o);return()=>{h=!0,y()}}else{const y=e.addObserver(n);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ec(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function di(i){return Be(i)}class Dr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ca(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zc(i){fi=i}function Wc(i){return fi.loadJS(i)}function Gc(){return fi.gapiScript}function Kc(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qc(i,e){const n=hn(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Qt(c,e??{}))return o;ve(o,"already-initialized")}return n.initialize({options:e})}function Jc(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(me);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xc(i,e,n){const r=di(i);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Fs(e),{host:h,port:p}=Yc(e),y=p===null?"":`:${p}`;r.config.emulator={url:`${c}//${h}${y}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),Qc()}function Fs(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Yc(i){const e=Fs(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Lr(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Lr(h)}}}function Lr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Qc(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class js{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pe("not implemented")}_getIdTokenResponse(e){return pe("not implemented")}_linkToIdToken(e,n){return pe("not implemented")}_getReauthenticationResolver(e){return pe("not implemented")}}/**
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
 */async function Xe(i,e){return Rc(i,"POST","/v1/accounts:signInWithIdp",li(i,e))}/**
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
 */const Zc="http://localhost";class je extends js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,c=oi(n,["providerId","signInMethod"]);if(!r||!o)return null;const h=new je(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Xe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xe(e,n)}buildRequest(){const e={requestUri:Zc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tt(n)}return e}}/**
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
 */class Bs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bt extends Bs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class be extends bt{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
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
 */class Se extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return je._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Se.credential(n,r)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
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
 */class Re extends bt{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
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
 */class ke extends bt{constructor(){super("twitter.com")}static credential(e,n){return je._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ke.credential(n,r)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
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
 */class Ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await ge._fromIdTokenResponse(e,r,o),h=Mr(r);return new Ye({user:c,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=Mr(r);return new Ye({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function Mr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class nn extends le{constructor(e,n,r,o){var c;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,nn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new nn(e,n,r,o)}}function Vs(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?nn._fromErrorAndOperation(i,c,e,r):c})}async function el(i,e,n=!1){const r=await Et(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Ye._forOperation(i,"link",r)}/**
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
 */async function tl(i,e,n=!1){const{auth:r}=i;if(Pe(r.app))return Promise.reject(xe(r));const o="reauthenticate";try{const c=await Et(i,Vs(r,o,e,i),n);A(c.idToken,r,"internal-error");const h=hi(c.idToken);A(h,r,"internal-error");const{sub:p}=h;return A(i.uid===p,r,"user-mismatch"),Ye._forOperation(i,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ve(r,"user-mismatch"),c}}/**
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
 */async function nl(i,e,n=!1){if(Pe(i.app))return Promise.reject(xe(i));const r="signIn",o=await Vs(i,r,e),c=await Ye._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(c.user),c}function il(i,e,n,r){return Be(i).onIdTokenChanged(e,n,r)}function rl(i,e,n){return Be(i).beforeAuthStateChanged(e,n)}const rn="__sak";/**
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
 */class Hs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rn,"1"),this.storage.removeItem(rn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sl=1e3,ol=10;class $s extends Hs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Us(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,p,y)=>{this.notifyListeners(h,y)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);Fc()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ol):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$s.type="LOCAL";const al=$s;/**
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
 */class zs extends Hs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zs.type="SESSION";const Ws=zs;/**
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
 */function cl(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class un{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new un(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async w=>w(n.origin,c)),y=await cl(p);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}un.receivers=[];/**
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
 */function pi(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class ll{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,y)=>{const w=pi("",20);o.port1.start();const b=setTimeout(()=>{y(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(k){const S=k;if(S.data.eventId===w)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(b),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ae(){return window}function hl(i){ae().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Gs(){return typeof ae().WorkerGlobalScope<"u"&&typeof ae().importScripts=="function"}async function ul(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dl(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function fl(){return Gs()?self:null}/**
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
 */const Ks="firebaseLocalStorageDb",pl=1,sn="firebaseLocalStorage",qs="fbase_key";class St{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dn(i,e){return i.transaction([sn],e?"readwrite":"readonly").objectStore(sn)}function gl(){const i=indexedDB.deleteDatabase(Ks);return new St(i).toPromise()}function ti(){const i=indexedDB.open(Ks,pl);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(sn,{keyPath:qs})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(sn)?e(r):(r.close(),await gl(),e(await ti()))})})}async function Ur(i,e,n){const r=dn(i,!0).put({[qs]:e,value:n});return new St(r).toPromise()}async function ml(i,e){const n=dn(i,!1).get(e),r=await new St(n).toPromise();return r===void 0?null:r.value}function xr(i,e){const n=dn(i,!0).delete(e);return new St(n).toPromise()}const _l=800,vl=3;class Js{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ti(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=un._getInstance(fl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ul(),!this.activeServiceWorker)return;this.sender=new ll(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await Ur(e,rn,"1"),await xr(e,rn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ur(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ml(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=dn(o,!1).getAll();return new St(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Js.type="LOCAL";const yl=Js;new At(3e4,6e4);/**
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
 */function Il(i,e){return e?me(e):(A(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class gi extends js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function El(i){return nl(i.auth,new gi(i),i.bypassAuthState)}function wl(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),tl(n,new gi(i),i.bypassAuthState)}async function Tl(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),el(n,new gi(i),i.bypassAuthState)}/**
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
 */class Xs{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return El;case"linkViaPopup":case"linkViaRedirect":return Tl;case"reauthViaPopup":case"reauthViaRedirect":return wl;default:ve(this.auth,"internal-error")}}resolve(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Al=new At(2e3,1e4);class Ke extends Xs{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){ye(this.filter.length===1,"Popup operations only handle one event");const e=pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Al.get())};e()}}Ke.currentPopupAction=null;/**
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
 */const bl="pendingRedirect",Jt=new Map;class Sl extends Xs{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jt.get(this.auth._key());if(!e){try{const r=await Rl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jt.set(this.auth._key(),e)}return this.bypassAuthState||Jt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rl(i,e){const n=Cl(e),r=Pl(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function kl(i,e){Jt.set(i._key(),e)}function Pl(i){return me(i._redirectPersistence)}function Cl(i){return qt(bl,i.config.apiKey,i.name)}async function Ol(i,e,n=!1){if(Pe(i.app))return Promise.reject(xe(i));const r=di(i),o=Il(r,e),h=await new Sl(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const Nl=10*60*1e3;class Dl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ll(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ys(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(oe(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fr(e))}saveEventToCache(e){this.cachedEventUids.add(Fr(e)),this.lastProcessedEventTime=Date.now()}}function Fr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ys({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ll(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ys(i);default:return!1}}/**
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
 */async function Ml(i,e={}){return Ze(i,"GET","/v1/projects",e)}/**
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
 */const Ul=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xl=/^https?/;async function Fl(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Ml(i);for(const n of e)try{if(jl(n))return}catch{}ve(i,"unauthorized-domain")}function jl(i){const e=Zn(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!xl.test(n))return!1;if(Ul.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bl=new At(3e4,6e4);function jr(){const i=ae().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Vl(i){return new Promise((e,n)=>{var r,o,c;function h(){jr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jr(),n(oe(i,"network-request-failed"))},timeout:Bl.get()})}if(!((o=(r=ae().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=ae().gapi)===null||c===void 0)&&c.load)h();else{const p=Kc("iframefcb");return ae()[p]=()=>{gapi.load?h():n(oe(i,"network-request-failed"))},Wc(`${Gc()}?onload=${p}`).catch(y=>n(y))}}).catch(e=>{throw Xt=null,e})}let Xt=null;function Hl(i){return Xt=Xt||Vl(i),Xt}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $l=new At(5e3,15e3),zl="__/auth/iframe",Wl="emulator/auth/iframe",Gl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ql(i){const e=i.config;A(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?ci(e,Wl):`https://${i.config.authDomain}/${zl}`,r={apiKey:e.apiKey,appName:i.name,v:Ve},o=Kl.get(i.config.apiHost);o&&(r.eid=o);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Tt(r).slice(1)}`}async function Jl(i){const e=await Hl(i),n=ae().gapi;return A(n,i,"internal-error"),e.open({where:document.body,url:ql(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gl,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=oe(i,"network-request-failed"),p=ae().setTimeout(()=>{c(h)},$l.get());function y(){ae().clearTimeout(p),o(r)}r.ping(y).then(y,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Xl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yl=500,Ql=600,Zl="_blank",eh="http://localhost";class Br{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function th(i,e,n,r=Yl,o=Ql){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const y=Object.assign(Object.assign({},Xl),{width:r.toString(),height:o.toString(),top:c,left:h}),w=X().toLowerCase();n&&(p=Os(w)?Zl:n),Ps(w)&&(e=e||eh,y.scrollbars="yes");const b=Object.entries(y).reduce((S,[U,R])=>`${S}${U}=${R},`,"");if(xc(w)&&p!=="_self")return nh(e||"",p),new Br(null);const k=window.open(e||"",p,b);A(k,i,"popup-blocked");try{k.focus()}catch{}return new Br(k)}function nh(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ih="__/auth/handler",rh="emulator/auth/handler",sh=encodeURIComponent("fac");async function Vr(i,e,n,r,o,c){A(i.config.authDomain,i,"auth-domain-config-required"),A(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:Ve,eventId:o};if(e instanceof Bs){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",aa(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,k]of Object.entries({}))h[b]=k}if(e instanceof bt){const b=e.getScopes().filter(k=>k!=="");b.length>0&&(h.scopes=b.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const y=await i._getAppCheckToken(),w=y?`#${sh}=${encodeURIComponent(y)}`:"";return`${oh(i)}?${Tt(p).slice(1)}${w}`}function oh({config:i}){return i.emulator?ci(i,rh):`https://${i.authDomain}/${ih}`}/**
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
 */const Wn="webStorageSupport";class ah{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ws,this._completeRedirectFn=Ol,this._overrideRedirectResult=kl}async _openPopup(e,n,r,o){var c;ye((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Vr(e,n,r,Zn(),o);return th(e,h,pi())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await Vr(e,n,r,Zn(),o);return hl(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ye(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jl(e),r=new Dl(e);return n.register("authEvent",o=>(A(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wn,{type:Wn},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Wn];h!==void 0&&n(!!h),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Us()||Cs()||ui()}}const ch=ah;var Hr="@firebase/auth",$r="1.7.9";/**
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
 */class lh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hh(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uh(i){Fe(new Ne("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;A(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const y={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xs(i)},w=new $c(r,o,c,y);return Jc(w,n),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fe(new Ne("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new lh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),se(Hr,$r,hh(i)),se(Hr,$r,"esm2017")}/**
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
 */const dh=5*60,fh=fs("authIdTokenMaxAge")||dh;let zr=null;const ph=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fh)return;const o=n==null?void 0:n.token;zr!==o&&(zr=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gh(i=si()){const e=hn(i,"auth");if(e.isInitialized())return e.getImmediate();const n=qc(i,{popupRedirectResolver:ch,persistence:[yl,al,Ws]}),r=fs("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=ph(c.toString());rl(n,h,()=>h(n.currentUser)),il(n,p=>h(p))}}const o=hs("auth");return o&&Xc(n,`http://${o}`),n}function mh(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}zc({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const c=oe("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",mh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uh("Browser");var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qs;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,u){function f(){}f.prototype=u.prototype,_.D=u.prototype,_.prototype=new f,_.prototype.constructor=_,_.C=function(g,m,I){for(var d=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)d[ue-2]=arguments[ue];return u.prototype[m].apply(g,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(_,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=_.g[0],f=_.g[1],m=_.g[2];var I=_.g[3],d=u+(I^f&(m^I))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[1]+3905402710&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[2]+606105819&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[5]+1200080426&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[6]+2821735955&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[9]+2336552879&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[10]+4294925233&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[13]+4254626195&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[14]+2792965006&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^I&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[6]+3225465664&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[11]+643717713&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[10]+38016083&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[15]+3634488961&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[14]+3275163606&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[3]+4107603335&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[2]+4243563512&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[7]+1735328473&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^I)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[8]+2272392833&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[11]+1839030562&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[4]+1272893353&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[7]+4139469664&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[0]+3936430074&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[3]+3572445317&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[12]+3873151461&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[15]+530742520&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~I))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[7]+1126891415&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[14]+2878612391&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[3]+2399980690&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[10]+4293915773&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[15]+4264355552&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[6]+2734768916&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[11]+3174756917&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[2]+718787259&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[9]+3951481745&4294967295,_.g[0]=_.g[0]+u&4294967295,_.g[1]=_.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,_.g[2]=_.g[2]+m&4294967295,_.g[3]=_.g[3]+I&4294967295}r.prototype.u=function(_,u){u===void 0&&(u=_.length);for(var f=u-this.blockSize,g=this.B,m=this.h,I=0;I<u;){if(m==0)for(;I<=f;)o(this,_,I),I+=this.blockSize;if(typeof _=="string"){for(;I<u;)if(g[m++]=_.charCodeAt(I++),m==this.blockSize){o(this,g),m=0;break}}else for(;I<u;)if(g[m++]=_[I++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var u=1;u<_.length-8;++u)_[u]=0;var f=8*this.o;for(u=_.length-8;u<_.length;++u)_[u]=f&255,f/=256;for(this.u(_),_=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)_[f++]=this.g[u]>>>g&255;return _};function c(_,u){var f=p;return Object.prototype.hasOwnProperty.call(f,_)?f[_]:f[_]=u(_)}function h(_,u){this.h=u;for(var f=[],g=!0,m=_.length-1;0<=m;m--){var I=_[m]|0;g&&I==u||(f[m]=I,g=!1)}this.g=f}var p={};function y(_){return-128<=_&&128>_?c(_,function(u){return new h([u|0],0>u?-1:0)}):new h([_|0],0>_?-1:0)}function w(_){if(isNaN(_)||!isFinite(_))return k;if(0>_)return P(w(-_));for(var u=[],f=1,g=0;_>=f;g++)u[g]=_/f|0,f*=4294967296;return new h(u,0)}function b(_,u){if(_.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(_.charAt(0)=="-")return P(b(_.substring(1),u));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=w(Math.pow(u,8)),g=k,m=0;m<_.length;m+=8){var I=Math.min(8,_.length-m),d=parseInt(_.substring(m,m+I),u);8>I?(I=w(Math.pow(u,I)),g=g.j(I).add(w(d))):(g=g.j(f),g=g.add(w(d)))}return g}var k=y(0),S=y(1),U=y(16777216);i=h.prototype,i.m=function(){if(M(this))return-P(this).m();for(var _=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);_+=(0<=g?g:4294967296+g)*u,u*=4294967296}return _},i.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(M(this))return"-"+P(this).toString(_);for(var u=w(Math.pow(_,6)),f=this,g="";;){var m=F(f,u).g;f=Y(f,m.j(u));var I=((0<f.g.length?f.g[0]:f.h)>>>0).toString(_);if(f=m,R(f))return I+g;for(;6>I.length;)I="0"+I;g=I+g}},i.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var u=0;u<_.g.length;u++)if(_.g[u]!=0)return!1;return!0}function M(_){return _.h==-1}i.l=function(_){return _=Y(this,_),M(_)?-1:R(_)?0:1};function P(_){for(var u=_.g.length,f=[],g=0;g<u;g++)f[g]=~_.g[g];return new h(f,~_.h).add(S)}i.abs=function(){return M(this)?P(this):this},i.add=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0,m=0;m<=u;m++){var I=g+(this.i(m)&65535)+(_.i(m)&65535),d=(I>>>16)+(this.i(m)>>>16)+(_.i(m)>>>16);g=d>>>16,I&=65535,d&=65535,f[m]=d<<16|I}return new h(f,f[f.length-1]&-2147483648?-1:0)};function Y(_,u){return _.add(P(u))}i.j=function(_){if(R(this)||R(_))return k;if(M(this))return M(_)?P(this).j(P(_)):P(P(this).j(_));if(M(_))return P(this.j(P(_)));if(0>this.l(U)&&0>_.l(U))return w(this.m()*_.m());for(var u=this.g.length+_.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<_.g.length;m++){var I=this.i(g)>>>16,d=this.i(g)&65535,ue=_.i(m)>>>16,et=_.i(m)&65535;f[2*g+2*m]+=d*et,G(f,2*g+2*m),f[2*g+2*m+1]+=I*et,G(f,2*g+2*m+1),f[2*g+2*m+1]+=d*ue,G(f,2*g+2*m+1),f[2*g+2*m+2]+=I*ue,G(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function G(_,u){for(;(_[u]&65535)!=_[u];)_[u+1]+=_[u]>>>16,_[u]&=65535,u++}function x(_,u){this.g=_,this.h=u}function F(_,u){if(R(u))throw Error("division by zero");if(R(_))return new x(k,k);if(M(_))return u=F(P(_),u),new x(P(u.g),P(u.h));if(M(u))return u=F(_,P(u)),new x(P(u.g),u.h);if(30<_.g.length){if(M(_)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=S,g=u;0>=g.l(_);)f=ee(f),g=ee(g);var m=B(f,1),I=B(g,1);for(g=B(g,2),f=B(f,2);!R(g);){var d=I.add(g);0>=d.l(_)&&(m=m.add(f),I=d),g=B(g,1),f=B(f,1)}return u=Y(_,m.j(u)),new x(m,u)}for(m=k;0<=_.l(u);){for(f=Math.max(1,Math.floor(_.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),I=w(f),d=I.j(u);M(d)||0<d.l(_);)f-=g,I=w(f),d=I.j(u);R(I)&&(I=S),m=m.add(I),_=Y(_,d)}return new x(m,_)}i.A=function(_){return F(this,_).h},i.and=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&_.i(g);return new h(f,this.h&_.h)},i.or=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|_.i(g);return new h(f,this.h|_.h)},i.xor=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^_.i(g);return new h(f,this.h^_.h)};function ee(_){for(var u=_.g.length+1,f=[],g=0;g<u;g++)f[g]=_.i(g)<<1|_.i(g-1)>>>31;return new h(f,_.h)}function B(_,u){var f=u>>5;u%=32;for(var g=_.g.length-f,m=[],I=0;I<g;I++)m[I]=0<u?_.i(I+f)>>>u|_.i(I+f+1)<<32-u:_.i(I+f);return new h(m,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=b,Qs=h}).apply(typeof Wr<"u"?Wr:typeof self<"u"?self:typeof window<"u"?window:{});var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wt=="object"&&Wt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var v=t[l];if(!(v in a))break e;a=a[v]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,v={next:function(){if(!l&&a<t.length){var E=a++;return{value:s(E,t[E]),done:!1}}return l=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function y(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function w(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function b(t,s,a){return t.call.apply(t.bind,arguments)}function k(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,l),t.apply(s,v)}}return function(){return t.apply(s,arguments)}}function S(t,s,a){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:k,S.apply(null,arguments)}function U(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function R(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,v,E){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return s.prototype[v].apply(l,T)}}function M(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function P(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(y(l)){const v=t.length||0,E=l.length||0;t.length=v+E;for(let T=0;T<E;T++)t[v+T]=l[T]}else t.push(l)}}class Y{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function G(t){return/^[\s\xa0]*$/.test(t)}function x(){var t=p.navigator;return t&&(t=t.userAgent)?t:""}function F(t){return F[" "](t),t}F[" "]=function(){};var ee=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function B(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function _(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let v=1;v<arguments.length;v++){l=arguments[v];for(a in l)t[a]=l[a];for(let E=0;E<f.length;E++)a=f[E],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function I(t){p.setTimeout(()=>{throw t},0)}function d(){var t=fn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ue{constructor(){this.h=this.g=null}add(s,a){const l=et.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var et=new Y(()=>new so,t=>t.reset());class so{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,nt=!1,fn=new ue,Ii=()=>{const t=p.Promise.resolve(void 0);tt=()=>{t.then(oo)}};var oo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){I(a)}var s=et;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}nt=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var ao=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};p.addEventListener("test",a,s),p.removeEventListener("test",a,s)}catch{}return t}();function it(t,s){if(H.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(ee){e:{try{F(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:co[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.aa.h.call(this)}}R(it,H);var co={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),lo=0;function ho(t,s,a,l,v){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=v,this.key=++lo,this.da=this.fa=!1}function Pt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ct(t){this.src=t,this.g={},this.h=0}Ct.prototype.add=function(t,s,a,l,v){var E=t.toString();t=this.g[E],t||(t=this.g[E]=[],this.h++);var T=gn(t,s,l,v);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new ho(s,this.src,E,!!l,v),s.fa=a,t.push(s)),s};function pn(t,s){var a=s.type;if(a in t.g){var l=t.g[a],v=Array.prototype.indexOf.call(l,s,void 0),E;(E=0<=v)&&Array.prototype.splice.call(l,v,1),E&&(Pt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function gn(t,s,a,l){for(var v=0;v<t.length;++v){var E=t[v];if(!E.da&&E.listener==s&&E.capture==!!a&&E.ha==l)return v}return-1}var mn="closure_lm_"+(1e6*Math.random()|0),_n={};function Ei(t,s,a,l,v){if(Array.isArray(s)){for(var E=0;E<s.length;E++)Ei(t,s[E],a,l,v);return null}return a=Ai(a),t&&t[kt]?t.K(s,a,w(l)?!!l.capture:!!l,v):uo(t,s,a,!1,l,v)}function uo(t,s,a,l,v,E){if(!s)throw Error("Invalid event type");var T=w(v)?!!v.capture:!!v,D=yn(t);if(D||(t[mn]=D=new Ct(t)),a=D.add(s,a,l,T,E),a.proxy)return a;if(l=fo(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)ao||(v=T),v===void 0&&(v=!1),t.addEventListener(s.toString(),l,v);else if(t.attachEvent)t.attachEvent(Ti(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function fo(){function t(a){return s.call(t.src,t.listener,a)}const s=po;return t}function wi(t,s,a,l,v){if(Array.isArray(s))for(var E=0;E<s.length;E++)wi(t,s[E],a,l,v);else l=w(l)?!!l.capture:!!l,a=Ai(a),t&&t[kt]?(t=t.i,s=String(s).toString(),s in t.g&&(E=t.g[s],a=gn(E,a,l,v),-1<a&&(Pt(E[a]),Array.prototype.splice.call(E,a,1),E.length==0&&(delete t.g[s],t.h--)))):t&&(t=yn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=gn(s,a,l,v)),(a=-1<t?s[t]:null)&&vn(a))}function vn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[kt])pn(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(Ti(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=yn(s))?(pn(a,t),a.h==0&&(a.src=null,s[mn]=null)):Pt(t)}}}function Ti(t){return t in _n?_n[t]:_n[t]="on"+t}function po(t,s){if(t.da)t=!0;else{s=new it(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&vn(t),t=a.call(l,s)}return t}function yn(t){return t=t[mn],t instanceof Ct?t:null}var In="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(t){return typeof t=="function"?t:(t[In]||(t[In]=function(s){return t.handleEvent(s)}),t[In])}function $(){Ie.call(this),this.i=new Ct(this),this.M=this,this.F=null}R($,Ie),$.prototype[kt]=!0,$.prototype.removeEventListener=function(t,s,a,l){wi(this,t,s,a,l)};function K(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new H(s,t);else if(s instanceof H)s.target=s.target||t;else{var v=s;s=new H(l,t),g(s,v)}if(v=!0,a)for(var E=a.length-1;0<=E;E--){var T=s.g=a[E];v=Ot(T,l,!0,s)&&v}if(T=s.g=t,v=Ot(T,l,!0,s)&&v,v=Ot(T,l,!1,s)&&v,a)for(E=0;E<a.length;E++)T=s.g=a[E],v=Ot(T,l,!1,s)&&v}$.prototype.N=function(){if($.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Pt(a[l]);delete t.g[s],t.h--}}this.F=null},$.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},$.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Ot(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,E=0;E<s.length;++E){var T=s[E];if(T&&!T.da&&T.capture==a){var D=T.listener,V=T.ha||T.src;T.fa&&pn(t.i,T),v=D.call(V,l)!==!1&&v}}return v&&!l.defaultPrevented}function bi(t,s,a){if(typeof t=="function")a&&(t=S(t,a));else if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:p.setTimeout(t,s||0)}function Si(t){t.g=bi(()=>{t.g=null,t.i&&(t.i=!1,Si(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class go extends Ie{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Si(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(t){Ie.call(this),this.h=t,this.g={}}R(rt,Ie);var Ri=[];function ki(t){B(t.g,function(s,a){this.g.hasOwnProperty(a)&&vn(s)},t),t.g={}}rt.prototype.N=function(){rt.aa.N.call(this),ki(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var En=p.JSON.stringify,mo=p.JSON.parse,_o=class{stringify(t){return p.JSON.stringify(t,void 0)}parse(t){return p.JSON.parse(t,void 0)}};function wn(){}wn.prototype.h=null;function Pi(t){return t.h||(t.h=t.i())}function vo(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tn(){H.call(this,"d")}R(Tn,H);function An(){H.call(this,"c")}R(An,H);var He={},Ci=null;function bn(){return Ci=Ci||new $}He.La="serverreachability";function Oi(t){H.call(this,He.La,t)}R(Oi,H);function ot(t){const s=bn();K(s,new Oi(s))}He.STAT_EVENT="statevent";function Ni(t,s){H.call(this,He.STAT_EVENT,t),this.stat=s}R(Ni,H);function q(t){const s=bn();K(s,new Ni(s,t))}He.Ma="timingevent";function Di(t,s){H.call(this,He.Ma,t),this.size=s}R(Di,H);function at(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){t()},s)}function ct(){this.g=!0}ct.prototype.xa=function(){this.g=!1};function yo(t,s,a,l,v,E){t.info(function(){if(t.g)if(E)for(var T="",D=E.split("&"),V=0;V<D.length;V++){var O=D[V].split("=");if(1<O.length){var z=O[0];O=O[1];var W=z.split("_");T=2<=W.length&&W[1]=="type"?T+(z+"="+O+"&"):T+(z+"=redacted&")}}else T=null;else T=E;return"XMLHTTP REQ ("+l+") [attempt "+v+"]: "+s+`
`+a+`
`+T})}function Io(t,s,a,l,v,E,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+v+"]: "+s+`
`+a+`
`+E+" "+T})}function $e(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+wo(t,a)+(l?" "+l:"")})}function Eo(t,s){t.info(function(){return"TIMEOUT: "+s})}ct.prototype.info=function(){};function wo(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var v=l[1];if(Array.isArray(v)&&!(1>v.length)){var E=v[0];if(E!="noop"&&E!="stop"&&E!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return En(a)}catch{return s}}var Sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},To={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rn;function Nt(){}R(Nt,wn),Nt.prototype.g=function(){return new XMLHttpRequest},Nt.prototype.i=function(){return{}},Rn=new Nt;function Ee(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var Mi={},kn={};function Pn(t,s,a){t.L=1,t.v=Ut(de(s)),t.m=a,t.P=!0,Ui(t,null)}function Ui(t,s){t.F=Date.now(),Dt(t),t.A=de(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),Xi(a.i,"t",l),t.C=0,a=t.j.J,t.h=new Li,t.g=pr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new go(S(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ri[0]=v.toString()),v=Ri);for(var E=0;E<v.length;E++){var T=Ei(a,v[E],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),ot(),yo(t.i,t.u,t.A,t.l,t.R,t.m)}Ee.prototype.ca=function(t){t=t.target;const s=this.M;s&&fe(t)==3?s.j():this.Y(t)},Ee.prototype.Y=function(t){try{if(t==this.g)e:{const W=fe(this.g);var s=this.g.Ba();const Ge=this.g.Z();if(!(3>W)&&(W!=3||this.g&&(this.h.h||this.g.oa()||ir(this.g)))){this.J||W!=4||s==7||(s==8||0>=Ge?ot(3):ot(2)),Cn(this);var a=this.g.Z();this.X=a;t:if(xi(this)){var l=ir(this.g);t="";var v=l.length,E=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){De(this),lt(this);var T="";break t}this.h.i=new p.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(E&&s==v-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Io(this.i,this.u,this.A,this.l,this.R,W,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,V=this.g;if((D=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(D)){var O=D;break t}}O=null}if(a=O)$e(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,On(this,a);else{this.o=!1,this.s=3,q(12),De(this),lt(this);break e}}if(this.P){a=!0;let ne;for(;!this.J&&this.C<T.length;)if(ne=Ao(this,T),ne==kn){W==4&&(this.s=4,q(14),a=!1),$e(this.i,this.l,null,"[Incomplete Response]");break}else if(ne==Mi){this.s=4,q(15),$e(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else $e(this.i,this.l,ne,null),On(this,ne);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||T.length!=0||this.h.h||(this.s=1,q(16),a=!1),this.o=this.o&&a,!a)$e(this.i,this.l,T,"[Invalid Chunked Response]"),De(this),lt(this);else if(0<T.length&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.ba&&!z.M&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),xn(z),z.M=!0,q(11))}}else $e(this.i,this.l,T,null),On(this,T);W==4&&De(this),this.o&&!this.J&&(W==4?hr(this.j,this):(this.o=!1,Dt(this)))}else Vo(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,q(12)):(this.s=0,q(13)),De(this),lt(this)}}}catch{}finally{}};function xi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Ao(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?kn:(a=Number(s.substring(a,l)),isNaN(a)?Mi:(l+=1,l+a>s.length?kn:(s=s.slice(l,l+a),t.C=l+a,s)))}Ee.prototype.cancel=function(){this.J=!0,De(this)};function Dt(t){t.S=Date.now()+t.I,Fi(t,t.I)}function Fi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=at(S(t.ba,t),s)}function Cn(t){t.B&&(p.clearTimeout(t.B),t.B=null)}Ee.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Eo(this.i,this.A),this.L!=2&&(ot(),q(17)),De(this),this.s=2,lt(this)):Fi(this,this.S-t)};function lt(t){t.j.G==0||t.J||hr(t.j,t)}function De(t){Cn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,ki(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function On(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Nn(a.h,t))){if(!t.K&&Nn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var v=l;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Ht(a),Bt(a);else break e;Un(a),q(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=at(S(a.Za,a),6e3));if(1>=Vi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Me(a,11)}else if((t.K||a.g==t)&&Ht(a),!G(s))for(v=a.Da.g.parse(s),s=0;s<v.length;s++){let O=v[s];if(a.T=O[0],O=O[1],a.G==2)if(O[0]=="c"){a.K=O[1],a.ia=O[2];const z=O[3];z!=null&&(a.la=z,a.j.info("VER="+a.la));const W=O[4];W!=null&&(a.Aa=W,a.j.info("SVER="+a.Aa));const Ge=O[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(l=1.5*Ge,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ne=t.g;if(ne){const $t=ne.g?ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($t){var E=l.h;E.g||$t.indexOf("spdy")==-1&&$t.indexOf("quic")==-1&&$t.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(Dn(E,E.h),E.h=null))}if(l.D){const Fn=ne.g?ne.g.getResponseHeader("X-HTTP-Session-Id"):null;Fn&&(l.ya=Fn,L(l.I,l.D,Fn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var T=t;if(l.qa=fr(l,l.J?l.ia:null,l.W),T.K){Hi(l.h,T);var D=T,V=l.L;V&&(D.I=V),D.B&&(Cn(D),Dt(D)),l.g=T}else cr(l);0<a.i.length&&Vt(a)}else O[0]!="stop"&&O[0]!="close"||Me(a,7);else a.G==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?Me(a,7):Mn(a):O[0]!="noop"&&a.l&&a.l.ta(O),a.v=0)}}ot(4)}catch{}}var bo=class{constructor(t,s){this.g=t,this.map=s}};function ji(t){this.l=t||10,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vi(t){return t.h?1:t.g?t.g.size:0}function Nn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Dn(t,s){t.g?t.g.add(s):t.h=s}function Hi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}ji.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $i(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return M(t.i)}function So(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(y(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function Ro(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(y(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function zi(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(y(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Ro(t),l=So(t),v=l.length,E=0;E<v;E++)s.call(void 0,l[E],a&&a[E],t)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ko(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),v=null;if(0<=l){var E=t[a].substring(0,l);v=t[a].substring(l+1)}else E=t[a];s(E,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Le(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Le){this.h=t.h,Lt(this,t.j),this.o=t.o,this.g=t.g,Mt(this,t.s),this.l=t.l;var s=t.i,a=new dt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),Gi(this,a),this.m=t.m}else t&&(s=String(t).match(Wi))?(this.h=!1,Lt(this,s[1]||"",!0),this.o=ht(s[2]||""),this.g=ht(s[3]||"",!0),Mt(this,s[4]),this.l=ht(s[5]||"",!0),Gi(this,s[6]||"",!0),this.m=ht(s[7]||"")):(this.h=!1,this.i=new dt(null,this.h))}Le.prototype.toString=function(){var t=[],s=this.j;s&&t.push(ut(s,Ki,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(ut(s,Ki,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ut(a,a.charAt(0)=="/"?Oo:Co,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ut(a,Do)),t.join("")};function de(t){return new Le(t)}function Lt(t,s,a){t.j=a?ht(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Mt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Gi(t,s,a){s instanceof dt?(t.i=s,Lo(t.i,t.h)):(a||(s=ut(s,No)),t.i=new dt(s,t.h))}function L(t,s,a){t.i.set(s,a)}function Ut(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ht(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Po),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Po(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ki=/[#\/\?@]/g,Co=/[#\?:]/g,Oo=/[#\?]/g,No=/[#\?@]/g,Do=/#/g;function dt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function we(t){t.g||(t.g=new Map,t.h=0,t.i&&ko(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=dt.prototype,i.add=function(t,s){we(this),this.i=null,t=ze(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function qi(t,s){we(t),s=ze(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Ji(t,s){return we(t),s=ze(t,s),t.g.has(s)}i.forEach=function(t,s){we(this),this.g.forEach(function(a,l){a.forEach(function(v){t.call(s,v,l,this)},this)},this)},i.na=function(){we(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const v=t[l];for(let E=0;E<v.length;E++)a.push(s[l])}return a},i.V=function(t){we(this);let s=[];if(typeof t=="string")Ji(this,t)&&(s=s.concat(this.g.get(ze(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},i.set=function(t,s){return we(this),this.i=null,t=ze(this,t),Ji(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Xi(t,s,a){qi(t,s),0<a.length&&(t.i=null,t.g.set(ze(t,s),M(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const E=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var v=E;T[l]!==""&&(v+="="+encodeURIComponent(String(T[l]))),t.push(v)}}return this.i=t.join("&")};function ze(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Lo(t,s){s&&!t.j&&(we(t),t.i=null,t.g.forEach(function(a,l){var v=l.toLowerCase();l!=v&&(qi(this,l),Xi(this,v,a))},t)),t.j=s}function Mo(t,s){const a=new ct;if(p.Image){const l=new Image;l.onload=U(Te,a,"TestLoadImage: loaded",!0,s,l),l.onerror=U(Te,a,"TestLoadImage: error",!1,s,l),l.onabort=U(Te,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=U(Te,a,"TestLoadImage: timeout",!1,s,l),p.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function Uo(t,s){const a=new ct,l=new AbortController,v=setTimeout(()=>{l.abort(),Te(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(E=>{clearTimeout(v),E.ok?Te(a,"TestPingServer: ok",!0,s):Te(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),Te(a,"TestPingServer: error",!1,s)})}function Te(t,s,a,l,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),l(a)}catch{}}function xo(){this.g=new _o}function Fo(t,s,a){const l=a||"";try{zi(t,function(v,E){let T=v;w(v)&&(T=En(v)),s.push(l+E+"="+encodeURIComponent(T))})}catch(v){throw s.push(l+"type="+encodeURIComponent("_badmap")),v}}function xt(t){this.l=t.Ub||null,this.j=t.eb||!1}R(xt,wn),xt.prototype.g=function(){return new Ft(this.l,this.j)},xt.prototype.i=function(t){return function(){return t}}({});function Ft(t,s){$.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ft,$),i=Ft.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,pt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||p).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pt(this)),this.g&&(this.readyState=3,pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ft(this):pt(this),this.readyState==3&&Yi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,ft(this))},i.Qa=function(t){this.g&&(this.response=t,ft(this))},i.ga=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.v=null,pt(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ft.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Qi(t){let s="";return B(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function Ln(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Qi(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):L(t,s,a))}function j(t){$.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(j,$);var jo=/^https?$/i,Bo=["POST","PUT"];i=j.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rn.g(),this.v=this.o?Pi(this.o):Pi(Rn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(E){Zi(this,E);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var v in l)a.set(v,l[v]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const E of l.keys())a.set(E,l.get(E));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(E=>E.toLowerCase()=="content-type"),v=p.FormData&&t instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Bo,s,void 0))||l||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of a)this.g.setRequestHeader(E,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nr(this),this.u=!0,this.g.send(t),this.u=!1}catch(E){Zi(this,E)}};function Zi(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,er(t),jt(t)}function er(t){t.A||(t.A=!0,K(t,"complete"),K(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,K(this,"complete"),K(this,"abort"),jt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),j.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?tr(this):this.bb())},i.bb=function(){tr(this)};function tr(t){if(t.h&&typeof h<"u"&&(!t.v[1]||fe(t)!=4||t.Z()!=2)){if(t.u&&fe(t)==4)bi(t.Ea,0,t);else if(K(t,"readystatechange"),fe(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=T===0){var v=String(t.D).match(Wi)[1]||null;!v&&p.self&&p.self.location&&(v=p.self.location.protocol.slice(0,-1)),l=!jo.test(v?v.toLowerCase():"")}a=l}if(a)K(t,"complete"),K(t,"success");else{t.m=6;try{var E=2<fe(t)?t.g.statusText:""}catch{E=""}t.l=E+" ["+t.Z()+"]",er(t)}}finally{jt(t)}}}}function jt(t,s){if(t.g){nr(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||K(t,"ready");try{a.onreadystatechange=l}catch{}}}function nr(t){t.I&&(p.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function fe(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),mo(s)}};function ir(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Vo(t){const s={};t=(t.g&&2<=fe(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(G(t[l]))continue;var a=m(t[l]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const E=s[v]||[];s[v]=E,E.push(a)}_(s,function(l){return l.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function rr(t){this.Aa=0,this.i=[],this.j=new ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gt("baseRetryDelayMs",5e3,t),this.cb=gt("retryDelaySeedMs",1e4,t),this.Wa=gt("forwardChannelMaxRetries",2,t),this.wa=gt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ji(t&&t.concurrentRequestLimit),this.Da=new xo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=rr.prototype,i.la=8,i.G=1,i.connect=function(t,s,a,l){q(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=fr(this,null,this.W),Vt(this)};function Mn(t){if(sr(t),t.G==3){var s=t.U++,a=de(t.I);if(L(a,"SID",t.K),L(a,"RID",s),L(a,"TYPE","terminate"),mt(t,a),s=new Ee(t,t.j,s),s.L=2,s.v=Ut(de(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=s.v,a=!0),a||(s.g=pr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Dt(s)}dr(t)}function Bt(t){t.g&&(xn(t),t.g.cancel(),t.g=null)}function sr(t){Bt(t),t.u&&(p.clearTimeout(t.u),t.u=null),Ht(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&p.clearTimeout(t.s),t.s=null)}function Vt(t){if(!Bi(t.h)&&!t.s){t.s=!0;var s=t.Ga;tt||Ii(),nt||(tt(),nt=!0),fn.add(s,t),t.B=0}}function Ho(t,s){return Vi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=at(S(t.Ga,t,s),ur(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new Ee(this,this.j,t);let E=this.o;if(this.S&&(E?(E=u(E),g(E,this.S)):E=this.S),this.m!==null||this.O||(v.H=E,E=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=ar(this,v,s),a=de(this.I),L(a,"RID",t),L(a,"CVER",22),this.D&&L(a,"X-HTTP-Session-Id",this.D),mt(this,a),E&&(this.O?s="headers="+encodeURIComponent(String(Qi(E)))+"&"+s:this.m&&Ln(a,this.m,E)),Dn(this.h,v),this.Ua&&L(a,"TYPE","init"),this.P?(L(a,"$req",s),L(a,"SID","null"),v.T=!0,Pn(v,a,null)):Pn(v,a,s),this.G=2}}else this.G==3&&(t?or(this,t):this.i.length==0||Bi(this.h)||or(this))};function or(t,s){var a;s?a=s.l:a=t.U++;const l=de(t.I);L(l,"SID",t.K),L(l,"RID",a),L(l,"AID",t.T),mt(t,l),t.m&&t.o&&Ln(l,t.m,t.o),a=new Ee(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=ar(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Dn(t.h,a),Pn(a,l,s)}function mt(t,s){t.H&&B(t.H,function(a,l){L(s,l,a)}),t.l&&zi({},function(a,l){L(s,l,a)})}function ar(t,s,a){a=Math.min(t.i.length,a);var l=t.l?S(t.l.Na,t.l,t):null;e:{var v=t.i;let E=-1;for(;;){const T=["count="+a];E==-1?0<a?(E=v[0].g,T.push("ofs="+E)):E=0:T.push("ofs="+E);let D=!0;for(let V=0;V<a;V++){let O=v[V].g;const z=v[V].map;if(O-=E,0>O)E=Math.max(0,v[V].g-100),D=!1;else try{Fo(z,T,"req"+O+"_")}catch{l&&l(z)}}if(D){l=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function cr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;tt||Ii(),nt||(tt(),nt=!0),fn.add(s,t),t.v=0}}function Un(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=at(S(t.Fa,t),ur(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,lr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=at(S(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,q(10),Bt(this),lr(this))};function xn(t){t.A!=null&&(p.clearTimeout(t.A),t.A=null)}function lr(t){t.g=new Ee(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=de(t.qa);L(s,"RID","rpc"),L(s,"SID",t.K),L(s,"AID",t.T),L(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(s,"TO",t.ja),L(s,"TYPE","xmlhttp"),mt(t,s),t.m&&t.o&&Ln(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Ut(de(s)),a.m=null,a.P=!0,Ui(a,t)}i.Za=function(){this.C!=null&&(this.C=null,Bt(this),Un(this),q(19))};function Ht(t){t.C!=null&&(p.clearTimeout(t.C),t.C=null)}function hr(t,s){var a=null;if(t.g==s){Ht(t),xn(t),t.g=null;var l=2}else if(Nn(t.h,s))a=s.D,Hi(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var v=t.B;l=bn(),K(l,new Di(l,a)),Vt(t)}else cr(t);else if(v=s.s,v==3||v==0&&0<s.X||!(l==1&&Ho(t,s)||l==2&&Un(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),v){case 1:Me(t,5);break;case 4:Me(t,10);break;case 3:Me(t,6);break;default:Me(t,2)}}}function ur(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Me(t,s){if(t.j.info("Error code "+s),s==2){var a=S(t.fb,t),l=t.Xa;const v=!l;l=new Le(l||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Lt(l,"https"),Ut(l),v?Mo(l.toString(),a):Uo(l.toString(),a)}else q(2);t.G=0,t.l&&t.l.sa(s),dr(t),sr(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function dr(t){if(t.G=0,t.ka=[],t.l){const s=$i(t.h);(s.length!=0||t.i.length!=0)&&(P(t.ka,s),P(t.ka,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.ra()}}function fr(t,s,a){var l=a instanceof Le?de(a):new Le(a);if(l.g!="")s&&(l.g=s+"."+l.g),Mt(l,l.s);else{var v=p.location;l=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var E=new Le(null);l&&Lt(E,l),s&&(E.g=s),v&&Mt(E,v),a&&(E.l=a),l=E}return a=t.D,s=t.ya,a&&s&&L(l,a,s),L(l,"VER",t.la),mt(t,l),l}function pr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new j(new xt({eb:a})):new j(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function gr(){}i=gr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function te(t,s){$.call(this),this.g=new rr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!G(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!G(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new We(this)}R(te,$),te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){Mn(this.g)},te.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=En(t),t=a);s.i.push(new bo(s.Ya++,t)),s.G==3&&Vt(s)},te.prototype.N=function(){this.g.l=null,delete this.j,Mn(this.g),delete this.g,te.aa.N.call(this)};function mr(t){Tn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}R(mr,Tn);function _r(){An.call(this),this.status=1}R(_r,An);function We(t){this.g=t}R(We,gr),We.prototype.ua=function(){K(this.g,"a")},We.prototype.ta=function(t){K(this.g,new mr(t))},We.prototype.sa=function(t){K(this.g,new _r)},We.prototype.ra=function(){K(this.g,"b")},te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,To.COMPLETE="complete",vo.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",$.prototype.listen=$.prototype.K,j.prototype.listenOnce=j.prototype.L,j.prototype.getLastError=j.prototype.Ka,j.prototype.getLastErrorCode=j.prototype.Ba,j.prototype.getStatus=j.prototype.Z,j.prototype.getResponseJson=j.prototype.Oa,j.prototype.getResponseText=j.prototype.oa,j.prototype.send=j.prototype.ea,j.prototype.setWithCredentials=j.prototype.Ha}).apply(typeof Wt<"u"?Wt:typeof self<"u"?self:typeof window<"u"?window:{});const Gr="@firebase/firestore";/**
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
 */class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
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
 */let Rt="10.14.0";/**
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
 */const Qe=new ii("@firebase/firestore");function ie(i,...e){if(Qe.logLevel<=N.DEBUG){const n=e.map(mi);Qe.debug(`Firestore (${Rt}): ${i}`,...n)}}function Zs(i,...e){if(Qe.logLevel<=N.ERROR){const n=e.map(mi);Qe.error(`Firestore (${Rt}): ${i}`,...n)}}function _h(i,...e){if(Qe.logLevel<=N.WARN){const n=e.map(mi);Qe.warn(`Firestore (${Rt}): ${i}`,...n)}}function mi(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function _i(i="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+i;throw Zs(e),new Error(e)}function vt(i,e){i||_i()}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends le{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eo{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class yh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ih{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){vt(this.o===void 0);let r=this.i;const o=y=>this.i!==r?(r=this.i,n(y)):Promise.resolve();let c=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new yt,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},p=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>p(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new yt)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string"),new eo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vt(e===null||typeof e=="string"),new J(e)}}class Eh{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wh{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Eh(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Th{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ah{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){vt(this.o===void 0);const r=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.R;return this.R=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(vt(typeof n.token=="string"),this.R=n.token,new Th(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function bh(i){return i.name==="IndexedDbTransactionError"}class on{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Kr,C;(C=Kr||(Kr={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Qs([4294967295,4294967295],0);function Gn(){return typeof document<"u"?document:null}/**
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
 */class Sh{constructor(e,n,r=1e3,o=1.5,c=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=o,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,n-r);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class vi{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const h=Date.now()+r,p=new vi(e,n,h,o,c);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var qr,Jr;(Jr=qr||(qr={})).ea="default",Jr.Cache="cache";/**
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
 */function Rh(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Xr=new Map;function kh(i,e,n,r){if(e===!0&&r===!0)throw new Z(Q.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Ph(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_i()}function Ch(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Z(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ph(i);throw new Z(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */class Yr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class to{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vh;switch(r.type){case"firstParty":return new wh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xr.get(n);r&&(ie("ComponentProvider","Removing Datastore"),Xr.delete(n),r.terminate())}(this),Promise.resolve()}}function Oh(i,e,n,r={}){var o;const c=(i=Ch(i,to))._getSettings(),h=`${e}:${n}`;if(c.host!=="firestore.googleapis.com"&&c.host!==h&&_h("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},c),{host:h,ssl:!1})),r.mockUserToken){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=J.MOCK_USER;else{p=ps(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new Z(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new J(w)}i._authCredentials=new yh(new eo(p,y))}}/**
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
 */class Qr{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sh(this,"async_queue_retry"),this.Vu=()=>{const r=Gn();r&&ie("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Gn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Gn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bh(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(r);throw Zs("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const o=vi.createAndSchedule(this,e,n,r,c=>this.yu(c));return this.Tu.push(o),o}fu(){this.Eu&&_i()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Nh extends to{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Qr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qr(e),this._firestoreClient=void 0,await e}}}function Dh(i,e){const n=typeof i=="object"?i:si(),r=typeof i=="string"?i:"(default)",o=hn(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=us("firestore");c&&Oh(o,...c)}return o}(function(e,n=!0){(function(o){Rt=o})(Ve),Fe(new Ne("firestore",(r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),p=new Nh(new Ih(r.getProvider("auth-internal")),new Ah(r.getProvider("app-check-internal")),function(w,b){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new Z(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(w.options.projectId,b)}(h,o),h);return c=Object.assign({useFetchStreams:n},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),se(Gr,"4.7.3",e),se(Gr,"4.7.3","esm2017")})();/**
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
 */const no="firebasestorage.googleapis.com",Lh="storageBucket",Mh=2*60*1e3,Uh=10*60*1e3;/**
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
 */class he extends le{constructor(e,n,r=0){super(Kn(e),`Firebase Storage: ${n} (${Kn(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function Kn(i){return"storage/"+i}function xh(){const i="An unknown error occurred, please check the error payload for server response.";return new he(ce.UNKNOWN,i)}function Fh(){return new he(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jh(){return new he(ce.CANCELED,"User canceled the upload/download.")}function Bh(i){return new he(ce.INVALID_URL,"Invalid URL '"+i+"'.")}function Vh(i){return new he(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function Zr(i){return new he(ce.INVALID_ARGUMENT,i)}function io(){return new he(ce.APP_DELETED,"The Firebase app was deleted.")}function Hh(i){return new he(ce.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class re{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=re.makeFromUrl(e,n)}catch{return new re(e,"")}if(r.path==="")return r;throw Vh(e)}static makeFromUrl(e,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),y={bucket:1,path:3};function w(F){F.path_=decodeURIComponent(F.path)}const b="v[A-Za-z0-9_]+",k=n.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",U=new RegExp(`^https?://${k}/${b}/b/${o}/o${S}`,"i"),R={bucket:1,path:3},M=n===no?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",Y=new RegExp(`^https?://${M}/${o}/${P}`,"i"),x=[{regex:p,indices:y,postModify:c},{regex:U,indices:R,postModify:w},{regex:Y,indices:{bucket:1,path:2},postModify:w}];for(let F=0;F<x.length;F++){const ee=x[F],B=ee.regex.exec(e);if(B){const _=B[ee.indices.bucket];let u=B[ee.indices.path];u||(u=""),r=new re(_,u),ee.postModify(r);break}}if(r==null)throw Bh(e);return r}}class $h{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function zh(i,e,n){let r=1,o=null,c=null,h=!1,p=0;function y(){return p===2}let w=!1;function b(...P){w||(w=!0,e.apply(null,P))}function k(P){o=setTimeout(()=>{o=null,i(U,y())},P)}function S(){c&&clearTimeout(c)}function U(P,...Y){if(w){S();return}if(P){S(),b.call(null,P,...Y);return}if(y()||h){S(),b.call(null,P,...Y);return}r<64&&(r*=2);let x;p===1?(p=2,x=0):x=(r+Math.random())*1e3,k(x)}let R=!1;function M(P){R||(R=!0,S(),!w&&(o!==null?(P||(p=2),clearTimeout(o),k(0)):P||(p=1)))}return k(0),c=setTimeout(()=>{h=!0,M(!0)},n),M}function Wh(i){i(!1)}/**
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
 */function Gh(i){return i!==void 0}function es(i,e,n,r){if(r<e)throw Zr(`Invalid value for '${i}'. Expected ${e} or greater.`);if(r>n)throw Zr(`Invalid value for '${i}'. Expected ${n} or less.`)}function Kh(i){const e=encodeURIComponent;let n="?";for(const r in i)if(i.hasOwnProperty(r)){const o=e(r)+"="+e(i[r]);n=n+o+"&"}return n=n.slice(0,-1),n}var an;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(an||(an={}));/**
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
 */function qh(i,e){const n=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,c=e.indexOf(i)!==-1;return n||o||c}/**
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
 */class Jh{constructor(e,n,r,o,c,h,p,y,w,b,k,S=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=y,this.timeout_=w,this.progressCallback_=b,this.connectionFactory_=k,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,R)=>{this.resolve_=U,this.reject_=R,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new Gt(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=p=>{const y=p.loaded,w=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,w)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const p=c.getErrorCode()===an.NO_ERROR,y=c.getStatus();if(!p||qh(y,this.additionalRetryCodes_)&&this.retry){const b=c.getErrorCode()===an.ABORT;r(!1,new Gt(!1,null,b));return}const w=this.successCodes_.indexOf(y)!==-1;r(!0,new Gt(w,c))})},n=(r,o)=>{const c=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const y=this.callback_(p,p.getResponse());Gh(y)?c(y):c()}catch(y){h(y)}else if(p!==null){const y=xh();y.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,y)):h(y)}else if(o.canceled){const y=this.appDelete_?io():jh();h(y)}else{const y=Fh();h(y)}};this.canceled_?n(!1,new Gt(!1,null,!0)):this.backoffId_=zh(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Wh(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gt{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Xh(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function Yh(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qh(i,e){e&&(i["X-Firebase-GMPID"]=e)}function Zh(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function eu(i,e,n,r,o,c,h=!0){const p=Kh(i.urlParams),y=i.url+p,w=Object.assign({},i.headers);return Qh(w,e),Xh(w,n),Yh(w,c),Zh(w,r),new Jh(y,i.method,w,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,h)}/**
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
 */function tu(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function nu(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */class cn{constructor(e,n){this._service=e,n instanceof re?this._location=n:this._location=re.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new cn(e,n)}get root(){const e=new re(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nu(this._location.path)}get storage(){return this._service}get parent(){const e=tu(this._location.path);if(e===null)return null;const n=new re(this._location.bucket,e);return new cn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Hh(e)}}function ts(i,e){const n=e==null?void 0:e[Lh];return n==null?null:re.makeFromBucketSpec(n,i)}function iu(i,e,n,r={}){i.host=`${e}:${n}`,i._protocol="http";const{mockUserToken:o}=r;o&&(i._overrideAuthToken=typeof o=="string"?o:ps(o,i.app.options.projectId))}class ru{constructor(e,n,r,o,c){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=c,this._bucket=null,this._host=no,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Mh,this._maxUploadRetryTime=Uh,this._requests=new Set,o!=null?this._bucket=re.makeFromBucketSpec(o,this._host):this._bucket=ts(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=re.makeFromBucketSpec(this._url,e):this._bucket=ts(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){es("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){es("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cn(this,e)}_makeRequest(e,n,r,o,c=!0){if(this._deleted)return new $h(io());{const h=eu(e,this._appId,r,o,n,this._firebaseVersion,c);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,o).getPromise()}}const ns="@firebase/storage",is="0.13.2";/**
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
 */const ro="storage";function su(i=si(),e){i=Be(i);const r=hn(i,ro).getImmediate({identifier:e}),o=us("storage");return o&&ou(r,...o),r}function ou(i,e,n,r={}){iu(i,e,n,r)}function au(i,{instanceIdentifier:e}){const n=i.getProvider("app").getImmediate(),r=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new ru(n,r,o,e,Ve)}function cu(){Fe(new Ne(ro,au,"PUBLIC").setMultipleInstances(!0)),se(ns,is,""),se(ns,is,"esm2017")}cu();const lu={apiKey:secrets.VITE_FIREBASE_API_KEY,authDomain:secrets.VITE_FIREBASE_AUTH_DOMAIN,projectId:secrets.VITE_FIREBASE_PROJECT_ID,storageBucket:secrets.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:secrets.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:secrets.VITE_FIREBASE_APP_ID,measurementId:secrets.VITE_MEASUREMENT_ID},yi=_s(lu);gh(yi);const ln=Dh(yi);su(yi);async function hu(i){try{if(!ln)throw new Error("Firebase not initialized");console.log("Saving data to Firebase:",{...i,timestamp:new Date});const e=await addDoc(collection(ln,"numbers"),{...i,timestamp:new Date});return console.log("Document written with ID: ",e.id),e}catch(e){throw console.error("Error saving to Firebase:",e),e}}async function uu(i){try{if(!ln)throw new Error("Firebase not initialized");const e=query(collection(ln,"numbers"),where("phoneNumber","==",i),orderBy("timestamp","desc"),limit(1)),n=await getDocs(e);return n.empty?null:n.docs[0].data()}catch(e){throw console.error("Error querying Firebase:",e),e}}const du={es:{title:"Consulta el origen del número telefónico",inputPlaceholder:"Ingresa el número telefónico con código de país (ej: +34612345678)",searchButton:"Consultar",loading:"Consultando...",invalidFormat:"Formato de número inválido. Use el formato +[código país][número]",numberInfo:"Información del número",country:"País",countryCode:"Código de país",location:"Ubicación",localFormat:"Formato local",carrier:"Operador",notAvailable:"No disponible",error:"Error al consultar el número. Por favor, intenta más tarde.",processingError:"Error al procesar la solicitud. Por favor, intenta más tarde.",invalidNumber:"Número no válido"},en:{title:"Check phone number origin",inputPlaceholder:"Enter phone number with country code (e.g: +34612345678)",searchButton:"Search",loading:"Searching...",invalidFormat:"Invalid number format. Use format: +[country code][number]",numberInfo:"Number Information",country:"Country",countryCode:"Country Code",location:"Location",localFormat:"Local Format",carrier:"Carrier",notAvailable:"Not available",error:"Error querying the number. Please try again later.",processingError:"Error processing request. Please try again later.",invalidNumber:"Invalid number"}},fu="https://api.apilayer.com/number_verification/validate",pu=window.env.VITE_PHONE_API_KEY,gu=async i=>{try{const e=await fetch(`${fu}?number=${i}`,{method:"GET",headers:{apikey:pu}});if(!e.ok)throw console.error("API Error:",e.status,await e.text()),new Error(`API_ERROR_${e.status}`);const n=await e.json();if(!n.valid)throw new Error("INVALID_PHONE");return{valid:!0,country:n.country_name,region:n.location||"No disponible",carrier:n.carrier||"No disponible",location:{lat:null,lng:null}}}catch(e){throw console.error("Phone validation error:",e),e}},mu=(i,e)=>{const n=new Date().toISOString();return{telefono:e.trim(),country_name:(i.country_name||"").trim(),country_code:(i.country_code||"").trim(),location:(i.location||"No disponible").trim(),local_format:(i.local_format||"").trim(),carrier:(i.carrier||"No disponible").trim(),timestamp:n,created_at:n,valid:!0}},_u=i=>{const e=/^\+[0-9]{1,3}[0-9]{4,14}$/;return{valido:e.test(i),mensaje:e.test(i)?"":"El formato del número no es válido. Use: +[código país][número]"}},rs=i=>{const e=JSON.parse(localStorage.getItem("historial")||"[]");e.includes(i)||(e.unshift(i),e.length>5&&e.pop(),localStorage.setItem("historial",JSON.stringify(e)))},ss=()=>{const i=JSON.parse(localStorage.getItem("historial")||"[]");return i.length>0?`
            <div class="historial">
                <h3><i class="fas fa-history"></i> Búsquedas recientes</h3>
                <ul>
                    ${i.map(e=>`
                        <li>
                            <span>${e}</span>
                            <button onclick="consultarNumero('${e}')">
                                <i class="fas fa-search"></i>
                            </button>
                        </li>
                    `).join("")}
                </ul>
            </div>
        `:""};let vu=localStorage.getItem("lang")||"es";function yu(i,e,n){switch(console.error("Error:",i),e.style.display="block",document.querySelector(".map-container").style.display="none",i.message){case"INVALID_FORMAT":e.innerHTML=n.invalidFormat;break;case"INVALID_PHONE":e.innerHTML=n.invalidPhone;break;case"FIREBASE_QUERY_ERROR":e.innerHTML=n.firebaseQueryError;break;case"FIREBASE_SAVE_ERROR":e.innerHTML=n.firebaseSaveError;break;default:e.innerHTML=n.generalError}}function os(i,e,n){if(e.innerHTML=`
        <p><strong>${n.country}:</strong> ${i.country}</p>
        <p><strong>${n.region}:</strong> ${i.region}</p>
        <p><strong>${n.carrier}:</strong> ${i.carrier}</p>
    `,i.location&&i.location.lat&&i.location.lng){const r=document.querySelector(".map-container");r.style.display="block"}}document.getElementById("telefonoForm").addEventListener("submit",async function(i){i.preventDefault();const e=document.getElementById("telefono").value.trim(),n=document.getElementById("resultado"),r=document.querySelector(".map-container"),o=du[vu];try{const{valido:c,mensaje:h}=_u(e);if(!c)throw new Error("INVALID_FORMAT");n.style.display="block",n.innerHTML=o.loading,r.style.display="none";const p=await uu(e);if(p)os(p,n,o),rs(e),document.querySelector(".historial-container").innerHTML=ss();else{const y=await gu(e);if(y.valid){const w=mu(y,e);await hu(w),os(w,n,o),rs(e),document.querySelector(".historial-container").innerHTML=ss()}else throw new Error("INVALID_PHONE")}}catch(c){yu(c,n,o)}});

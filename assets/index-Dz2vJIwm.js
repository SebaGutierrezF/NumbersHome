import{initializeApp as E}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as T,collection as v,query as S,where as w,getDocs as F,addDoc as _}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const M={apiKey:"AIzaSyDFDboBtIOwhX6QYker19RlTPhDmEAakMY",authDomain:"numberhome-5ad7c.firebaseapp.com",projectId:"numberhome-5ad7c",storageBucket:"numberhome-5ad7c.firebasestorage.app",messagingSenderId:"155611891211",appId:"1:155611891211:web:7bad7e2de46af2abb4290e",measurementId:"G-MXXVWCLLBD"},N=E(M),I=T(N),h={es:{title:"Consulta el origen del número telefónico",inputPlaceholder:"Ingresa el número telefónico con código de país (ej: +34612345678)",searchButton:"Consultar",loading:"Consultando...",invalidFormat:"Formato de número inválido. Use el formato +[código país][número]",numberInfo:"Información del número",country:"País",countryCode:"Código de país",location:"Ubicación",localFormat:"Formato local",carrier:"Operador",notAvailable:"No disponible",error:"Error al consultar el número. Por favor, intenta más tarde.",processingError:"Error al procesar la solicitud. Por favor, intenta más tarde.",invalidNumber:"Número no válido"},en:{title:"Check phone number origin",inputPlaceholder:"Enter phone number with country code (e.g: +34612345678)",searchButton:"Search",loading:"Searching...",invalidFormat:"Invalid number format. Use format: +[country code][number]",numberInfo:"Number Information",country:"Country",countryCode:"Country Code",location:"Location",localFormat:"Local Format",carrier:"Carrier",notAvailable:"Not available",error:"Error querying the number. Please try again later.",processingError:"Error processing request. Please try again later.",invalidNumber:"Invalid number"}},D="num_live_FC9wIwyShZsgsmatw7jFjxdZjwMwRRaWKSmmGazC";let i=null,m=localStorage.getItem("lang")||"es";function P(){const e=document.getElementById("themeToggle"),t=window.matchMedia("(prefers-color-scheme: dark)"),a=localStorage.getItem("theme")||(t.matches?"dark":"light");document.documentElement.setAttribute("data-theme",a),C(a),e.addEventListener("click",()=>{const r=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r),C(r)})}function C(e){const n=document.getElementById("themeToggle").querySelector("i");e==="dark"?n.className="fas fa-moon":n.className="fas fa-sun"}function q(){const e=document.getElementById("langToggle");$(m),e.addEventListener("click",()=>{m=m==="es"?"en":"es",localStorage.setItem("lang",m),$(m)})}function $(e){const t=h[e];document.getElementById("title").textContent=t.title,document.getElementById("telefono").placeholder=t.inputPlaceholder,document.querySelector("#telefonoForm button").innerHTML=`
        <i class="fas fa-search"></i> ${t.searchButton}
    `,document.querySelector("#langToggle span").textContent=e.toUpperCase();const n=document.getElementById("resultado");n.innerHTML&&!n.innerHTML.includes(t.loading)&&B(n)}function B(e){const t=h[m],n=document.getElementById("telefono").value;if(e.querySelector(".error")){e.innerHTML=`
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${t.invalidFormat}
            </h3>
        `;return}const a={country:e.querySelector("p:nth-child(2) strong").textContent,countryCode:e.querySelector("p:nth-child(3) strong").textContent,location:e.querySelector("p:nth-child(4) strong").textContent,localFormat:e.querySelector("p:nth-child(5) strong").textContent,carrier:e.querySelector("p:nth-child(6) strong").textContent};e.innerHTML=`
        <h3><i class="fas fa-info-circle"></i> ${t.numberInfo} ${n}</h3>
        <p>
            <span><i class="fas fa-globe"></i> ${t.country}</span>
            <strong>${a.country}</strong>
        </p>
        <p>
            <span><i class="fas fa-flag"></i> ${t.countryCode}</span>
            <strong>${a.countryCode}</strong>
        </p>
        <p>
            <span><i class="fas fa-map-marker-alt"></i> ${t.location}</span>
            <strong>${a.location}</strong>
        </p>
        <p>
            <span><i class="fas fa-phone"></i> ${t.localFormat}</span>
            <strong>${a.localFormat}</strong>
        </p>
        <p>
            <span><i class="fas fa-building"></i> ${t.carrier}</span>
            <strong>${a.carrier}</strong>
        </p>
    `}document.addEventListener("DOMContentLoaded",()=>{P(),q()});function A(e,t){const n=new Date().toISOString();return{telefono:t.trim(),country_name:(e.country_name||"").trim(),country_code:(e.country_code||"").trim(),location:(e.location||"No disponible").trim(),local_format:(e.local_format||"").trim(),carrier:(e.carrier||"No disponible").trim(),timestamp:n,created_at:n,valid:!0}}function k(e){return e.location&&e.location!=="No disponible"?`${e.location}, ${e.country_name}`:e.country_name&&e.country_name!=="No disponible"?e.country_name:null}document.getElementById("telefonoForm").addEventListener("submit",async function(e){e.preventDefault();const t=document.getElementById("telefono").value.trim(),n=document.getElementById("resultado"),a=document.querySelector(".map-container"),o=h[m];if(!/^\+[0-9]{1,3}[0-9]{4,14}$/.test(t)){n.innerHTML=`
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${o.invalidFormat}
            </h3>
        `;return}n.style.display="block",n.innerHTML=o.loading,a.style.display="none";try{const r=v(I,"numeros"),u=S(r,w("telefono","==",t));try{const f=await F(u);let s;if(!f.empty)s=f.docs[0].data(),console.log("Datos recuperados de Firebase:",s);else{console.log("Consultando API externa...");const g=await(await fetch(`https://api.numlookupapi.com/v1/validate/${t}?apikey=${D}`)).json();if(g.valid){s=g;try{const l=A(s,t);console.log("Intentando guardar datos:",l);const d=await _(v(I,"numeros"),l);console.log("Datos guardados en Firebase con ID:",d.id),s=l}catch(l){console.error("Error detallado al guardar en Firebase:",l)}}}if(s&&(s.valid||s.telefono)){n.innerHTML=`
                    <h3><i class="fas fa-info-circle"></i> ${o.numberInfo} ${t}</h3>
                    <p>
                        <span><i class="fas fa-globe"></i> ${o.country}</span>
                        <strong>${s.country_name||o.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-flag"></i> ${o.countryCode}</span>
                        <strong>${s.country_code||o.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-map-marker-alt"></i> ${o.location}</span>
                        <strong>${s.location||o.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-phone"></i> ${o.localFormat}</span>
                        <strong>${s.local_format||o.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-building"></i> ${o.carrier}</span>
                        <strong>${s.carrier||o.notAvailable}</strong>
                    </p>
                `;const p=k(s);if(p)try{console.log("Buscando coordenadas para:",p);const l=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(p)}&limit=1`)).json();if(l&&l.length>0){const{lat:d,lon:c}=l[0];console.log("Coordenadas encontradas:",d,c),a.style.display="block",i&&(i.remove(),i=null),setTimeout(()=>{try{i=L.map("map",{zoomControl:!0,scrollWheelZoom:!0}).setView([d,c],6),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(i),L.marker([d,c]).addTo(i).bindPopup(p).openPopup(),i.invalidateSize(),console.log("Mapa inicializado correctamente")}catch(y){console.error("Error al inicializar el mapa:",y)}},300)}else if(console.log("No se encontraron coordenadas específicas, intentando con el país"),s.country_name&&s.country_name!=="No disponible"){const c=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(s.country_name)}&limit=1`)).json();if(c&&c.length>0){const{lat:y,lon:b}=c[0];a.style.display="block",i&&(i.remove(),i=null),setTimeout(()=>{i=L.map("map",{zoomControl:!0,scrollWheelZoom:!0}).setView([y,b],4),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(i),L.marker([y,b]).addTo(i).bindPopup(s.country_name).openPopup(),i.invalidateSize()},300)}}else console.log("No hay datos de ubicación suficientes para mostrar el mapa"),a.style.display="none"}catch(g){console.error("Error al obtener coordenadas:",g),a.style.display="none"}else console.log("No hay datos de ubicación válidos para mostrar el mapa"),a.style.display="none"}else n.innerHTML=`
                    <h3 class="error">
                        <i class="fas fa-exclamation-triangle"></i>
                        ${o.invalidNumber}
                    </h3>
                `}catch(f){console.error("Error en la operación:",f),n.innerHTML=o.processingError}}catch(r){console.error("Error general:",r),n.innerHTML=o.error}});

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirecffb;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequirecffb=o),o.register("9Zaud",(function(e,t){var n=o("kT5yg"),a=o("2lbFy");document.getElementById("dashboard-logout").addEventListener("click",(()=>{localStorage.removeItem("token")}));const r=document.getElementById("nav-buttons"),d=document.getElementById("main-content"),c=()=>{var e,t;e=r,n.removeButtons(e),n.addButton(e,"dashboard-setting","Setting"),n.addButton(e,"dashboard-content","Content"),(()=>{const e=document.getElementById("dashboard-content"),t=document.getElementById("dashboard-setting");e.addEventListener("click",(()=>{o("lcrZr").render()})),t.addEventListener("click",(()=>{}))})(),t=d,a.clearContents(t),a.addTitle(t,"Welcome to Grönt dashboard"),a.addParagraph(t,"<br>This is your main page, here you can select:"),a.addParagraph(t,"<strong>Log out:</strong><br> By clicking the icon on the top right corner of your screen, you will be logged out and redirected to home page of the website."),a.addParagraph(t,"<strong>Setting:</strong><br> By clicking on this button, you can access the setting page for your account (select login method, add email & change password)."),a.addParagraph(t,"<strong>Content:</strong><br> Here you can select home page or news to administrate the respective pages in the web site.")};c(),e.exports={render:c}})),o.register("kT5yg",(function(e,t){e.exports={addButton:(e,t,n,o="btn-db")=>{try{const a=document.createElement("button");a.id=t,a.innerText=n,a.className=o,e.appendChild(a)}catch(e){console.log(e)}},removeButtons:e=>{try{e.innerHTML=""}catch(e){console.log(e)}}}})),o.register("2lbFy",(function(e,t){e.exports={addTitle:(e,t,n="",o="text-center text-2xl mt-5")=>{try{const a=document.createElement("h2");a.id=n,a.innerHTML=t,a.className=o,e.appendChild(a)}catch(e){console.log(e)}},addParagraph:(e,t,n="",o="mx-4")=>{try{const a=document.createElement("p");a.id=n,a.innerHTML=t,a.className=o,e.appendChild(a)}catch(e){console.log(e)}},clearContents:e=>{try{e.innerHTML=""}catch(e){console.log(e)}}}})),o.register("lcrZr",(function(e,t){var n=o("kT5yg"),a=o("2lbFy");const r=document.getElementById("nav-buttons"),d=document.getElementById("main-content");e.exports={render:()=>{var e,t;e=r,n.removeButtons(e),n.addButton(e,"dashboard-news","News"),n.addButton(e,"dashboard-home","Home Page"),n.addButton(e,"dashboard-back","Back"),(()=>{const e=document.getElementById("dashboard-news"),t=document.getElementById("dashboard-home");document.getElementById("dashboard-back").addEventListener("click",(()=>{o("9Zaud").render()})),e.addEventListener("click",(()=>{})),t.addEventListener("click",(()=>{}))})(),t=d,a.clearContents(t),a.addTitle(t,"Managing content data"),a.addParagraph(t,"<br>As an admin user with access to content you have three functional buttons News, Home Page and Back on the dashboards view."),a.addParagraph(t,"<strong>News:</strong><br>By clicking the News button you will have the option to add news, updating existing news or deleting any unwanted news."),a.addParagraph(t,"<strong>Home Page:</strong><br> By clicking on this button, you can change main header image."),a.addParagraph(t,"<strong>Back:</strong><br>That will redirect you to the previous page.")}}})),o("9Zaud");
//# sourceMappingURL=dashboard.4de3711d.js.map
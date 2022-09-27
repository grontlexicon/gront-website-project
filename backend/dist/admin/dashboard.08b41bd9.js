var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequirecffb;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,a.call(d.exports,d,d.exports),d.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequirecffb=a),a.register("ehFW8",(function(e,t){var n=a("5cHcQ"),d=a("6XjOF");document.getElementById("dashboard-logout").addEventListener("click",(()=>{localStorage.removeItem("token")}));const o=document.getElementById("nav-buttons"),r=document.getElementById("main-content"),c=()=>{var e,t;e=o,n.removeButtons(e),n.addButton(e,"dashboard-setting","Setting"),n.addButton(e,"dashboard-content","Content"),(()=>{const e=document.getElementById("dashboard-content"),t=document.getElementById("dashboard-setting");e.addEventListener("click",(()=>{a("3az9J").render()})),t.addEventListener("click",(()=>{}))})(),t=r,d.clearContents(t),d.addTitle(t,"Welcome to Grönt dashboard"),d.addParagraph(t,"<br>This is your main page, here you can select:"),d.addParagraph(t,"<strong>Log out:</strong><br> By clicking the icon on the top right corner of your screen, you will be logged out and redirected to home page of the website."),d.addParagraph(t,"<strong>Setting:</strong><br> By clicking on this button, you can access the setting page for your account (select login method, add email & change password)."),d.addParagraph(t,"<strong>Content:</strong><br> Here you can select home page or news to administrate the respective pages in the web site.")};c(),e.exports={render:c}})),a.register("5cHcQ",(function(e,t){e.exports={addButton:(e,t,n,a="btn-db")=>{try{const d=document.createElement("button");d.id=t,d.innerText=n,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},removeButtons:e=>{try{e.innerHTML=""}catch(e){console.log(e)}}}})),a.register("6XjOF",(function(e,t){e.exports={addTitle:(e,t,n="",a="text-center text-2xl mt-5")=>{try{const d=document.createElement("h2");d.id=n,d.innerHTML=t,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},addParagraph:(e,t,n="",a="mx-4")=>{try{const d=document.createElement("p");d.id=n,d.innerHTML=t,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},addLabel:(e,t,n="",a="mx-4")=>{try{const d=document.createElement("label");d.id=n,d.innerHTML=t,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},addTextArea:(e,t,n="",a="mx-4")=>{try{const d=document.createElement("area");d.id=n,d.innerHTML=t,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},addTextInput:(e,t,n="",a="mx-4")=>{try{const d=document.createElement("input");d.id=n,d.innerHTML=t,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},addDiv:(e,t,n="",a="")=>{try{const d=document.createElement("div");d.id=n,d.innerHTML=t,d.className=a,e.appendChild(d)}catch(e){console.log(e)}},clearContents:e=>{try{e.innerHTML=""}catch(e){console.log(e)}}}})),a.register("3az9J",(function(e,t){var n=a("5cHcQ"),d=a("6XjOF");const o=document.getElementById("nav-buttons"),r=document.getElementById("main-content");e.exports={render:()=>{var e,t;e=o,n.removeButtons(e),n.addButton(e,"dashboard-news","News"),n.addButton(e,"dashboard-home","Home Page"),n.addButton(e,"dashboard-back","Back"),(()=>{const e=document.getElementById("dashboard-news"),t=document.getElementById("dashboard-home");document.getElementById("dashboard-back").addEventListener("click",(()=>{a("ehFW8").render()})),e.addEventListener("click",(()=>{a("SbOtE").render()})),t.addEventListener("click",(()=>{}))})(),t=r,d.clearContents(t),d.addTitle(t,"Managing content data"),d.addParagraph(t,"<br>As an admin user with access to content you have three functional buttons News, Home Page and Back on the dashboards view."),d.addParagraph(t,"<strong>News:</strong><br>By clicking the News button you will have the option to add news, updating existing news or deleting any unwanted news."),d.addParagraph(t,"<strong>Home Page:</strong><br> By clicking on this button, you can change main header image."),d.addParagraph(t,"<strong>Back:</strong><br>That will redirect you to the previous page.")}}})),a.register("SbOtE",(function(e,t){var n=a("5cHcQ"),d=a("6XjOF"),o=a("2agET");const r=document.getElementById("nav-buttons"),c=document.getElementById("main-content");e.exports={render:()=>{var e,t;e=r,n.removeButtons(e),n.addButton(e,"dashboard-add","Add"),n.addButton(e,"dashboard-edit","Edit"),n.addButton(e,"dashboard-delete","Delete"),n.addButton(e,"dashboard-back","Back"),(()=>{const e=document.getElementById("dashboard-add"),t=document.getElementById("dashboard-edit"),n=document.getElementById("dashboard-delete");document.getElementById("dashboard-back").addEventListener("click",(()=>{a("3az9J").render()})),e.addEventListener("click",(()=>{a("2x0RV").render()})),t.addEventListener("click",(()=>{a("l4Zty").render()})),n.addEventListener("click",(()=>{a("bH2JN").render()}))})(),t=c,d.clearContents(t),d.addTitle(t,"News"),d.addParagraph(t,"<br><strong>Add:</strong><br>By clicking the add button you will be redirected to a form, where you have the option to add title and description of your news and these two fields are required. There is an other field media and that is optional but if you want to add any image and video with the news so you can upload file here.<br> "),d.addParagraph(t,"<strong>Edit:</strong><br>Here you have a list of all the existing news and you will select which one needs to be updated. News will open in a form there you can change text and media file and click save button to apply all the changes.<br>"),d.addParagraph(t,"<strong>Delete:</strong><br>By clicking the delete button there you have a complete list of news and each news has a check box. If you want to delete any news from a list, you need to select that news check box and press delete button then reconfirm by Yes or No. After you click Yes, news will be removed from the website.<br><br>"),o.addNewsList(t,"normal")}}})),a.register("2agET",(function(e,t){var n=a("fmRoT").default;e.exports={addNewsList:async(e,t="normal",a="",d="")=>{const o=await(async()=>{const{data:e}=await n.get("/api/v1/news/get");return e.news})();let r,c=new Array;o.forEach((e=>{r="normal"===t?e.title:"checkBox"===t?`<input type = "checkbox"\n                id = "${e.title} ${e._id}"\n                name = "${e.createdDate}">\n         <label for = "${e.title} ${e._id}"> ${e.title} </label>`:"radio"===t?`<input type = "radio"\n                id = "${e.title} ${e._id}"\n                name = "selected news">\n         <label for = "${e.title} ${e._id}"> ${e.title} </label>`:"Invalid list item type",c.push(((e,t="",n="text-center text-lg mb-2 divide-y divide-gray-400")=>{try{const a=document.createElement("li");return a.innerHTML=e,a.id=t,a.className=n,a}catch(e){console.log(e)}})(r,e._id))})),e.appendChild(((e,t="",n="")=>{try{const a=document.createElement("ul");return e.forEach((e=>{a.appendChild(e)})),a.className=n,a.id=t,a}catch(e){console.log(e)}})(c,a,d))}}})),a.register("2x0RV",(function(e,t){var n=a("5cHcQ"),d=a("6XjOF"),o=a("j2MgO"),r=a("fmRoT").default;const c=document.getElementById("nav-buttons"),l=document.getElementById("main-content"),s=e=>{n.removeButtons(e),n.addButton(e,"dashboard-yes","Yes"),n.addButton(e,"dashboard-no","No")},i=()=>{const e=document.getElementById("dashboard-yes"),t=document.getElementById("dashboard-no");e.addEventListener("click",(async e=>{const t=document.getElementById("title"),n=document.getElementById("article"),d=document.getElementById("media");e.preventDefault();try{await r.post("/api/v1/news/create",{title:t.value,article:n.value,media:d.value});a("SbOtE").render()}catch(e){console.log(e)}})),t.addEventListener("click",(()=>{m()}))},m=()=>{var e;e=c,n.removeButtons(e),n.addButton(e,"dashboard-save","Save"),n.addButton(e,"dashboard-cancel","Cancel"),(()=>{const e=document.getElementById("dashboard-save"),t=document.getElementById("dashboard-cancel");e.addEventListener("click",(()=>{s(c),i()})),t.addEventListener("click",(()=>{a("SbOtE").render()}))})()};e.exports={render:()=>{var e;e=l,d.clearContents(e),o.addNewsform(e,"add-news"),m()}}})),a.register("j2MgO",(function(e,t){e.exports={addNewsform:(e,t="",n="mx-4")=>{try{const a=document.createElement("form"),d=document.createElement("label"),o=document.createElement("input"),r=document.createElement("label"),c=document.createElement("textarea"),l=document.createElement("label"),s=document.createElement("input"),i=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div");a.id=t,a.className=n,a.className="my-5 flex flex-col",i.className="mx-3 mb-6 pt-3 rounded bg-gray-400",m.className="mx-3 mb-6 pt-3 rounded bg-gray-400",u.className="mx-3 mb-6 pt-3 rounded bg-gray-400",d.className="  mx-6 block text-gray-700 text-sm font-bold mb-2 ml-3",d.innerHTML="Title",o.className=" bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-700 transition duration-500 px-3 pb-3",o.id="title",o.placeholder="Enter the Article Title",r.className=" block text-gray-700 text-sm font-bold mb-2 ml-3",r.innerHTML="Article",c.className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-700 transition duration-500 px-3 pb-3",c.rows=10,c.cols=60,c.id="article",c.placeholder="Enter the Article",l.className="block text-gray-700 text-sm font-bold mb-2 ml-3",l.innerHTML="Media",s.className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-700 transition duration-500 px-3 pb-3",s.id="media",s.placeholder="Enter the Media Link here....",i.appendChild(d),i.appendChild(o),m.appendChild(r),m.appendChild(c),u.appendChild(l),u.appendChild(s),a.appendChild(i),a.appendChild(m),a.appendChild(u),e.appendChild(a)}catch(e){console.log(e)}}}})),a.register("l4Zty",(function(e,t){var n=a("5cHcQ"),d=a("6XjOF");const o=document.getElementById("nav-buttons"),r=document.getElementById("main-content");e.exports={render:()=>{var e,t;e=o,n.removeButtons(e),n.addButton(e,"dashboard-back","Back"),document.getElementById("dashboard-back").addEventListener("click",(()=>{a("SbOtE").render()})),t=r,d.clearContents(t),d.addParagraph(t,"<strong>Back:</strong><br> By clicking the back button you can redirect to newspage where you can see different buttons.")}}})),a.register("bH2JN",(function(e,t){var n=a("fmRoT").default,d=a("5cHcQ"),o=a("6XjOF");const r=document.getElementById("nav-buttons"),c=document.getElementById("main-content"),l=async e=>{const{data:t}=await n.get("/api/v1/news/get"),a=t.news.map((e=>`${e.title}: ${e.article}: ${e.media}`));o.addUnorderedList(e,a)};e.exports={render:()=>{var e,t;e=r,d.removeButtons(e),d.addButton(e,"dashboard-delete","Delete"),d.addButton(e,"dashboard-cancel","Cancel"),(()=>{const e=document.getElementById("dashboard-delete"),t=document.getElementById("dashboard-cancel");e.addEventListener("click",(()=>{})),t.addEventListener("click",(()=>{a("SbOtE").render()}))})(),t=c,o.clearContents(t),o.addTitle(t,"News List"),o.addParagraph(t,"<br>If you need to delete any unwanted news from the list, just select that news checkbox and click on delete button.<br><br>"),l(t)}}})),a("ehFW8");
//# sourceMappingURL=dashboard.08b41bd9.js.map

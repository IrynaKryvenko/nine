!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");e.disabled=!0;var d=null;t.addEventListener("click",(function(){d=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3),e.disabled=!1,t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(d),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.155a673e.js.map
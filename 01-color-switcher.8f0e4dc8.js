!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in o){var d=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,d.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=d),d("fivgP").Report.info("👋 Hello!",'Click on "START" to change the color of the background of the page or "STOP" to stop it');var r=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=document.querySelector("body"),s=null;r.addEventListener("click",(function(){a.classList.remove("page-body"),s=setInterval((function(){return a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),n.removeAttribute("disabled"),n.classList.remove("btn-disabled"),n.classList.add("btn"),r.setAttribute("disabled","disabled"),r.classList.remove("btn"),r.classList.add("btn-disabled")})),n.addEventListener("click",(function(){clearInterval(s),r.classList.remove("btn-disabled"),r.classList.add("btn"),r.removeAttribute("disabled"),n.setAttribute("disabled","disabled"),n.classList.remove("btn"),n.classList.add("btn-disabled")}))}();
//# sourceMappingURL=01-color-switcher.8f0e4dc8.js.map

!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("eWrZJ"),c=document.querySelector(".breed-select"),i=document.querySelector(".loader"),a=document.querySelector(".error"),d=document.querySelector(".cat-info");function l(){i.style.display="block"}function u(){i.style.display="none"}function s(){a.style.display="block"}function f(){a.style.display="none"}function p(){d.style.display="none"}function y(){var e=c.value;e?(f(),p(),l(),(0,r.fetchCatByBreed)(e).then((function(e){u(),function(e){var n=e.breeds[0].name,t=e.breeds[0].description,o=e.breeds[0].temperament,r='\n    <img src="'.concat(e.url,'" alt="').concat(n,'">\n    <h2>').concat(n,"</h2>\n    <p><strong>Description:</strong> ").concat(t,"</p>\n    <p><strong>Temperament:</strong> ").concat(o,"</p>\n  ");d.innerHTML=r,d.style.display="block"}(e)})).catch((function(e){u(),s()}))):p()}document.addEventListener("DOMContentLoaded",(function(){f(),p(),l(),(0,r.fetchBreeds)().then((function(e){u(),function(e){e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,c.appendChild(n)}))}(e),c.addEventListener("change",y)})).catch((function(e){u(),s()}))}))}();
//# sourceMappingURL=index.86d51911.js.map
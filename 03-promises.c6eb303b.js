!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire6c0f;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequire6c0f=o);var r=o("h6c0i"),u=document.querySelector(".form"),i=document.querySelector("[name=delay]"),c=document.querySelector("[name=step]"),a=document.querySelector("[name=amount]");function f(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.value),t=Number(c.value),o=1;o<=a.value;o++)f(o,n).then((function(e){return r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)})),n+=t}))}();
//# sourceMappingURL=03-promises.c6eb303b.js.map

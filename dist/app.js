!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(4)},function(e,o,t){var n=t(2);e.exports="string"==typeof n?n:n.toString()},function(e,o,t){(o=t(3)(!1)).push([e.i,".em-solver,.em-solver *,.em-solver *::before,.em-solver *::after{box-sizing:border-box;margin:0;padding:0}.em-solver{position:fixed;z-index:10000;top:16px;right:16px;width:300px;box-shadow:0px .4375rem 1.813rem 0px rgba(0,0,0,.08);border-radius:.875rem;padding:12px 16px;text-align:center;display:flex;flex-direction:column;background:#fff;color:#1d1d1d}@media(prefers-color-scheme: light){.em-solver{background:#fff;color:#1d1d1d}}body.light-theme .em-solver,.em-solver.light-theme{background:#fff;color:#1d1d1d}@media(prefers-color-scheme: dark){.em-solver{background:#1d1d1d;color:#f0f0f0}}body.dark-theme .em-solver,.em-solver.dark-theme{background:#1d1d1d;color:#f0f0f0}.em-solver__heading{font-weight:bold;font-size:24px;margin-bottom:6px}.em-solver__subheading{font-size:14px}.em-solver__close-btn{position:absolute;top:10px;right:10px;height:16px;width:16px;cursor:pointer;fill:#1d1d1d}@media(prefers-color-scheme: light){.em-solver__close-btn{fill:#1d1d1d}}body.light-theme .em-solver__close-btn,.em-solver__close-btn.light-theme{fill:#1d1d1d}@media(prefers-color-scheme: dark){.em-solver__close-btn{fill:#f0f0f0}}body.dark-theme .em-solver__close-btn,.em-solver__close-btn.dark-theme{fill:#f0f0f0}.em-solver__main{flex:1;padding:12px 0 24px}.em-solver__error{font-size:14px;color:#f03}.em-solver__error:last-child{margin-bottom:12px}.em-solver__btns-wrapper{display:flex;flex-direction:column;align-items:center}.em-solver__btn{padding:7px 15px;border-radius:3px;font-weight:bold;line-height:1;transition:background .25s,color .25s;cursor:pointer;color:#e62832;border:2px solid #e62832;background:#fff}@media(prefers-color-scheme: light){.em-solver__btn{color:#e62832;border:2px solid #e62832;background:#fff}}body.light-theme .em-solver__btn,.em-solver__btn.light-theme{color:#e62832;border:2px solid #e62832;background:#fff}@media(prefers-color-scheme: dark){.em-solver__btn{color:#e93f48;border:2px solid #e93f48;background:#1d1d1d}}body.dark-theme .em-solver__btn,.em-solver__btn.dark-theme{color:#e93f48;border:2px solid #e93f48;background:#1d1d1d}.em-solver__btn:not(:disabled):hover{color:#fff;background:#e93f48}.em-solver__btn:not(:last-child){margin-bottom:8px}.em-solver__btn:disabled{cursor:no-drop}.em-solver__footer{display:flex;font-size:12px;align-items:center;justify-content:space-between}.em-solver__author-wrapper{display:flex;align-items:center}.em-solver__author-txt{margin-left:6px}.em-solver__link{text-decoration:none;font-weight:bold;color:#e62832}@media(prefers-color-scheme: light){.em-solver__link{color:#e62832}}body.light-theme .em-solver__link,.em-solver__link.light-theme{color:#e62832}@media(prefers-color-scheme: dark){.em-solver__link{color:#e93f48}}body.dark-theme .em-solver__link,.em-solver__link.dark-theme{color:#e93f48}.em-solver__link:hover{text-decoration:underline;color:#e62832}@media(prefers-color-scheme: light){.em-solver__link:hover{color:#e62832}}body.light-theme .em-solver__link:hover,.em-solver__link:hover.light-theme{color:#e62832}@media(prefers-color-scheme: dark){.em-solver__link:hover{color:#e93f48}}body.dark-theme .em-solver__link:hover,.em-solver__link:hover.dark-theme{color:#e93f48}.em-solver__link-block{display:block}.em-solver__icon{height:20px;width:20px;transition:transform .25s;fill:#1d1d1d}@media(prefers-color-scheme: light){.em-solver__icon{fill:#1d1d1d}}body.light-theme .em-solver__icon,.em-solver__icon.light-theme{fill:#1d1d1d}@media(prefers-color-scheme: dark){.em-solver__icon{fill:#f0f0f0}}body.dark-theme .em-solver__icon,.em-solver__icon.dark-theme{fill:#f0f0f0}.em-solver__icon:hover{transform:scale(1.1)}",""]),e.exports=o},function(e,o,t){"use strict";e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t=function(e,o){var t=e[1]||"",n=e[3];if(!n)return t;if(o&&"function"==typeof btoa){var r=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),l=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(l).concat([r]).join("\n")}var i,s,a;return[t].join("\n")}(o,e);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},o.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);n&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),o.push(a))}},o}},function(e,o,t){"use strict";function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(o);var r=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.supportedTypes=[{code:"words",urlPathPrefix:"/app/words",name:"Words",solveSupport:!0,fillSupport:!0},{code:"tests",urlPathPrefix:"/app/tests",name:"Tests",solveSupport:!0,fillSupport:!0},{code:"sentences",urlPathPrefix:"/app/sentences",name:"Sentences",solveSupport:!0,fillSupport:!0}]}var o,t,r;return o=e,(t=[{key:"isWords",value:function(){var e,o,t,n,r,l,i,s,a,c,u,d,v,f,p,m,h,_,w=!1,y=!1;return(null===(e=window.ex)||void 0===e||null===(o=e.words)||void 0===o||null===(t=o.words)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.hasOwnProperty("use_count"))&&(null===(r=window.ex)||void 0===r||null===(l=r.words)||void 0===l||null===(i=l.words)||void 0===i||null===(s=i[0])||void 0===s?void 0:s.hasOwnProperty("use_wrong"))&&(null===(a=window.ex)||void 0===a||null===(c=a.words)||void 0===c||null===(u=c.words)||void 0===u||null===(d=u[0])||void 0===d?void 0:d.hasOwnProperty("use_level"))&&(null===(v=window.ex)||void 0===v||null===(f=v.words)||void 0===f||null===(p=f.words)||void 0===p||null===(m=p[0])||void 0===m?void 0:m.hasOwnProperty("use_wrong"))&&"function"==typeof window.save&&"function"==typeof window.ex.getLinkComplete&&(w=!0),"basic"===(null===(h=window.ex)||void 0===h?void 0:h.type)&&"function"==typeof(null===(_=window.ex)||void 0===_?void 0:_.getCurrentWord)&&document.querySelector("#exercise input#answer_0")&&(y=!0),[w,y]}},{key:"isTests",value:function(){var e,o,t,n,r,l,i,s,a,c,u,d,v=!1,f=!1;return(null===(e=window.ex)||void 0===e||null===(o=e.questions)||void 0===o||null===(t=o[0])||void 0===t?void 0:t.hasOwnProperty("use_last_round"))&&(null===(n=window.ex)||void 0===n||null===(r=n.questions)||void 0===r||null===(l=r[0])||void 0===l?void 0:l.hasOwnProperty("use_correct"))&&(null===(i=window.ex)||void 0===i||null===(s=i.questions)||void 0===s||null===(a=s[0])||void 0===a?void 0:a.hasOwnProperty("use_count"))&&(null===(c=window.ex)||void 0===c?void 0:c.hasOwnProperty("linkComplete"))&&"function"==typeof window.save&&(v=!0),"function"==typeof(null===(u=window.ex)||void 0===u?void 0:u.getCurrentQuestion)&&"function"==typeof(null===(d=window.ex)||void 0===d?void 0:d.getCorrectChoice)&&document.querySelector("#exercise #choices a[id^=choice]")&&(f=!0),[v,f]}},{key:"isSentences",value:function(){var e,o,t,n=!1,r=!1;return(null===(e=window.ex)||void 0===e?void 0:e.sentencesCount)&&"function"==typeof(null===(o=window.ex)||void 0===o?void 0:o.next)&&"function"==typeof window.reviewOneSentence&&"function"==typeof window.reviewSentencesClick&&"function"==typeof window.showSentence&&document.querySelector("#review")&&document.querySelector("#linkComplete")&&document.querySelector("#linkComplete").href&&(n=!0),"function"==typeof(null===(t=window.ex)||void 0===t?void 0:t.getCurrentSentence)&&document.querySelector("*[id^=sentence]")&&document.querySelector(".title-input input")&&document.querySelector(".title-input + span[data-words-questions-id]")&&(r=!0),[n,r]}},{key:"analyze",value:function(){var e,o=this,t=location.hostname;if("englishme.cz"!==t&&"www.englishme.cz"!==t)return null;if(0!==(e=this.supportedTypes.filter((function(e){return location.pathname.startsWith(e.urlPathPrefix)}))).length){var n,r=e.find((function(e){var t=e.code.split("")[0].toUpperCase()+e.code.slice(1);return(n=o["is".concat(t)]())[0]||n[1]}));return r&&(r.solveSupport=!(!r.solveSupport||!n[0]),r.fillSupport=!(!r.fillSupport||!n[1])),r}}}])&&n(o.prototype,t),r&&n(o,r),e}();function l(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e)}var o,t,n;return o=e,(t=[{key:"solve",value:function(){window.ex.words.words.forEach((function(e,o){e.use_count=1,e.use_wrong=0,e.use_level=2,e.use_last_round=o+1})),window.save(!0)}},{key:"fill",value:function(){var e=ex.getCurrentWord();document.querySelector("#exercise input#answer_0").value=e.english}}])&&l(o.prototype,t),n&&l(o,n),e}();function s(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e)}var o,t,n;return o=e,(t=[{key:"solve",value:function(){window.ex.questions.forEach((function(e,o){e.use_last_round=o+1,e.use_correct=1,e.use_count=1})),window.save(!0)}},{key:"fill",value:function(){var e=window.ex.getCurrentQuestion().choices[window.ex.getCorrectChoice()];Array.from(document.querySelectorAll("#choices a[id^=choice]")).forEach((function(o){Number(o.dataset.id)!==e.id&&(o.style.visibility="hidden")}))}}])&&s(o.prototype,t),n&&s(o,n),e}();function c(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e)}var o,t,n;return o=e,(t=[{key:"solve",value:function(){window.reviewOneSentence=function(){return!0};for(var e=0;e<window.ex.sentencesCount;e++){window.reviewSentencesClick(document.querySelector("#review"));var o=window.ex.next();window.showSentence(o)}}},{key:"fill",value:function(){var e=ex.getCurrentSentence(),o=document.querySelector("#sentence-".concat(e)),t=Array.from(o.querySelectorAll("span[data-words-questions-id], .title-input input")),n=[],r=-1;t.forEach((function(e){"INPUT"===e.tagName?(r++,n[r]=[]):n[r].push(e.innerHTML)})),n=n.map((function(e){return e.join(" ")})),t.filter((function(e){return"INPUT"===e.tagName})).forEach((function(e,o){e.value=n[o]}))}}])&&c(o.prototype,t),n&&c(o,n),e}();function d(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=t(1).toString();(new(function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=Math.floor(1e6*Math.random()),this.version="2.1.1",this.state={},this.solvers={},this.elements={}}var o,t,n;return o=e,(t=[{key:"render",value:function(){var e=this.state.type&&(this.state.type.solveSupport||this.state.type.fillSupport)?this.state.type.name:this.state.type||void 0===this.state.type?"Unsupported":"Unable to analyze",o='\n            <section class="js-em-solver em-solver" data-em-solver-id="'.concat(this.id,'">\n                <style>').concat(v,'</style>\n                <header class="em-solver__header">\n                    <h1 class="em-solver__heading">Englishme Solver</h1>\n                    <h2 class="em-solver__subheading">Exercise type: <strong class="js-em-solver__exercise-type">').concat(e,'</strong></h2>\n                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="em-solver__close-btn js-em-solver__close-btn">\n                        <title>Close</title>\n                        <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"/>\n                    </svg>\n                </header>\n                <main class="em-solver__main">\n                    <div class="js-emsolver__errors-wrapper em-solver__errors-wrapper">\n                        \x3c!-- <p class="em-solver__error">Unable to analyze the exercise type</p> --\x3e\n                    </div>\n                    <div class="em-solver__btns-wrapper">\n                        <button class="em-solver__btn js-em-solver__btn--solve"').concat(this.state.type&&this.state.type.solveSupport?"":" disabled",'>Solve everything!</button>\n                        <button class="em-solver__btn js-em-solver__btn--fill"').concat(this.state.type&&this.state.type.fillSupport?"":" disabled",'>Fill current task!</button>\n                    </div>\n                </main>\n                <footer class="em-solver__footer">\n                    <div class="em-solver__author-wrapper">\n                        <a href="https://github.com/vojtechsanda/englishme-solver" target="_blank" class="em-solver__link-block">\n                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="em-solver__icon">\n                                <title>Englishme Solver on GitHub</title>\n                                <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>\n                            </svg>\n                        </a>\n                        <span class="em-solver__author-txt">Created by <a href="https://vojtechsanda.cz" target="_blank" class="em-solver__link">Vojtěch Šanda</a></span>\n                    </div>\n                    <div>\n                        <span>v').concat(this.version,"</span>\n                    </div>\n                </footer>\n            </section>\n        ");document.querySelector("body").insertAdjacentHTML("beforeend",o)}},{key:"analyzeType",value:function(){this.analyzer=new r,this.state.type=this.analyzer.analyze()}},{key:"solve",value:function(e){this.solvers[e].solve()}},{key:"fill",value:function(e){this.solvers[e].fill()}},{key:"saveElements",value:function(){var e=document.querySelector('.js-em-solver[data-em-solver-id="'.concat(this.id,'"]'));this.elements.solverWrapper=e,this.elements.solveBtn=e.querySelector(".js-em-solver__btn--solve"),this.elements.fillBtn=e.querySelector(".js-em-solver__btn--fill"),this.elements.closeBtn=e.querySelector(".js-em-solver__close-btn")}},{key:"setupSolvers",value:function(){this.solvers.words=new i,this.solvers.tests=new a,this.solvers.sentences=new u}},{key:"setupEvents",value:function(){var e=this;this.elements.solveBtn.addEventListener("click",(function(){e.solve(e.state.type.code)})),this.elements.fillBtn.addEventListener("click",(function(){e.fill(e.state.type.code)})),this.elements.closeBtn.addEventListener("click",(function(){e.elements.solverWrapper.parentElement.removeChild(e.elements.solverWrapper)}))}},{key:"init",value:function(){this.analyzeType(),this.render(),this.saveElements(),this.setupSolvers(),this.setupEvents()}}])&&d(o.prototype,t),n&&d(o,n),e}())).init()}]);
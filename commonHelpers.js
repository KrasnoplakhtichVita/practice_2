import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{n as o}from"./assets/vendor-c2e2fda8.js";import{s,r as i,g as m,a as u,b as c,T as r}from"./assets/constants-16233540.js";const{form:d,list:n}=c;s(n,r);i(n,r);d.addEventListener("submit",f);function f(t){t.preventDefault(),t.target.taskName.value.trim()&&(p(t.target.taskName.value.trim()),t.target.reset())}function p(t){const a=m(r)||[],e=o();l(t,e),a.push({id:e,name:t}),u(r,a)}function l(t,a){const e=`<li id='${a}'>${t} <button type="button">X</button></li>`;n.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map

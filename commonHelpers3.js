import"./assets/styles-ae1da8f4.js";const c=document.querySelector(".contactsFilter"),t=document.querySelector(".contacts");c.addEventListener("input",i);const r=[...t.children];function i(e){const n=[...r].filter(o=>o.textContent.toLocaleLowerCase().includes(e.target.value.toLowerCase()));t.innerHTML="",t.append(...n)}
//# sourceMappingURL=commonHelpers3.js.map

import"./assets/styles-ae1da8f4.js";const c=document.querySelector(".contactsFilter"),e=document.querySelector(".contacts");c.addEventListener("input",i);const s=[...e.children];function i(t){const o=[...s].filter(r=>r.textContent.toLocaleLowerCase().includes(t.target.value.toLowerCase()));e.innerHTML="",e.append(...o)}const n=document.querySelector(".grid");n.addEventListener("mouseover",a);function a(t){t.target.classList.contains("gridItem")&&(t.target.style.opacity=0)}n.addEventListener("mouseout",u);function u(t){t.target.classList.contains("gridItem")&&(t.target.style.opacity=1)}
//# sourceMappingURL=commonHelpers3.js.map

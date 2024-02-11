const input = document.querySelector('.contactsFilter');
const contacts = document.querySelector('.contacts');

input.addEventListener('input', onInput);
const items = [...contacts.children];

function onInput(evt) {
  const filterItem = [...items].filter(item =>
    item.textContent
      .toLocaleLowerCase()
      .includes(evt.target.value.toLowerCase())
  );
  contacts.innerHTML = '';
  contacts.append(...filterItem);
}

const grid = document.querySelector('.grid');

grid.addEventListener('mouseover', onMouseover);

function onMouseover(event) {
  if (!event.target.classList.contains('gridItem')) return;
  event.target.style.opacity = 0;
}

grid.addEventListener('mouseout', onMouseout);

function onMouseout(event) {
  if (!event.target.classList.contains('gridItem')) return;
  event.target.style.opacity = 1;
}

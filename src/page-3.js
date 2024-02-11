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

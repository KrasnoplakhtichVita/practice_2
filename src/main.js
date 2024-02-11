const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(evt) {
  evt.preventDefault();
  if (!evt.target.taskName.value.trim()) return;

  console.log(evt.target.taskName.value.trim());
  createMarkup(evt.target.taskName.value.trim());
  addTask(evt.target.taskName.value.trim());
  evt.target.reset();
}

function createMarkup(value) {
  const markup = `<li>${value}</li>`;
  list.insertAdjacentHTML('afterbegin', markup);
}

function addTask(value) {
  const array = JSON.parse(localStorage.getItem('ui-theme')) || [];

  array.push(value);
  localStorage.setItem('ui-theme', JSON.stringify(array));
}

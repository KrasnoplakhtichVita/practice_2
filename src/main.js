import { nanoid } from 'nanoid';

const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');

showTask();

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(evt) {
  evt.preventDefault();
  if (!evt.target.taskName.value.trim()) return;

  console.log(evt.target.taskName.value.trim());
  addTask(evt.target.taskName.value.trim());
  evt.target.reset();
}

function createMarkup(value, id) {
  const markup = `<li id='${id}'>${value} <button type="button">X</button></li>`;
  list.insertAdjacentHTML('beforeend', markup);
}

function addTask(value) {
  const array = JSON.parse(localStorage.getItem('ui-theme')) || [];
  const id = nanoid();
  createMarkup(value, id);

  array.push({ id, name: value });
  localStorage.setItem('ui-theme', JSON.stringify(array));
}

function showTask() {
  const data = JSON.parse(localStorage.getItem('ui-theme'));
  if (!data) return;

  const markup = data
    .map(
      item =>
        `<li id="${item.id}">${item.name} <button type="button">X</button></li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

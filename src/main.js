import { nanoid } from 'nanoid';
import ref from './js/ref';
import { showTask } from './js/showMarkup';
import { getLocalStorage, setLocalStorage } from './js/helpersStorage';
import './js/removeElement';
import { TASK_KEY } from './js/constants';

const { form, list } = ref;

showTask();

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(evt) {
  evt.preventDefault();
  if (!evt.target.taskName.value.trim()) return;

  addTask(evt.target.taskName.value.trim());
  evt.target.reset();
}

function addTask(value) {
  const array = getLocalStorage(TASK_KEY) || [];
  const id = nanoid();
  createMarkup(value, id);

  array.push({ id, name: value });
  setLocalStorage(TASK_KEY, array);
}

function createMarkup(value, id) {
  const markup = `<li id='${id}'>${value} <button type="button">X</button></li>`;
  list.insertAdjacentHTML('beforeend', markup);
}

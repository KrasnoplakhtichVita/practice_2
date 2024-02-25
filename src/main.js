import { nanoid } from 'nanoid';
import ref from './js/ref';
import { showTask } from './js/showMarkup';
import { getLocalStorage, setLocalStorage } from './js/helpersStorage';


const { form, list } = ref;

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
  const array = getLocalStorage('ui-theme') || [];
  const id = nanoid();
  createMarkup(value, id);

  array.push({ id, name: value });
  setLocalStorage('ui-theme', array );
}


list.addEventListener('click', deleteTask);

function deleteTask(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  evt.target.parentNode.remove();
  const array = getLocalStorage('ui-theme');
  const newArray = array.filter(item => item.id !== evt.target.parentNode.id);
  setLocalStorage('ui-theme', newArray);
}

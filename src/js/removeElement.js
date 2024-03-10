import { getLocalStorage, setLocalStorage } from './helpersStorage';

export function remove(list, TASK_KEY) {
  list.addEventListener('click', deleteTask);

  function deleteTask(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    evt.target.parentNode.remove();
    const array = getLocalStorage(TASK_KEY);
    const newArray = array.filter(item => item.id !== evt.target.parentNode.id);
    setLocalStorage(TASK_KEY, newArray);
  }
}

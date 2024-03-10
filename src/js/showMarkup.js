import { getLocalStorage } from './helpersStorage';

export function showTask(list, TASK_KEY) {
  const data = getLocalStorage(TASK_KEY);
  if (!data) return;

  const markup = data
    .map(
      item =>
        `<li id="${item.id}">${item.name} <button type="button">X</button></li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

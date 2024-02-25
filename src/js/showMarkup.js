import ref from './ref';
import { getLocalStorage } from './helpersStorage';
import { TASK_KEY } from './constants';
const { list } = ref;

export function showTask() {
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

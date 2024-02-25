import ref from "./ref";
import { getLocalStorage } from "./helpersStorage";
const { form, list } = ref;

export function showTask() {
  const data = getLocalStorage('ui-theme');
  if (!data) return;

  const markup = data
    .map(
      item =>
        `<li id="${item.id}">${item.name} <button type="button">X</button></li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}
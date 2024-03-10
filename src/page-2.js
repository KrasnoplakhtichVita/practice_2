import { getLocalStorage } from './js/helpersStorage';
import { TASK_KEY } from './js/constants';
import { showTask } from './js/showMarkup';
import ref from './js/ref';
import { remove } from './js/removeElement';

console.log(getLocalStorage(TASK_KEY));
showTask(ref.listFavourite, TASK_KEY);
remove(ref.listFavourite, TASK_KEY);

import {
  getContacts,
  getContactById,
  createContact,
  changeContact,
  deleteContactById,
} from './js/api';

getContacts();
getContactById(4);
// createContact({ name: 'Oks', phone: '+380990001122' });
// changeContact(1, { name: 'Oks', phone: '+380990001122' });
deleteContactById(3);

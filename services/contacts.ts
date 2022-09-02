import { IContactsBody } from '../interfaces/contacts';
import * as ContactsModel from '../models/contacts';

const getAll = async (): Promise<IContactsBody[]> => {
  const contacts = await ContactsModel.getAll();
  return contacts;
};

export { getAll };

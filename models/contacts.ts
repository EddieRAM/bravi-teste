import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IContacts } from '../interfaces/contacts';
import connection from './connection';

const create = async (contact: IContacts): Promise<void> => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Contacts(contact_id, phone, email, whatsapp) VALUES (?,?,?,?);',
    [contact.contactId, contact.phone, contact.email, contact.whatsapp],
  );
};

const findContacts = async (contacts: string): Promise<IContacts | null> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT * FROM Contacts`,
    [contacts],
  );

  if (!result.length) return null;
  return result[0] as IContacts;
};


export { create, findContacts };
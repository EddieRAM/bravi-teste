import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IPeople } from '../interfaces/people';
import connection from './connection';

const create = async (people: string): Promise<IPeople> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO People(first_name, last_name) VALUES (?, ?)',
    [people],
  );
  return { firstName: people, lastName: people, id: result.insertId };
};

const findByName = async (firstName: string): Promise<IPeople | null> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT * FROM People WHERE first_name LIKE ?`,
    [firstName],
  );

  if (!result.length) return null;
  return result[0] as IPeople;
};

export { create, findByName };
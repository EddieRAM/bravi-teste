import { RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/users';
import connection from './connection';

const findByUserName = async (username: string): Promise<IUser | null> => {
  const [data] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Users WHERE username LIKE ?;',
    [username],
  );
  if (!data.length) return null;
  return data[0] as IUser;
};

export { findByUserName };
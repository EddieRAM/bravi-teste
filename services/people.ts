import * as PeopleModel from '../models/people';

const findByName = async (firstName:string) => {
  const user = await PeopleModel.findByName(firstName);
  return user;
};
export { findByName };

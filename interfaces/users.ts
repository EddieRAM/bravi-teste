import { Request } from "express";

export interface IUser {
  id: number;
  username: string;
  password: string;
}

export interface IUserWithoutPassord {
  id: number;
  username: string;
  password?: string;
}

export interface RequestWithPayload extends Request {
  payload?: any;
}
import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();
  res.json(users);
};

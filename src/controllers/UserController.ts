import { Request, Response } from "express";
import { User } from "../interface/user";

const users: User[] = [];

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("message:An error occurred while fetching users.");
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: User = req.body;
    if (!user.email || !user.password) {
      res.status(401).send({ message: "Password and Email are required." });
      return;
    }
    users.push(user);
    res.status(201).json({ message: "Added user successfully" });
  } catch (error) {
    res.status(500).send("An error occurred while fetching users.");
  }
};

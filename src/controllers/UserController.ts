import { Request, Response } from "express";
import { User } from "../interface/user";

const users: User[] = [];

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res
      .status(200)
      .send({ message: users.length > 0 ? users : "No Users Available" });
  } catch (error: any) {
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
  } catch (error: any) {
    res.status(500).send("An error occurred while fetching users.");
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user: User = req.body;
    const email: string = user.email;
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
      res.status(404).send({ message: "User not found." });
      return;
    }
    users[userIndex] = user;
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).send("An error occurred while fetching users.");
  }
};

export const removeUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userEmail: string = req.body.email;
    const userIndex = users.findIndex((u) => u.email === userEmail);
    if (userIndex === -1) {
      res.status(404).send({ message: "User not found." });
      return;
    }
    users.splice(userIndex, 1);
  } catch (error: any) {
    res.status(500).send("An error occurred while fetching users.");
  }
};

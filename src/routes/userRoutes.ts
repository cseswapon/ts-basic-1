import { Router } from "express";
import {
  addUser,
  getAllUsers,
  removeUser,
  updateUser,
} from "../controllers/UserController";

const router = Router();

router
  .route("/users")
  .get(getAllUsers)
  .post(addUser)
  .put(updateUser)
  .delete(removeUser);

export default router;

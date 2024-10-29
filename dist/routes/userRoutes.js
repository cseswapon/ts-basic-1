"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router
    .route("/users")
    .get(UserController_1.getAllUsers)
    .post(UserController_1.addUser)
    .put(UserController_1.updateUser)
    .delete(UserController_1.removeUser);
exports.default = router;

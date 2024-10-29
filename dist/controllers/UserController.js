"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.updateUser = exports.addUser = exports.getAllUsers = void 0;
const users = [];
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res
            .status(200)
            .send({ message: users.length > 0 ? users : "No Users Available" });
    }
    catch (error) {
        res.status(500).send("message:An error occurred while fetching users.");
    }
});
exports.getAllUsers = getAllUsers;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        if (!user.email || !user.password) {
            res.status(401).send({ message: "Password and Email are required." });
            return;
        }
        users.push(user);
        res.status(201).json({ message: "Added user successfully" });
    }
    catch (error) {
        res.status(500).send("An error occurred while fetching users.");
    }
});
exports.addUser = addUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const email = user.email;
        const userIndex = users.findIndex((u) => u.email === email);
        if (userIndex === -1) {
            res.status(404).send({ message: "User not found." });
            return;
        }
        users[userIndex] = user;
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        res.status(500).send("An error occurred while fetching users.");
    }
});
exports.updateUser = updateUser;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.body.email;
        const userIndex = users.findIndex((u) => u.email === userEmail);
        if (userIndex === -1) {
            res.status(404).send({ message: "User not found." });
            return;
        }
        users.splice(userIndex, 1);
    }
    catch (error) {
        res.status(500).send("An error occurred while fetching users.");
    }
});
exports.removeUser = removeUser;

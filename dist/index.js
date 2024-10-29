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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const logger_1 = require("./middlewares/logger");
const errorHandler_1 = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(logger_1.logger);
app.use(errorHandler_1.errorHandler);
app.use("/api/v1/", userRoutes_1.default);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: "Hello !" });
}));
app.get("*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.path);
    res.status(404).send({ message: "Page not found." });
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. url http://localhost:${PORT}`);
});

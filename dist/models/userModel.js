"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    }
});
var userModel = mongoose_1.default.model('user', userSchema);
exports.userModel = userModel;

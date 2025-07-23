"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = void 0;
const joi_1 = __importDefault(require("joi"));
const taskSchema = joi_1.default.object({
    title: joi_1.default.string().min(1).required(),
    description: joi_1.default.string().allow('').required(),
    status: joi_1.default.string().valid('PENDING', 'COMPLETED', 'IN_PROGRESS').optional(),
});
const validateTask = (req, res, next) => {
    const { error } = taskSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.validateTask = validateTask;

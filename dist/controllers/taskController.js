"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const db_1 = require("../utils/db");
const uuid_1 = require("uuid");
// Create a new task
const createTask = (req, res) => {
    const { title, description, status } = req.body;
    const now = new Date().toISOString();
    const task = {
        id: (0, uuid_1.v4)(),
        title,
        description,
        status: status || 'PENDING',
        createdAt: now,
        updatedAt: now,
    };
    db_1.tasks.push(task);
    res.status(201).json(task);
};
exports.createTask = createTask;
// Get all tasks (with optional pagination, search, filter)
const getTasks = (req, res) => {
    let result = [...db_1.tasks];
    const { status, title, page = 1, limit = 10 } = req.query;
    if (status) {
        result = result.filter(t => t.status === status);
    }
    if (title) {
        result = result.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));
    }
    // Pagination
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit);
    const paginated = result.slice(start, end);
    res.json({
        total: result.length,
        page: Number(page),
        limit: Number(limit),
        tasks: paginated,
    });
};
exports.getTasks = getTasks;
// Get a task by ID
const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = db_1.tasks.find(t => t.id === id);
    if (!task)
        return res.status(404).json({ message: 'Task not found' });
    res.json(task);
};
exports.getTaskById = getTaskById;
// Update a task by ID
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = db_1.tasks.find(t => t.id === id);
    if (!task)
        return res.status(404).json({ message: 'Task not found' });
    if (title)
        task.title = title;
    if (description)
        task.description = description;
    if (status)
        task.status = status;
    task.updatedAt = new Date().toISOString();
    res.json(task);
};
exports.updateTask = updateTask;
// Delete a task by ID
const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = db_1.tasks.findIndex(t => t.id === id);
    if (index === -1)
        return res.status(404).json({ message: 'Task not found' });
    db_1.tasks.splice(index, 1);
    res.status(204).send();
};
exports.deleteTask = deleteTask;
